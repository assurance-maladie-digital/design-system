<template>
	<PageContainer>
		<!-- Commencez à développer ici -->
		{{ datas }}
		<RatingPicker
			v-model="datas"
			:main-question="firstQuestion"
			:questions-list="questionsList"
			:after-validate="afterValidate"
			modal-mode
			validate-text-button="Bonsoir"
			@on-validate="onValidate"
			@on-close="onClose"
			@after-first-question="afterFirstQuestion"
		/>
	</PageContainer>
</template>
<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import RatingPicker from '../src/patterns/RatingPicker';
	@Component({
		components: {
			RatingPicker
		}
	})
	export default class Playground extends Vue {
		datas = [];
		firstQuestion = {
			name: 'first-step',
			type: 'numbers',
			labels: ['debut', 'apres'],
			question: 'la premiere question ?'
		};
		questionsList = [
			{
				name: 'first-question',
				type: 'emotions',
				question: 'la deuxieme question ?'
			},
			{
				name: 'second-question',
				type: 'emotions',
				question: 'la troisieme question azaz ?'
			},
			{
				name: 'troisiem-question',
				type: 'multi',
				question: 'C\'est une question differente encore ?',
				answers: ['bonsoiazeazer', 'bonsoir', 'bonsoir1', 'bonsoir !']
			},
			{
				name: 'troisiazaem-question',
				type: 'multi',
				question: 'C\'est une question differente encore ?',
				answers: ['bonsoiazeazer', 'bonsoir', 'bonsoir1', 'bonsoir !', 'azeazeazeazea'],
				otherAnswer: true
			},
			{
				name: 'azaze-question',
				type: 'text-area',
				question: 'C\'est une question differente encore ?'
			}
		];
		afterValidate = [
			{
				message: 'Apres avoir  azeaz',
				greenBackground: false
			},
			{
				message: 'Apres avoir validé',
				greenBackground: true
			}
		];
		afterFirstQuestion(): void {
			console.log('After first question !');
		}
		onValidate(): void {
			console.log('Validate !');
		}
		onClose(): void {
			console.log('Close !!!');
		}
	}
	</script>

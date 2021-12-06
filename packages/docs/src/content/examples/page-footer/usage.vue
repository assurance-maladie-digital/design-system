<template>
	<div class="d-flex align-center">
		<PageFooter v-bind="$attrs"/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

    import { RouterLinkItem } from '../../../../../vue-dot/src/patterns/PageFooter/types';

    const items: RouterLinkItem[] = [
			    {
				    label: 'Mentions légales',
				    to: '/cgu'
			    }
	]

    const accessLevel: number  = 0

	@Component
	export default class PageFooterUsage extends Vue {
            defaultProps = {
			    items,
                accessLevel
		    };
	}
</script>
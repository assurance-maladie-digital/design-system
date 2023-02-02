import { Api } from '~/types';

export const api: Api = {
	RatingPicker: {
		props: [
			{
				name: 'main-question',
				type: 'object',
				required: true,
				example: `{
	name: 'first-step',
	type: 'emotions',
	question: 'Pourriez vous donner une note ? '
}`,
				description: 'Définit le nom, le type d’affichage et le texte de la première question.',
			},
			{
				name: 'questions-list',
				type: 'object[]',
				description: 'Définit le nom, le type d’affichage et le texte des questions secondaires.',
				example: `[
	{
		name: 'question-secondaire',
		type: 'multi',
		question: 'Avez vous aimé notre première question ?',
		answers: ['Réponse 1', 'Réponse 2', 'Réponse 3', 'Réponse 4']
	},
]`,
				default: `[]`,
			},
			{
				name: 'shadow-mode',
				type: 'boolean',
				description: 'Ajoute une ombre au composant et retire la  bordure de la première question',
				default: false
			},
			{
				name: 'hide-close-buttons',
				type: 'boolean',
				description: 'Masque les boutons de fermeture.',
				default: false
			},
			{
				name: 'validate-text-button',
				type: 'string',
				description: 'Change le texte du bouton de validation',
				default: 'Valider'
			},
			{
				name: 'on-validate',
				type: 'function',
				description: 'Définit la fonction de validation',
				example: `onValidate(): void {
	console.log('Validation');
}`,
				required: true,
			},
			{
				name: 'on-close',
				type: 'function',
				description: 'Définit la fonction de fermeture',
				example: `onValidate(): void {
	console.log('Fermeture');
}`,
				required: true,
			},
			{
				name: 'after-validate',
				type: 'Array',
				description: 'Définit le message et le fond du RatingPicker après la validation',
				default: `[
	{
		message: 'Merci pour votre réponse',
		greenBackground: false
	},
	{
		message: 'Merci pour vos remarques utiles à l\'amélioration du site.',
		greenBackground: false
	}
]`
			}
		]
	}
};

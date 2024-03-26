import { ComponentSection } from '~/types/components';
import { ComponentStatusEnum } from '~/constants/ComponentStatusEnum';

export const templateList: ComponentSection[] = [
	{
		components: [
			{
				name: 'CookiesPage',
				description: 'Utilisé pour permettre à l’utilisateur de gérer ses préférences de cookies.',
				href: '/templates/cookies-page',
				image: 'templates/cookies-page.svg',
				status: ComponentStatusEnum.BRIDGE
			},
			{
				name: 'ErrorPage',
				description: 'Utilisé pour afficher une page d’erreur.',
				href: '/templates/error-page',
				image: 'templates/error-page.svg',
				status: ComponentStatusEnum.BRIDGE
			},
			{
				name: 'NotFoundPage',
				description: 'Utilisé pour afficher une page d’erreur.',
				href: '/templates/not-found-page',
				image: 'templates/not-found-page.svg',
				status: ComponentStatusEnum.BRIDGE
			},
			{
				name: 'MaintenancePage',
				description: 'Utilisé pour afficher une page de maintenance.',
				href: '/templates/maintenance-page',
				image: 'templates/maintenance-page.svg',
				status: ComponentStatusEnum.BRIDGE
			}
		]
	}
];

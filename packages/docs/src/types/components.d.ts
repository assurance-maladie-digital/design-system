import { ComponentStatusEnum } from '~/constants/ComponentStatusEnum';

export interface ComponentDescription {
	name: string;
	description: string;
	href: string;
	image: string;
	status: ComponentStatusEnum;
}

export interface ComponentSection {
	title?: string;
	components: ComponentDescription[];
}

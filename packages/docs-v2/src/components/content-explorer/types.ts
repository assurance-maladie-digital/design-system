export interface TreeviewItem {
    label: string;
    path: string;
    icon?: string;
    children?: TreeviewItem[]
}
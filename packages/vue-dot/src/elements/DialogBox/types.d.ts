export interface NodeListOf<TNode extends Node = Node> {
	forEach(arg0: (element: any) => void): unknown;
	[index: number]: TNode;
	length: number;
}

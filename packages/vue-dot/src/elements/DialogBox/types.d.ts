export interface NodeListOf<TNode extends Node = Node> {
	[index: number]: TNode;
	length: number;
}

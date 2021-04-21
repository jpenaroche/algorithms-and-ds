declare class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;
    constructor(value: T);
}
declare class BaseTree<T> {
    protected root: TreeNode<T> | null;
    constructor();
}
interface ITree<T> {
    insert(value: T): BaseTree<T> | undefined;
    lookup(value: T): TreeNode<T> | null;
    remove(value: T): BaseTree<T> | null;
    print(target: TreeNode<T>): TreeNode<T>;
}
declare class BinarySearchTree<T> extends BaseTree<T> implements ITree<T> {
    insert(value: T): this | undefined;
    lookup(value: T): TreeNode<T> | null;
    remove(value: T): this | null;
    print(target: TreeNode<T>): TreeNode<T>;
}
declare const _default: {
    BinarySearchTree: typeof BinarySearchTree;
};
export default _default;

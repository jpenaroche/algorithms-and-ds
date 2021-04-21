interface IList<T> {
    append(value: T): BaseList<T>;
    prepend(value: T): BaseList<T>;
    remove(value: T): number;
    lookup(value: T): ListNode<T> | null;
}
declare class ListNode<T> {
    value: T;
    next: ListNode<T> | null;
    prev?: ListNode<T> | null;
    constructor(value: T);
}
declare class BaseList<T> {
    length: number;
    head: ListNode<T> | null;
    constructor();
}
declare class LinkedList<T> extends BaseList<T> implements IList<T> {
    append(value: T): this;
    prepend(value: T): this;
    remove(value: T): number;
    lookup(value: T): ListNode<T> | null;
}
declare const _default: {
    LinkedList: typeof LinkedList;
};
export default _default;

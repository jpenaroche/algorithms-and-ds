import { ListNode } from '.';
interface IQueue<T> {
    check(value: T): T | null;
    dequeue(value: T): T | null;
    enqueue(value: T): number;
}
export declare class Queue<T> implements IQueue<T> {
    head: ListNode<T> | null;
    tail: ListNode<T> | null;
    length: number;
    constructor(value: T);
    check(): T | null;
    dequeue(): T | null;
    enqueue(value: T): number;
}
export {};

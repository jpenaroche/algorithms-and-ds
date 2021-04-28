import { ListNode } from '.';
interface IStack<T> {
    peek(value: T): T | null;
    pop(value: T): T | null;
    push(value: T): number;
}
export declare class Stack<T> implements IStack<T> {
    head: ListNode<T> | null;
    tail: ListNode<T> | null;
    length: number;
    constructor(value: T);
    peek(): T | null;
    pop(): T | null;
    push(value: T): number;
}
export {};

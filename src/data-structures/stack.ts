import {ListNode} from '.';

interface IStack<T> {
  peek(value: T): T | null;
  pop(value: T): T | null;
  push(value: T): number;
}

export class Stack<T> implements IStack<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;
  length: number;

  constructor(value: T) {
    this.head = new ListNode<T>(value);
    this.tail = new ListNode<T>(value);
    this.length = 1;
  }

  peek() {
    if (this.length) return (this.tail as ListNode<T>).value;
    return null;
  }

  pop() {
    if (this.length) {
      const tail = this.tail;
      this.tail = (tail as ListNode<T>).prev;
      (this.tail as ListNode<T>).next = null;
      this.length--;
      return tail ? tail.value : null;
    }
    return null;
  }

  push(value: T) {
    const newNode = new ListNode(value);
    newNode.prev = this.tail;
    this.tail = newNode;
    return ++this.length;
  }
}

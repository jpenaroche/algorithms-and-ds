import {ListNode} from '.';

interface IQueue<T> {
  check(value: T): T | null;
  dequeue(value: T): T | null;
  enqueue(value: T): number;
}

export class Queue<T> implements IQueue<T> {
  first: ListNode<T> | null;
  last: ListNode<T> | null;
  length: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  check() {
    if (this.length) return (this.first as ListNode<T>).value;
    return null;
  }

  dequeue() {
    if (!this.length) {
      this.last = null; //Double Checking
      return null;
    } else {
      const result = this.first as ListNode<T>;
      this.first = (this.first as ListNode<T>).next;
      this.length--;
      return result.value;
    }
  }

  enqueue(value: T) {
    const newNode = new ListNode(value);
    if (!this.length) {
      this.last = newNode;
      this.first = newNode;
    } else {
      (this.last as ListNode<T>).next = newNode;
      this.last = newNode;
    }
    return ++this.length;
  }
}

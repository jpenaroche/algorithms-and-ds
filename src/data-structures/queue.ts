import {ListNode} from '.';

interface IQueue<T> {
  check(value: T): T | null;
  dequeue(value: T): T | null;
  enqueue(value: T): number;
}

export class Queue<T> implements IQueue<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;
  length: number;
  constructor(value: T) {
    this.head = new ListNode<T>(value);
    this.tail = new ListNode<T>(value);
    this.length = 1;
  }
  check() {
    if (this.length) return (this.head as ListNode<T>).value;
    return null;
  }

  dequeue() {
    if (this.length) {
      const tail = this.tail;
      this.tail = (tail as ListNode<T>).prev;
      (this.tail as ListNode<T>).next = null;
      this.length--;
      return tail ? tail.value : null;
    }
    return null;
  }

  enqueue(value: T) {
    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    return ++this.length;
  }
}

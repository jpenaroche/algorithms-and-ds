import {ListNode} from '.';

interface IStack<T> {
  peek(value: T): T | null;
  unshift(value: T): Stack<T>;
  pop(value: T): T | null;
  push(value: T): number;
}

export class Stack<T> implements IStack<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  peek() {
    if (this.length) return (this.tail as ListNode<T>).value;
    return null;
  }

  unshift(value: T) {
    if (!this.head) {
      this.push(value);
    } else {
      const node = new ListNode(value);
      node.next = this.head;
      this.head = node;
      this.length++;
    }
    return this;
  }

  pop() {
    let result = null;
    if (this.tail) {
      if (this.tail === this.head) {
        result = this.tail.value;
        this.tail = this.head = null;
      } else {
        let current = this.head;
        while ((current as ListNode<T>).next !== this.tail) {
          current = current?.next as ListNode<T> | null;
        }
        result = this.tail.value;
        this.tail = current;
      }
      this.length--;
    }
    return result;
  }

  push(value: T) {
    const node = new ListNode<T>(value);
    if (this.tail) this.tail.next = node;
    else {
      this.head = node;
      this.tail = node;
    }

    return ++this.length;
  }
}

import {ListNode} from '.';

interface IStack<T> {
  peek(value: T): T | null;
  unshift(value: T): Stack<T>;
  pop(value: T): T | null;
  push(value: T): number;
}

export class Stack<T> implements IStack<T> {
  top: ListNode<T> | null;
  bottom: ListNode<T> | null;
  length: number;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    if (this.length) return (this.top as ListNode<T>).value;
    return null;
  }

  unshift(value: T) {
    const node = new ListNode(value);
    if (!this.length) {
      this.push(value);
    } else {
      (this.bottom as ListNode<T>).next = node;
      this.bottom = node;
      this.length++;
    }
    return this;
  }

  pop() {
    if (!this.length) {
      this.bottom = null; //Double Checking
      return null;
    } else {
      const result = this.top as ListNode<T>;
      this.top = result.next;
      this.length--;
      return result.value;
    }
  }

  push(value: T) {
    const node = new ListNode(value);
    if (!this.length) {
      this.top = node;
      this.bottom = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    return ++this.length;
  }
}

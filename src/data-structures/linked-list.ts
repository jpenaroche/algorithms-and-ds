interface IList<T> {
  append(value: T): BaseList<T>;
  prepend(value: T): BaseList<T>;
  remove(value: T): number;
  lookup(value: T): ListNode<T> | null;
}

export class ListNode<T> {
  value: T;
  next: ListNode<T> | null;
  prev: ListNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class BaseList<T> {
  length: number;
  head: ListNode<T> | null;
  constructor() {
    this.length = 0;
    this.head = null;
  }
}

export class LinkedList<T> extends BaseList<T> implements IList<T> {
  append(value: T) {
    const node = new ListNode<T>(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.length++;
    return this;
  }

  prepend(value: T) {
    const node = new ListNode<T>(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  remove(value: T) {
    if (this.head) {
      if (this.head.value === value) {
        this.head = this.head.next;
        this.length--;
      } else {
        let current = this.head;
        while (current.next) {
          if (current.next.value === value) {
            current.next = current.next?.next;
            this.length--;
            break;
          }
          current = current.next;
        }
      }
    }
    return this.length;
  }

  lookup(value: T) {
    if (this.head) {
      let current = this.head;
      while (current) {
        if (current.value === value) return current;
        current = current.next as ListNode<T>;
      }
    }
    return null;
  }
}

export class DoublyLinkedList<T> extends BaseList<T> implements IList<T> {
  append(value: T) {
    const node = new ListNode<T>(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      node.prev = current;
    }

    this.length++;
    return this;
  }

  prepend(value: T) {
    const head = this.head;
    const node = new ListNode<T>(value);
    if (head) {
      head.prev = node;
    }
    node.next = head;
    this.head = node;
    this.length++;
    return this;
  }

  remove(value: T) {
    const node = this.lookup(value);
    if (node) {
      if (node.prev) node.prev = node.next;
      else {
        this.head = node.next;
        if (this.head) this.head.prev = null;
      }
      this.length--;
    }
    return this.length;
  }

  lookup(value: T) {
    if (this.head) {
      let current = this.head;
      while (current) {
        if (current.value === value) return current;
        current = current.next as ListNode<T>;
      }
    }
    return null;
  }
}

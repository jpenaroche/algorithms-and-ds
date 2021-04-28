import {
  DoublyLinkedList,
  LinkedList,
  ListNode,
} from '../../src/data-structures';

const toArray = <T>(list: LinkedList<T>) => {
  const array: T[] = [];
  let current = list.head;
  while (current) {
    array.push(current.value);
    current = current.next;
  }
  return array;
};

describe('Single Linked List Test suite', () => {
  it('Should append a new Node in the List', () => {
    const list = new LinkedList<number>();
    list.append(1);

    expect([1]).toStrictEqual(toArray(list));
    expect(list.length).toBe(1);
    expect((list.head as ListNode<number>).value).toBe(1);
  });

  it('Should return a specified Node', () => {
    const list = new LinkedList<number>();
    list.append(1);

    const result = list.lookup(1);

    expect(result).toBeInstanceOf(ListNode);
    expect((result as ListNode<number>).value).toBe(1);
    expect(list.length).toBe(1);
  });

  it('Should remove a specified Node', () => {
    const list = new LinkedList<number>();
    list.append(1).remove(1);

    const result = list.lookup(1);

    expect(result).toBe(null);
    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
  });

  it('Should prepend a specified Node', () => {
    const list = new LinkedList<number>();
    list.append(2).prepend(1);

    expect((list.head as ListNode<number>).value).toBe(1);
    expect(list.length).toBe(2);
  });
});

describe('Doubly Linked List Test suite', () => {
  it('Should append two Nodes and return the first one', () => {
    const list = new DoublyLinkedList<number>();
    list.append(1).append(2);
    const first = list.lookup(1);
    expect([1, 2]).toStrictEqual(toArray(list));
    expect(list.length).toBe(2);
    expect((first as ListNode<number>).value).toBe(1);
  });
  it('Should append two Nodes and check its links in the List', () => {
    const list = new DoublyLinkedList<number>();
    list.append(1).append(2);
    const second = list.lookup(2);
    expect([1, 2]).toStrictEqual(toArray(list));
    expect(list.length).toBe(2);
    expect((second as ListNode<number>).prev).toStrictEqual(list.head);
    expect((list.head as ListNode<number>).next).toStrictEqual(second);
  });

  it('Should remove a Node and check its links in the List', () => {
    const list = new DoublyLinkedList<number>();
    list.append(1).append(2).remove(1);
    const second = list.lookup(2);
    expect([2]).toStrictEqual(toArray(list));
    expect(list.length).toBe(1);
    expect((second as ListNode<number>).next).toBe(null);
    expect((second as ListNode<number>).prev).toBe(null);
    expect(list.head).toStrictEqual(second);
  });

  it('Should prepend one Node and check its links in the List', () => {
    const list = new DoublyLinkedList<number>();
    list.append(2).append(3).prepend(1);
    const first = list.lookup(1);
    expect([1, 2, 3]).toStrictEqual(toArray(list));
    expect(list.length).toBe(3);
    expect(list.head).toStrictEqual(first);
  });
});

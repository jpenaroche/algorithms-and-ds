import {LinkedList, ListNode} from '../../src/data-structures';

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
  });

  it('Should prepend a specified Node', () => {
    const list = new LinkedList<number>();
    list.append(2).prepend(1);

    expect((list.head as ListNode<number>).value).toBe(1);
    expect(list.length).toBe(2);
  });
});

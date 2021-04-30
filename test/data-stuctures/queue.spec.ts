import {ListNode, Queue} from '../../src/data-structures';

const toArray = <T>(queue: Queue<T>) => {
  const array: T[] = [];
  let current = queue.first;
  while (current) {
    array.push(current.value);
    current = current.next;
  }
  return array;
};

describe('Queue Test suite', () => {
  it('Should enqueue one element to the queue', () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    expect(queue.length).toBe(1);
    expect([1]).toStrictEqual(toArray(queue));
    expect((queue.first as ListNode<number>).value).toBe(1);
  });

  it('Should dequeue one element from the queue', () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    const result = queue.dequeue();
    expect(queue.length).toBe(0);
    expect(queue.first).toBe(null);
    expect(result).toBe(1);
  });
});

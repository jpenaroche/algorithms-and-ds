import {ListNode, Stack} from '../../src/data-structures';

const toArray = <T>(stack: Stack<T>) => {
  const array: T[] = [];
  let current = stack.top;
  while (current) {
    array.push(current.value);
    current = current.next;
  }
  return array;
};

describe('Stack Test suite', () => {
  it('Should push one element to the stack', () => {
    const stack = new Stack<number>();
    stack.push(1);
    expect(stack.length).toBe(1);
    expect([1]).toStrictEqual(toArray(stack));
    expect((stack.top as ListNode<number>).value).toBe(1);
  });

  it('Should pop one element from the stack', () => {
    const stack = new Stack<number>();
    stack.push(1);
    const result = stack.pop();
    expect(stack.length).toBe(0);
    expect(stack.top).toBe(null);
    expect(result).toBe(1);
  });

  it('Should peek the tail element from the stack', () => {
    const stack = new Stack<number>();
    stack.push(1);
    const result = stack.peek();
    expect(stack.length).toBe(1);
    expect(stack.top).toBeInstanceOf(ListNode);
    expect(result).toBe(1);
  });

  it('Should unshift an element to the bottom of the stack', () => {
    const stack = new Stack<number>();
    stack.push(2);
    stack.unshift(1);
    expect(stack.length).toBe(2);
    expect((stack.top as ListNode<number>).value).toBe(2);
  });
});

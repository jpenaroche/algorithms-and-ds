class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

class BaseTree<T> {
  protected root: TreeNode<T> | null;
  constructor() {
    this.root = null;
  }
}
interface ITree<T> {
  insert(value: T): BaseTree<T> | undefined;
  lookup(value: T): TreeNode<T> | null;
  remove(value: T): BaseTree<T> | null;
  print(target: TreeNode<T>): TreeNode<T>;
}

export class BinaryTree<T> extends BaseTree<T> implements ITree<T> {
  insert(value: T) {
    if (!this.root) {
      this.root = new TreeNode(value);
      return;
    }
    let root = this.root;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (value < root.value) {
        if (!root.left) {
          root.left = new TreeNode(value);
          return this;
        } else root = root.left;
      } else if (value >= root.value) {
        if (!root.right) {
          root.right = new TreeNode(value);
          return this;
        } else root = root.right;
      } else throw new Error('Uncapable to set duplicated vertex');
    }
  }

  lookup(value: T) {
    if (!this.root) return null;

    let root = this.root;
    while (root) {
      if (value < root.value) root = root.left as TreeNode<T>;
      else if (value > root.value) root = root.right as TreeNode<T>;
      else return root;
    }

    return null;
  }

  remove(value: T) {
    if (!this.root) return null;

    let current = this.root;
    let parent = this.root;
    while (current) {
      if (value < current.value) {
        parent = {...current};
        current = current.left as TreeNode<T>;
      } else if (value > current.value) {
        parent = {...current};
        current = current.right as TreeNode<T>;
      } else break;
    }

    parent.right = current ? current.right : null;
    return this;
  }

  print(target: TreeNode<T>) {
    const node = target || this.root;
    const tree = new TreeNode(node.value);
    tree.left = node.left === null ? null : this.print(node.left);
    tree.right = node.right === null ? null : this.print(node.right);
    return tree;
  }

  bfs(): T[] {
    const result: T[] = [];
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      const currentNode = queue.shift() as TreeNode<T>;
      result.push(currentNode.value);
      if (currentNode.left) {
        queue.unshift(currentNode.left);
      }
      if (currentNode.right) {
        queue.unshift(currentNode.right);
      }
    }
    return result;
  }

  bfsr(queue = [this.root], result: T[] = []): T[] {
    if (!queue.length) {
      return result;
    }
    const currentNode = queue.shift() as TreeNode<T>;
    result.push(currentNode.value);
    if (currentNode.left) {
      queue.unshift(currentNode.left);
    }
    if (currentNode.right) {
      queue.unshift(currentNode.right);
    }
    return this.bfsr(queue, result);
  }

  dfsInOrder() {
    const traverse = (node: TreeNode<T> | null, result: T[] = []): T[] => {
      if (!node) return result;
      if (node.left) {
        return traverse(node.left);
      }
      result.push(node.value);
      if (node.right) {
        return traverse(node.right);
      }
      return result;
    };
    return traverse(this.root);
  }

  dfsPreOrder() {
    const traverse = (node: TreeNode<T> | null, result: T[] = []): T[] => {
      if (!node) return result;
      result.push(node.value);
      if (node.left) {
        return traverse(node.left);
      }
      if (node.right) {
        return traverse(node.right);
      }
      return result;
    };
    return traverse(this.root);
  }

  dfsPostOrder() {
    const traverse = (node: TreeNode<T> | null, result: T[] = []): T[] => {
      if (!node) return result;
      if (node.left) {
        return traverse(node.left);
      }
      if (node.right) {
        return traverse(node.right);
      }
      result.push(node.value);
      return result;
    };
    return traverse(this.root);
  }
}

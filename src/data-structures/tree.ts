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
}

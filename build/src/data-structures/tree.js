"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = void 0;
class TreeNode {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
class BaseTree {
    constructor() {
        this.root = null;
    }
}
class BinaryTree extends BaseTree {
    insert(value) {
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
                }
                else
                    root = root.left;
            }
            else if (value >= root.value) {
                if (!root.right) {
                    root.right = new TreeNode(value);
                    return this;
                }
                else
                    root = root.right;
            }
            else
                throw new Error('Uncapable to set duplicated vertex');
        }
    }
    lookup(value) {
        if (!this.root)
            return null;
        let root = this.root;
        while (root) {
            if (value < root.value)
                root = root.left;
            else if (value > root.value)
                root = root.right;
            else
                return root;
        }
        return null;
    }
    remove(value) {
        if (!this.root)
            return null;
        let current = this.root;
        let parent = this.root;
        while (current) {
            if (value < current.value) {
                parent = { ...current };
                current = current.left;
            }
            else if (value > current.value) {
                parent = { ...current };
                current = current.right;
            }
            else
                break;
        }
        parent.right = current ? current.right : null;
        return this;
    }
    print(target) {
        const node = target || this.root;
        const tree = new TreeNode(node.value);
        tree.left = node.left === null ? null : this.print(node.left);
        tree.right = node.right === null ? null : this.print(node.right);
        return tree;
    }
}
exports.BinaryTree = BinaryTree;
//# sourceMappingURL=tree.js.map
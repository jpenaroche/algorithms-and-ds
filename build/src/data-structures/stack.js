"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
const _1 = require(".");
class Stack {
    constructor(value) {
        this.head = new _1.ListNode(value);
        this.tail = new _1.ListNode(value);
        this.length = 1;
    }
    peek() {
        if (this.length)
            return this.tail.value;
        return null;
    }
    pop() {
        if (this.length) {
            const tail = this.tail;
            this.tail = tail.prev;
            this.tail.next = null;
            this.length--;
            return tail ? tail.value : null;
        }
        return null;
    }
    push(value) {
        const newNode = new _1.ListNode(value);
        newNode.prev = this.tail;
        this.tail = newNode;
        return ++this.length;
    }
}
exports.Stack = Stack;
//# sourceMappingURL=stack.js.map
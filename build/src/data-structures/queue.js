"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
const _1 = require(".");
class Queue {
    constructor(value) {
        this.head = new _1.ListNode(value);
        this.tail = new _1.ListNode(value);
        this.length = 1;
    }
    check() {
        if (this.length)
            return this.head.value;
        return null;
    }
    dequeue() {
        if (this.length) {
            const tail = this.tail;
            this.tail = tail.prev;
            this.tail.next = null;
            this.length--;
            return tail ? tail.value : null;
        }
        return null;
    }
    enqueue(value) {
        const newNode = new _1.ListNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return ++this.length;
    }
}
exports.Queue = Queue;
//# sourceMappingURL=queue.js.map
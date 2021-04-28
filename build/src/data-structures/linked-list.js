"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoublyLinkedList = exports.LinkedList = exports.ListNode = void 0;
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
exports.ListNode = ListNode;
class BaseList {
    constructor() {
        this.length = 0;
        this.head = null;
    }
}
class LinkedList extends BaseList {
    append(value) {
        const node = new ListNode(value);
        if (!this.head) {
            this.head = node;
            return this;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
        this.length++;
        return this;
    }
    prepend(value) {
        const node = new ListNode(value);
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }
    remove(value) {
        var _a;
        if (this.head) {
            if (this.head.value === value) {
                this.head = this.head.next;
                this.length--;
            }
            else {
                let current = this.head;
                while (current.next) {
                    if (current.next.value === value) {
                        current.next = (_a = current.next) === null || _a === void 0 ? void 0 : _a.next;
                        this.length--;
                        break;
                    }
                    current = current.next;
                }
            }
        }
        return this.length;
    }
    lookup(value) {
        if (this.head) {
            let current = this.head;
            while (current) {
                if (current.value === value)
                    return current;
                current = current.next;
            }
        }
        return null;
    }
}
exports.LinkedList = LinkedList;
class DoublyLinkedList extends BaseList {
    append(value) {
        const node = new ListNode(value);
        if (!this.head) {
            this.head = node;
            return this;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
        node.prev = current;
        this.length++;
        return this;
    }
    prepend(value) {
        const head = this.head;
        const node = new ListNode(value);
        if (head) {
            head.prev = node;
        }
        node.next = head;
        this.head = node;
        this.length++;
        return this;
    }
    remove(value) {
        const node = this.lookup(value);
        if (node) {
            if (node.prev)
                node.prev = node.next;
            else
                this.head = null;
            this.length--;
        }
        return this.length;
    }
    lookup(value) {
        if (this.head) {
            let current = this.head;
            while (current) {
                if (current.value === value)
                    return current;
                current = current.next;
            }
        }
        return null;
    }
}
exports.DoublyLinkedList = DoublyLinkedList;
//# sourceMappingURL=linked-list.js.map
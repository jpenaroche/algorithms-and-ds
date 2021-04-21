"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bubbleSort = (list) => {
    for (let i = 0; i < list.length; i++)
        for (let j = list.length; j > 0; j--)
            if (list[j] < list[j - 1]) {
                const tmp = list[j];
                list[j] = list[j - 1];
                list[j - 1] = tmp;
            }
    return list;
};
const selectionSort = (list) => {
    let cont = 0;
    for (let i = cont; i < list.length; i++) {
        let small = [-1, Infinity];
        for (let j = cont; j < list.length; j++) {
            if (list[j] < small[1]) {
                small = [j, list[j]];
            }
        }
        const tmp = list[cont];
        list[cont] = small[1];
        list[small[0]] = tmp;
        cont++;
    }
    return list;
};
const insertionSort = (list) => {
    for (let i = 0; i < list.length; i++) {
        for (let j = i; j > 0; j--) {
            if (list[j] < list[j - 1]) {
                const tmp = list[j - 1];
                list[j - 1] = list[j];
                list[j] = tmp;
            }
            else
                break;
        }
    }
    return list;
};
const merge = (left, right) => {
    const list = [...left, ...right];
    return list.sort((a, b) => a - b);
};
const mergeSort = (array) => {
    if (array.length === 1)
        return array;
    const left = array.slice(0, array.length / 2);
    const right = array.slice(array.length / 2);
    return merge(mergeSort(left), mergeSort(right));
};
const quickSort = (array) => {
    if (array.length < 2) {
        return array;
    }
    const { pivot, smaller, greater } = arrange(array);
    return quickSort(smaller).concat(pivot, quickSort(greater));
};
function arrange(array) {
    const pivot = array.pop();
    const smaller = [];
    const greater = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > pivot) {
            greater.push(array[i]);
        }
        else {
            smaller.push(array[i]);
        }
    }
    return {
        pivot,
        smaller,
        greater,
    };
}
exports.default = {
    bubbleSort,
    selectionSort,
    insertionSort,
    quickSort,
    mergeSort,
};
//# sourceMappingURL=sorting.js.map
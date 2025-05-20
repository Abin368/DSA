class MaxHeap {
    constructor() {
        this.heap = [];
    }

    getParent(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeft(i) {
        return 2 * i + 1;
    }

    getRight(i) {
        return 2 * i + 2;
    }

    maxHeap(arr) {
        this.buildHeap(arr);
    }

    buildHeap(arr) {
        this.heap = arr;
        for (let i = this.getParent(this.heap.length - 1); i >= 0; i--) {
            this.shiftDown(i);
        }
    }

    shiftDown(currentIndex) {
        let leftIndex = this.getLeft(currentIndex);
        let endIndex = this.heap.length - 1;

        while (leftIndex <= endIndex) {
            let rightIndex = this.getRight(currentIndex);
            let indexToShift;

            if (rightIndex <= endIndex && this.heap[rightIndex] > this.heap[leftIndex]) {
                indexToShift = rightIndex;
            } else {
                indexToShift = leftIndex;
            }

            if (this.heap[currentIndex] < this.heap[indexToShift]) {
                [this.heap[currentIndex], this.heap[indexToShift]] = [this.heap[indexToShift], this.heap[currentIndex]];
                currentIndex = indexToShift;
                leftIndex = this.getLeft(currentIndex);
            } else {
                return;
            }
        }
    }

    shiftUp(currentIndex) {
        let parent = this.getParent(currentIndex);
        while (currentIndex > 0 && this.heap[parent] < this.heap[currentIndex]) {
            [this.heap[currentIndex], this.heap[parent]] = [this.heap[parent], this.heap[currentIndex]];
            currentIndex = parent;
            parent = this.getParent(currentIndex);
        }
    }

    peek() {
        return this.heap.length === 0 ? null : this.heap[0];
    }

    insert(data) {
        this.heap.push(data);
        this.shiftUp(this.heap.length - 1);
    }

    remove() {
        if (this.heap.length === 0) return null;

        let max = this.heap[0];
        let end = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.shiftDown(0);
        }

        return max;
    }

    print() {
        console.log(this.heap);
    }

    
}
const maxHeap = new MaxHeap();
let arr = [5, 2, 3, 1, 6, 7];

maxHeap.maxHeap(arr);
maxHeap.print();              // Example: [7, 6, 5, 1, 2, 3] (structure may vary but root is max)
console.log(maxHeap.peek());  // 7
console.log(maxHeap.remove()); // 7
maxHeap.insert(10);
maxHeap.print();              // Now 10 should be the root

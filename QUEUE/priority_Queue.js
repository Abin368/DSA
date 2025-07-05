class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(value, priority) {
    const newItem = { value, priority };
    let added = false;

    for (let i = 0; i < this.queue.length; i++) {
      if (priority < this.queue[i].priority) {
        this.queue.splice(i, 0, newItem);
        added = true;
        break;
      }
    }

    if (!added) {
      this.queue.push(newItem);
    }
  }

  dequeue() {
    if (this.isEmpty()) return null;
    return this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  print() {
    console.log(this.queue.map(item => `${item.value}:${item.priority}`).join(' -> '));
  }
}

const pq = new PriorityQueue();
pq.enqueue("Clean house", 3);
pq.enqueue("Go to hospital", 1);
pq.enqueue("Do assignment", 2);

pq.print(); // Go to hospital:1 -> Do assignment:2 -> Clean house:3

pq.dequeue(); // Removes "Go to hospital"
pq.print();   // Do assignment:2 -> Clean house:3

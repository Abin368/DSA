class HashTable {
    constructor(size) {
      this.size = size;
      this.table = new Array(size);
      this.count = 0; 
    }
  
    _hash(key) {
      let hash = 0;
      for (let char of key) {
        hash += char.charCodeAt();
      }
      return hash % this.size;
    }
  
    _rehash() {
      let oldtable = this.table; 
      this.size = this.size * 2;
      this.table = new Array(this.size);
      this.count = 0; // Reset count because we are reinserting everything
  
      for (let chain of oldtable) {
        if (chain) {
          for (let [key, value] of chain) {
            this.set(key, value); // Re-insert items
          }
        }
      }
    }
  
    set(key, value) {
      let index = this._hash(key);
  
      if (!this.table[index]) {
        this.table[index] = [];
      }
  
      for (let pair of this.table[index]) {
        if (pair[0] === key) {
          pair[1] = value; // Update existing key
          return;
        }
      }
  
      this.table[index].push([key, value]);
      this.count++;
  
      if (this.count / this.size > 0.75) {
        this._rehash();
      }
    }
  
    get(key) {
      const index = this._hash(key);
      const chain = this.table[index];
      if (chain) {
        for (let [k, v] of chain) {
          if (k === key) return v;
        }
      }
      return undefined;
    }
  
    display() {
      this.table.forEach((chain, index) => {
        if (chain) {
          const items = chain.map(pair => `[${pair[0]}: ${pair[1]}]`).join(' ');
          console.log(`${index}: ${items}`);
        }
      });
    }
  }
  let ht = new HashTable(5);
  ht.set('abin', 10);
  ht.set('bin', 20);
  ht.set('cin', 30);
  ht.set('din', 40);
  ht.set('ein', 50); 
  
  ht.display();
  
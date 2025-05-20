class Heap{
    constructor(){
        this.heap=[]
    }
    
    getParent(i){
        return Math.floor((i-1)/2)
    }
    getLeft(i){
        return 2*i+1
    }
    getRight(i){
        return 2*i+2
    }
    
    minHeap(arr){
        this.buildHeap(arr)
    }
    
    buildHeap(arr){
        this.heap=arr
        for(let i=this.getParent(this.heap.length-1);i>=0;i--){
            this.shiftDown(i)
        }
    }
    
    shiftDown(currentIndex){
        let leftIndex=this.getLeft(currentIndex)
        let endIndex=this.heap.length-1
        while(leftIndex<=endIndex){
            let rightIndex=this.getRight(currentIndex)
            let indexToShift
            
            if(rightIndex<=endIndex && this.heap[rightIndex]<this.heap[leftIndex]){
                indexToShift=rightIndex
            }else{
                indexToShift=leftIndex
            }
            
            
            if(this.heap[currentIndex]>this.heap[indexToShift]){
                [this.heap[currentIndex],this.heap[indexToShift]]=[this.heap[indexToShift],this.heap[currentIndex]]
                
                currentIndex=indexToShift
                leftIndex=this.getLeft(currentIndex)
            }else{
                return
            }
        }
    }
    
    
    shiftUp(currentIndex){
        let parent=this.getParent(currentIndex)
        while(currentIndex>0 && this.heap[parent]>this.heap[currentIndex]){
            [this.heap[currentIndex],this.heap[parent]]=[this.heap[parent],this.heap[currentIndex]]
           currentIndex=parent
           parent=this.getParent(currentIndex)
        }
    }
    
    peek(){
        if(this.heap.length==0)return
        return this.heap[0]
    }
    
    insert(data){
        this.heap.push(data)
        this.shiftUp(this.heap.length-1)
    }
    
    remove(){
        let min=this.heap[0]
        let end=this.heap.pop()
        
       if(this.heap.length>0){
          this.heap[0]=end
           this.shiftDown(0)
       }
       
       return min
    }
    
    print(){
        console.log(this.heap)
    }


    findKthSmallest(k) {
        let temp = [...this.heap]; // ✅ Fix added
        let result = null;

        for (let i = 0; i < k; i++) {
            result = this.remove();
        }

        this.heap = temp;
        return result;
    }

    findKthLargest(k) {
        let temp = [...this.heap];
        let result = null;

        this.heap = this.heap.map(num => -num);
        this.buildHeap(this.heap);

        for (let i = 0; i < k; i++) {
            result = -this.remove();
        }

        this.heap = temp;
        return result;
    }
}

const heap=new Heap()
let arr=[5,2,3,1,6,7]

heap.minHeap(arr)
heap.print()
console.log(heap.peek())
console.log(heap.remove())
console.log(heap.findKthLargest(3))
console.log(heap.findKthSmallest(3))
heap.insert(0)
heap.print()
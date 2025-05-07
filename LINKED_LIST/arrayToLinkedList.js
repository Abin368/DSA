class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class Linked{
    constructor(){
        this.head=null
        return
    }


    append(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head=newNode
            return
        }

        let current=this.head

        while(current && current.next){
            current=current.next
        }
        current.next=newNode
    }



    print(){
        if(!this.head){
            return
        }

        let result=''
        let current=this.head
        while(current){
            result+=current.data+'->'
            current=current.next
        }
        console.log(result)
    }


}
let arr=[10,20,30,40,50]
const list=new Linked()

for(let num of arr){

    list.append(num)
}

list.print()


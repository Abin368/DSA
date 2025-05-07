class Node{
    constructor(data){
        this.data=data
        this.next=null
    }

}

class Linkded{
    constructor(){
        this.head=null
        return
    }


    append(data){
        const newNode=new Node(data)
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
        let res=''
        let current=this.head

        while(current){
            res+=current.data+'->'
            current=current.next
        }

        console.log(res)
    }

//------------------------------------------------------
  static merge(list1,list2){
    const dummy=new Node(-1)
    let current=dummy
    let p1=list1.head
    let p2=list2.head

    while(p1 && p2){
        if(p1.data<p2.data){
            current.next=p1
            p1=p1.next
        }else{
            current.next=p2
            p2=p2.next
        }
        current=current.next
    }

    current.next=p1 ||p2

    const mergedList=new Linkded()
    mergedList.head=dummy.next


    return mergedList
  }

    //------------------------------------------------
}

const list1=new Linkded()
const list2=new Linkded()
let arr1=[1,3,5,7,9]

let arr2=[2,4,6,8,10]

for(let num of arr1){
    list1.append(num)
}

for(let num of arr2){
    list2.append(num)
}

list1.print()
list2.print()


const merged=Linkded.merge(list1,list2)

merged.print()

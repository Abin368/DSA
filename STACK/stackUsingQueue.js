class stack{
    constructor(){
        this.q1=[]
        this.q2=[]
    }
    
    push(x){
        this.q2.push(x)
        
        while(this.q1.length>0){
            this.q2.push(this.q1.shift())
        }
        
        let temp=this.q1
        this.q1=this.q2
        this.q2=temp
    }
    
    
    pop(){
        if(this.isEmpty()){
            return
        }
        
        return this.q1.shift()
    }
    
    isEmpty(){
        return this.q1.length==0
    }
    
    print(){
        if(this.isEmpty()){
            return
        }
        console.log(this.q1.join('->'))
    }
    
}
let que=new stack()
que.push(10)
que.push(20)
que.push(30)
que.push(40)
que.print()
que.pop()
que.print()
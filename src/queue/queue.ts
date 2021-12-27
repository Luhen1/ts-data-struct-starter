export class Queue<T> { //generics which can be inserted a type that the queue will be using
    // example: if i put the first element as a number. it will be a queue typed number
    // example: if i put the first element as a string. it will be a queue typed string
    private queue: T[];
    private length: number; // number of elements currently in the queue
    private readonly maxSize: number; // maximum number of elements queue can contain

    public constructor(maxSize: number) {
        // Make sure maxSize is at least 1
        this.maxSize = maxSize > 0 ? maxSize : 10;
        this.length = 0;
        this.queue = new Array<T>(this.maxSize);
    }

    public isEmpty(): boolean {
        return this.length === 0;
    }

    public isFull():boolean {
       return this.length === this.maxSize; 
    }
    
    public enqueue(newItem: T): void {
        if ( this.isFull()){
            throw new Error("Queue is full")
        } else {
            this.queue[this.length++] = newItem // post-increment adds 1 to the length after insertion;
        }
    }

    public dequeue(): T { //performance issue 
        if (this.isEmpty()){
            throw new Error("Queue is empty");
        }

        const retval = this.queue[0]

        for(let i = 0; i < this.length; i++){
            this.queue[i] = this.queue[i+1];
        }

        this.length--;
        return retval;
    }

    public peek(): T {
        if (this.isEmpty()){
            throw new Error("Queue is empty");
        }
        return this.queue[0]; //return first element;
    }
    
    public queueContents(): void {
        console.log("Queue Contents");
        for(let i = 0; i< this.length; i++){
            console.log(`queue[${i}]:${this.queue[i]}`);
        }
    }
}
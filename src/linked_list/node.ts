// DS = Data Structure
export namespace DS { //namespace to ensure that this variable is not global but local. 
    export class Node<T> {
        public item: T | null;
        public next: Node<T> | null;

        public constructor(item: T | null = null) {
            this.item = item;
            this.next = null;
        }
    }
}

//Both item and next are public properties. 
//Usually, properties within a class are private or protected, 
//with getters and setters providing access to the properties. 
//Here, we are making an exception. 
//A linked list can have millions of nodes, 
//and the overhead of using getters and setters will be excessive. 
//It is better to give direct access to these properties to enhance performance.

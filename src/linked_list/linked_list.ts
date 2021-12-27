import { DS } from './node';

export class LinkedList<T> {
    private head: DS.Node<T>;
    private tail: DS.Node<T>;

    constructor() {
        this.head = new DS.Node<T>();
        this.tail = new DS.Node<T>();
        this.head.next = this.tail;
    }

    public isEmpty(): boolean {
        return this.head.next === this.tail;
    }

    public insertFirst(item: T): void {
        // encapsulate our item into a node object
        const newNode = new DS.Node<T>(item);

        // first we put the box 1´s next to the tail. and linking it to the new box. the next of the new box is now linked to the tail 
        newNode.next = this.head.next;
        // then we get the next of the box 1 and link it to the new box. 
        this.head.next = newNode;
    }

    public insertLast(item: T): void {
        const newNode = new DS.Node<T>(item)

        let cur: DS.Node<T> | null = this.head;

        //advance our cur pointer to just before the tail node 
        while (cur && cur.next !== this.tail) {
            cur = cur.next;
        }

        if (cur) {
            newNode.next = this.tail;
            cur.next = newNode;
        }
    }

    public removeFirst(): T | null {
        if (this.isEmpty()){
            throw new Error("List is empty");
        }

        let rv: DS.Node<T> | null = this.head.next;

        if (rv) {
            this.head.next = rv.next;
            rv.next = null;
        }

        //we are returning the data, not the node itself
        return rv ? rv.item : null;
    }

    public remove(searchKey: T): T | null {
        if (this.isEmpty()) {
            throw new Error('List is empty');
        }

        // rv = retval or return value
        let rv: DS.Node<T> | null = null;

        // cur = current
        let cur: DS.Node<T> = this.head;

        // Advance our cur pointer to the node right before our matching node
        while (cur.next && cur.next.item !== searchKey) {
            cur = cur.next;
        }

        if (cur.next) {
            rv = cur.next;
            cur.next = cur.next.next;
            rv.next = null;
        }

        return rv && rv.item ? rv.item : null;
    }

    public contains(searchItem: T): boolean {
        if (this.isEmpty()){
            throw new Error('List is empty');
        }

        let rv: boolean = false;
        let cur: DS.Node<T> | null = this.head;

        // Traverse the list in search of a matching item
        while (cur && cur.next !== this.tail) {
            if (cur.next && cur.next.item === searchItem) {
                rv = true;
                break;
            }
            cur = cur.next;
        }
        return rv;
    }

    public getFirst(): T | null {
        if (this.isEmpty()){
            throw new Error('List is empty');
        }

        return this.head.next ? this.head.next.item : null;
    }

    public listContents(): void {
        let cur = this.head.next;

        while (cur && cur !== this.tail) {
            console.log(`${cur.item}`);
            cur = cur.next;
        }
    }
}
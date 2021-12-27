export class Array<T> {
    
    /** An array can be written like this **/

    const numbers: number[] = [1, 2, 3, 4];
    const names = string[] = ['Snake', 'Ocelot', 'Otacon', 'Naomi'];

    /** Also can be written using a generic array type, Array<elemType> **/

    let list: Array<number> = [1, 2, 3, 4]
    let list: Array<string> = ['Snake', 'Ocelot', 'Otacon', 'Naomi']

    /** 3 ways to iterate an array **/

    for(let i=0; i<array.length; i++) {
        console.log(array[i])
    }

    for(const item of array) {
        console.log(item)
    }

    array.forEach(item => {
        console.log(item)
    })

    /** add to the end **/
    array.push(5)

    /** add to the beginning **/
    array.unshift(0)

    /** add in a specific index position **/
    array.splice(3, 0, 8) // add 8 in the index 3

    /** remove from the end **/
    array.pop()

    /** remove from the beginning **/
    array.shift()

    /** remove from a specific index position **/
    array.splice(2, 1) // remove from index 2

    /** update element in position 1 **/
    array[1] = 7    

    /** you can traverse an array to find an element by its value, or simply use the .find() function **/

    const item = array.find(item => item === 3) // search by an item with value 3

    let str = "aabbccdd"
    let occurrences = 0

    for(let i=0; i < str.length; i++) {
        if(str[i] === "c") {
            occurrences++
        }
    }

    console.log(occurrences) // prints 2
}
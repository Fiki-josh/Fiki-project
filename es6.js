// Global Scope
const array = ["Fiki","Mayomikun","John","Esther"];

document.getElementById("testarr").innerHTML = array.reduce(() => `[${array}]`);

// Array Loop method with Arrow functions

// Map
{
    // Block Scope
    const mapArr = array.map((arr) => arr + " mapped");
    // console.log(mapArr);
}
// console.log(mapArr);

//Filter
{
    //Block Scope
    const filterArr = array.filter((arr) => arr.includes("o")) // returns items in array that includes o
    // console.log(filterArr)
}

// reduce
{
    const reducedArr = array.reduce((append, arr) => append += " " + arr) // returns a single value containing all the array items
    // console.log(reducedArr)
}
// forEach
{
    const forEachArr = array.forEach((arr,index) => {
        //local / function scope 
        let num = index + 1;
        // console.log(arr+ `,${num}`);
    })
    // console.log(num);
}
// Splice
//change
{
    array.splice(3 , 0, "Biliksu");// adding items using splice
    console.log(array)

    const removeditem = array.splice(2 , 1, "Jacob"); // replacing and item using splice
    console.log(array) 
    console.log(removeditem);

    array.splice(1 , 1);// remvoing an item using splice
    // console.log(array)
}

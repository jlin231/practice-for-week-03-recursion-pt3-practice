/**************DO NOT MODIFY THIS LINE BELOW*****************/
const fruits = require('../fruit-data')

/* 07. `addKeyAndValueToAll()` - Return the fruits array, adding the given key and
value to each fruit object

console.log(addKeyAndValueToAll(fruits, "inStock", true));
// returns array of 31 fruits, and each fruit object includes "inStock: true"
*/

function addKeyAndValueToAll(array, key, value) {
    // Your code here
    let output = array.forEach(function (obj) {
        obj[key] = value;
    });
    return array;
}

/* 08. `addKeyAndValueToOne()` - Return object at the given index array, adding the given key and
value to that fruit object

console.log(addKeyAndValueToOne(fruits, "color", "red", 1));
// returns first object ("Apple"), including "color: red"
*/

function addKeyAndValueToOne(array, key, value, index) {
    // Your code here

    //object at given index in array
    let obj = array[index];
    obj[key] = value; //added key value pair to obj
    return obj;
}

/* 09. `updateKeyName()` - Change the old key name to the new key name in all
objects, and return the resulting array.
HINT: Can you make a copy of the old key and value, and then delete the original?

console.log(updateKeyName(fruits, "nutritions", "nutrition"));
// returns fruits array, but every "nutritions" key had changed to "nutrition"
*/

function updateKeyName(array, oldKey, newKey) {
    // Your code here

    array = array.map((object) => {
        //make copy of oldKey value
        let copy_oldValue = object[oldKey];
        //delete old key
        delete object[oldKey];
        //add new key
        object[newKey] = copy_oldValue;
        return object;
    })

    return array;

}

/* 10. `updateIdValues()` - Change all of the "id" values to six-character
strings, and return an array of all of the new id values.
For example: 1 becomes "000001", and 31 becomes "000031"

console.log(updateIdValues(fruits));
// returns a list of 31 id, in six-character string format:
// [ '000006', '000035', '000001', '000064', '000033', '000009', '000060',
    '000068', '000069', '000047', '000072', '000037', '000066', '000026',
    '000044', '000065', '000067', '000027', '000041', '000002', '000042',
    '000070', '000004', '000052', '000010', '000071', '000023', '000003',
    '000005', '000073', '000025' ];
*/

function updateIdValues(array) {
    // Your code here
    let ids = array.map(function (fruit_obj) {
        return fruit_obj["id"];
    })

    //take a string an add zeros to add up to length of 6
    ids = ids.map(function (str) {
        //cast id into a string 
        str = str.toString();
        while (str.length < 6) {
            str = '0' + str;
        }
        return str;
    })

    return ids;
}

/* 11. `deleteKeysandValues()` - Delete the keyToDelete from the nutritions
object from every fruit, and return the array.

console.log(deleteKeysAndValues(fruits, "sugar"));
// returns fruits array, but every "nutritions" key no longer has a "sugar" key
*/

function deleteKeysAndValues(array, keyToDelete) {
    // Your code here

    //access the nutritions object, and delete keyToDelete from nutritions object
    array.forEach((element) => {
        //access nutritions object
        delete element["nutritions"][keyToDelete];
        // return element;
    })
    console.log(array);
    return array;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [addKeyAndValueToAll, addKeyAndValueToOne, updateKeyName, updateIdValues, deleteKeysAndValues];

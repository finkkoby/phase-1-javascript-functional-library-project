function myEach(collection, callback) {
    for (let item of Object.values(collection)) {
        callback(item);
    }
    return collection;
}
function myMap(collection, callback) {
    let array = [];
    for (let item of Object.values(collection)) {
        array.push(callback(item));
    }
    return array;
}
function myReduce(collection, callback, acc) {
    let i = 0;
    let counter;
    if (acc === undefined) {
        i = 1;
        counter = Object.values(collection)[0];
    } else {
        counter = acc;
    }
    for (i; i < Object.values(collection).length; i++) {
        counter = callback(counter, Object.values(collection)[i]);
    }
    return counter;
}
function myFind(collection, predicate) {
    for(let item of Object.values(collection)) {
        if(predicate(item)) {
            return item;
        }
    }
    return undefined;
}
function myFilter(collection, predicate) {
    let array = [];
    for(let item of Object.values(collection)) {
        if(predicate(item)) {
            array.push(item);
        }
    }
    return array;
}
function mySize(collection) {
    return Object.values(collection).length;
}
function myFirst(collection, n=1) {
    let chunk = [...collection].splice(0, n);
    if(chunk.length === 1) {
        return chunk[0]
    } else {
        return chunk;
    }
}
function myLast(collection, n=1) {
    let chunk = [...collection].splice(collection.length - n);
    console.log(chunk)
    debugger
    if(chunk.length === 1) {
        return chunk[0];
    } else {
        return chunk;
    }
}
function myKeys(object) {
    return Object.keys(object);
}
function myValues(object) {
    return Object.values(object);
}
function mySortBy(array, callback) {
    return array.toSorted((a, b) => {
        if(callback(a) < callback(b)) {
            return -1;
        } else if (callback(a) > callback(b)) {
            return 1;
        } else {
            return 0;
        }
    });
}
const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
console.log(mySortBy(stooges, function(stooge){ return stooge.name }));
function myFlatten(array, boo, newArr=[]) {
    let counter = 0;
    function unNest(arr) {
        for (let subItem of arr) {
            if(boo || typeof(subItem) === 'number') {
                newArr.push(subItem)
            } else {
                unNest(subItem);
            }
        }
    }
    function isItNested(arr) {
        for (let item of array) {
            if (typeof(item) === 'object') {
                unNest(item);
            } else {
                newArr.push(item);
            }
        }
    }
    isItNested(array);
    return newArr;
}
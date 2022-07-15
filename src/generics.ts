//const names: Array<string> = []; // :string[]

// names[0].split(" ");

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("test successs"); // string is the respose
    }, 2000)
});


promise.then(data => {
    console.log(data.split(" "));
});

/*

function merge(objA: object, objB: object) { 
    return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'shiva' }, { age: 'age' });

console.log(mergedObj.age); // TSC gives warning here as it doesn't know age exists or not

*/

function merge<T,U>(objA: T, objB: U) { 
    return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'shiva' }, { age: 30 });

console.log(mergedObj.age); // now TSC not giving any error


/*

function countAndDescribe(element){
    let desc = 'Got no Value';
    if (element.length == 1) { 
        desc = 'Got 1 element';
    } else (element.length > 1) { 
        desc = `Got ${element.length} elements`;
    }
    return [element, desc];
}
 
console.log(countAndDescribe([100]));
*/

interface Lengthy { 
    length: number
}


function countAndDescribe<T extends Lengthy>(element:T): [T, string]{
    let desc = 'Got no Value';
    if (element.length == 1) { 
        desc = 'Got 1 element';
    } else (element.length > 1) { 
        desc = `Got ${element.length} elements`;
    }
    return [element, desc];
}
 
console.log(countAndDescribe([100]));

class DataStorage<T> { 
    private const data: T[];
    constructor() { 
        this.data = [];
    }

    addItem(item:T) { 
        this.data.push(item);
    }

    removeItem(item:T) { 
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems() { 
        return [...this.data];
    }
}

const stringStorage = new DataStorage<string>();
stringStorage.addItem("hello");
stringStorage.addItem("shiva");
stringStorage.addItem("adigopula");
stringStorage.removeItem("adigopula");
console.log(stringStorage.getItems());

const names: Readonly<string[]> = ['Max']; // creates readOnly string array
// names.push()
type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;  // intersection type
const e1: ElevatedEmployee = {
    name: 'shiva',
    privileges: ['admin'],
    startDate: new Date();
};

type Combinable = number | string;
type Numeric = number | boolean;

type Universal = Combinable | Numeric;

// function oveloading
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) { 
    if (typeof a === 'string' || typeof b === 'string') { 
        return a.toString() + b.toString();
    }
    return a + b;
}

const sum = add(2, 3);
console.log(sum);

const conc = add('shiva', ' adigopula');
console.log(conc.split(' ')); // without overloading methods it gives error

interface Bird { 
    type: 'bird';
    flyingSpeed: number;
}

interface Horse { 
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) { 
    let speed;
    switch (animal.type) { 
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}


moveAnimal({ type: 'bird', flyingSpeed: 10 });

let paragraph = document.getElementById("output")! as HTMLElement;
paragraph.innerText = "Hello World";


interface ErrorContainer { //{email: 'Email is not valid'}
    [prop:string] : string
}

const errorBag: ErrorContainer = {
    email: 'Not a valid Email',
    username: 'Not a valid username'
}

const fetchedUserData = {
    id: 'u1',
    name: 'Shiva',
    //job: {title: 'SE'}
}

console.log(fetchedUserData?.job?.title);

let value = null;
const testValue = value ?? 'DEFAULT'; // gets default only if value is null or undefined

const testValue2 = value || 'DEFAULT'; // gets default if value turns to be falsy => so it also takes blank value and false

console.log(testValue ); 
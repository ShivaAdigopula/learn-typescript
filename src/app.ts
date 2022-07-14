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
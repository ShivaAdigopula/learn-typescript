interface User { 
    name: string;
    password: string;

    greet(phrase: string): void;
}

let user1: User;

user1 = {
    name: 'shiva',
    password: 'not set yet',
    greet(phrase: string) { 
        console.log(`${phrase} ${this.name}`)
    }
}

console.log(user1);
user1.greet('hello')
interface Named { 
    readonly name: string;
}

interface Greetable extends Named{ 
    greet(phrase: string): void;
}


class User implements Greetable { 
    name: string;
    private passPhrase: string;
    constructor( n: string ) { 
        this.name = n;
        this.passPhrase = '';
    }
    greet(phrase: string) { 
        console.log(`${phrase} ${this.name}`)
    }
    set password(password: string) { 
        this.passPhrase = password;
    }

    get password() { 
        return this.passPhrase;
    }
}
let user1 : Greetable = new User("shiva");
// user1.name = 'test'; not possible
console.log(user1);
user1.greet('hello')

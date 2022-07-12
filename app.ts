
interface Person  {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string] // tuple  => Fixed length array
}

const person:Person = {
    name: 'Shiva',
    age: 29,
    hobbies: ['Listening Music', 'Watching Movies'],
    role: [2, 'author']
};

console.log(person.name);
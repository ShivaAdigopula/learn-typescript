
enum Role { ADMIN, READ_ONLY, AUTHOR};

interface Person  {
    name: string,
    age: number | string,
    hobbies: string[],
    role: Role // tuple  => Fixed length array
}

const person:Person = {
    name: 'Shiva',
    age: '29',
    hobbies: ['Listening Music', 'Watching Movies'],
    role: Role.ADMIN
};

console.log(person.name);
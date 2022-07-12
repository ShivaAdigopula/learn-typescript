
enum Role { ADMIN, READ_ONLY, AUTHOR};

interface Person  {
    name: string,
    age: number | string,
    hobbies: string[],
    role: Role // tuple  => Fixed length array,
    county: 'India' | 'Rest Of The World'
}

const person:Person = {
    name: 'Shiva',
    age: '29',
    hobbies: ['Listening Music', 'Watching Movies'],
    role: Role.ADMIN,
    county: 'India'
};

console.log(person.name);
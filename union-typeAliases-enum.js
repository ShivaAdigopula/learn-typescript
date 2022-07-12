"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Shiva',
    age: '29',
    hobbies: ['Listening Music', 'Watching Movies'],
    role: Role.ADMIN,
    county: 'India'
};
console.log(person.name);

class Department { 
    private name: string;
    private employees: string[] = [];
    constructor(n: string) { 
        this.name = n;
    }

    describe(){ 
        console.log({name: this.name, employees : this.employees});
    }

    addEmployee(name: string) { 
        this.employees.push(name);
    }
}

const softwareEngg = new Department("Software Engineering");
console.log(softwareEngg); 

softwareEngg.describe();

softwareEngg.addEmployee('shiva');

softwareEngg.describe();

softwareEngg.employees[1] = 'adigopula';
console.log(softwareEngg.employees);
class Department { 
    
    private employees: string[] = []; // added here for initialization
    constructor(private readonly id : string, private name: string) { 
       
    }

    describe(){ 
        console.log(`Department ( ${this.id}, name: ${this.name}, employees: ${this.employees})`);
    }

    addEmployee(name: string) { 
        this.employees.push(name);
    }
}

class ITDepartment extends Department { 
    private projects: string[] = [];

    get recentProject() { 
        return this.projects[0];
    }

    set addProject(project: string) { 
        if (!project) { 
            throw new Error("Project is required")
        }
        this.projects = [project, ...this.projects];
    }
    
}

const softwareEngg = new ITDepartment("SE", "Software Engineering");
console.log(softwareEngg); 

softwareEngg.describe();

softwareEngg.addEmployee('shiva');

softwareEngg.describe();

softwareEngg.addProject = "TS";
console.log(softwareEngg.recentProject)

softwareEngg.addProject = "";

//softwareEngg.employees[1] = 'adigopula';
//console.log(softwareEngg.employees);
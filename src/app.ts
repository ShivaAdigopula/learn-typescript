abstract class Department { 
    static readonly fiscalYear: number = 2022;
    
    protected employees: string[] = []; // added here for initialization
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
    private projects: string[];
    private static instance: ITDepartment;

    private constructor(projects: string[]) { 
        super("IT", "Information Technology");
        this.projects = projects;
    }

    static getInstance() { 
        if (this.instance) { 
            return this.instance;
        }
        this.instance = new ITDepartment([]);
        return this.instance;
    }

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
// const dept = new Department();
const softwareEngg = ITDepartment.getInstance();
console.log(softwareEngg); 

softwareEngg.describe();

softwareEngg.addEmployee('shiva');

softwareEngg.describe();

softwareEngg.addProject = "TS";
console.log(softwareEngg.recentProject)

try {
    softwareEngg.addProject = "";
} catch (e) { 
    console.error(e)
}
console.log(ITDepartment.fiscalYear)


//softwareEngg.employees[1] = 'adigopula';
//console.log(softwareEngg.employees);
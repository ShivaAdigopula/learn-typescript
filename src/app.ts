function Logger(constructor: Function) {
    console.log(constructor)
}


function WithTemplate(template: string, selector: string) { 
    return function (constructor: any) { 
        const selectorEl = document.getElementById(selector);
        const instance = new constructor();
        if (selectorEl) { 
            
            template = template.replace("{name}", instance.name);
            selectorEl.innerHTML = template;
        }
    }
}
 
@WithTemplate(`<h1>{name}</h1>`, "output")
class Engineer { 
    name = 'Shiva';
    constructor() { 
        console.log('creating')
    }
}


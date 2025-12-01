function optellen(a: number, b: number): number {
    return a + b;
}

console.log(optellen(2, 3));

function initPage() {
    let elt = document.getElementById('title') as HTMLHeadingElement;
    elt.innerHTML = 'Het is gelukt';

    let plaatje = document.getElementById('plaatje') as HTMLImageElement;

    plaatje.src = 'https://xanderwemmers.nl/tiger.jpg';
}

class Student {
    private name: string;
    private id: number;
    private age: number;
    public isTrue: boolean;

    constructor(id: number, name: string, age: number, isTrue: boolean) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.isTrue = isTrue;
    }
}

let st = new Student(2, 'Lars', 32, false) as Student;
st.isTrue = true;
console.log(st);
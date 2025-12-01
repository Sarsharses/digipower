function optellen(a, b) {
    return a + b;
}
console.log(optellen(2, 3));
function initPage() {
    var elt = document.getElementById('title');
    elt.innerHTML = 'Het is gelukt';
    var plaatje = document.getElementById('plaatje');
    plaatje.src = 'https://xanderwemmers.nl/tiger.jpg';
}
var Student = /** @class */ (function () {
    function Student(id, name, age, isTrue) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.isTrue = isTrue;
    }
    return Student;
}());
var st = new Student(2, 'Lars', 32, false);
st.isTrue = true;
console.log(st);

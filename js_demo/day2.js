// function Employee1(id, name, city) {
//     this.id = id;
//     this.name = name;
//     this.city = city;
// }

// class Employee2 {
//     constructor(id, name, city) {
//         this.id = id;
//         this.city = city;
//         this.name = name;
//     }
// }

// e1 = new Employee1(1, "Trupti", "Pune")
// e2 = new Employee2(2, "Shweta", "Chandrapur")
// e3 = {id: 3, name: "Sanika", city: "Chandrapur"}

// console.log(e1);
// console.log(e2);
// console.log(e3);

// arr = [e1, e2, e3];

// arr.forEach(ele => {
//     console.log(ele)
// });

// console.log(JSON.stringify(e3))

// e6 = JSON.stringify(e3);
// console.log(JSON.parse(e6))

// destructuring

const employee = {
    fname: "Trupti",
    lname: "Balbudhe",
    city: "Pune",
    phone: {
        home: 1111111,
        office: 2222222222
    }
}

//passing the object to function
displayEmployeeOld(employee);
displayEmployeeNew(employee)

// old way
function displayEmployeeOld(emp) {
  console.log("Old Way");

  console.log("First Name : " + emp.fname);
  console.log("Last Name : " + emp.lname);
  console.log("City : " + emp.city);
  console.log("++++++++++++++++++++++++++++++++");
}

const {city, ...fullName} = employee;
console.log(city)

for(e in fullName) {
    console.log(fullName[e])
}

// New Way
function displayEmployeeNew({fname, lname, city}) {
    console.log("New Way");

  console.log("First Name : " + fname);
  console.log("Last Name : " + lname);
  console.log("City : " + city);
  console.log("++++++++++++++++++++++++++++++++");
}

console.log("----------------Alias---------------")
// Alias
let first_name;
({fname: first_name} = employee);
console.log(first_name)

console.log("------------------------------------")

setTimeout(() => {
    console.log("Called after two seconds only one time")
}, 2000)

setInterval(() => {
    console.log("This runs every 3 seconds")
}, 3000)
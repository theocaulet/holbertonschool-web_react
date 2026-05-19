interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Theo",
    lastName: "Caulet",
    age: 22,
    location: "St Cyprien sur Dourdou"
}

const student2: Student = {
    firstName: "Yanis",
    lastName: "Caulet",
    age: 18,
    location: "St Cyprien sur Dourdou"
}

const studentsList: Student[] = [student1, student2];
const table = document.createElement("table");
studentsList.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");
    
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});

document.body.appendChild(table);

console.log(studentsList);

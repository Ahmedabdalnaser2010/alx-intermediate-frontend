interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Guillaume",
    lastName: "Salva",
    age: 23,
    location: "San Francisco"
};

const student2: Student = {
    firstName: "James",
    lastName: "Bond",
    age: 35,
    location: "London"
};

const studentsList: Array<Student> = [student1, student2];

// Create table using vanilla JavaScript
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

// Create header
const headerRow = document.createElement('tr');
const firstNameHeader = document.createElement('th');
const locationHeader = document.createElement('th');

firstNameHeader.textContent = 'First Name';
locationHeader.textContent = 'Location';

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
thead.appendChild(headerRow);

// Create rows for each student
studentsList.forEach((student: Student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);
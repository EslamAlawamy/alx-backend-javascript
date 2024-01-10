// Write an interface named Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students and an array named studentsList
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Alice",
  lastName: "Smith",
  age: 22,
  location: "San Francisco",
};

const studentsList: Student[] = [student1, student2];

// Using Vanilla JavaScript, render a table and append rows for each student
const renderTable = (students: Student[]) => {
  const table = document.createElement("table");

  students.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });

  document.body.appendChild(table);
};

// Render the table for studentsList
renderTable(studentsList);

// Exercise 0: Interface for Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Exercise 1: Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

// Exercise 2: Extending Teacher interface to create Directors interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// Function definition for printTeacher
function printTeacher(firstName: string, lastName: string): string {
  const firstLetter = firstName.charAt(0);
  const formattedName = `${firstLetter}. ${lastName}`;
  return formattedName;
}

// Exercise 3: Interface for the printTeacher function
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Exercise 4: Interface for StudentClass constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Interface for the StudentClass methods
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// StudentClass implementation
class StudentClass implements StudentInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

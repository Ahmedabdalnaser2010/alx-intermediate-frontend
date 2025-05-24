
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

console.log(teacher3);

// ///////////////////////////////////////////////////

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);


// //////////////////////////////////////////////////

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe")); // J. Doe


// ////////////////////////////////////////////////

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this._firstName;
    }
}

const student = new StudentClass("John", "Doe");
console.log(student.displayName()); // John
console.log(student.workOnHomework()); // Currently working
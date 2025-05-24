
interface MajorCredits {
    credits: number;
    brand: "major";
}

interface MinorCredits {
    credits: number;
    brand: "minor";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "major"
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "minor"
    };
}

// Example usage:
const majorMath: MajorCredits = { credits: 4, brand: "major" };
const majorScience: MajorCredits = { credits: 3, brand: "major" };

const minorArt: MinorCredits = { credits: 2, brand: "minor" };
const minorMusic: MinorCredits = { credits: 1, brand: "minor" };

console.log(sumMajorCredits(majorMath, majorScience)); // { credits: 7, brand: "major" }
console.log(sumMinorCredits(minorArt, minorMusic)); // { credits: 3, brand: "minor" }
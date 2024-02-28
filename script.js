
class Student {
    constructor(name, surname, yearBirth, marks) {
        this.name = name;
        this.surname = surname;
        this.yearBirth = yearBirth;
        this.marks = marks;
        this.absence = new Array(25);
        this.absenceIndex = 0;
        this.age = this.getAge(yearBirth);
        this.averageMark = this.marks.reduce((r, m) => r + m) / this.marks.length;
        this.presenceIndex = 0.9;
        this.goodMarksMin = 90;
        this.results = {
            BAD: "Редиска!",
            NORMAL: "Добре, але можна краще",
            GOOD: "Молодець!"
        };
    }

    present() {
        if (this.absence.length > this.absenceIndex) {
            this.absence = true;
        }
    };

    absent() {
        if (this.absence.length > this.absenceIndex) {
            this.absence = false;
        }
    };

    getAge(dateString) {
        const today = new Date();
        const birthDate = new Date(dateString);
        const age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age;
        }
        return age;
    }

    summary() {
        if (this.averageMark < this.goodMarksMin && this.avaragePresence < this.presenceIndex) {
            console.log(this.results.BAD);
        } else if (this.averageMark < this.goodMarksMin || this.avaragePresence < this.presenceIndex)
            console.log(this.results.NORMAL);
        else
            console.log(this.results.GOOD);
    }
}

const molly = new Student('Molly', 'Robertson', '01/20/1993', [96, 92, 93]);
console.log(molly);
molly.present();
molly.absent();
molly.summary();

const nikolas = new Student('Nikolas', 'Caidge', '03/28/1986', [85, 80, 86]);
console.log(nikolas);
nikolas.present();
nikolas.absent();
nikolas.summary();
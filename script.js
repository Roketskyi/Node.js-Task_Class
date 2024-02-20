class Students {
    static lastId = 0;

    constructor(name, surname, lastName, nameOfArticle, date, phoneNumber, email, language, hobby) {
        this.id = ++Students.lastId;
        this.name = name;
        this.surname = surname;
        this.lastName = lastName;
        this.nameOfArticle = nameOfArticle;
        this.date = date;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.language = language;
        this.hobby = hobby;
    }

    getName() {
        return this.name;
    }

    getSurname() {
        return this.surname;
    }

    getLastName() {
        return this.lastName;
    }

    getExpenses() {
        return "";
    }


}

class ItemsOfFinancialExpenses {
    constructor(nameOfArticle, amount) {
        this.nameOfArticle = nameOfArticle;
        this.amount = amount;
    }

    getNameOfArticle() {
        return this.nameOfArticle;
    }

    updateNameOfArticle(newName) {
        this.nameOfArticle = newName;
    }

    removeNameOfArticle() {
        this.nameOfArticle = null;
    }

    getAmount() {
        return this.amount;
    }

    removeAmount() {
        this.amount = null;
    }
}

class Language {
    constructor(language, levelOfLanguage, learnOfLanguage) {
        this.language = language;
        this.levelOfLanguage = levelOfLanguage;
        this.learnOfLanguage = learnOfLanguage;
    }

    getLanguage() {
        return this.language;
    }

    updateLanguage(newLanguage) {
        this.language = newLanguage;
    }

    removeLanguage() {
        this.language = null;
    }

    getLevelOfLanguage() {
        return this.levelOfLanguage;
    }

    updateLevelOfLanguage(newLevel) {
        this.levelOfLanguage = newLevel;
    }

    removeLevelOfLanguage() {
        this.levelOfLanguage = null;
    }

    getLearnOfLanguage() {
        return this.learnOfLanguage;
    }

    updateLearnOfLanguage(newLearn) {
        this.learnOfLanguage = newLearn;
    }

    getLanguageCountStudents(students) {
        return students.filter(student => student.language.includes(this.language)).length;
    }

    getStudentsWithSameLanguageCount(students) {
        return students.filter(student => student.language.includes(this.language) && student.levelOfLanguage === this.levelOfLanguage).length;
    }
}

const student1 = new Students(
    'Іван',
    'Іванович',
    'Олександрович',
    'Стаття 1',
    new Date('2024-02-20'),
    '380662339163',
    ['example@gmail.com', 'example2@gmail.com'],
    ['English', 'Ukrainian'],
    ['football', 'reading']
);

const student2 = new Students(
    'Іван',
    'Іванович',
    'Олександрович',
    'Стаття 1',
    new Date('2024-02-20'),
    '380662339163',
    ['example@gmail.com', 'example2@gmail.com'],
    ['Spanish'],
    ['football', 'reading']
);

const student3 = new Students(
    'Іван',
    'Іванович',
    'Олександрович',
    'Стаття 1',
    new Date('2024-02-20'),
    '380662339163',
    ['example@gmail.com', 'example2@gmail.com'],
    ['English', 'Ukrainian', 'Chinesee'],
    ['football', 'reading']
);

console.log("Ім'я студента:", Language.getLanguageCountStudents(allStudents));
class DBForm {
    constructor() {
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
    }

    getStudent(name) {
        return this.students.find(student => student.name === name);
    }

    getAllStudents() {
        return this.students;
    }

    GetListOfLanguages() {
        const allLanguages = this.students.flatMap(student => student.language);
        
        // робимо методом розгортання з сет в масив 
        const uniqueLanguages = [...new Set(allLanguages)];
        
        return uniqueLanguages;
    }

    GetNumberOfStudentsForLanguage(language) {
        return this.students.filter(student => student.language.includes(language)).length;
    }

    GetNumberOfStudentsForLanguageAtLevel(language, levelOfLanguage) {
        return this.students.filter(student => student.language.includes(language) && student.levelOfLanguage === levelOfLanguage).length;
    }

    GetMonthlyFeeForPerson(name) {
        const student = this.students.find(student => student.name === name);
        if (student && student.phoneNumber) {
            const phoneNumber = student.phoneNumber;
            const foundPhoneNumber = this.students.find(student => student.phoneNumber === phoneNumber);
            if (foundPhoneNumber) {
                return foundPhoneNumber.monthlyFeeChange;
            }
        }
        return null;
    }
}

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

    getEmail() {
        return this.email;
    }

    updateEmail(newEmail) {
        this.email = newEmail;
    }

    removeEmail() {
        this.email = null;
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

class ExpensesTablePerMonth {
    constructor(month, expenses) {
        this.month = month;
        this.expenses = expenses;
    }

    getMonth() {
        return this.month;
    }

    updateMonth(newMonth) {
        this.month = newMonth;
    }

    removeMonth() {
        this.month = null;
    }

    getExpenses() {
        return this.expenses;
    }

    updateExpenses(newExpenses) {
        this.expenses = newExpenses;
    }

    removeExpenses() {
        this.expenses = null;
    }
}

class Hobby {
    constructor(hobby, durationOfHobbyDays, levelOfUsefulness) {
        this.hobby = hobby;
        this.durationOfHobbyDays = durationOfHobbyDays;
        this.levelOfUsefulness = levelOfUsefulness;
    }

    getHobby() {
        return this.hobby;
    }

    updateHobby(newHobby) {
        this.hobby = newHobby;
    }

    removeHobby() {
        this.hobby = null;
    }

    getDurationOfHobbyDays() {
        return this.durationOfHobbyDays;
    }

    updateDurationOfHobbyDays(newDuration) {
        this.durationOfHobbyDays = newDuration;
    }

    removeDurationOfHobbyDays() {
        this.durationOfHobbyDays = null;
    }

    getLevelOfUsefulness() {
        return this.levelOfUsefulness;
    }

    updateLevelOfUsefulness(newLevel) {
        this.levelOfUsefulness = newLevel;
    }

    removeLevelOfUsefulness() {
        this.levelOfUsefulness = null;
    }
}

class PhoneNumber {
    constructor(phoneNumber, monthlyFeeChange, mobileOperator, email) {
        this.phoneNumber = phoneNumber;
        this.monthlyFeeChange = monthlyFeeChange;
        this.mobileOperator = mobileOperator;
        this.email = email;
    }

    getPhoneNumber() {
        return this.phoneNumber;
    }

    updatePhoneNumber(newPhoneNumber) {
        this.phoneNumber = newPhoneNumber;
    }

    removePhoneNumber() {
        this.phoneNumber = null;
    }

    getEmail() {
        return this.email;
    }

    updateEmail(newEmail) {
        this.email = newEmail;
    }

    removeEmail() {
        this.email = null;
    }

    getMonthlyFeeChange() {
        return this.monthlyFeeChange;
    }

    updateMonthlyFeeChange(newMonthlyFeeChange) {
        this.monthlyFeeChange = newMonthlyFeeChange;
    }

    removeMonthlyFeeChange() {
        this.monthlyFeeChange = null;
    }

    getMobileOperator() {
        return this.mobileOperator;
    }

    updateMobileOperator(newMobileOperator) {
        this.mobileOperator = newMobileOperator;
    }

    removeMobileOperator() {
        this.mobileOperator = null;
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

// Створення екземпляра класу DBForm
const dbForm = new DBForm();

// Додавання студентів
dbForm.addStudent(student1);
dbForm.addStudent(student2);
dbForm.addStudent(student3);

// Отримання студента
console.log("Отримання студента:");
console.log(dbForm.getStudent('Іван'));

// Отримання всіх студентів
console.log("Отримання всіх студентів:");
console.log(dbForm.getAllStudents());

// Отримання списку мов
console.log("Отримання списку мов:");
console.log(dbForm.GetListOfLanguages());

// Отримання кількості студентів за мовою
console.log("Отримання кількості студентів за мовою:");
console.log("Кількість студентів, які знають англійську мову:", dbForm.GetNumberOfStudentsForLanguage('English'));
console.log("Кількість студентів, які знають іспанську мову на рівні Intermediate:", dbForm.GetNumberOfStudentsForLanguageAtLevel('Spanish', 'Intermediate'));

// Отримання щомісячної плати за мобільний зв'язок для студента
console.log("Отримання щомісячної плати за мобільний зв'язок для студента:");
console.log("Щомісячна плата за мобільний зв'язок для Івана:", dbForm.GetMonthlyFeeForPerson('Іван'));
class DBForm {
    constructor() {
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
    }

    getStudent(name) {
        const student = this.students.find(student => student.name === name);

        return student;
    }

    getAllStudents() {
        return this.students;
    }

    GetListOfLanguages() {
        const allLanguages = this.students.flatMap(student => student.languages.map(lang => lang.language));

        const uniqueLanguages = [...new Set(allLanguages)];

        return uniqueLanguages;
    }

    GetNumberOfStudentsForLanguage(language) {
        return this.students.filter(student => student.languages.some(lang => lang.language === language)).length;
    }

    GetNumberOfStudentsForLanguageAtLevel(language, levelOfLanguage) {
        const level = Object.values(levels).find(l => l.level === levelOfLanguage);
    
        if (!level) {
            console.log(`Неправильний рівень мови: ${levelOfLanguage}`);

            return 0;
        }
    
        return this.students.filter(student => student.languages.some(lang => lang.language === language && lang.levelOfLanguage.level === level.level)).length;
    }
    

    GetMonthlyFeeForPerson(name) {
        const student = this.students.find(student => student.name === name);
    
        if (student && student.phoneNumber) {
            return student.phoneNumber.getPhoneMonthlyFee();
        }
    
        return null;
    }

    GetTopNStudentsWithHighestMonthlyFee(N) {
        const studentsWithPhoneFee = this.students.filter(student => student.phoneNumber);
        const sortedStudents = studentsWithPhoneFee.sort((a, b) => b.phoneNumber.getPhoneMonthlyFee() - a.phoneNumber.getPhoneMonthlyFee());
        
        return sortedStudents.slice(0, N);
    }

    GetTopNStudentsWithLowestMonthlyFee(N) {
        const studentsWithPhoneFee = this.students.filter(student => student.phoneNumber);
        const sortedStudents = studentsWithPhoneFee.sort((a, b) => a.phoneNumber.getPhoneMonthlyFee() - b.phoneNumber.getPhoneMonthlyFee());
        
        return sortedStudents.slice(0, N);
    }
}

class Students {
    static lastId = 0;

    constructor(name, surname, lastName, nameOfArticle, date, phoneNumber, emails, languages, hobby) {
        this.id = ++Students.lastId;
        this.name = name;
        this.surname = surname;
        this.lastName = lastName;
        this.nameOfArticle = nameOfArticle;
        this.date = date;
        this.phoneNumber = phoneNumber;
        this.emails = emails;
        this.languages = languages;
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
        return this.emails.getEmail();
    }

    updateEmail(newEmails) {
        this.emails.updateEmail(newEmails);
    }

    addEmail(newEmail) {
        this.emails.addEmail(newEmail);
    }

    removeEmail(emailToRemove) {
        this.emails.removeEmail(emailToRemove);
    }

    getLanguages() {
        return this.languages;
    }

    addLanguage(language, level) {
        this.languages.push({ language, levelOfLanguage: level });
    }

    removeLanguage(language) {
        this.languages = this.languages.filter(lang => lang.language !== language);
    }

    getLanguageLevels() {
        return this.languages.map(lang => ({ language: lang.language, levelOfLanguage: lang.levelOfLanguage.level }));
    }
}

class Email {
    constructor(emails) {
        this.emails = emails;
    }

    getEmail() {
        return this.emails;
    }

    updateEmail(newEmails) {
        this.emails = newEmails;
    }

    addEmail(newEmail) {
        this.emails.push(newEmail);
    }

    removeEmail(emailToRemove) {
        this.emails = this.emails.filter(email => email !== emailToRemove);
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

    updateLanguageAndLevel(newLanguage, newLevel) {
        this.language = newLanguage;
        this.levelOfLanguage = newLevel;
    }

    removeLanguage() {
        this.language = null;
    }

    getLevelOfLanguage() {
        return this.levelOfLanguage;
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
        return students.filter(student => student.languages.some(lang => lang.language === this.language)).length;
    }

    getStudentsWithSameLanguageCount(students) {
        return students.filter(student => student.languages.some(lang => lang.language === this.language && lang.levelOfLanguage === this.levelOfLanguage)).length;
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
    constructor(phoneNumber, phoneMonthlyFee, mobileOperator) {
        this.phoneNumber = phoneNumber;
        this.phoneMonthlyFee = phoneMonthlyFee;
        this.mobileOperator = mobileOperator;
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

    getPhoneMonthlyFee() {
        return this.phoneMonthlyFee;
    }

    updatePhoneMonthlyFee(newPhoneMonthlyFee) {
        this.phoneMonthlyFee = newPhoneMonthlyFee;
    }

    removePhoneMonthlyFee() {
        this.phoneMonthlyFee = null;
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

class LanguageLevel {
    constructor(level) {
        this.level = level;
    }
}

const levels = {
    A0: new LanguageLevel('A0'),
    A1: new LanguageLevel('A1'),
    A2: new LanguageLevel('A2'),
    B1: new LanguageLevel('B1'),
    B2: new LanguageLevel('B2'),
    C1: new LanguageLevel('C1'),
    C2: new LanguageLevel('C2')
};

const student1 = new Students(
    'Іван',
    'Тарасович',
    'Лисиця',
    'Стаття 1',
    new Date('2024-02-20'),
    new PhoneNumber('380837232843', 150, "Лайф"),
    [
        new Email("Rodasd@dasd.dsd"),
    ],
    [
        new Language("Англійська", levels.A1),
        new Language("Французька", levels.B2),
    ],
    [
        new Hobby('football', 5, 'high'),
    ],
);

const student2 = new Students(
    'Петро',
    'Іванович',
    'Щур',
    'Стаття 1',
    new Date('2024-02-20'),
    new PhoneNumber('380662339163', 250, "Київстар"),
    [
        new Email("Rodasd@dasd.dsd"),
    ],
    [
        new Language("Англійська", levels.A1),
        new Language("Французька", levels.B2),
    ],
    [
        new Hobby('football', 5, 'high'),
    ],
);

const student3 = new Students(
    'Василь',
    'Вікторович',
    'Комп', 
    'Стаття 1',
    new Date('2024-02-20'),
    new PhoneNumber('380847123921', 50, "Водафон"),
    [
        new Email("Rodasd@dasd.dsd"),
    ],
    [
        new Language("Англійська", levels.A1),
        new Language("Пакистанська", levels.B2)
    ],
    [
        new Hobby('football', 4, 'high'),
    ],
);


// Створення екземпляра класу DBForm
const dbForm = new DBForm();

// Додавання студентів
dbForm.addStudent(student1);
dbForm.addStudent(student2);
dbForm.addStudent(student3);

// student2.languages[1].updateLanguageAndLevel("Іф", levels.B2);

console.log("Отримання студента: ", (dbForm.getStudent('Василь')));

// Отримуємо всіх студентів
// console.log(`Отримання всіх студентів:`, (dbForm.getAllStudents()));

// Отримуємо список мов
// console.log("Отримання списку мов: ", dbForm.GetListOfLanguages());

// Отримуємо кількість студентів за мовою
// console.log("Отримання кількості студентів за мовою:");
// console.log("Кількість студентів, які знають Французьку мову: ", dbForm.GetNumberOfStudentsForLanguage('Французька'));
// console.log("Кількість студентів, які знають Іф мову на рівні B2: ", dbForm.GetNumberOfStudentsForLanguageAtLevel('Іф', "B2"));

// Отримуємо щомісячну плату за мобільний зв'язок для студента
// console.log("Щомісячна плата за мобільний зв'язок для Івана: ", dbForm.GetMonthlyFeeForPerson('Іван'));

// Отримання N абонентів з найбільшими витратами на мобільний зв'язок
// console.log("Найбільші витрати на мобільний зв'язок:", dbForm.GetTopNStudentsWithHighestMonthlyFee(2));

// Отримання N абонентів з найменшими витратами на мобільний зв'язок
// console.log("Найменші витрати на мобільний зв'язок:", dbForm.GetTopNStudentsWithLowestMonthlyFee(2));
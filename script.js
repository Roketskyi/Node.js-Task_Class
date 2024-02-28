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
    
        return this.students.filter(student => student.languages.some(lang => lang.language === language && lang.levelOfLanguage.level === level.level)).length;
    }
    

    GetMonthlyFeeForPerson(name) {
        const student = this.students.find(student => student.name === name);
    
        if (student && student.phoneNumberss) {
            const totalMonthlyFee = student.phoneNumberss.reduce((acc, phoneNumberss) => {
                return acc + phoneNumberss.getPhoneMonthlyFee();
            }, 0);
            return totalMonthlyFee;
        }
    
        return null;
    }
    
    GetTopNStudentsWithHighestMonthlyFee(n) {
        const sortedStudents = this.students.slice().sort((a, b) => {
            const feeA = this.GetMonthlyFeeForPerson(a.name);
            const feeB = this.GetMonthlyFeeForPerson(b.name);
            return feeB - feeA;
        });

        return sortedStudents.slice(0, n);
    }

    GetTopNStudentsWithLowestMonthlyFee(n) {
        const sortedStudents = this.students.slice().sort((a, b) => {
            const feeA = this.GetMonthlyFeeForPerson(a.name);
            const feeB = this.GetMonthlyFeeForPerson(b.name);
            return feeA - feeB;
        });

        return sortedStudents.slice(0, n);
    }
    
}

class Students {
    static lastId = 0;

    constructor(name, surname, lastName, article, expensesPerMonth, date, phoneNumberss, emails, languages, hobby) {
        this.id = ++Students.lastId;
        this.name = name;
        this.surname = surname;
        this.lastName = lastName;
        this.article = article;
        this.expensesPerMonth = expensesPerMonth;
        this.date = date;
        this.phoneNumberss = Array.isArray(phoneNumberss) ? phoneNumberss : [phoneNumberss];
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
        return this.languages.map(lang => ({ language: lang.language, levelOfLanguage: lang.levelOfLanguage.LanguageLevel.level }));
    }

    getExpenses() {
        return this.expenses;
    }

    addExpense(article, amount) {
        const expense = new ItemsOfFinancialExpenses(article, amount);
        this.expenses.push(expense);
    }

    removeExpense(expenseToRemove) {
        this.expenses = this.expenses.filter(expense => expense !== expenseToRemove);
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
    constructor(article, amount) {
        this.article = article;
        this.amount = amount;
    }

    getNameOfArticle() {
        return this.article;
    }

    updateNameOfArticle(newName) {
        this.article = newName;
    }

    removeNameOfArticle() {
        this.article = null;
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

class phoneNumbers {
    constructor(phoneNumberss, phoneMonthlyFee, mobileOperator) {
        this.phoneNumberss = phoneNumberss;
        this.phoneMonthlyFee = phoneMonthlyFee;
        this.mobileOperator = mobileOperator;
    }

    getphoneNumbers() {
        return this.phoneNumberss;
    }

    updatephoneNumbers(newphoneNumbers) {
        this.phoneNumbers = newphoneNumbers;
    }

    removephoneNumbers() {
        this.phoneNumbers = null;
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
    A0: 'A0',
    A1: 'A1',
    A2: 'A2',
    B1: 'B1',
    B2: 'B2',
    C1: 'C1',
    C2: 'C2'
};

const student1 = new Students(
    'Іван',
    'Тарасович',
    'Лисиця',
    new ItemsOfFinancialExpenses('Стаття 1', 321),
    new ExpensesTablePerMonth("Квітень", 333),
    new Date('2024-02-20'),
    [
        new phoneNumbers('380847123921', 200, "Лайф"),
        new phoneNumbers('3808471233232921', 80, "Білайн"),
    ],
    [
        new Email("Rodasd@dasd.dsd"),
    ],
    [
        new Language("Англійська", levels.A1, "Призупинено"),
        new Language("Французька", levels.B2, "В процесі"),
    ],
    [
        new Hobby('Футбол', 5, 'Високий'),
    ],
);

const student2 = new Students(
    'Петро',
    'Іванович',
    'Щур',
    new ItemsOfFinancialExpenses('Стаття 2', 22),
    new ExpensesTablePerMonth("Квітень", 333),
    new Date('2024-02-20'),
    new phoneNumbers('380662339163', 250, "Київстар"),
    [
        new Email("Rodasd@dasd.dsd"),
    ],
    [
        new Language("Англійська", levels.A1, "В процесі"),
        new Language("Французька", levels.B2, "Призупинено"),
    ],
    [
        new Hobby('Футбол', 5, 'Високий'),
    ],
);

const student3 = new Students(
    'Василь',
    'Вікторович',
    'Комп', 
    new ItemsOfFinancialExpenses('Стаття 3', 255),
    new ExpensesTablePerMonth("Квітень", 333),
    new Date('2024-02-20'),
    [
        new phoneNumbers('380847123921', 50, "Водафон"),
        new phoneNumbers('3808471233232921', 250, "Київстар"),
    ],
    [
        new Email("Rodasd@dasd.dsd"),
    ],
    [
        new Language("Англійська", levels.A0, "В процесі"),
        new Language("Пакистанська", levels.B2, "Призупинено")
    ],
    [
        new Hobby('Футбол', 4, 'Високий'),
    ],
);


// Створення екземпляра класу DBForm
const dbForm = new DBForm();

// Додавання студентів
dbForm.addStudent(student1);
dbForm.addStudent(student2);
dbForm.addStudent(student3);

// student2.languages[1].updateLanguageAndLevel("Іф", levels.B2);

// console.log("Отримання студента: ", (dbForm.getStudent('Василь')));

// Отримуємо всіх студентів
// console.log((dbForm.getAllStudents()));

// Отримуємо список мов
// console.log("Отримання списку мов: ", dbForm.GetListOfLanguages());

// Отримуємо кількість студентів за мовою
// console.log("Отримання кількості студентів за мовою:");
// console.log("Кількість студентів, які знають Французьку мову: ", dbForm.GetNumberOfStudentsForLanguage('Французька'));
// console.log("Кількість студентів, які знають Іф мову на рівні B2: ", dbForm.GetNumberOfStudentsForLanguageAtLevel('Іф', "B2"));

// Отримуємо щомісячну плату за мобільний зв'язок для студента
// console.log("Щомісячна плата за мобільний зв'язок для Василя: ", dbForm.GetMonthlyFeeForPerson('Василь'));

// Отримання N абонентів з найбільшими витратами на мобільний зв'язок
// console.log("Найбільші витрати на мобільний зв'язок:", dbForm.GetTopNStudentsWithHighestMonthlyFee(3));

// Отримання N абонентів з найменшими витратами на мобільний зв'язок
// console.log("Найменші витрати на мобільний зв'язок:", dbForm.GetTopNStudentsWithLowestMonthlyFee(3));
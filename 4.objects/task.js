// Функция-конструктор Student
function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = []; // Массив для хранения оценок
}

// Метод для установки предмета
Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
};

// Метод для добавления оценок
Student.prototype.addMarks = function(...marksToAdd) {
    // Проверяем существование свойства marks
    if (this.marks) {
        this.marks.push(...marksToAdd);
    }
};

// Метод для получения среднего балла
Student.prototype.getAverage = function() {
    // Проверяем наличие оценок
    if (!this.marks || this.marks.length === 0) {
        return 0;
    }

    // Вычисляем среднее арифметическое
    const sum = this.marks.reduce((total, mark) => total + mark, 0);
    return sum / this.marks.length;
};

// Метод для исключения студента
Student.prototype.exclude = function(reason) {
    // Удаляем свойства subject и marks
    delete this.subject;
    delete this.marks;

    // Добавляем свойство excluded с причиной
    this.excluded = reason;
};

// Пример использования:
let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);

let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба');
console.log(student2);

// Дополнительная проверка: исключенный студент не может получать оценки
student2.addMarks(3, 4); // Не добавится, так как marks удален
console.log("Попытка добавить оценки исключенному:", student2);
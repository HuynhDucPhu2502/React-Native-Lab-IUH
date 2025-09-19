// ====================================================================
// Question 1:
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person: Person = new Person("Huynh Duc Phu", 22);

console.log("Question 1:");
console.log(person);

// ====================================================================
// Question 2:

class Student extends Person {
  id: string;

  constructor(name: string, age: number, id: string) {
    super(name, age);
    this.id = id;
  }

  print() {
    console.log(this);
  }
}

const student: Student = new Student("Huynh Duc Phu", 22, "22653551");

console.log("Question 2:");
student.print();

// ====================================================================
// Question 3:

class Car {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  print() {
    console.log(this);
  }
}

const myCar = new Car("Toyota", "Camry", 2022);

console.log("Question 3:");
myCar.print();

// ====================================================================
// Question 4:

class Rectangel {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return (this.width + this.height) * 2;
  }
}

const rectange: Rectangel = new Rectangel(4, 5);

console.log("Question 4:");
console.log(rectange);
console.log(`Area: ${rectange.area()}`);
console.log(`Perimeter: ${rectange.perimeter()}`);

// ====================================================================
// Question 5:

class BankAccount {
  balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  widthdraw(amount: number) {
    if (this.balance < amount) console.log("Khong du tien de rut");
    this.balance -= amount;

    console.log(`Thuc hien rut tien, so du con lai: ${this.balance}`);
  }

  deposit(amount: number) {
    this.balance += amount;

    console.log(`Thuc hien gui tien, so du moi: ${this.balance}`);
  }

  seeBalance() {
    console.log(`So tien hien tai ${this.balance}`);
  }
}

const bankAccount: BankAccount = new BankAccount(500);

console.log("Question 5:");
bankAccount.seeBalance();
bankAccount.widthdraw(300);
bankAccount.deposit(400);

// ====================================================================
// Question 6:

class Book {
  title: string;
  author: string;
  year: number;

  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

const book = new Book("Harry Potter", "J.K. Rowling", 1997);

console.log("Question 6:");
console.log(book);

// ====================================================================
// Question 7:

class User {
  private _name: string;
  private _address: string;

  constructor(name: string, address: string) {
    this._name = name;
    this._address = address;
  }

  get name() {
    return this._name;
  }

  get address() {
    return this._address;
  }
}

const user = new User("Huynh Duc Phu", "Ha Noi");

console.log("Question 7:");
console.log(user);

// ====================================================================
// Question 8:

class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

const products: Product[] = [
  new Product("Phone Case", 95),
  new Product("USB Cable", 80),
  new Product("Bluetooth Speaker", 299),
  new Product("Laptop Stand", 250),
  new Product("Mouse Pad", 90),
  new Product("Monitor", 320),
];

console.log("Question 8:");
const filteredProducts = products.filter((x: Product) => x.price > 100);
console.log(filteredProducts);

// ====================================================================
// Question 9:

interface Animal {
  name: string;
  sound(): string;
}

const animal: Animal = {
  name: "Dog",
  sound(): string {
    return "woof woof!!!";
  },
};

console.log("Question 9:");
console.log(animal);
console.log(animal.sound());

// ====================================================================
// Question 10:

class Account {
  public name: string;
  private address: string;
  readonly id: string;

  constructor(name: string, address: string, id: string) {
    this.name = name;
    this.address = address;
    this.id = id;
  }
}

const account = new Account("Huynh Duc Phu", "Ha Noi", "22653551");

console.log("Question 10:");
console.log(account);

// ====================================================================
// Question 11:

class Animal2 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal2 {
  constructor(name: string) {
    super(name);
  }

  bark(): string {
    return "bark bark!!!";
  }
}

class Cat extends Animal2 {
  constructor(name: string) {
    super(name);
  }

  meow(): string {
    return "meow meow!!!";
  }
}

console.log("Question 11:");
const dog = new Dog("Dog");
console.log(dog.bark());
const cat = new Cat("Cat");
console.log(cat.meow());

// ====================================================================
// Question 12:

interface Flyable {
  fly(): string;
}

interface Swimmable {
  fly(): string;
}

class Bird implements Flyable {
  fly() {
    return `Dong vat nay biet bay`;
  }
}

class Fish implements Swimmable {
  fly() {
    return `Dong vat nay biet boi`;
  }
}

console.log("Question 12:");
const bird = new Bird();
console.log(bird.fly());
const fish = new Fish();
console.log(fish.fly());

// ====================================================================
// Question 13:

interface Shape {
  area(): number;
}

class Square implements Shape {
  side: number;

  constructor(side: number) {
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }
}

class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

console.log("Question 13:");
const square = new Square(5);
console.log(square.area());
const circle = new Circle(3);
console.log(circle.area());

// ====================================================================
// Question 14:

class Employee {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Manager extends Employee {
  constructor(name: string) {
    super(name);
  }

  manage(): string {
    return `manage`;
  }
}

class Developer extends Employee {
  constructor(name: string) {
    super(name);
  }

  develop(): string {
    return `develop`;
  }
}

console.log("Question 14:");
const manager = new Manager("Huynh Duc Phu");
console.log(manager.manage());
const developer = new Developer("Huynh Duc Phu");
console.log(developer.develop());

// ====================================================================
// Question 15:

class Library {
  user: User;
  books: Book[];

  constructor(user: User) {
    this.user = user;
    this.books = [];
  }

  addBook(book: Book): void {
    this.books.push(book);
  }
}

console.log("Question 15:");
const user2 = new User("Huynh Duc Phu", "Ha Noi");
const book2 = new Book("Harry Potter", "J.K Rowling", 1997);
const book3 = new Book("Test", "Vu Ba Hai", 2003);

const library = new Library(user2);

library.addBook(book2);
library.addBook(book3);
console.log(library);

// ====================================================================
// Question 16:
class Box<T> {
  id: number;
  data: T;

  constructor(id: number, data: T) {
    this.id = id;
    this.data = data;
  }
}

console.log("Question 16:");
const box = new Box<string>(1, "Hello");
console.log(box);

// ====================================================================
// Question 17:

class Logger {
  private static instance: Logger;

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) Logger.instance = new Logger();
    return Logger.instance;
  }

  log(message: string): void {
    console.log(`Logs: ${message}`);
  }
}

console.log("Question 17:");
const logger = Logger.getInstance();
logger.log("Hello");

// ====================================================================
// Question 18:

class MathUtil {
  static add(a: number, b: number) {
    return a + b;
  }

  static subtract(a: number, b: number) {
    return a - b;
  }

  static multiply(a: number, b: number) {
    return a * b;
  }

  static divide(a: number, b: number) {
    if (b == 0) return;
    return a / b;
  }
}

console.log("Question 18:");
console.log(MathUtil.add(1, 2));
console.log(MathUtil.subtract(1, 2));
console.log(MathUtil.multiply(1, 2));
console.log(MathUtil.divide(1, 2));

// ====================================================================
// Question 19:

class Animal3 {
  greeting(): string {
    return `Hi`;
  }
}

class Cat2 extends Animal3 {
  greeting(): string {
    return `Hi, I am a Cat`;
  }
}

class Dog2 extends Animal3 {
  greeting(): string {
    return `Hi, I am a Dog`;
  }
}

console.log("Question 19:");
const cat2 = new Cat2();
console.log(cat2.greeting());
const dog2 = new Dog2();
console.log(dog2.greeting());

// ====================================================================
// Question 20:

interface Vehicle {
  run(): string;
}

class Car2 implements Vehicle {
  run() {
    return `this car is running`;
  }
}

class Bike implements Vehicle {
  run() {
    return `this bike is running`;
  }
}

console.log("Question 20:");
const car2 = new Car2();
console.log(car2.run());
const bike = new Bike();
console.log(bike.run());

// ====================================================================
// Question 21:

class customRepository<T> {
  data: T[];

  constructor() {
    this.data = [];
  }
}

console.log("Question 21:");
const repository = new customRepository();
console.log(repository);

// ====================================================================
// Question 22:

class customStack<T> {
  stackData: T[];

  constructor(stackData: T[]) {
    this.stackData = stackData;
  }

  push(item: T): void {
    this.stackData.push(item);
  }

  pop(): T | undefined {
    return this.stackData.pop();
  }

  peek(): T | undefined {
    return this.stackData[this.stackData.length - 1];
  }

  isEmpty(): boolean {
    return this.stackData.length === 0;
  }
}

console.log("Question 22:");
const stack = new customStack<number>([1, 2, 3]);
stack.push(4);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());

// ====================================================================
// Question 23:

interface Payment {
  pay(amount: number): string;
}

class CashPayment implements Payment {
  pay(amount: number) {
    return `CashPayment ${amount}`;
  }
}

class CardPayMent implements Payment {
  pay(amount: number) {
    return `CardPayment ${amount}`;
  }
}

console.log("Question 23:");
const cashPayment = new CashPayment();
console.log(cashPayment.pay(1000));
const cardPayment = new CardPayMent();
console.log(cardPayment.pay(1000));

// ====================================================================
// Question 24:

abstract class Appliance {
  turnOn(): string {
    return `This appliance is turning on`;
  }
}

class Fan extends Appliance {
  turnOn(): string {
    return `Fan is turning on`;
  }
}

class AirConditioner extends Appliance {
  turnOn(): string {
    return `AirConditioner is turning on`;
  }
}

console.log("Question 24:");
const fan = new Fan();
console.log(fan.turnOn());
const airConditioner = new AirConditioner();
console.log(airConditioner.turnOn());

// ====================================================================
// Question 25:

class Shape2 {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  static describe(): string {
    return `Shape`;
  }
}

console.log("Question 25:");
console.log(Shape2.describe());

// ====================================================================
// Question 26:

class Order {
  products: Product[];

  constructor() {
    this.products = [];
  }

  calculateTotalPrice(): number {
    return this.products
      .map((product) => product.price)
      .reduce((total, price) => total + price, 0);
  }
}

console.log("Question 26:");
const order = new Order();
order.products.push(new Product("Product 1", 100));
order.products.push(new Product("Product 2", 200));
order.products.push(new Product("Product 3", 300));
console.log(order.calculateTotalPrice());

// ====================================================================
// Question 27:
class Teacher extends Person {
  subject: string;

  constructor(name: string, age: number, subject: string) {
    super(name, age);
    this.subject = subject;
  }

  introduce(): string {
    return `I am ${this.subject} teacher`;
  }
}

console.log("Question 27:");
const teacher = new Teacher("John", 30, "Math");
console.log(teacher.introduce());

// ====================================================================
// Question 28:
class Animal4 {
  protected makeSound(): string {
    return `a b c ...`;
  }

  sound(): string {
    return this.makeSound();
  }
}

class Dog3 extends Animal4 {
  protected makeSound(): string {
    return `bark bark...`;
  }
}

class Cat4 extends Animal4 {
  protected makeSound(): string {
    return `meow meow...`;
  }
}

console.log("Question 28:");
const dog3 = new Dog3();
console.log(dog3.sound());
const cat4 = new Cat4();
console.log(cat4.sound());

// ====================================================================
// Question 29:
interface Moveable {
  move(): string;
}

class Car3 implements Moveable {
  move(): string {
    return "This car is moving";
  }
}

class Robot implements Moveable {
  move(): string {
    return "This robot is moving";
  }
}

console.log("Question 29:");
const car3 = new Car3();
console.log(car3.move());
const robot = new Robot();
console.log(robot.move());

// ====================================================================
// Question 30:
class School {
  students: Student[];
  teachers: Teacher[];

  constructor(students: Student[], teachers: Teacher[]) {
    this.students = students;
    this.teachers = teachers;
  }

  display() {
    console.log("Teachers List: ");
    console.log(this.teachers);
    console.log("Students List: ");
    console.log(this.students);
  }
}

console.log("Question 30:");
const student1 = new Student("John", 20, "123");
const student2 = new Student("Jane", 21, "456");
const teacher1 = new Teacher("John", 30, "Math");
const teacher2 = new Teacher("Jane", 31, "English");
const school = new School([student1, student2], [teacher1, teacher2]);
school.display();

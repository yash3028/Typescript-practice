class Person {
  constructor(
    public name: string,
    private age: number,
  ) {}

  getAge(): number {
    return this.age;
  }
}

class Developer extends Person {
  constructor(
    name: string,
    age: number,
    public language: string,
  ) {
    super(name, age);
  }

  introduce(): string {
    return `${this.name} writes ${this.language}`;
  }
}

const developer = new Developer("Alice", 25, "TypeScript");

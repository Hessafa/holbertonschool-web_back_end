class MyClass {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, ${this.name}!`;
  }

  static info() {
    return 'This is a static method.';
  }
}

export default MyClass;

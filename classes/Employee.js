class Employee {
  #salary;
  #isHired;

  static allEmployees = [];

  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.#salary = salary;
    this.#isHired = true;
    Employee.allEmployees.push(this);
  }

  getSalary() {
    return this.#salary;
  }

  setSalary(amount){
    this.#salary = amount
  }

  getStatus() {
    return this.#isHired;
  }

  setStatus(command){
    if (command == "hire") {
      this.#isHired = true;
    } else if (command == "fire") {
      this.#isHired = false;
    }else{
        throw new Error('Input a valid status')
    }
  }

  static getEmployees() {
    return this.allEmployees
  }

  static getTotalPayroll() {
    const total = this.allEmployees.reduce((sum, employee) => {
      return sum + employee.getSalary();
    }, 0)
    return total
  }
}

module.exports = {
    Employee,
}

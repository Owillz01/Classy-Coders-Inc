const { Employee } = require("./Employee")

class SoftwareEngineer extends Employee {
    #programmingLanguages;

    constructor(name, position, salary, programmingLanguages = []) {
        if (!Array.isArray(programmingLanguages)) {
            throw new TypeError('Programming languages should be an array.');
        }
        
        super(name, position, salary);
        this.#programmingLanguages = programmingLanguages;
    }
    getProgrammingLanguages() {
        if (!Array.isArray(this.#programmingLanguages)) {
            throw new Error('Programming languages are not stored in an array.');
        }
        return this.#programmingLanguages
    }
    setProgrammingLanguages(language) {
        if (typeof language !== 'string') {
            throw new TypeError('Programming language parameter should be a string.');
        }
        this.#programmingLanguages.push(language)
    }
    
}

module.exports = {
    SoftwareEngineer,
}
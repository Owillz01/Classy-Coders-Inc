const { Employee } = require("./Employee")

class SalesPerson extends Employee {
    #totalSales;

    constructor(name, position, salary, clients, totalSales = 0) {
        if (!Array.isArray(clients)) {
            throw new TypeError('Clients should be an array.');
        }
        
        super(name, position, salary);
        this.clients = clients;
        this.#totalSales = totalSales;
    }
    getSalesNumber() {
        return this.#totalSales
    }
    makeSale(amount) {
        if (typeof amount !== "number") {
            throw new TypeError("Amount should be a number")
        }
        this.#totalSales += amount
    }
    
}

module.exports = {
    SalesPerson,
}
class Clientici {
    constructor() {
        this.clients = [];
    }
    addClient(age, name) {
        if (age >= 18) {
            this.clients.push([age, name]);
        }
    }
    sortClients() {
        this.clients.sort((a, b) => a[0] - b[0]);
    }
    incrementAge() {
        this.clients = this.clients.map(client => [client[0] + 1, client[1]]);
    }
    getClientsFromStart() {
        return this.clients;
    }
    getClientsFromEnd() {
        return [...this.clients].reverse();
    }
}

let manager = new Clientici();

manager.addClient(25, "Азамат");
manager.addClient(17, "Джурабек"); 
manager.addClient(52, "Шрек");
console.log(manager.getClientsFromStart());
manager.incrementAge();
console.log(manager.getClientsFromStart());
manager.sortClients();
console.log(manager.getClientsFromStart());
console.log(manager.getClientsFromEnd());

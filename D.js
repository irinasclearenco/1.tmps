// Dependency Inversion Principle
// Dependenta de nivel inferior
class Database {
  saveData(data) {
    console.log("Data saved to database: ", data);
  }
}

// Dependenta de nivel superior
class App {
  constructor(database) {
    this.database = database;
  }

  saveData(data) {
    this.database.saveData(data);
  }
}

// Utilizarea
const database = new Database();
const app = new App(database);

app.saveData("Hello, world"); // afiseaza hello,world

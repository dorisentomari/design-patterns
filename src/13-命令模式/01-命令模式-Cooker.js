class Cooker {
  cook() {
    console.log('做饭');
  }
}

class Cleaner{
  clean() {
    console.log('保洁');
  }
}


class CookerCommand {
  constructor(receiver) {
    this.receiver = receiver;
  }

  execute() {
    this.receiver.cook();
  }
}

class CleanerCommand {
  constructor(receiver) {
    this.receiver = receiver;
  }

  execute() {
    this.receiver.clean();
  }
}

class Customer {
  constructor(command) {
    this.setCommand(command);
  }

  setCommand(command) {
    this.command = command;
  }

  clean() {
    this.command.execute();
  }

  cook() {
    this.command.execute();
  }
}

let cooker = new Cooker();
let cleaner = new Cleaner();

let cookerCommand = new CookerCommand(cooker);
let cleanerCommand = new CleanerCommand(cleaner);

let customer = new Customer(cookerCommand);
customer.cook();
customer.setCommand(cleanerCommand);
customer.clean();



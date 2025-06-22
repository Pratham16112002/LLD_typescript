interface Pizza {
  cost(): number;
  description(): string;
}

export class BasicPizza implements Pizza {
  cost(): number {
    return 5;
  }
  description(): string {
    return "basePizza + cheese";
  }
}

abstract class PizzaDecorator implements Pizza {
  protected pizza: Pizza;

  constructor(pizza: Pizza) {
    this.pizza = pizza;
  }
  cost(): number {
    return this.pizza.cost();
  }
  description(): string {
    return this.pizza.description();
  }
}

export class OnionPizzaDecorator extends PizzaDecorator {
  cost(): number {
    return this.pizza.cost() + 5;
  }
  description(): string {
    return this.pizza.description() + " + onion";
  }
}

export class CornPizzaDecorator extends PizzaDecorator {
  cost(): number {
    return this.pizza.cost() + 10;
  }
  description(): string {
    return this.pizza.description() + " + corn";
  }
}

export class PaneerPizzaDecorator extends PizzaDecorator {
  cost(): number {
    return this.pizza.cost() + 20;
  }
  description(): string {
    return this.pizza.description() + " + paneer";
  }
}

export default function TestDecoratorPattern() {
  let pizza = new BasicPizza();
  pizza = new CornPizzaDecorator(pizza);
  pizza = new OnionPizzaDecorator(pizza);
  pizza = new PaneerPizzaDecorator(pizza);

  console.log("Final pizza");
  console.log(
    `Pizza cost : ${pizza.cost()}\n Pizza description : ${pizza.description()}`
  );
}

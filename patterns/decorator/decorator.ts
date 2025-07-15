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

export class PepperoniPizzaDecorator extends PizzaDecorator {
  cost() : number {
    return this.pizza.cost() + 100
  } 
  description() : string {
    return this.pizza.description() + " + pepperonni" 
  }
}

export default function TestDecoratorPattern() {
  let bpizza = new  BasicPizza();

  const  onionPizza  = new OnionPizzaDecorator(bpizza)

  const onionCheesePizza  = new CornPizzaDecorator(onionPizza)

  const paneerOnionCheese = new PaneerPizzaDecorator(onionCheesePizza)

  const pepperonniPaneerOnionCheesePizza = new PepperoniPizzaDecorator(paneerOnionCheese)

  console.log("Final pizza");
  console.log(
    `Pizza cost : ${pepperonniPaneerOnionCheesePizza.cost()}\n Pizza description : ${pepperonniPaneerOnionCheesePizza.description()}`
  );
}

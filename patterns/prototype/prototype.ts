interface Prototype {
  clone(): Prototype;
}

export class ConcretePrototype implements Prototype {
  constructor(
    public name: string,
    public age: number,
    public address: { city: string }
  ) {}

  clone(): Prototype {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }
}

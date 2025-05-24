export class House {
  private hasSwimmingPool: boolean = false;
  private hasGarage: boolean = false;
  private hasGarden: boolean = false;

  public setSwimmingPool(hasPool: boolean): void {
    this.hasSwimmingPool = hasPool;
  }
  public setHasGarage(hasGarage: boolean): void {
    this.hasGarage = hasGarage;
  }
  public setHasGarden(hasGarden: boolean): void {
    this.hasGarden = hasGarden;
  }

  public showFeatures(): void {
    console.log(`House Features: 
        Swimming bool : ${this.hasSwimmingPool} 
        Garage : ${this.hasGarage}
        Garden : ${this.hasGarden}`);
  }
}

// Builder interface
interface HouseBuilder {
  buildSwimmingPool(): HouseBuilder;
  buildGarage(): HouseBuilder;
  buildGarden(): HouseBuilder;
  getResults(): House;
}

export class ConcreteHouseBuilder implements HouseBuilder {
  private house: House;
  constructor() {
    this.house = new House();
  }
  public buildSwimmingPool(): HouseBuilder {
    this.house.setSwimmingPool(true);
    return this;
  }
  public buildGarage(): HouseBuilder {
    this.house.setHasGarage(true);
    return this;
  }
  public buildGarden(): HouseBuilder {
    this.house.setHasGarden(true);
    return this;
  }
  public getResults(): House {
    return this.house;
  }
}

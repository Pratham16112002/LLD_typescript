import { ConcreteHouseBuilder } from "./patterns/builder/Builder";

function main(): void {
  const houseBuilder = new ConcreteHouseBuilder();
  const house = houseBuilder
    .buildSwimmingPool()
    .buildGarage()
    .buildGarden()
    .getResults();
  house.showFeatures();
}

main();

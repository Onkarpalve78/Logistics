import smallTruck from "../../assets/vehicles/smallTruck1.png";
import miniVan from "../../assets/vehicles/miniVan.png";
import largeTruck from "../../assets/vehicles/largeTruck.png";
import boxTruck from "../../assets/vehicles/boxTruck.png";
import containerTruck from "../../assets/vehicles/containerTruck.png";

export const carList = [
  {
    imgUrl: miniVan,
    service: "Small Van",
    multiplier: 1,
  },
  {
    imgUrl: smallTruck,
    service: "Medium Truck",
    multiplier: 1.5,
  },
  {
    imgUrl: largeTruck,
    service: "Large Truck",
    multiplier: 2,
  },
  {
    imgUrl: boxTruck,
    service: "Box Truck",
    multiplier: 2.2,
  },
  {
    imgUrl: containerTruck,
    service: "Container Truck",
    multiplier: 3,
  },
];

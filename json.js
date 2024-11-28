const laptop ={price: 23444, brand: 'lenovo', memory: 4};
const stringified = JSON.stringify(laptop);

console.log(laptop);
console.log(stringified);

//output:
// { price: 23444, brand: 'lenovo', memory: 4 }
// {"price":23444,"brand":"lenovo","memory":4}
const bikeShop = {
    shopInfo: {
      name: "Urban Riders",
      location: {
        address: "123 Cycle Lane, Downtown City",
        city: "Metropolis",
        postalCode: "56789",
        country: "USA",
      },
      contact: {
        phone: "+1-234-567-8901",
        email: "info@urbanriders.com",
        website: "https://www.urbanriders.com",
      },
      openingHours: {
        weekdays: "9:00 AM - 8:00 PM",
        saturday: "10:00 AM - 6:00 PM",
        sunday: "Closed",
      },
    },
    availableBikes: [
      {
        id: "bike001",
        brand: "Trek",
        model: "Domane AL 2",
        type: "Road Bike",
        price: 899.99,
        specifications: {
          frame: "Aluminum",
          gears: 16,
          color: "Black/Red",
        },
      },
      {
        id: "bike002",
        brand: "Giant",
        model: "Talon 3",
        type: "Mountain Bike",
        price: 799.99,
        specifications: {
          frame: "Aluminum",
          gears: 21,
          color: "Blue/Gray",
        },
      },
      {
        id: "bike003",
        brand: "Cannondale",
        model: "Quick CX 3",
        type: "Hybrid Bike",
        price: 999.99,
        specifications: {
          frame: "Aluminum",
          gears: 18,
          color: "Green/Black",
        },
      },
    ],
    services: {
      repair: {
        description: "Comprehensive bike repair and maintenance services",
        pricing: {
          tuneUp: 49.99,
          brakeAdjustment: 19.99,
          gearAdjustment: 29.99,
          flatTireRepair: 15.99,
        },
      },
      customization: {
        description: "Custom paint jobs and accessory installations",
        pricing: {
          customPaint: 199.99,
          accessoryInstallation: 29.99,
        },
      },
      rentals: {
        description: "Daily and weekly bike rentals",
        pricing: {
          daily: 25.99,
          weekly: 129.99,
        },
      },
    },
    testimonials: [
      {
        customer: "Jane Doe",
        review: "Amazing service! My bike feels brand new after their tune-up.",
        rating: 5,
      },
      {
        customer: "John Smith",
        review: "Great selection of bikes and very helpful staff!",
        rating: 4.5,
      },
    ],
  };
  
  console.log(bikeShop);

  const stringedBike = JSON.stringify(bikeShop);
  console.log(stringedBike);

  const bikeObj = JSON.parse(stringedBike);
  console.log(bikeObj);
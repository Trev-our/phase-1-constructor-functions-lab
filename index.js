function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
  }
  function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }
  function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
  }
  // Create a new Scooter instance
const myScooter = new Scooter(2023, "Red", "X200");
console.log(myScooter); 
// Output: { year: 2023, color: 'Red', model: 'X200' }

// Create a new Driver instance
const driver1 = new Driver("Alice", 30, "5 years");
console.log(driver1);
// Output: { name: 'Alice', age: 30, experience: '5 years' }

// Create a new PickupLocation instance
const location1 = new PickupLocation("123 Main St", "New York");
console.log(location1);
// Output: { address: '123 Main St', city: 'New York' }

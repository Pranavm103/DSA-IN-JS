const school = {
  motherDetails: {
    name: "Priya Singh",
    age: 32,
    address: "Baner, Pune"
  },
  studentDetails: {
    name: "Pratik Patil",
    age: 15,
    class: "10th",
    gender: "Male",
    address: "Viman Nagar, Pune"
  }
};

console.log(school);


const vehicle = {
  numberOfSeats: 5,
  topSpeed: "180 km/h",
  mileage: "20 km/l",
  numberOfAirbags: 2
};

console.log(vehicle);

vehicle.address = {
    adddressLine1 : "Aria tower",
    adddressLine2 : "Aria tower",
    city: "Pune",
    state: "Maharashtra",
};
console.log(vehicle);
console.log("city of address:", vehicle.address.city);

/* print name of vehicle and name of city from vehicles array */
let vehicles = [
  {
    name: "Car",
    address: { city: "Pune" }
  },
  {
    name: "Bike",
    address: { city: "Mumbai" }
  },
  {
    name: "Truck",
    address: { city: "Delhi" }
  }
];

for (let i = 0; i < vehicles.length; i++) {
  console.log(
    "Vehicle name:", vehicles[i]?.name,
    ", City:", vehicles[i]?.address?.city
  );
}

let vehicle1 = {
  name: "Car",
  type: "SUV",
  address: {
    city: "Pune",
    pincode: 411001
  }
};
console.log("Printing the vehicle1 object using for...in loop:");

for (let key in vehicle1) {
  console.log(key + " : " + vehicle1[key]);
}
// Get array of keys from vehicle1
const vehicleObjKeys = Object.keys(vehicle1);

// Get array of keys from nested address object
const addressObjKeys = Object.keys(vehicle1.address);

console.log("Vehicle Keys:", vehicleObjKeys);
console.log("Address Keys:", addressObjKeys);

 //.values(objName) gives the array of Values
const vehicleObjValues = Object.values(vehicle1);
const addressObjValues = Object.values(vehicle1.address);
console.log({vehicleObjValues, addressObjValues});

/* for .. of loop in objects  */
for(let values of vehicles){
    console.log(values);
}

/* Change the city to mumbai if city is pune */
for(let values of vehicles){
    if(values?.address?.city=="Pune"){
        values.address.city ="Mumbai";
    }
    console.log(vehicles)   
}

let vehicle3 = {
  name: "XUV700",
  noOfSeats: 7,
  topSpeed: 180,
  currentSpeed: 100,
  mileage: 40,
  colors: ["white", "black", "grey"],

  address: {
    addressLine1: "Aria tower",
    addressLine2: "Baner",
    city: "Pune",
    state: "Maharashtra"
  },

  // Method inside object
  isRunning: function () {
    if (this.currentSpeed > 0) {
      console.log("XUV is running at speed " + this.currentSpeed);
    } else {
      console.log("XUV is not running");
    }
  }
};
vehicle3.isRunning();


//Resume management system

let resume = {
  name: "Vaibhav",
  email: "vaibhav@gmail.com",
  phone: "9876554322",
  
  skills: ["JavaScript", "HTML", "CSS"],
  workExperience: ["Tally", "Chitkara University"],

  // Method to display all details
  display: function () {
    console.log("Name:", this.name);
    console.log("Email:", this.email);
    console.log("Phone:", this.phone);
    console.log("Skills:", this.skills.join(", "));
    console.log("Work Experience:", this.workExperience.join(", "));
  },

  // Method to add a new skill
  addSkills: function (newSkill) {
    this.skills.push(newSkill);
  },

  // Method to add a new work experience
  addWorkExperience: function (newExperience) {
    this.workExperience.push(newExperience);
  },

  // Method to show skills
  showSkills: function () {
    console.log("Skills:", this.skills.join(", "));
  }
};

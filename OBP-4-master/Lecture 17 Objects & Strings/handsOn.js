const team = {
  name: "Indian Cricket Team",
  players: [{ id: 1, scores: [10, 34, 80] }],
display: function () {
  for (let player of this.players)
    console.log(player.id + " --- " + player.scores.join(" "));
},
//addplayers
addPlayers: function (id) {
  const newPlayer = {};
  newPlayer.id = id;
  newPlayer.scores = [];
  this.players.push(newPlayer);
},
//addScore
addScore: function (id, score) {
  for (let player of this.players) {
    if (player.id === id) {
      player.scores.push(score);
      return;
    }
  }
},
//averageScore
averageScore: function (id) {
  for (let player of this.players) {
    if (player.id === id) {
      let sum = 0;
      for (let score of player.scores) sum += score;
      return sum / player.scores.length;
    }
  }
},
//teamAverage
teamAverage: function () {
  let sum = 0;
  let numberOfScores = 0;
  for (let player of this.players) {
    for (let score of player.scores) sum += score;
    numberOfScores += player.scores.length;
  }
  return sum / numberOfScores;
},

}
//example
team.addPlayers(2);
team.addPlayers(3);

team.addScore(1, 29);
team.addScore(3, 80);
team.addScore(2, 40);
team.addScore(2, 100);
team.addScore(2, 120);
team.addScore(3, 20);

team.display();
console.log("average score of player 1 - " + team.averageScore(1));
console.log("average score of player 2 - " + team.averageScore(2));
console.log("average score of team - " + team.teamAverage());


//objects 
let obj1 = {
  age: 12,
  6: 90,
};
//create objects
let obj2 = new Object();
obj2.name = "Harman";
obj2.class = 10;

//Spread operator copies properties from one object to another.
obj2 = { ...obj1 };
//spread in arrays
let arr = [12, 10, 3, 19];
let arr2 = [arr];   // array inside array
let arr3 = [...arr]; // actual copy of values

//spread in objects
let student1 = { age: 10, name: "Prashant" };
let student2 = { student1 };  // nested object
let student3 = { ...student1 }; // flat copy
console.log(student3);

//merging objects
let studentPersonalDetails = {
  age: 12,
  name: "Rani",
};
let studentAcademicDetails = {
  marks: 130,
  grade: "A",
};


let studentDetails = { ...studentPersonalDetails, ...studentAcademicDetails };
console.log({ ...studentDetails });

//Spread Operator Limitation
obj1 = { a: { b: { c: 3 } } };
obj2 = { ...obj1 };
obj2.a.b.c = 12;

console.log({ obj2 });
console.log({ obj1 });

//deep copy
let deepCopyOfObj1 = JSON.parse(JSON.stringify(obj1));

let student = {
  name: "Pratik Patil",
  age: 15,
  standard: "10th",
  gender: "male",
  address: "Viman Nagar, Pune",
  section: "C",
};
//JSON.stringify & JSON.parse
let objectInStringFormat = JSON.stringify(student);
console.log(objectInStringFormat);

let stringToObj = JSON.parse(objectInStringFormat);
console.log(stringToObj);






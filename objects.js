/*const Shaapera = {
    firstName: 'Shalom',
    lastName: 'Shaapera',
    age: 2037 - 1998,
    friends :['Emeka', 'Kuramter']
};
//how to retrieve data from object
console.log(Shaapera);
console.log(Shaapera.friends);
const nameKey = 'Name';
console.log(Shaapera['first' + nameKey]);
console.log(Shaapera['last' + nameKey]);
//console.log(Shaapera. 'last' + nameKey);

const interestedIn = prompt('what do want to know about Shaapera');
if (Shaapera[interestedIn]) {
    console.log(Shaapera[interestedIn]);
} else {
    console.log('wrong request choose something else');
}

//using the dot and bracket to add data to the object
Shaapera.location = 'Germany';
Shaapera['instagram'] = '@ms.shaapera';
console.log(Shaapera);

//challenge. write Shaapera has two friends
// ands her best friend is Kuramter

console.log(`${Shaapera.firstName} has ${Shaapera.friends.length} friends, and her best friend is called ${Shaapera.friends[1]}`);

//object methods*/

//object methods
/*const Shaapera = {
    firstName: 'Shalom',
    lastName: 'Shaapera',
    birthyear: 1998,
    friends: ['Emeka', 'Kuramter'],
    hasDriversLicense: true,
   // calcAge: function (birthyear) {
     //   return 2037 - birthyear;

    //}
    calcAge: function () {
        this.age = 2037 - this.birthday;
        console.log(this);
        return this.age;
    }
};

console.log(Shaapera.calcAge());
//console.log(Shaapera.calcAge(1897));
//console.log(Shaapera['calcAge'](1897));*/

//coding challenge
/*Let's go back to Mark and John comparing their BMIs!
This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).
Your tasks:
For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.
Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.
Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".
TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
*/

const Mark = {
    fullName: 'mark miller',
    mass: 78,
    height: 1.69,
    calcBmi: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;

    }
};
const John = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBmi: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }

};

Mark.calcBmi();
console.log(Mark.bmi);
John.calcBmi();
console.log(John.bmi);

if(Mark.bmi)
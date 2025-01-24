const Shaapera = {
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

//object methods

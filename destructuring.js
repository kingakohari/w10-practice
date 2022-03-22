const userProfile = {
    name: "Kinga",
    age: 200,
    country: "Germany"
}

/* const name = userProfile.name;
const age = userProfile.age */

/* const {name, age} = userProfile
console.log("name: ", name);
console.log("age: ", age); */

/* const logNameAndAge = (incomingUser) => {
    console.log(incomingUser.name);
    console.log(incomingUser.age);
} */

// VAGY

const logNameAndAge = ({name, age}) => {
    console.log("name: ", name);
    console.log("age: ", age);
}

logNameAndAge(userProfile)

const arr1 = [1,9,8,4]
const first = arr1[0]
const second = arr1[1]

console.log("first: ", first);
console.log("second: ", second);

const [c, d] = arr1

/* console.log("a: ", a);
console.log("b: ", b);
console.log(c);
console.log(d); */ //bármilyen betű lehet, csak a sorrend a meghatározó a másolásban

const [x, ...y] = arr1

console.log("x: ", x);
console.log("y: ", y);
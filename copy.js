const arr1 = [3,36,41]

const arr2 = [84,10,24]

const arr3 = [...arr1]

arr3.push(6)

console.log("arr3: ", arr1);
console.log("arr3: ", arr3);

const arr4 = [...arr1, ...arr2]

console.log("arr4: ", arr4);

const userProfile = {
    name: "Kinga",
    age: 37,
    country: "Germany"
}

const userProfile2 = {...userProfile, gender: "female", name: "Kunigunde"}
console.log("userProfile: ", userProfile);
console.log("userProfile2: ", userProfile2);
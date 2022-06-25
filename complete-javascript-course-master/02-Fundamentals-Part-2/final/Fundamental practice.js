// Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall
//BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

let markWeight = 78;
let markHeight = 1.69;
let jhonWeight = 92;
let johnHeight = 1.95;
let markBmi = (markWeight / markHeight) ** 2;
let jhonbmi = (jhonWeight / johnHeight) ** 2;
console.log(markBmi > jhonbmi);
console.log(markHeight);

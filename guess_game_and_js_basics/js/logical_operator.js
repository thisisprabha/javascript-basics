const hasDriverLicense = false;
const hasGoodVision = false;
console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);
const isTired = false;
if (hasDriverLicense || hasGoodVision || !isTired) {
    console.log("Eligible for drive...!")
}
else {
    console.log("Are you fking kidding me. Find someone else");
}

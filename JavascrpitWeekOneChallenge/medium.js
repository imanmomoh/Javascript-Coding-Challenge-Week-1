const fingers = prompt("Please Type Here")

if (fingers === fingers.toUpperCase()) {
    console.log('shouting');

}else if (fingers === fingers.toLowerCase()) {
    console.log("whispering")
    
}else {
    console.log("neither")
}
    
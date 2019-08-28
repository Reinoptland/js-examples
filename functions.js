// console.log('hihihihi')

// Functions y tho?

// Syntax:

// Declare a function
// keyword name parameter list block statement
// function teach() {
//     console.log('Check yourself :)')
// }

// calling a function (or invoking)
// teach()

// Adding a parameter "lesson" and "harshMode" to reuse teach
// function teach(lesson, harshMode) {
//     if(harshMode === true){
//         console.log(lesson.toUpperCase())
//     } else {
//         console.log(lesson)
//     }
// }

// Define what lesson is, by putting in "arguments"
// When we call the function
// teach('Check yourself :)', true)
// teach('Being confused is normal :S', false)
// teach(false, 'Being confused is normal')

// Function declaration
function giveMeSomething(phrase){
    if(phrase === undefined){
        return 'Rein says: gibberish'
    }

    console.log('working?')
    // we return a value from the function
    return 'Rein says: ' + phrase
}

// we declare a variable and assign it the value that is return from 
// calling giveMeSomething()
const something = giveMeSomething('I am talking for a long time')

console.log('SOMETHING:', something)


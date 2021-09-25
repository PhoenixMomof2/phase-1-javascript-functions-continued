function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`}

// function wrapAdjective(){
//     let emphatic = result("a hard worker")
//     let result = wrapAdjective(){
//     }

    // function genericCompliment (basicCompliment="special"){
    //     return `You are ${basicCompliment}`}
    function wrapAdjective(character="*") {
        return function (string="special") {
          return `You are ${character}${string}${character}!`
        }
    }
      
        // wrapAdjective(outer)(inner)(inner of inner)


// wrapAdjective("*")("a dedicated programmer");
// wrapAdjective("|")("a hard worker");

// wrapAdjective("$")("a hard worker") //"You are $a hard worker$!"
// wrapAdjective()("a hard worker") //"You are *a hard worker*!"
// wrapAdjective()() //"You are *special*!"
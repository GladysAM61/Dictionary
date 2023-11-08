var input = document.getElementById("text")
var button = document.getElementById("check")
var divvv = document.getElementById("divv")
var informationcontainer = document.getElementById("div2")
var pElement = document.getElementById("p")
// var defbox = document.getElementById("Div")

// adding all the dictionary words inside of a function
const dictionary = {
//    word is a string and definitions an array
    "yes":{
        partofspeech: "noun",
        definitions:[
            "Used to give an affirmative response.",
            "Used as a response to someone addressing one or otherwise trying to attract one's attention."
        ]
    },
    "panacea": {
        partofspeech:"noun",
        definitions:["An answer or solution for all problems or difficulties."]
    },
    "concatenation":{
       partofspeech:"noun",
       definitions:["A series of interconnected or interdependent things or events."]
    },
    "saw":{
        partofspeech:"verb",
        definitions:[
            "Cut (something) using a saw.",
            "Make rapid to-and-fro motions in cutting something or in playing a stringed instrument."
        ]
    },
    "found":{
        partofspeech: "adjective",
        definitions:[
            "Having been discovered by chance or unexpectedly.",
            "(of a ship) Equipped; Supplied."
        ]
    },
    "crane":{
        partofspeech:"verb",
        definitions: [
            "Stretch out one's body or neck in order to see something.",
            "Move (a heavy object) with a crane."
        ]
    },
    "minute":{
        partofspeech:"noun",
        definitions: [
            "A period of time equal to sixty seconds or a sixtieth of an hour.",
            "A sixtieth of a degree of angular measurement (symbol: ʹ)"            
        ]
    },
    "grotesque":{
        partofspeech:"adjective",
        definitions: ["Comically or repulsively ugly or distorted."]
    },
    "label":{
        partofspeech:"noun",
        definitions: ["A small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it.."]
    },
    "debacle":{
        partofspeech:"noun",
        definitions: ["A sudden and ignominious failure; a fiasco."]
    }
}

function check(){
    var inp = input.value.toLowerCase();
    // innerHtml thing to clear the previous definition and part of speech
    informationcontainer.innerHTML = "";
    if (dictionary.hasOwnProperty(inp)){
      let wordEntry = dictionary[inp];
    //   let def = defenitions inside of the object wordEntry
      let def= wordEntry.definitions;
      pElement.innerText="Part of speech: ";
      pElement.append((wordEntry.partofspeech))
      informationcontainer.appendChild(pElement);
    // creating a for loop to put the definitions and so it could be numbered
     for(let i = 0; i < def.length; i++){
       let newp = document.createElement("p");
       newp.innerText = i+1 + "." + def[i];
       console.log(def[i])
       informationcontainer.append(newp)
     }
    }
    else{
       pElement.innerText="The word is not found on the dictionary.Try again!";
       informationcontainer.appendChild(pElement);
       console.log("word is not in dictionary");
    }
    // allowing me to style the div using css
    informationcontainer.classList.add("informationdiv")
}


button.addEventListener("click",check);


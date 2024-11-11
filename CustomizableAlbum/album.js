const images = [
   1,2,3
]
const story = [
    "After Design Class attendance check" ,
    "Failed the escape room, still had so much fun",
    "Prototyping at Monussy's house"
]

i = 0;


function myFunction() {
    

    if (i >= 2){
        
        hide(images[i]);
        i = 0;
        show(images[i]); 
        
    } else if (i < 3){

        hide(images[i]);
        i++
        show(images[i]);  

    }

    var input = document.getElementById('Remarks');
    input.placeholder = story[i];

}

function hide(){
    const element = document.getElementById(images[i]);
    element.classList.remove("visible");
    element.classList.add("hidden");
}

function show(){
    const element = document.getElementById(images[i]);
    element.classList.remove("hidden");
    element.classList.add("visible");
}


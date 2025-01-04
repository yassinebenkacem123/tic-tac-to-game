let title = document.querySelector(".title");
let turn = "X";
//function to check if we have a winner or not : 

const end_game_editing = (box1, box2, box3) =>{
    document.getElementById(`item${box1}`).style.cssText = "color : green";
    document.getElementById(`item${box2}`).style.cssText = "color : green";
    document.getElementById(`item${box3}`).style.cssText = "color : green";
    title.style.color = "green";
    setInterval(() => {
        title.innerHTML += ".";
        
    }, (1000));
    setTimeout(()=>{
        location.reload()
    },4000);
    
}
function check_winner(){
    //get the the inner of the element of the x-o => ["X", "O",.....]:
    let arrays = [];
    //get the id the all boxes of the game:
    for(let i=0; i < 9; i++){
        let element = document.getElementById(`item${i+1}`);
        // console.log(`item${i+1}`);
        //insert the containt of the element in array :
        arrays[i] = element.innerHTML;
    }
    //check if we have a winner : 
    if(arrays[0] === arrays[1] && arrays[0]==arrays[2] && arrays[0]!== ""){
        title.innerHTML = `the winner is ${arrays[0]}`;
        end_game_editing(1, 2, 3);
        return;
    }
    //------------------------------------------------------------------------
    if(arrays[3] === arrays[4] && arrays[3]==arrays[5] && arrays[3]!== ""){
        title.innerHTML = `the winner is ${arrays[3]}`;
        end_game_editing(4, 5, 6);
        return;
    }
    //------------------------------------------------------------------------
    if(arrays[6] === arrays[7] && arrays[8]==arrays[6] && arrays[6]!== ""){
        title.innerHTML = `the winner is ${arrays[6]}`;
        end_game_editing(7, 8, 9);
        return;
    }
    //------------------------------------------------------------------------
    if(arrays[0] === arrays[3] && arrays[6]==arrays[0] && arrays[0]!== ""){
        title.innerHTML = `the winner is ${arrays[0]}`;
        end_game_editing(1, 4, 7);
        return;
    }
    //------------------------------------------------------------------------
    if(arrays[1] === arrays[4] && arrays[7]==arrays[1] && arrays[1]!== ""){
        title.innerHTML = `the winner is ${arrays[1]}`;
        end_game_editing(2, 5, 8);
        return;
    }
    //------------------------------------------------------------------------
    if(arrays[2] === arrays[5] && arrays[8]==arrays[2] && arrays[2]!== ""){
        title.innerHTML = `the winner is ${arrays[2]}`;
        end_game_editing(3, 6, 9);
        return;
    }
    //------------------------------------------------------------------------
    if(arrays[0] === arrays[4] && arrays[8]==arrays[0] && arrays[0]!== ""){
        title.innerHTML = `the winner is ${arrays[0]}`;
        end_game_editing(1, 5, 9);
        return;
    }
    //------------------------------------------------------------------------
    if(arrays[2] === arrays[4] && arrays[2]==arrays[6] && arrays[2]!== ""){
        title.innerHTML = `the winner is ${arrays[2]}`;
        end_game_editing(3, 5, 7);
        return;
    }
}

function check_draw(){
    let arrays = [];
    //get the id the all boxes of the game:
    for(let i=0; i < 9; i++){
        let element = document.getElementById(`item${i+1}`);
        console.log(`item${i+1}`);
        //insert the containt of the element in array :
        arrays[i] = element.innerHTML;
    }
    let extraArray = [[arrays[0],arrays[1],arrays[2]],[arrays[3],arrays[4],arrays[5]],
    [arrays[6],arrays[7],arrays[8]],[arrays[0],arrays[3],arrays[6]],
    [arrays[1],arrays[4],arrays[7]],[arrays[2],arrays[5],arrays[8]],
    [arrays[0],arrays[4],arrays[8]],[arrays[2],arrays[4],arrays[6]]];
    if(!(arrays.includes("")))
    {   //assume it's draw until the keyboard not empty
        let bool = true;
        extraArray.forEach((box)=>{
            if(!(box.includes("O") && box.includes("X"))) bool = false;})
        if(bool)
        {
            title.innerHTML = "No one Win !";
            title.style.color = "red";
            setInterval(() => {
                title.innerHTML += ".";
                
            }, (1000));
            setTimeout(()=>{
                location.reload()
            },4000);   
        }     
    }   
}
//the all informations  about the game :
function game(id){
    //id = give us just the id : 
    let element  = document.getElementById(id);
    if (turn === "X" && element.innerHTML === "")
    {  
        element.innerHTML = turn;
        turn = "O";
        title.innerHTML = `the ${turn} turn`;
    }
    if(turn === "O" && element.innerHTML === ""){
        element.innerHTML = turn;
        turn = "X";
        title.innerHTML = `the ${turn} turn`;
    }
    check_winner();
    check_draw();
}

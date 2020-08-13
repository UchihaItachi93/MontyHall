function rand(min,max) {
  return Math.floor(Math.random() * Math.floor(max-min+1)) + min ; 
}
var changeWins = 0;
var noChangeWins = 0; 

function run (){
    let doorArray = [0,0,0]
	let correctDoor = rand(0,2);
	doorArray[correctDoor] = 1 ;
	let selectedDoor = rand(0,2);
	let doorsShowingPossible = [0,1,2].some((index)=>{ index != selectedDoor && index!= correctDoor })
	let doorShown
	if(doorsShowingPossible.size == 1){ 
	      doorShown = doorsShowingPossible[0] ;
	     
	}else{
	      doorShown = doorsShowingPossible[rand(0,1)] ;
	}
	
	otherDoorAvailable = [0,1,2].some((index)=>{ index != selectedDoor && index!= doorShown })
    if(correctDoor === selectedDoor ){
	  noChangeWins++;
    } 
    else {
	  changeWins++;
    }
}
var x=100000
while(x--){
    run();
}
console.log(noChangeWins)
console.log(changeWins)

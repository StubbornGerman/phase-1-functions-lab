// Code your solution in this file!


function distanceFromHqInBlocks(passengerLoc){
let scuber = 42  
    if (passengerLoc > scuber) {
        return passengerLoc - scuber
   } else{
       return scuber - passengerLoc
    } 
}

function distanceFromHqInFeet(passengerLoc){
    return distanceFromHqInBlocks(passengerLoc) * 264

}

function distanceTravelledInFeet(start, end){
    if (end < start) {
        return (start - end) * 264

} else{ 
    return (end - start) * 264

}

}  

function calculatesFarePrice (start, destination){
    if (distanceTravelledInFeet (start, destination) >2500)
        return ('cannot travel that far')
    else if (distanceTravelledInFeet (start, destination) > 2000)
            return (25)
    else if (distanceTravelledInFeet (start, destination) < 400)
            return (0)
    else (distanceTravelledInFeet(start, destination) -400)
        return (distanceTravelledInFeet(start, destination) -400)*.02

//console.log(distanceTravelledInFeet)
//console.log("hello")
    
    // //else if (distanceTravelledInFeet <400 {
    //     return ('gives customers a free sample') 
    //  } else if {(distanceTravelledInFeet > 400 
        
    //         return ()
        
    }






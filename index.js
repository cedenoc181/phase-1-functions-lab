// Code your solution in this file!
function distanceFromHqInBlocks (start){
return Math.abs(start - 42);
} 

function distanceFromHqInFeet(start) {
    return distanceFromHqInBlocks(start)*264;
}

function distanceTravelledInFeet(start, destination){
    return Math.abs((start - destination) * 264); 
} 

function calculatesFarePrice(start, destination) {
    let feetTravelled = distanceTravelledInFeet(start, destination)
    if (feetTravelled<=400) {
        return 0
    } else if (feetTravelled>400 && feetTravelled<2000) {
        return .02*(feetTravelled-400)
    } else if (feetTravelled>2000 && feetTravelled<2500) {
        return 25
    } else {
        return 'cannot travel that far';
    }
}
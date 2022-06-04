function getSleepHours(day){
    var hours = prompt('how many hours did you sleep on' + day);
    return Number(hours);
}

funciton getActualSleepHours(){
    var sum = 0;
    sum += getSleepHours('Sunday');
    sum += getSleepHours('Monday');
    sum += getSleepHours('Tuesday');
    sum += getSleepHours('Wednesday');
    sum += getSleepHours('Thursday');
    sum += getSleepHours('Friday');
    sum += getSleepHours('Saturday');
    return sum
}

function getIdealSleepHours(){
    var result = prompt('how much hours of sleep is ideal');
    return result * 7 
}

function calculateSleepDebt() {
    var debt = 0;
    var getActualSleepHours = getIdealSleepHours();
    var getIdealSleepHours = getIdealSleepHours();
    if(getActualSleepHours === getIdealSleepHours){
        console.log('You got the perfect amount of sleep');
    }
    else if (getActualSleepHours > getIdealSleepHours) {
        debt = getActualSleepHours - getIdealSleepHours;
        console.log(`You got ${debt} hours more sleep than you need`)    
    }
    else if (getActualSleepHours) < getIdealSleepHours) {
        debt = getActualSleepHours - getIdealSleepHours
        console.log(`You slept ${-debt} too few hours`);
    } else {
        console.log('please enter valid numbers')
    }
}

/// 

// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
    return driver.filter(function (number) {
        return number.revenue > revenue;
    })
} 

function driverNamesWithRevenueOver(driver, revenue){
    return driversWithRevenueOver(driver, revenue).map(function (name) {
        return name.name;
    })
}

function exactMatch(driver, obj) {
    return driver.filter(function (some) {
        let match = false;
        for(const key in obj) {
            match = some[key] === obj[key]
        }
        return match;
    })
}

function exactMatchToList(driver, obj) {
    return exactMatch(driver, obj).map(function (drive) {
        return drive.name;
    })
}
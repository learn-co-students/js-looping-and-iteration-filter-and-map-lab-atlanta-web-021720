// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    let results = drivers.filter(driver => driver.revenue > revenue);
    return results;
}

function driverNamesWithRevenueOver(drivers, revenue) {
    let results = driversWithRevenueOver(drivers, revenue).map(driver => driver.name);
    return results;
}

function exactMatch(drivers, obj) {
    const key = Object.keys(obj)[0];
    const value = obj[key];
    const results = drivers.filter(driver => driver[key] === value);
    return results;
}

function exactMatchToList(drivers, obj) {
    const results = exactMatch(drivers, obj).map(driver => driver.name);
    return results;
}
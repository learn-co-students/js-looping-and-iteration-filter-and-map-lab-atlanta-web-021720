
function driversWithRevenueOver(arr, rev) {
    let new_arr = arr.filter(driver => driver.revenue > rev);
    return new_arr;
}

function driverNamesWithRevenueOver( arr, rev ) {
    let new_arr = driversWithRevenueOver(arr, rev).map(driver => driver.name);
    return new_arr;
}

function exactMatch (drivers, obj) {
    const key = Object.keys(obj)[0];
    const value = obj[key];
    const new_arr = drivers.filter(driver => driver[key] === value);
    return new_arr;
}

function exactMatchToList(drivers, obj) {
    const new_arr = exactMatch(drivers,obj).map(driver => driver.name);
    return new_arr;
}
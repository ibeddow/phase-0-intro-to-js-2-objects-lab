const employee= {
    name: "Ilea",
    streetAddress : {
        line1 : "123 Walt Disney ",
        line2 : "Apt 4",
    },
    city: "Honolulu",
    state: "Hawaii",
    zipCode: "56789",

}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
    newObj[key] = value
    return newObj

}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value
    return obj
}

function deleteFromEmployeeByKey(obj, key) {
    const newObj = { ...obj };

    delete newObj[key];
    return newObj
}

function  destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj
}
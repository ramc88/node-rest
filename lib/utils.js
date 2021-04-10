

const combinations = (listOfArrs, listOfKeys) => {

    let combInd = [];

    for (const arr of listOfArrs) {
        if (combInd.length === 0) arr.forEach((val) => combInd.push([val]));
        else {
            for (const i in combInd) {
                arr.forEach((val) => combInd.push(combInd[i].concat(val)));
            };
        };
    };

    combInd = combInd.filter(comb => comb.length === listOfArrs.length);

    if (listOfKeys) combInd = combInd.map((val) => val.reduce((json, val2, index) => { json[listOfKeys[index]] = val2; return json; }, {}))
    return combInd;
};

module.exports = {
    combinations,
};
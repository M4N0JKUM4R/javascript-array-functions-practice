let swapApi = "people.js";
let swArray = [];

const fetchApi = async () => {
    let apiFetching = await fetch(swapApi);
    let results = await apiFetching.json();
    console.log(results);
    createArray(results);

    // Map functions

    allNamesfn();
    allHeightsfn();
    allNamesandHeightsfn();
    allFirstNamesfn();

    // Reduce functions

    totalMassfn();
    totalHeightfn();
    totalCharactersfn();
    totalCharactersEyefn();

    // Filter functions

    massGt100fn();
    heightLt100fn();
    maleCharactersfn();
    femaleCharactersfn();

    // Sort functions

    sortByMassfn();
    sortByHeightfn();
    sortByNamefn();
    sortByGenderfn();

    // Every functions

    blueEyesCheck();
    massGt40Check();
    heightLt200fn();
    genderMalefn();

    // Some functions

    atleastOneMale();
    atleastOneBlueEyes();
    atleastOneHeightGt200();
    atleastOneCharacterMassLt50();
}

fetchApi();

const createArray = (results) => {
    results.results.forEach(result => {
        swArray.push(result);
    })
    console.log("SW Array",swArray);
}

// Get an array of all names

const allNamesfn = () => {
    allNames = swArray.map(el => el.name);
    console.log({allNames});
}

// Get an array of all heights

const allHeightsfn = () => {
    let allHeights = swArray.map(el => el.height);
    console.log({allHeights});
}

// Get an array of objects with name and height properties

const allNamesandHeightsfn = () => {
    let allNamesandHeights = swArray.map(el => {
        return {name: el.name, height: el.height}
    });
    console.log({allNamesandHeights});
}

// Get an array of all first names

const allFirstNamesfn = () => {
    let allFirstNames = swArray.map(el => {
        return el.name.split(" ")[0];
    })

    console.log({allFirstNames});
}

// Total mass of all characters

const totalMassfn = () => {
    const totalMass = swArray.reduce((tot,cur) => {
        return tot + parseInt(cur.mass);    
    },0);

    console.log({totalMass});
}

// Total height of all characters

const totalHeightfn = () => {
    const totalHeight = swArray.reduce((tot,cur) => {
        return tot + parseInt(cur.height);
    },0)
    console.log({totalHeight});
}

// Total number of characters in all character names

const totalCharactersfn = () => {
    const totalCharacters = swArray.reduce((tot,cur) => {
        return tot + cur.name.length;
    },0)
    console.log({totalCharacters});
}

// Total number of characters by Eye color

const totalCharactersEyefn = () => {
    const totalCharactersEye = swArray.reduce((tot,cur) => {
        const color = cur.eye_color;
        if(tot[color]) {
            tot[color]++;
        } else {
            tot[color] = 1;
        }
        return tot;
    }, {})
    console.log({totalCharactersEye});
}

// Characters with mass greater than 100

const massGt100fn = () => {
    let massGt100 = swArray.filter(el => {
        return el.mass > 100;
    })

    console.log({massGt100});
}

// Characters with height less than 100

const heightLt100fn = () => {
    let heightLt100 = swArray.filter(el => {
        return el.height < 100;
    })

    console.log({heightLt100});
}

// Get all male characters 

const maleCharactersfn = () => {
    let maleCharacters = swArray.filter(el => el.gender == "male");

    console.log({maleCharacters});
}

// Get all female characters 

const femaleCharactersfn = () => {
    let femaleCharacters = swArray.filter(el => el.gender == "female");

    console.log({femaleCharacters});
}

// Sorting by mass - Ascending order

const sortByMassfn = () => {
    let sortByMass = swArray.sort((a,b) => {
        return a.mass - b.mass;
    })

    console.log({sortByMass});
}

// Sorting by height - Ascending order

const sortByHeightfn = () => {
    let sortByHeight = swArray.sort((a,b) => {
        return a.height - b.height;
    })

    console.log({sortByHeight});
}

// Sorting by name 

const sortByNamefn = () => {
    let sortByName = swArray.sort((a,b) => {
        let aName = a.name.toUpperCase();
        let bName = b.name.toUpperCase();
        if(aName > bName) {
            return 1;
        } else if(aName < bName) {
            return -1;
        } else if(aName == bName) {
            return 0;
        }
    })

    console.log({sortByName});
}

// Sorting by gender 

const sortByGenderfn = () => {
    let sortByGender = swArray.sort((a,b) => {
        if(a.gender === "male") {
            return 1;
        } else if(a.gender === "female") {
            return -1;
        }
    })
    console.log({sortByGender});
}

// Does every character has blue eyes

const blueEyesCheck = () => {
    let blueEyes = swArray.every(el => el.eye_color === "blue");
    console.log({blueEyes});
}

// Does every character has mass more than 40

const massGt40Check = () => {
    let massGt40 = swArray.every(el => el.mass > 40);
    console.log({massGt40});
}

// Is every character shorter than 200

const heightLt200fn = () => {
    let heightLt200 = swArray.every(el => el.height < 200);
    console.log({heightLt200});
}

// Is every character male

const genderMalefn = () => {
    let genderMale = swArray.every(el => el.gender === "male");
    console.log({genderMale});
}

// Is there at least one male character

const atleastOneMale = () => {
    let checkAtleastOneMale = swArray.some(el => el.gender === "male");
    console.log({checkAtleastOneMale});
}

// Is there at least one character with blue eyes

const atleastOneBlueEyes = () => {
    let atleastOneBlueEye = swArray.some(el => el.eye_color === "blue");
    console.log({atleastOneBlueEye})
}

// Is there at least one character taller than 200

const atleastOneHeightGt200 = () => {
    let heightGt200 = swArray.some(el => el.height > 200);
    console.log({heightGt200});
}

// Is there at least one character whose mass is less than 50 

const atleastOneCharacterMassLt50 = () => {
    let massLt50 = swArray.some(el => el.mass < 50);
    console.log({massLt50});
}

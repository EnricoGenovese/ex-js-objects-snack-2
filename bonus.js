// Code Question 5 (Bonus)

const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const newRestaurant = { ...hamburger.maker.restaurant };
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";

const secondBurger = { ...hamburger };
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?

console.log(hamburger.maker.name); // -> Chef Hyur
console.log(secondBurger.maker.name); // -> Chef Hyur

console.log(hamburger.maker.restaurant.name);  // -> Hyur's II
console.log(secondBurger.maker.restaurant.name); // -> Hyur's II

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// Sono stati creati 5 oggetti: hamburger, mker, restaurant, un altro restourant con lo Spread Operator di hamburger.maker.restaurant e un altro hamburger con lo spread di hamburger.


// Code Question 6 (Bonus)

const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
};

// Qual è il metodo migliore per clonare l’oggetto chef, e perché?

// Il metodo migliore per clonare l'oggetto 'chef' è un annidamento di Spread Operators, siccome i metodi di Deep Copy non potrebbero clonare non possono clonare i metodi delle chavi di 'chef'.


// Snack 7 (Bonus)

//  Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni). Usa l’oggetto di Code Question 6 come test.

// Serve usare una funzione ricorsiva! 

const createDeepCopy = (original) => {
    // Caso Base -> se la chiave originale non è un oggetto (e quindi un metodo), restituisce lo stesso com'è e ferma la funzione per evitare un loop infinito
    if (typeof original !== "object") {
        return original
    }
    let copy;
    if (Array.isArray(original)) { // anche gli array sono tecnicamente oggetti, vengono trattati differentemente (ad esempio sono dei Reference Type), per questo se il parametro passato è un array, copy deve essere un array, altrimenti un oggetto.
        copy = []
    } else {
        copy = {}
    }
    // -> se la chiave originale è un oggetto (stringa, numero, booleano, ecc.), crea una copia dell'oggetto con la stessa value
    for (let key in original) { // con un ciclo 'for in' tutte le chiavi vengono passate nella funzione 'createDeepCopy()
        const value = original[key];
        copy[key] = createDeepCopy(value)
    }

    return copy // -> restituisce la copia
};

const chefCopy = createDeepCopy(chef);

chefCopy.name = 'Chef Antonio';
chefCopy.restaurant.name = 'Cascina sul Lago';
chefCopy.restaurant.address.street = 'Strada Costa';
chefCopy.restaurant.isOpen = false;

console.log('original', chef);
console.log('copy', chefCopy);
// Code Question 1:

const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;


// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?

console.log(hamburger.name); // -> Double Cheese Burger
console.log(secondBurger.name); // -> Double Cheese Burger

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

// Siccome è stata fatta una copia di riferimento, un singolo oggetto con due variabili che puntano allo stesso ID nella memoria e che condividono le modifiche fatte su uno o l'altro oggetto.


// Code Question 2:

const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"] // Gli array sono dei Reference Type
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?

console.log(hamburger.ingredients[0]); // -> Salad
console.log(secondBurger.ingredients[0]); // -> Salad

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

// Siccome è stata fatta una copia con uno 'Spread Operator', tre oggetti distinti, due che condividono chiavi e metodi, ma che possono essere modificati indipendentemente l'uno dall'altro e un singolo array che è condiviso da entrambi gli oggetti.


// Code Question 3:

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

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

// Con il metodo nativo 'structuredClone()' vengono create Copie Profonde di un oggetto, che condividono sia gli oggetti annidati che quelli complessi(come Date), ma non funzioni. L'oggetto 'hamburger' contiene l'oggetto 'maker' che a sua volta contiene l'oggetto 'restaurant' ed ogni sua copia ne contiene altrettanti, per un totale di 9 oggetti.


// Code Question 4

const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}

// Qual è il metodo migliore per clonare l’oggetto chef, e perché?

// Il metodo migliore per clonare l'oggetto 'Chef' sarebbe l'operatore di spread, siccome la chiave 'makeBurger' contiene una funzione, che i metodi di Copia Profonda JSON.parse(JSON.stringify()) e structuredClone() non possono copiare.


const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};

// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?

// Il metodo migliore per copiare l'oggeto 'restaurant' è structuredClone(), che permette di copiare anche gli oggetti annidati e l'oggetto complesso 'Date()' nella chiave 'openingDate'.
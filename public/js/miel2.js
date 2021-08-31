const miel = [
    {
        "name": "Forêt",
        "prix": [1800 , 900, 600]
    },
    {
        "name": "Printemps",
        "prix": [1800 , 900, 600]
    },
    {
        "name": "Montagne",
        "prix": [0 , 1000, 650]
    },
    {
        "name": "Acacia",
        "prix": [2000 , 1100, 680]
    },
    {
        "name": "Tilleul",
        "prix": [0 , 1000, 650]
    },
    {
        "name": "Bourdaine",
        "prix": [0 , 900, 600]
    },
    {
        "name": "Bruyère érica",
        "prix": [0 , 900, 600]
    },
    {
        "name": "callune",
        "prix": [2200 , 1100, 680]
    },
    
];

function viewMiel2(miel) {
    eltRow = document.querySelector('#miel');
    
    for(i =0; i < miel.length; i ++){
        let euroPrice = [];
        for (p = 0; p < miel[i].prix.length; p ++){
            euroPrice.push(priceToEuro(miel[i].prix[p]));
        };
        eltRow.appendChild(createElt('tr')).setAttribute("scope", "row").innerHTML = miel[i].name;
        
        for(n = 0; n < euroPrice.length; n ++ ){
            eltRow.children[i].appendChild(createElt('td')).innerHTML = euroPrice[n];
        }
    }
};

viewMiel2(miel);

// format prix en Euros
function priceToEuro(price){
    let priceEuro = (price / 100).toFixed(2) + ' €';
    return priceEuro;
 };

 function createElt(e) {
    return document.createElement(e);
};
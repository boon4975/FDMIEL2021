// format prix en Euros
function priceToEuro(price){
    if(price == 0){
        let priceEuro = "-";
        return priceEuro;
    }else{
    let priceEuro = (price / 100).toFixed(2) + ' €';
    return priceEuro;
    };
 };

 function viewMiel(miel) {
    for(i = 0; i < miel.length; i ++){
        let price1 = priceToEuro(miel[i].pot1000);
        let price2 = priceToEuro(miel[i].pot500);
        let price3 = priceToEuro(miel[i].pot250);
        
        document.querySelector('#miel').innerHTML += `
                                                <tr scope="row">
                                                    <td class="text-start ps-3">${miel[i].name}</td> 
                                                    <td>${price1}</td>
                                                    <td>${price2}</td>
                                                    <td>${price3}</td>
                                                `
    }
    
};

function viewPain(pain) {
    for(i = 0; i < pain.length; i ++){
        let price1 = priceToEuro(pain[i].unite);
        let price2 = priceToEuro(pain[i].Poids400g);
        let price3 = priceToEuro(pain[i].Poids300g);
        document.querySelector('#pain').innerHTML += `
                                                <tr scope="row">
                                                    <td  class="text-start ps-3">${pain[i].name}</td> 
                                                    <td>${price1}</td>
                                                    <td>${price2}</td>
                                                    <td>${price3}</td>
                                                `
    }
    
};

function viewDouceurs(douceurs) {
    for(i = 0; i < douceurs.length; i ++){
        let price1 = priceToEuro(douceurs[i].unite);
        document.querySelector('#douceurs').innerHTML += `
                                                <tr scope="row">
                                                    <td  class="text-start ps-3">${douceurs[i].name}</td> 
                                                    <td>${douceurs[i].poids}</td>
                                                    <td>${price1}</td>
                                                `
    }
    
};

function viewApitheratie(apitheratie) {
    for(i = 0; i < apitheratie.length; i ++){
        let price1 = priceToEuro(apitheratie[i].unite);
        document.querySelector('#apitheratie').innerHTML += `
                                                <tr scope="row">
                                                    <td  class="text-start ps-3">${apitheratie[i].name}</td> 
                                                    <td>${apitheratie[i].contenance}</td>
                                                    <td>${price1}</td>
                                                `
    }
    
};

viewMiel(miel);
viewPain(pain);
viewDouceurs(douceurs);
viewApitheratie(apitheratie);
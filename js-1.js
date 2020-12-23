
let price = function(x) {
    let allRecipe = 'Вы заказали ';
    let totalPrice = 9000 ;
            for(let key in x) {
                let b = x[key].info;
                let c = x[key].price;
                
                totalPrice += c ;
             
                allRecipe += key + " " + b +', '  ;   
            }


    return allRecipe + ' | общая стоимость ' +  totalPrice + ' ' + ' доставкой (9000)' ;     
   }
   console.log(price(receipt()))

  
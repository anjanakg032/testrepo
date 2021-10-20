//{p_code:100,name:'product1',price:250,aval_qty:50}

//....create above object
var product={
    p_code:100,
    name:'product1',
    price:250,
    aval_qty:50}



//....print product name
console.log(product.name);


//...update stock as current stock +30
 product.aval_qty+=30;
 console.log(product);
//console.log(product.price+=30); // output  280


//.... check for discount key is present
console.log("discount" in product);


//...add discount:10%
product["discount"]="10%"
console.log(product);



//.....chck for batch_code is present. if not add batch_code=est_2k21_09
console.log("batch_code"in product);  // output will be boolean fn (true or false)

if("batch_code"in product){
    console.log("true");
}
else{
    product.batch_code="est_2k21_09"
}

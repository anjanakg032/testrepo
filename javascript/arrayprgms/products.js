var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10]
    [106,"magic",20,10]


]

//.... print number of items in shop
console.log("number of items ",products.length);

//.... print number of available items
// var count=0 //let aval_stock=0
// for(let product of products){
//     if(product[1]!=0){
//       count+=1 //count++
//     }
// }
// console.log("number of available items", count);

//....print all product names only
var products_name=products.map(item=>item[1])
console.log("products name ",products_name);


//....print all available products
var aval_items=products.filter(item=>item[3]>0)
console.log(aval_items);


//print out of stock product names
var out_stock=products.filter(item=>item[3]==0).map(item=>item[1])
console.log(out_stock);


// add offer 5rs for all products whose stock >50
var offer=products.filter(item=>item[3]>50).map(item=>item[2]-5)
console.log("offer added",offer); //only price is printed

var offer=products.filter(item=>item[3]>50).map(item=>[item[2]-5,item[1]]) // output [15,fifty fifty]


//sort
//no need of add variable. it will sort internaly

//....sort the product stock wise (descending)
products.sort((item1,item2)=>item2[3]-item1[3])
console.log(products);


//....descending order of price
products.sort((item1,item2)=>item2[2]-item1[2])
console.log(products);

//...highest price
var costly_product=products.reduce((item1,item2)=>item1[2]>item2[1]?item1:item2)
console.log('costly product',costly_product);

//...low cost product
var low_costly_product=products.reduce((item1,item2)=>item1[2]<item2[2]?item1:item2)
console.log('low costly product',low_costly_product);

//reduceRight
var low_costly_product=products.reduceRight((item1,item2)=>item1[2]<item2[2]?item1:item2)
console.log('low costly product',low_costly_product);

//**** reduce data entered (reslut assigned) on left side
//**reduceright result assigned in right side */


//...find 
var srch_item=products.find(item=>item[2]==20)
console.log(srch_item);

//** find only print single value.only return one output tht match the condition */ full array printed
//**filter print every values that have condition matching */ full array printed

var srch_item=products.find(item=>item[1]=='treat')
console.log(srch_item);


//....can i purchase item for <30 rs
var is_available=products.some(item=>item[2]<30)
console.log(is_available);


//FOREACH
products.map(item=>item[1]).foreach(names=>console.log(names))

//...print products rs>30
products.filter(item=>item[2]>30).foreach(item=>console.log(item))


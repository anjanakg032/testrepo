// ARRAY OF OBJECTS

var bill_details=[

    {bill_number:1000,date:"17-09-2021",amount:5000,payment_type:"card"},
    {bill_number:1001,date:"17-09-2021",amount:4000,payment_type:"cash"},
    {bill_number:1002,date:"17-09-2021",amount:6000,payment_type:"card"},
    {bill_number:1003,date:"17-09-2021",amount:2000,payment_type:"cash"},
    {bill_number:1004,date:"18-09-2021",amount:10000,payment_type:"cash"},
    {bill_number:1005,date:"18-09-2021",amount:4000,payment_type:"card"},
    {bill_number:1005,date:"18-09-2021",amount:4000,payment_type:"cash"},
    {bill_number:1005,date:"18-09-2021",amount:4000,payment_type:"card"},
    {bill_number:1006,date:"18-09-2021",amount:3000,payment_type:"cash"},
    {bill_number:1007,date:"19-09-2021",amount:4000,payment_type:"cash"},
    {bill_number:1008,date:"19-09-2021",amount:6000,payment_type:"cash"},
]


//......find total sales of each day    //  {17-09-2021:17000,18-09-2021:14000,19-09-2021:1000}
var sales_report={}
for (let bill of bill_details){
    //bill =    {bill_number:1000,date:"17-09-2021",amount:5000,payment_type:"card"}
    let bill_date=bill.date
    let bill_amount=bill.amount
    if(bill_date in sales_report){
        sales_report[bill_date]+=bill_amount

    }
    else{
        sales_report[bill_date]=bill_amount
    }
}
console.log(sales_report);


//...sort the sales_report based on total_collection
var sorted_report=Object.entries(sales_report).sort((amnt1,amnt2)=>amnt1[1]-amnt2[1])
console.log(sorted_report);

var srted_obj={}
for(let amnt of sorted_report){
    srted_obj[amnt[0]]=amnt[1]
}
console.log(srted_obj);
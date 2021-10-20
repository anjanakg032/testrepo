// ARRAY OF OBJECT

var weather_data=[
    {district:"tvm",temp:30},
    {district:"tvm",temp:29},
    {district:"apy",temp:24},
    {district:"ktm",temp:20},
    {district:"idk",temp:19},
    {district:"ekm",temp:31},
    {district:"tsr",temp:29},
    {district:"mpm",temp:30},
    //{district:"tvm",temp:29},
    {district:"apy",temp:25},
    {district:"ktm",temp:21},
    {district:"idk",temp:18},
    {district:"ekm",temp:30},
    {district:"tsr",temp:20},
    {district:"mpm",temp:31},

]


//...mapp district and heighest tempertature
    // data=  {district:"tvm",temp:30}
var forecast={}
for(let data of weather_data){

    let district_name=data.district// tvm
    let cur_temp=data.temp //

    if(district_name in forecast){
        let old_temp=forecast[district_name] //  forecast.district_name not work here
        
        if(cur_temp>old_temp){
            forecast[district_name]=cur_temp
        }

    }
    else{
        forecast[district_name]=cur_temp

    }

}
console.log(forecast);


//...sort the above result(forecast) with repect to temperature

//forecast.sort((temp1,temp2)=>temp1-temp2) //sorting cannot be done on forecast becoz it is a object
// so first result should be converted in to array

//console.log(Object.entries(forecast));  // result will be nested array 
//***  object.entries()  ==> used to convert object in to array */
var res=Object.entries(forecast).sort((temp1,temp2)=>temp1[1]-temp2[1])
console.log(res);

//coverted into object (done by me -); )
var srted_temp={}
for(let temp of res){
    srted_temp[temp[0]]=temp[1]

}
console.log(srted_temp);




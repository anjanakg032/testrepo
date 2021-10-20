// array of obects
                                          //not nested array
 
var point_table=[
    {t_name:"csk",pld:10,won:8,loss:2,pts:16},
    {t_name:"dc",pld:11,won:8,loss:3,pts:16},
    {t_name:"rcb",pld:11,won:7,loss:4,pts:14},
    {t_name:"kkr",pld:11,won:5,loss:6,pts:10},
    {t_name:"mi",pld:11,won:5,loss:6,pts:10},
    {t_name:"pkb",pld:11,won:4,loss:7,pts:8},
    {t_name:"rr",pld:11,won:4,loss:7,pts:8},
    {t_name:"srh",pld:10,won:2,loss:8,pts:4},

]  


//....print team names only

//external iteration.  first array is loaded
 for(let teams of point_table){
     console.log(teams.t_name);
    
 }

 //internal iteration. iteration done inside array
// another mthd
 point_table.map(team=>team.t_name).forEach(name=>console.log(name))

 //another mthd
 point_table.forEach(team=>console.log(team.t_name))


 //....print team details whose pts >10
 for (let team of point_table){
     if(team.pts>10){
         console.log(team);
         //console.log(team.t_name); // for geting name only
     }
 }

 //internal mthd
 var name=point_table.filter(team=>team.pts>10)
 console.log("teams pts>10 = ",name);

 //or
 point_table.filter(team=>team.pts>10).forEach(team=>console.log(team))


 //internal mthd print only team names
 point_table.filter(team=>team.pts>10).forEach(team=>console.log(team.t_name))

 
 //.....is there mi playing ipl
 //external iteration
 var flag=0
 for(let team of point_table){
     if(team.t_name=="mi"){
         flag++;
         break
     }
 }
 console.log(flag>0?"yes":"false");

 //another mthd  internal iteration
 var is_playing=point_table.some(team=>team.t_name=="mi")
 console.log(is_playing);


 //... is kkr playing ipl
 var is_plying=point_table.some(team=>team.t_name=="kkr")
 console.log(is_plying);

 //....print details of kkr
 var team_data=point_table.find(team=>team.t_name=="kkr")
 console.log(team_data);


 //....print details of heighest point team
 var point_max_team=point_table.reduce((team1,team2)=>team1.pts>team2.pts?team1:team2)
 console.log(point_max_team); //dc team will be printed

 //mthd using reduceRight
 var point_max_team=point_table.reduceRight((team1,team2)=>team1.pts>team2.pts?team1:team2)
 console.log(point_max_team);//csk is printed


 //....print max point value
 var max_pt=point_table.map(team=>team.pts).reduce((pts1,pts2)=>pts1>pts2? pts1:pts2)
 console.log("max points",max_pt);

 //...print names  of teams with max points
 var max_pt=point_table.map(team=>team.pts).reduce((pts1,pts2)=>pts1>pts2? pts1:pts2)
point_table.filter(team=>team.pts==max_pt).forEach(team=>console.log(team.t_name))


 //....sort the team w r t loss (in descending order)
 point_table.sort((team1,team2)=>team2.loss-team1.loss)
 console.log(point_table);


 //.....print {8:[csk,dc],7:[rcb],5:[kkr,mi],4:[pkd,rr],2:[srh]}  //nested object
     
   // key    value        >take first object. take 8 check whether that key is present if not make a key 8 and give value t_name
  //  8       csk,dc      > check next object, check whether the number is key or not if it is key then add this team name also as value with the alrdy value
  //  7       rcb
  var w_count={} // created seperate object
  for(let team of point_table){
      if(team.won in w_count){
          w_count[team.won].push(team.t_name)
      }
      else{
          w_count[team.won]=[team.t_name]   //8:[csk]
      }
  }
  console.log(w_count);


  //....map using points     {4:srh,8[pkb,rr],10:[mi,kkr],14:[rcb],16:[dc,csk]}
  var pt_count={}
  for(let team of point_table){
      if(team.pts in pt_count){
          pt_count[team.pts].push(team.t_name)
      }
      else{
          pt_count[team.pts]=[team.t_name]
      }
  }
  console.log("map pts",pt_count);


  //....print number of team playing ipl 2k21
  console.log("number of teams",point_table.length);
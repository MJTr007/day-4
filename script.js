//compare two JSON 

// var a = {name:"Person 1", age:5};
// var b = {age:5, name:"Person 1"};

// var com1 = a.sort;
// var com2 = b.sort;

// console.log(JSON.stringify(com1)===JSON.stringify(com2));

///////////////////////////////////////////////////////////////////////////////


// From API print country name, region, subregion, population

// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all",true)
// request.send()
// request.onload=function()
// {
//     var data = request.response
//     var result = JSON.parse(data)
//      for(var obj of result)
//      {
//          console.log(obj.name.common , obj.region, obj.subregion ,
//             obj.population);
//      }
// }


/////////////////////////////////////////////////////////////////////////

// From API print country flags url
var request = new XMLHttpRequest();
 request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload=function()
{
   var data = request.response
   var result = JSON.parse(data)
    for(var obj of result)
    {
      console.log(obj.name.common , obj.flags.png);
    }
}
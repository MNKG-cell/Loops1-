console.log('Hello World!');
//this works for the for loop//
var cities =['Mumbai', 'Abuja', 'Mbarara'];
var html='';
for (var i=0;i<cities.length;i++) {html += '<p>'+ cities[i]+'</p>';}
document.getElementById('demo').innerHTML=html
var fruits=['oranges','mango', 'apple','guava'];
var i=0
//The while loop executes statements as long as the given condition evaluates to true//
while(i<3) {document.write('<p>Bonjour la tous</p>');i++;}
//for of loop, for(variable of iterable){line of code}//
for(value of fruits ){document.write(value +'<br>');}
var colors=['black','red','blue','green'];
for(value of colors){alert(value);}
console.log(alerted);
var countries=['Uganda','Congo ','Rwanda','Kenya'];
var len=countries.length;
var i=0;
var html='';
while(i<len){html +='<p> I like '+countries[i]+"</p>";
    i++;
} 
document.getElementById('alt').innerHTML=html;
var m=0;
var mesa;
do{mesa +='The number can be'+m;m++;}
while(m<10);
document.write(mesa);

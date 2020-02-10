var cookie=25;
var milk=10;
var coffee=3;
var count_cookie=0.5;
var count_milk=2;
var count_coffee=5;
var money=50;
var tips=money-(cookie*count_cookie)-(milk*count_milk)-(coffee*count_coffee);
alert("Печенье: "+cookie*count_cookie+"\nМолоко: "+milk*count_milk+"\nКофе: "+coffee*count_coffee+"\nНаличные: "+money+"\nСдача: "+tips);





var a=prompt("What number woul'd you like?","");
var a=Number(a);
var n1=a%10;

alert(n1);


var n2=((a-n1)%100);

alert(n2/10);


var n3=((a-n1-n2)%1000);

alert(n3/100);


var n4=((a-n1-n2-n3)%10000);

alert(n4/1000);


var n5=((a-n1-n2-n3-n4)%100000);

alert(n5/10000);


alert(n1+n2/10+n3/100+n4/1000+n5/10000);





var a=1, b=30;
alert("a(old)= "+a+"\nb(old)= "+b);
a=a+b;
b=a-b;
a=a-b;
alert("a(new)= "+a+"\nb(new)= "+b);

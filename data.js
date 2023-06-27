var data1 = new Date("09/01/2001"); 
var data2 = new Date("01/01/2023");
var total = (data2.getFullYear() - data1.getFullYear())*12 + (data2.getMonth() - data1.getMonth());
console.log(total)

print("12/09/2001".replace('mm', data1.getMonth() + 1)
    .replace('aa', data1.getFullYear())
	.replace('dd', data1.getDate()));
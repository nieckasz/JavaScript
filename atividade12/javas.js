var bma,bme,alt,r

bma=parseInt(prompt("digite a base maior de um trapezio"))
bme=parseInt(prompt("digite a base menor de um trapezio"))
alt=parseInt(prompt("digite a altura de um trapezio"))


if(bma<=0 && bme<=0)
{
    alert("erro")

}
else{
    r=((bma+bme)*alt)/2
    alert(r)

}
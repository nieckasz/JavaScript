var n1,n,r
n1=parseInt(prompt("digite o valor do protudo"))
n= prompt("se vc levar para MG=1 SP=2 RJ=3 se for MS=4")
if(n==1){
    r=n1*1.07
    alert("o valor total é "+ r)
}
if(n==2){
     r=n1*1.12
    alert("o valor total é "+ r)
}

if(n==3){
 r=n1*1.15
     alert("o valor total é "+ r)
}

if(n==4){
     r=n1*1.08
    alert("o valor total é "+ r)
}
var gas,pre,r

gas=parseInt(prompt("quanta gasolina colocou"))

pre=parseInt(prompt("qual é o preço da gasolina"))

if(gas>=10 && gas<=20)
{
    r=(gas*pre)*0.90
    alert("o total com o desconto é "+r)

}
if(gas>20){
    r=(gas*pre)*0.80
    alert("o total com o desconto é "+r)

}

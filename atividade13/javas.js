var dist,lit,r

dist=parseInt(prompt("digite a distancia percorida"))

lit=parseInt(prompt("digite quantos litros foram gastos"))
r=dist/lit
if(r<8)
{
    alert("vneda o carro")

}
if(r>=8 && r<=14){
    alert("Economico")

}
if(r>=12){
    alert("Super economicos")
}

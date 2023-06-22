//event -> formulario, mais ou menos
function calculateTip(event){ 
    event.preventDefault();

    //pegar os valores que o usuario digitar ou escolher:
    let bill = document.getElementById('bill').value; //elementos primeiro campo
    let serviceQuality = document.getElementById('serviceQuality').value; //elementos segundo campo
    let numOfPeople = document.getElementById('people').value; //elementos terceiro campo

    if(numOfPeople == "" | numOfPeople <= 1){
        numOfPeople = 1; 
        document.getElementById('each').style.display = "none";
    }else{
        document.getElementById('each').style.display = "block";
    }

    let total = (bill * serviceQuality) / numOfPeople;
    total = total.toFixed(2); //passa o valor pra 2 casas
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
}

//Sumir com a frase "cada" e o preço do HTML 
document.getElementById('totalTip').style.display = "none"; //sumiu com o total da gorjeta 
document.getElementById('each').style.display = "none"; //sumiu com o "cada"

document.getElementById('tipsForm').addEventListener('submit', calculateTip) //adicionar evento ao clicar no 
// botão. Quando acontecer o submit, chamar o calculateTip. 
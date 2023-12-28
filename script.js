const container = document.querySelector('.container');
const col1 = []; // Max: 1 a 8 qtd: 5

function coluna_1(){
    var quantidade = 1;
    var padrao = 15;

    while(quantidade <= padrao){
        quantidade++;

        var resultado = Math.floor(Math.random() * 25);

        if(resultado === 0){
            // console.log('Numb Zero', resultado)
            padrao++
            continue;
        }

        if(col1.includes(resultado)){
            // console.log('Repetido', resultado)
            padrao++;
            continue;
        }


        col1.push(resultado);
    }

    return resultado, col1;
}

var result = coluna_1();
result.sort(function (a, b) {
    return a - b;
});

result.map(numb => {
    var id = "";
    if(numb === 20){
        id = "vinte"
    }else if(numb === 1){
        id = "um"
    }

    if(result.indexOf(5) === 0){
        if(numb === 5){
            id = 'raro';
        }
    }
    
    if(result.indexOf(4) === 0){
        if(numb === 4){
            id = 'raro';
        }
    }

    if(result.indexOf(3) === 0){
        if(numb === 3){
            id = 'raro';
        }
    }

    container.innerHTML += `
    <div class="ball ${id}">
        <h1>${numb}</h1>
    </div>`;
})

function handleClick(){
    location.reload();
}






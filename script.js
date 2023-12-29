const container = document.querySelector('.all');
var col1 = []; // Max: 1 a 8 qtd: 5
var newCol = [];

function coluna_1(){
    var quantidade = 1;
    var padrao = 15;

    while(quantidade <= padrao){
        quantidade++;

        var resultado = Math.floor(Math.random() * 26);

        if(resultado === 0){
            padrao++
            continue;
        }

        if(col1.includes(resultado)){
            padrao++;
            continue;
        }


        col1.push(resultado);
    } // while

    if(col1.length === 15){
        newCol.push(col1);
        col1 = [];
    }
    console.log('primeiro', newCol)

    return newCol;
} //function coluna;

coluna_1();

var value = 0
function handleClick(){
    value++
    const resultado = coluna_1();
    const lastResultado = resultado.pop();

    console.log('resultado', resultado);
    console.log('ultimo',lastResultado);

    lastResultado.sort(function (a, b) {
        return a - b;
    });


    var id = '';
    var raramente = '';
    if(lastResultado.indexOf(5) === 0){
        id = 'raro';
        raramente = 'Raramente começa com 3, 4, 5...'
    }
    if(lastResultado.indexOf(3) === 0){
        id = 'hard';
        raramente = 'Raramente começa com 3, 4, 5...'
    }
    if(lastResultado.indexOf(4) === 0){
        id = 'raro';
        raramente = 'Raramente começa com 3, 4, 5...'
    }

    var id2 = '';
    if(lastResultado.indexOf(3) === 1){
        id2 = 'bom'
    }

    if(lastResultado.indexOf(4) === 1){
        id2 = 'maybe'
    }
    

    var id3 = '';
    if(lastResultado.indexOf(4) === 2){
        id3 = 'bom';
    }

    var lastNumb = '';
    if(lastResultado.lastIndexOf(25) === 14){
        lastNumb = 'maybe';
    }


    var vinte = ''
    if(lastResultado.includes(20)){
        vinte = 'Contém 20, o número mais sorteado.';
    }


    container.innerHTML += 
    `
    <div class="conteudo">
        <p>JOGO: ${value}</p>
        <p style="color: green">${vinte}</p>
        <p style="color: red">${raramente}</p>
    </div>
    <div class="container">
        <div class="ball ${id}">
           <h1>${lastResultado[0]}</h1>
        </div>
        <div class="ball ${id2}">
           <h1>${lastResultado[1]}</h1>
        </div>
        <div class="ball ${id3}">
           <h1>${lastResultado[2]}</h1>
        </div>
        <div class="ball">
           <h1>${lastResultado[3]}</h1>
        </div>
        <div class="ball">
           <h1>${lastResultado[4]}</h1>
        </div>
        <div class="ball">
           <h1>${lastResultado[5]}</h1>
        </div>
        <div class="ball">
           <h1>${lastResultado[6]}</h1>
        </div>
        <div class="ball">
           <h1>${lastResultado[7]}</h1>
        </div>
        <div class="ball">
           <h1>${lastResultado[8]}</h1>
        </div>
        <div class="ball">
           <h1>${lastResultado[9]}</h1>
        </div>
        <div class="ball">
           <h1>${lastResultado[10]}</h1>
        </div>
        <div class="ball">
           <h1>${lastResultado[11]}</h1>
        </div>
        <div class="ball">
           <h1>${lastResultado[12]}</h1>
        </div>
        <div class="ball">
           <h1>${lastResultado[13]}</h1>
        </div>
        <div class="ball ${lastNumb}">
           <h1>${lastResultado[14]}</h1>
        </div>
    </div>

    
    `;
}


// var result = coluna_1();
// result.sort(function (a, b) {
//     return a - b;
// });

// result.map(numb => {
//     var id = "";
//     if(numb === 20){
//         id = "vinte"
//     }else if(numb === 1){
//         id = "um"
//     }

//     if(result.indexOf(5) === 0){
//         if(numb === 5){
//             id = 'raro';
//         }
//     }
    
//     if(result.indexOf(4) === 0){
//         if(numb === 4){
//             id = 'raro';
//         }
//     }

//     if(result.indexOf(3) === 0){
//         if(numb === 3){
//             id = 'raro';
//         }
//     }

//     container.innerHTML += `
//     <div class="ball ${id}">
//         <h1>${numb}</h1>
//     </div>`;
// })

// function handleClick(){
//     location.reload();
// }






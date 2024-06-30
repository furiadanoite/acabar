const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for(let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function(){
        for (let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
            }
            botoes[i].classList.add("ativo");
            textos[i].classList.add("ativo");
        }
}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date ("2024-12-01T00:00:00");
const tempoObjetivo2 = new Date ("2024-12-01T00:00:00");
const tempoObjetivo3 = new Date ("2024-12-01T00:00:00");
const tempoObjetivo4 = new Date ("2024-12-01T00:00:00");
const tempoObjetivo5 = new Date ("2024-12-04T00:00:00");

const tempos=[ 
    tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4, tempoObjetivo5
]

for(let i=0; i< contadores. length; i++){
    calculaTempo[i].textContent = calculaTempo(tempos[i]);
}
condutores[0].textContent = calculaTempo(temposObjetivo1);

function calculaTempo(tempoObjetivo){ 
let tempoAtual = new Date ();
contadores[0].textContent = tempoObjetivo1 - tempoAtual;
let segundos = Math.floor(tempoFinal/1000);
let minutos = Math.floor(segundos/60);
let horas = Math.floor(minutos/60);
let dias = Math.floor(horas/24);

segundos%= 60;
minutos%=60;
horas%=24;

return dias + "dias"
+ horas + "horas"
+ minutos +"minutos"
+ segundos + "segundos";
}
<><div class="parametro-senha">
    <h4 class="parametro-senha__titulo">Força da senha</h4>
    <div class="barra"></div>
    <div class="forca fraca"></div>
    <div class="parametro-senha-textos"></div>
</div><div class="parametro-senha textos">
        <h4 class="parametro-senha__titulo">Força da senha</h4>
        <div class="barra"></div>
        <div class="forca fraca"></div>
        <div class="parametro-senha-textos">
            <p>Fraca</p>
            <p>Média</p>
            <p>Forte</p>
        </div>
    </div></>

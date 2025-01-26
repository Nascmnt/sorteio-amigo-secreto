//recuperar os nomes do input
//exibir os nomes na caixa especifica
//fazer o sorteio
//reiniciar

let listaDeNomes = [];

function adicionar() {
    let input = document.getElementById('nome-amigo');
    let nomes = input.value.trim();

    if (nomes !== "") {
        listaDeNomes.push(nomes);
        let amigosIncluidos = listaDeNomes.join(", ");
        document.getElementById('lista-amigos').textContent = amigosIncluidos;
        input.value = "";
    }
}

document.getElementById('nome-amigo').addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        adicionar()
    }
});

document.querySelector(".primary").addEventListener('click', adicionar);

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function sortear() {
    if (listaDeNomes.length <= 2) {
        alert("Adicione o nome de três ou mais amigos antes de continuar.");
        return;
    }
    embaralhar(listaDeNomes);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < listaDeNomes.length; i++) {
        if (i == listaDeNomes.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + listaDeNomes[i] + ' --> ' + listaDeNomes[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaDeNomes[i] + ' --> ' + listaDeNomes[i + 1] + '<br>';
        }
    }
}

function reiniciar() {
    listaDeNomes.splice(0, listaDeNomes.length);
    document.getElementById('lista-amigos').textContent = "";
    document.getElementById('lista-sorteio').textContent = "";
}
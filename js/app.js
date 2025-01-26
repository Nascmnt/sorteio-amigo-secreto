//recuperar os nomes do input
//exibir os nomes na caixa especifica
//fazer o sorteio
//reiniciar

let listaDeNomes = [];

function adicionar() {
    let input = document.getElementById('nome-amigo');
    let nomes = input.value.trim();

     // Regex para permitir apenas letras, espaços e acentos
     const regexValido = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

     if (nomes === "" || !regexValido.test(nomes)) {
        alert("Por favor, insira apenas letras e espaços!")
        input.value = "";
        return;
     }

     const nomeDuplicado = listaDeNomes.some(amigo => amigo.toLowerCase() === nomes.toLowerCase());
     if (nomeDuplicado) {
        alert("Nome já adicionado!");
        input.value = "";
        return;
     }

    if (nomes !== "") {
        listaDeNomes.push(nomes);
        atualizarlista();
        input.value = "";
    }
}

function atualizarlista() {
    const listaContainer = document.getElementById('lista-amigos');

    listaContainer.innerHTML = "";

    listaDeNomes.forEach((nomes, index) => {
        const item = document.createElement('span');
        item.textContent = nomes;
        item.style.cursor = "pointer";

        // Adiciona o evento de clique para remover o nome
        item.addEventListener('click', () => {
            listaDeNomes.splice(index, 1);
            atualizarlista();
        });
        listaContainer.appendChild(item);

        //Adiciona a vírgula entre nomes como elemento a parte
        if (index < listaDeNomes.length - 1) {
            listaContainer.appendChild(document.createTextNode(", "));
        }
    });
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
    if (listaDeNomes.length <= 3) {
        alert("Adicione o nome de quatro ou mais amigos antes de continuar.");
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
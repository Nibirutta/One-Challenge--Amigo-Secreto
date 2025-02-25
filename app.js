let amigos = [];
let amigosSorteados = [];
let checkboxRepetir = false;

function adicionarAmigo(){
    let nomeAmigo = document.getElementById("amigo").value;

    // Verifica se o amigo já foi adicionado ou se o campo está vazio
    if(amigos.includes(nomeAmigo)){
        alert("Amigo já adicionado!");
    } else if (nomeAmigo == ""){
        alert("Digite o nome do amigo!");        
    } else {
        amigos.push(nomeAmigo);
    }

    document.getElementById("amigo").value = "";
    atualizarListaAmigos();
}

function atualizarListaAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    // Adiciona os amigos na lista
    for(let i = 0; i < amigos.length; i++){
        let item = document.createElement("li");

        // Riscar o nome do amigo caso ele já tenha sido sorteado
        if(amigosSorteados.includes(amigos[i]) && checkboxRepetir == false){
            item.style.textDecoration = "line-through";
            item.style.textDecorationThickness = "0.2rem";
            item.style.textDecorationColor = "black";
        }

        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    if(amigos.length == 0){
        alert("Adicione pelo menos um amigo!");
    } else {
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

        // Verifica se o amigo sorteado já foi sorteado anteriormente
        while(amigosSorteados.includes(amigoSorteado) && checkboxRepetir == false){
            amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

            if(amigosSorteados.length == amigos.length){
                document.getElementById("resultado").innerHTML = "Todos os amigos já foram sorteados!";
                return;
            }
        }

        // Adiciona o amigo sorteado na lista de amigos sorteados caso ele não esteja já lá
        if(!amigosSorteados.includes(amigoSorteado)){
            amigosSorteados.push(amigoSorteado);
        }

        // Atualiza a lista de amigos e exibe o amigo sorteado
        document.getElementById("resultado").innerHTML = amigoSorteado + " é o seu amigo secreto!";
        atualizarListaAmigos();
        dispararConfete();
    }
}

// Função para repetir o sorteio de amigo secreto
function repetirAmigo(){
    if(checkboxRepetir == false){
        checkboxRepetir = true;
    } else {
        checkboxRepetir = false;
    }

    atualizarListaAmigos();
}

// Função para disparar o efeito de confete
async function dispararConfete(){
    // Exibe o gif de confete
    Array.from(document.getElementsByClassName("confetti-gif")).forEach(element => {
        element.src = "assets/confettieffectnoloop.gif";
        element.style.display = "block";
    })

    // Aguardar um determinado tempo antes de disparar o efeito
    await esperar(600);
    confetti({
        particleCount: 200,
        angle: 140,
        spread: 70,
        origin: { x: 1 }
    });
    confetti({
        particleCount: 200,
        angle: 40,
        spread: 70,
        origin: { x: 0 }
    });

    // Aguardar um determinado tempo antes de remover o gif de confete
    await esperar(1000);
    Array.from(document.getElementsByClassName("confetti-gif")).forEach(element => {
        element.style.display = "none";
        element.src = "";
    })
}

// Função para aguardar um determinado tempo
function esperar(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
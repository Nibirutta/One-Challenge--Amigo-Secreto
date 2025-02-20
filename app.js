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
                alert("Todos os amigos já foram sorteados!");
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
    }
}

function repetirAmigo(){
    if(checkboxRepetir == false){
        checkboxRepetir = true;
    } else {
        checkboxRepetir = false;
    }

    atualizarListaAmigos();
}
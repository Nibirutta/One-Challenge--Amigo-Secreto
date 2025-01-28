let amigos = [];

function adicionarAmigo(){
    let nomeAmigo = document.getElementById("amigo").value;

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
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    if(amigos.length == 0){
        alert("Adicione pelo menos um amigo!");
    } else {
        amigoSorteado = document.getElementById("resultado");

        amigoSorteado.innerHTML = amigos[Math.floor(Math.random() * amigos.length)] + " é o seu amigo secreto!";
    }
}
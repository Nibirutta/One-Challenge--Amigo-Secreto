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
}
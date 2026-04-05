function jogar(escolhaJogador) {

    const escolhaComputador = Math.floor(Math.random() * 3) + 1;

    const nomes = { 1: "Pedra", 2: "Papel", 3: "Tesoura" };
    
    const p = escolhaJogador;
    const c = escolhaComputador;
    let resultadoFinal = "";

    
    if (p === c) {
        resultadoFinal = "Empate! 🤝";
    } 
    else if ((p === 1 && c === 3) || (p === 2 && c === 1) || (p === 3 && c === 2)) {
        resultadoFinal = "Você Venceu! 🎉";
    } 
    else {
        resultadoFinal = "Você Perdeu! 😢";
    }

    
    const msg = `Você escolheu <strong>${nomes[p]}</strong> e o computador escolheu <strong>${nomes[c]}</strong>.<br>${resultadoFinal}`;
    document.getElementById('resultado').innerHTML = msg;
}
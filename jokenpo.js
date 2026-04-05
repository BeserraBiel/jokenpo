function jogar(p) {
    const c = Math.floor(Math.random() * 3) + 1;
    const icones = { 1: "🪨", 2: "📄", 3: "✂️" };
    
    // 1. Resetar as bordas dos cards
    document.getElementById('player-card').className = 'card';
    document.getElementById('computer-card').className = 'card';

    // 2. Mostrar as escolhas
    document.getElementById('player-img').innerText = icones[p];
    document.getElementById('computer-img').innerText = icones[c];

    const resTexto = document.getElementById('resultado-texto');

    // 3. Lógica do Vencedor
    if (p === c) {
        resTexto.innerText = "EMPATE!";
        resTexto.style.color = "#ffffff";
        document.getElementById('player-card').classList.add('empate');
        document.getElementById('computer-card').classList.add('empate');
    } 
    else if ((p === 1 && c === 3) || (p === 2 && c === 1) || (p === 3 && c === 2)) {
        resTexto.innerText = "VOCÊ VENCEU!";
        resTexto.style.color = "#4ecca3";
        document.getElementById('player-card').classList.add('ganhou');
        document.getElementById('computer-card').classList.add('perdeu');
        
    } 
    else {
        resTexto.innerText = "PC VENCEU!";
        resTexto.style.color = "#e94560";
        document.getElementById('computer-card').classList.add('ganhou');
        document.getElementById('player-card').classList.add('perdeu');
    }
}

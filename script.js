// script.js
import { db, ref, set, onValue, update, get } from './firebase.js';

let playerName = '';
let roomId = '';
let playerIndex = 0;
let maxRounds = 5;

let currentWord = '';
let lettersGuessed = [];
let attemptsLeft = 6;
let currentRound = 1;
let currentPlayer = 1;
let score = { jogador1: 0, jogador2: 0 };

const createRoomBtn = document.getElementById('createRoom');
const joinRoomBtn = document.getElementById('joinRoom');
const letterInput = document.getElementById('letterInput');
const submitLetterBtn = document.getElementById('submitLetter');
const chatInput = document.getElementById('chatInput');
const sendChatBtn = document.getElementById('sendChat');

const wordContainer = document.getElementById('wordContainer');
const hangmanCanvas = document.getElementById('hangmanCanvas');
const ctx = hangmanCanvas.getContext('2d');

createRoomBtn.addEventListener('click', createRoom);
joinRoomBtn.addEventListener('click', joinRoom);
submitLetterBtn.addEventListener('click', submitLetter);
sendChatBtn.addEventListener('click', sendChat);

function createRoom() {
    playerName = document.getElementById('playerName').value.trim();
    roomId = document.getElementById('roomId').value.trim();
    if (!playerName || !roomId) return alert('Digite seu nome e ID da sala');

    const roomRef = ref(db, `salas/${roomId}`);
    get(roomRef).then(snapshot => {
        if (snapshot.exists()) return alert('Sala já existe!');
        set(roomRef, {
            players: [playerName],
            currentPlayer: 1,
            round: 1,
            maxRounds: maxRounds,
            lettersGuessed: [],
            attemptsLeft: 6,
            word: '',
            score: { jogador1:0, jogador2:0 },
            chat: []
        });
        playerIndex = 1;
        startGame();
    });
}

function joinRoom() {
    playerName = document.getElementById('playerName').value.trim();
    roomId = document.getElementById('roomId').value.trim();
    if (!playerName || !roomId) return alert('Digite seu nome e ID da sala');

    const roomRef = ref(db, `salas/${roomId}/players`);
    get(roomRef).then(snapshot => {
        const players = snapshot.val();
        if (!players) return alert('Sala não existe!');
        if (players.length >= 2) return alert('Sala cheia!');
        players.push(playerName);
        update(ref(db, `salas/${roomId}`), { players });
        playerIndex = 2;
        startGame();
    });
}

function startGame() {
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('game').classList.remove('hidden');
    listenGameState();
}

function listenGameState() {
    const roomRef = ref(db, `salas/${roomId}`);
    onValue(roomRef, snapshot => {
        const data = snapshot.val();
        if (!data) return;
        currentPlayer = data.currentPlayer;
        currentRound = data.round;
        lettersGuessed = data.lettersGuessed;
        attemptsLeft = data.attemptsLeft;
        currentWord = data.word;
        score = data.score;

        updateUI();
        drawHangman();
        updateWordDisplay();
        updateChat(data.chat);
    });
}

function updateUI() {
    document.getElementById('roundInfo').innerText = `Round: ${currentRound} / ${maxRounds}`;
    document.getElementById('turnInfo').innerText = `Jogador atual: ${currentPlayer === 1 ? 'Jogador 1' : 'Jogador 2'}`;
    document.getElementById('attemptsInfo').innerText = `Tentativas restantes: ${attemptsLeft}`;
}

function updateWordDisplay() {
    wordContainer.innerHTML = '';
    if (!currentWord) return;
    for (let char of currentWord) {
        const span = document.createElement('span');
        span.innerText = lettersGuessed.includes(char.toLowerCase()) ? char : '_';
        wordContainer.appendChild(span);
    }
}

function submitLetter() {
    const letter = letterInput.value.toLowerCase();
    letterInput.value = '';
    if (!letter || lettersGuessed.includes(letter) || playerIndex !== currentPlayer) return;

    lettersGuessed.push(letter);
    if (!currentWord.includes(letter)) {
        attemptsLeft--;
    }

    update(ref(db, `salas/${roomId}`), { lettersGuessed, attemptsLeft });
    checkRoundEnd();
}

function checkRoundEnd() {
    const wordGuessed = currentWord.split('').every(l => lettersGuessed.includes(l.toLowerCase()));
    if (wordGuessed) endRound(true);
    else if (attemptsLeft <= 0) endRound(false);
}

function endRound(won) {
    if (won) score[`jogador${currentPlayer}`] += 1;

    if (currentRound >= maxRounds) {
        alert(`Fim do jogo! Pontuação final: Jogador1=${score.jogador1}, Jogador2=${score.jogador2}`);
        return;
    }

    currentRound++;
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    lettersGuessed = [];
    attemptsLeft = 6;
    currentWord = '';
    update(ref(db, `salas/${roomId}`), { round: currentRound, currentPlayer, lettersGuessed, attemptsLeft, word: '', score });
    updateUI();
    updateWordDisplay();
    clearCanvas();
}

function drawHangman() {
    ctx.clearRect(0,0, hangmanCanvas.width, hangmanCanvas.height);
    ctx.strokeStyle = "#ff0066";
    ctx.lineWidth = 4;
    // base
    ctx.beginPath();
    ctx.moveTo(10, 240);
    ctx.lineTo(150, 240);
    ctx.stroke();
    // poste vertical
    ctx.beginPath();
    ctx.moveTo(50, 240);
    ctx.lineTo(50, 20);
    ctx.stroke();
    // barra horizontal
    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.lineTo(130, 20);
    ctx.stroke();
    // corda
    ctx.beginPath();
    ctx.moveTo(130, 20);
    ctx.lineTo(130, 50);
    ctx.stroke();

    if (attemptsLeft <= 5) { // cabeça
        ctx.beginPath();
        ctx.arc(130, 70, 20, 0, Math.PI * 2);
        ctx.stroke();
    }
    if (attemptsLeft <= 4) { // corpo
        ctx.beginPath();
        ctx.moveTo(130, 90);
        ctx.lineTo(130, 150);
        ctx.stroke();
    }
    if (attemptsLeft <= 3) { // braço esquerdo
        ctx.beginPath();
        ctx.moveTo(130, 100);
        ctx.lineTo(100, 130);
        ctx.stroke();
    }
    if (attemptsLeft <= 2) { // braço direito
        ctx.beginPath();
        ctx.moveTo(130, 100);
        ctx.lineTo(160, 130);
        ctx.stroke();
    }
    if (attemptsLeft <= 1) { // perna esquerda
        ctx.beginPath();
        ctx.moveTo(130, 150);
        ctx.lineTo(100, 190);
        ctx.stroke();
    }
    if (attemptsLeft <= 0) { // perna direita
        ctx.beginPath();
        ctx.moveTo(130, 150);
        ctx.lineTo(160, 190);
        ctx.stroke();
    }
}

function clearCanvas() {
    ctx.clearRect(0,0, hangmanCanvas.width, hangmanCanvas.height);
}

function sendChat() {
    const message = chatInput.value.trim();
    if (!message) return;
    chatInput.value = '';

    const chatRef = ref(db, `salas/${roomId}/chat`);
    get(chatRef).then(snapshot => {
        const chat = snapshot.val() || [];
        chat.push({ player: playerName, message });
        update(ref(db, `salas/${roomId}`), { chat });
    });
}

function updateChat(chatArray) {
    const chatBox = document.getElementById('chatBox');
    chatBox.innerHTML = '';
    chatArray.forEach(msg => {
        const div = document.createElement('div');
        div.textContent = `${msg.player}: ${msg.message}`;
        chatBox.appendChild(div);
    });
    chatBox.scrollTop = chatBox.scrollHeight;
}

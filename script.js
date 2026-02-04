// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBdxd54oFM3eWH1duC5BTdJzjGGRDLMq-Q",
  authDomain: "mary-cb817.firebaseapp.com",
  databaseURL: "https://mary-cb817-default-rtdb.firebaseio.com",
  projectId: "mary-cb817",
  storageBucket: "mary-cb817.firebasestorage.app",
  messagingSenderId: "887348832569",
  appId: "1:887348832569:web:c6d9c32a1a1c402b8960e8",
  measurementId: "G-86HWEH554E"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Variáveis de jogo
let playerName = '';
let roomId = '';
let playerNumber = 0;
let gameData = null;

// Elementos
const menu = document.getElementById('menu');
const game = document.getElementById('game');
const endScreen = document.getElementById('endScreen');

const createBtn = document.getElementById('createRoom');
const joinBtn = document.getElementById('joinRoom');
const restartBtn = document.getElementById('restart');

const playerNameInput = document.getElementById('playerName');
const roomIdInput = document.getElementById('roomIdInput');
const letterInput = document.getElementById('letterInput');

const wordDisplay = document.getElementById('wordDisplay');
const lettersGuessed = document.getElementById('lettersGuessed');
const attemptsLeftEl = document.getElementById('attemptsLeft');
const feedback = document.getElementById('feedback');
const playerTurn = document.getElementById('playerTurn');
const roundInfo = document.getElementById('roundInfo');
const score1El = document.getElementById('score1');
const score2El = document.getElementById('score2');
const endMessage = document.getElementById('endMessage');

// Funções utilitárias
function updateUI() {
    if (!gameData) return;
    let displayWord = '';
    for (let l of gameData.word.split('')) {
        displayWord += gameData.lettersGuessed.includes(l.toLowerCase()) ? l.toUpperCase() + ' ' : '_ ';
    }
    wordDisplay.textContent = displayWord.trim();
    lettersGuessed.textContent = 'Letras tentadas: ' + gameData.lettersGuessed.join(', ');
    attemptsLeftEl.textContent = gameData.attemptsLeft;
    roundInfo.textContent = 'Round ' + gameData.round;
    score1El.textContent = gameData.score.jogador1;
    score2El.textContent = gameData.score.jogador2;
    playerTurn.textContent = `Turno de: Jogador ${gameData.currentPlayer}`;
}

function checkEndRound() {
    if (!gameData) return;
    const allGuessed = gameData.word.split('').every(l => gameData.lettersGuessed.includes(l.toLowerCase()));
    if (allGuessed) {
        feedback.textContent = `Jogador ${gameData.currentPlayer} acertou!`;
        gameData.score['jogador' + gameData.currentPlayer]++;
        nextRound();
    } else if (gameData.attemptsLeft <= 0) {
        feedback.textContent = `Jogador ${gameData.currentPlayer} errou! Palavra: ${gameData.word}`;
        nextRound();
    }
    db.ref('salas/' + roomId).set(gameData);
}

function nextRound() {
    if (!gameData) return;
    gameData.round++;
    gameData.lettersGuessed = [];
    gameData.attemptsLeft = 6;
    gameData.word = prompt(`Jogador ${gameData.currentPlayer} escolha a palavra do próximo round:`).toLowerCase();
    gameData.currentPlayer = gameData.currentPlayer === 1 ? 2 : 1;
    feedback.textContent = '';
    updateUI();
    db.ref('salas/' + roomId).set(gameData);
}

// Eventos
createBtn.addEventListener('click', () => {
    playerName = playerNameInput.value.trim();
    if (!playerName) return alert('Digite seu nome');
    roomId = Math.random().toString(36).substring(2, 8);
    playerNumber = 1;
    gameData = {
        word: prompt('Jogador 1, digite a palavra inicial:').toLowerCase(),
        lettersGuessed: [],
        attemptsLeft: 6,
        currentPlayer: 2,
        round: 1,
        score: { jogador1: 0, jogador2: 0 }
    };
    db.ref('salas/' + roomId).set(gameData);
    menu.classList.remove('active');
    game.classList.add('active');
    updateUI();
    alert(`Sala criada! ID: ${roomId}`);
});

joinBtn.addEventListener('click', () => {
    playerName = playerNameInput.value.trim();
    if (!playerName) return alert('Digite seu nome');
    roomId = roomIdInput.value.trim();
    if (!roomId) return alert('Digite ID da sala');
    playerNumber = 2;
    db.ref('salas/' + roomId).on('value', snapshot => {
        if (!snapshot.exists()) return alert('Sala não encontrada');
        gameData = snapshot.val();
        menu.classList.remove('active');
        game.classList.add('active');
        updateUI();
    });
});

document.getElementById('guessLetter').addEventListener('click', () => {
    if (!gameData) return;
    const letter = letterInput.value.toLowerCase();
    if (!letter || gameData.lettersGuessed.includes(letter)) return;
    gameData.lettersGuessed.push(letter);
    if (!gameData.word.includes(letter)) {
        gameData.attemptsLeft--;
    }
    letterInput.value = '';
    updateUI();
    checkEndRound();
});

restartBtn.addEventListener('click', () => {
    location.reload();
});

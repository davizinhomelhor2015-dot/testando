<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🎮 Jogo da Forca Ultimate - Multiplayer Online</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
            --primary: #00ffff; --secondary: #ff00ff;
            --success: #00ff66; --danger: #ff0055;
            --warning: #ffc800; --bg-dark: #0a0a0a;
            --bg-card: rgba(15,15,25,0.95);
            --text-primary: #ffffff; --text-secondary: #888;
        }
        body {
            font-family: 'Segoe UI', -apple-system, system-ui, sans-serif;
            background: var(--bg-dark); color: var(--text-primary);
            min-height: 100vh; overflow-x: hidden; position: relative;
        }
        body::before {
            content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: radial-gradient(circle at 20% 50%, rgba(0,255,255,0.15) 0%, transparent 50%),
                        radial-gradient(circle at 80% 50%, rgba(255,0,255,0.15) 0%, transparent 50%);
            pointer-events: none; z-index: 0;
            animation: bgPulse 8s ease-in-out infinite;
        }
        @keyframes bgPulse { 0%,100% { opacity:0.5; } 50% { opacity:0.8; } }
        #particles { position:fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:1; }
        .particle {
            position:absolute; width:4px; height:4px; background:var(--primary);
            border-radius:50%; opacity:0.5; animation:float 15s infinite;
        }
        @keyframes float {
            0%,100% { transform:translateY(0) translateX(0); }
            25% { transform:translateY(-100px) translateX(50px); }
            50% { transform:translateY(-200px) translateX(-30px); }
            75% { transform:translateY(-150px) translateX(80px); }
        }
        .container { position:relative; z-index:2; max-width:1200px; margin:0 auto; padding:20px; }
        header { text-align:center; padding:30px 0; }
        h1 {
            font-size: clamp(2rem,5vw,3.5rem); font-weight:900;
            text-transform:uppercase; letter-spacing:4px;
            background: linear-gradient(90deg, var(--primary), var(--secondary), var(--primary));
            background-size:200% auto;
            -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
            animation:gradientFlow 4s linear infinite;
            filter:drop-shadow(0 0 20px rgba(0,255,255,0.5)); margin-bottom:10px;
        }
        @keyframes gradientFlow { 0% { background-position:0% center; } 100% { background-position:200% center; } }
        .subtitle { font-size:clamp(0.9rem,2vw,1.2rem); color:var(--text-secondary); letter-spacing:3px; text-transform:uppercase; }
        .audio-control { position:fixed; top:20px; right:20px; z-index:1000; }
        .audio-btn {
            background:rgba(0,20,40,0.8); border:2px solid var(--primary); color:var(--primary);
            width:50px; height:50px; border-radius:50%; cursor:pointer; font-size:1.5rem;
            transition:all 0.3s ease; box-shadow:0 0 20px rgba(0,255,255,0.4);
            display:flex; align-items:center; justify-content:center;
        }
        .audio-btn:hover { background:rgba(0,255,255,0.2); box-shadow:0 0 30px rgba(0,255,255,0.8); transform:scale(1.1); }
        .audio-btn.muted { border-color:var(--danger); color:var(--danger); box-shadow:0 0 20px rgba(255,0,85,0.4); }
        .screen { display:none; animation:fadeIn 0.5s ease; }
        .screen.active { display:block; }
        @keyframes fadeIn { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        .card {
            background:var(--bg-card); border:2px solid rgba(0,255,255,0.4);
            border-radius:20px; padding:40px; margin:20px auto; max-width:600px;
            box-shadow:0 10px 50px rgba(0,0,0,0.7), 0 0 30px rgba(0,255,255,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
            backdrop-filter:blur(10px);
        }
        .card h2 { font-size:2rem; margin-bottom:30px; color:var(--primary); text-shadow:0 0 20px rgba(0,255,255,0.6); }
        .btn {
            background:linear-gradient(135deg, var(--primary), #00aacc);
            border:none; color:#000; padding:16px 40px; font-size:1.1rem; font-weight:700;
            border-radius:50px; cursor:pointer; transition:all 0.3s ease;
            text-transform:uppercase; letter-spacing:2px;
            box-shadow:0 5px 20px rgba(0,255,255,0.4); margin:10px 5px;
            position:relative; overflow:hidden;
        }
        .btn::before {
            content:''; position:absolute; top:0; left:-100%; width:100%; height:100%;
            background:linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition:left 0.5s;
        }
        .btn:hover::before { left:100%; }
        .btn:hover { transform:translateY(-3px); box-shadow:0 8px 30px rgba(0,255,255,0.6); }
        .btn:active { transform:translateY(-1px); }
        .btn:disabled { opacity:0.5; cursor:not-allowed; transform:none !important; }
        .btn-secondary { background:linear-gradient(135deg, var(--secondary), #cc00aa); box-shadow:0 5px 20px rgba(255,0,255,0.4); }
        .btn-secondary:hover { box-shadow:0 8px 30px rgba(255,0,255,0.6); }
        input, select {
            width:100%; padding:16px 20px; font-size:1.1rem;
            border:2px solid rgba(0,255,255,0.3); border-radius:12px;
            background:rgba(0,0,0,0.6); color:#fff; margin:15px 0;
            transition:all 0.3s ease; font-family:inherit;
        }
        input:focus, select:focus { outline:none; border-color:var(--primary); box-shadow:0 0 20px rgba(0,255,255,0.4); background:rgba(0,0,0,0.8); }
        input::placeholder { color:#666; }
        select option { background:#0a0a1a; }
        .game-area { max-width:900px; margin:0 auto; }
        .game-header {
            display:flex; justify-content:space-between; align-items:center;
            flex-wrap:wrap; gap:15px; margin-bottom:30px; padding:20px;
            background:rgba(0,0,0,0.5); border-radius:15px; border:1px solid rgba(0,255,255,0.3);
        }
        .game-info { flex:1; min-width:150px; }
        .game-info h3 { color:var(--primary); font-size:0.85rem; margin-bottom:8px; text-transform:uppercase; letter-spacing:2px; opacity:0.8; }
        .game-info p { font-size:1.4rem; font-weight:700; color:#fff; }
        .players-info { display:flex; gap:20px; flex-wrap:wrap; }
        .player-card {
            background:rgba(0,255,255,0.05); padding:15px 25px; border-radius:12px;
            border:2px solid rgba(0,255,255,0.3); text-align:center; min-width:150px;
            transition:all 0.3s ease;
        }
        .player-card h4 { font-size:0.75rem; color:var(--text-secondary); margin-bottom:8px; text-transform:uppercase; letter-spacing:1px; }
        .player-card p { font-size:1.1rem; font-weight:700; margin:5px 0; }
        .player-card.active-setter { background:rgba(255,200,0,0.1); border-color:var(--warning); box-shadow:0 0 25px rgba(255,200,0,0.4); transform:scale(1.05); }
        .player-card.active-guesser { background:rgba(0,255,100,0.1); border-color:var(--success); box-shadow:0 0 25px rgba(0,255,100,0.4); transform:scale(1.05); }
        .timer { font-size:2.5rem; font-weight:900; color:var(--warning); text-shadow:0 0 20px rgba(255,200,0,0.8); }
        .timer.urgent { color:var(--danger); animation:timerPulse 0.5s infinite; }
        @keyframes timerPulse { 0%,100% { transform:scale(1); } 50% { transform:scale(1.1); } }
        .hangman-display { text-align:center; margin:40px 0; }
        .hangman-svg { max-width:280px; height:280px; margin:0 auto; filter:drop-shadow(0 0 15px rgba(0,255,255,0.3)); }
        .hangman-part { opacity:0; transition:opacity 0.4s ease; }
        .word-display { text-align:center; margin:40px 0; padding:30px 20px; background:rgba(0,0,0,0.3); border-radius:15px; }
        .category-display { font-size:1rem; color:var(--warning); margin-bottom:15px; text-transform:uppercase; letter-spacing:2px; }
        .word-letters { display:flex; justify-content:center; gap:12px; flex-wrap:wrap; margin-bottom:25px; min-height:70px; align-items:center; }
        .letter-box {
            width:50px; height:65px; display:flex; align-items:center; justify-content:center;
            font-size:2.2rem; font-weight:900; border-bottom:4px solid var(--primary);
            color:var(--primary); text-transform:uppercase;
            text-shadow:0 0 15px rgba(0,255,255,1); animation:letterReveal 0.4s ease;
        }
        @keyframes letterReveal { 0% { transform:scale(0) rotateY(180deg); opacity:0; } 100% { transform:scale(1) rotateY(0); opacity:1; } }
        .mistakes-info { font-size:1.3rem; color:var(--danger); font-weight:700; text-shadow:0 0 15px rgba(255,0,85,0.6); margin-top:15px; }
        .keyboard {
            display:grid; grid-template-columns:repeat(auto-fit, minmax(45px, 1fr));
            gap:10px; max-width:700px; margin:30px auto; padding:25px;
            background:rgba(0,0,0,0.4); border-radius:20px; border:1px solid rgba(0,255,255,0.2);
        }
        .key-btn {
            aspect-ratio:1; min-height:50px; background:rgba(0,255,255,0.08);
            border:2px solid rgba(0,255,255,0.4); color:var(--primary);
            font-size:1.3rem; font-weight:700; border-radius:12px; cursor:pointer;
            transition:all 0.2s ease; text-transform:uppercase;
        }
        .key-btn:hover:not(:disabled) { background:rgba(0,255,255,0.2); transform:translateY(-3px) scale(1.05); box-shadow:0 5px 20px rgba(0,255,255,0.5); border-color:var(--primary); }
        .key-btn:active:not(:disabled) { transform:translateY(-1px) scale(1.02); }
        .key-btn:disabled { opacity:0.4; cursor:not-allowed; background:rgba(60,60,60,0.3); border-color:#444; color:#666; }
        .key-btn.correct { background:rgba(0,255,100,0.25); border-color:var(--success); color:var(--success); animation:correctPulse 0.5s ease; }
        @keyframes correctPulse { 0%,100% { transform:scale(1); } 50% { transform:scale(1.15); } }
        .key-btn.wrong { background:rgba(255,0,85,0.25); border-color:var(--danger); color:var(--danger); animation:wrongShake 0.5s ease; }
        @keyframes wrongShake { 0%,100% { transform:translateX(0); } 25% { transform:translateX(-5px); } 75% { transform:translateX(5px); } }
        .chat-container {
            margin-top:40px; background:rgba(0,0,0,0.6); border:2px solid rgba(0,255,255,0.3);
            border-radius:15px; padding:20px; max-width:700px; margin-left:auto; margin-right:auto;
        }
        .chat-container h3 { margin-bottom:15px; color:var(--primary); font-size:1.1rem; text-transform:uppercase; letter-spacing:2px; }
        .chat-messages {
            height:200px; overflow-y:auto; margin-bottom:15px; padding:15px;
            background:rgba(0,0,0,0.5); border-radius:10px; border:1px solid rgba(0,255,255,0.1);
        }
        .chat-messages::-webkit-scrollbar { width:8px; }
        .chat-messages::-webkit-scrollbar-track { background:rgba(0,0,0,0.3); border-radius:10px; }
        .chat-messages::-webkit-scrollbar-thumb { background:rgba(0,255,255,0.5); border-radius:10px; }
        .chat-message { margin:10px 0; padding:10px 14px; background:rgba(0,255,255,0.08); border-radius:10px; border-left:3px solid var(--primary); animation:msgSlide 0.3s ease; }
        @keyframes msgSlide { from { opacity:0; transform:translateX(-20px); } to { opacity:1; transform:translateX(0); } }
        .chat-message .sender { font-weight:700; color:var(--primary); font-size:0.9rem; margin-bottom:4px; }
        .chat-message .text { color:#ddd; line-height:1.4; }
        .chat-input-area { display:flex; gap:10px; }
        .chat-input-area input { flex:1; margin:0; }
        .chat-input-area button { padding:16px 35px; margin:0; flex-shrink:0; }
        .ranking-list { margin-top:20px; }
        .ranking-item {
            display:flex; justify-content:space-between; align-items:center;
            padding:18px 20px; margin:12px 0; background:rgba(0,0,0,0.4);
            border-radius:12px; border-left:4px solid var(--primary); transition:all 0.3s ease;
        }
        .ranking-item:hover { background:rgba(0,255,255,0.1); transform:translateX(8px); box-shadow:0 5px 20px rgba(0,255,255,0.3); }
        .ranking-item.top-1 { border-left-color:#ffd700; background:rgba(255,215,0,0.08); }
        .ranking-item.top-2 { border-left-color:#c0c0c0; background:rgba(192,192,192,0.08); }
        .ranking-item.top-3 { border-left-color:#cd7f32; background:rgba(205,127,50,0.08); }
        .ranking-position { font-size:1.8rem; font-weight:900; color:var(--primary); min-width:60px; }
        .ranking-name { flex:1; font-size:1.2rem; font-weight:700; padding:0 20px; }
        .ranking-score { font-size:1.4rem; font-weight:900; color:var(--secondary); }
        .modal { display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.92); z-index:2000; align-items:center; justify-content:center; }
        .modal.active { display:flex; }
        .modal-content {
            background:var(--bg-card); border:3px solid var(--primary); border-radius:25px;
            padding:50px; max-width:500px; text-align:center;
            box-shadow:0 0 60px rgba(0,255,255,0.6);
            animation:modalPop 0.5s cubic-bezier(0.68,-0.55,0.265,1.55);
        }
        @keyframes modalPop { 0% { transform:scale(0.5) rotate(-5deg); opacity:0; } 100% { transform:scale(1) rotate(0); opacity:1; } }
        .modal-content h2 { font-size:3rem; margin-bottom:25px; text-transform:uppercase; }
        .modal-content p { font-size:1.3rem; margin:20px 0; }
        .modal-content.victory { border-color:var(--success); box-shadow:0 0 60px rgba(0,255,100,0.6); }
        .modal-content.victory h2 { color:var(--success); text-shadow:0 0 30px rgba(0,255,100,1); animation:victoryGlow 1s ease-in-out infinite; }
        @keyframes victoryGlow { 0%,100% { text-shadow:0 0 20px rgba(0,255,100,0.8); } 50% { text-shadow:0 0 40px rgba(0,255,100,1); } }
        .modal-content.defeat { border-color:var(--danger); box-shadow:0 0 60px rgba(255,0,85,0.6); }
        .modal-content.defeat h2 { color:var(--danger); text-shadow:0 0 30px rgba(255,0,85,1); }
        .loading { text-align:center; padding:40px; }
        .spinner { width:60px; height:60px; border:5px solid rgba(0,255,255,0.1); border-top-color:var(--primary); border-radius:50%; animation:spin 1s linear infinite; margin:0 auto 20px; }
        @keyframes spin { to { transform:rotate(360deg); } }
        .status-message { padding:20px; border-radius:12px; margin:20px 0; text-align:center; font-weight:600; font-size:1.05rem; line-height:1.6; }
        .status-info { background:rgba(0,255,255,0.12); border:2px solid rgba(0,255,255,0.5); color:var(--primary); }
        .status-warning { background:rgba(255,200,0,0.12); border:2px solid rgba(255,200,0,0.5); color:var(--warning); }
        .toast-container { position:fixed; top:80px; right:20px; z-index:3000; max-width:350px; }
        .toast {
            background:var(--bg-card); border:2px solid var(--primary); border-radius:12px;
            padding:15px 20px; margin-bottom:10px; box-shadow:0 5px 20px rgba(0,0,0,0.5);
            animation:toastSlide 0.3s ease; color:#fff;
        }
        @keyframes toastSlide { from { transform:translateX(400px); opacity:0; } to { transform:translateX(0); opacity:1; } }
        .toast.success { border-color:var(--success); }
        .toast.error { border-color:var(--danger); }
        .toast.warning { border-color:var(--warning); }
        .stats-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(150px,1fr)); gap:15px; margin:20px 0; }
        .stat-box { background:rgba(0,0,0,0.4); padding:20px; border-radius:12px; border:2px solid rgba(0,255,255,0.3); text-align:center; }
        .stat-box h4 { font-size:0.85rem; color:var(--text-secondary); margin-bottom:10px; text-transform:uppercase; }
        .stat-box p { font-size:1.8rem; font-weight:900; color:var(--primary); }
        .text-center { text-align:center; }
        .mt-20 { margin-top:20px; }
        .mb-20 { margin-bottom:20px; }
        @media (max-width:768px) {
            .container { padding:15px; }
            .card { padding:25px; }
            .game-header { flex-direction:column; }
            .players-info { width:100%; justify-content:center; }
            .letter-box { width:40px; height:55px; font-size:1.8rem; }
            .keyboard { grid-template-columns:repeat(7,1fr); gap:6px; padding:15px; }
            .key-btn { min-height:42px; font-size:1.1rem; }
            .btn { padding:14px 30px; font-size:1rem; }
            .hangman-svg { max-width:220px; height:220px; }
            .modal-content { padding:30px; margin:20px; }
            .modal-content h2 { font-size:2.2rem; }
            .chat-input-area { flex-direction:column; }
            .chat-input-area button { width:100%; }
            .toast-container { left:20px; right:20px; max-width:none; }
        }
    </style>
</head>
<body>
    <div id="particles"></div>
    <div class="toast-container" id="toastContainer"></div>
    <div class="audio-control">
        <button class="audio-btn" id="audioToggle" title="Controle de Música">🔊</button>
    </div>
    <div class="container">
        <header>
            <h1>🎮 Jogo da Forca Ultimate</h1>
            <p class="subtitle">Multiplayer Online - Edição Definitiva</p>
        </header>

        <!-- Home -->
        <div id="homeScreen" class="screen active">
            <div class="card">
                <h2 class="text-center mb-20">Bem-vindo!</h2>
                <input type="text" id="playerNameInput" placeholder="Digite seu nome" maxlength="20" autofocus>
                <div class="text-center">
                    <button class="btn" id="createRoomBtn">🎲 Criar Sala</button>
                    <button class="btn btn-secondary" id="joinRoomBtn">🚪 Entrar em Sala</button>
                    <button class="btn btn-secondary" id="viewRankingBtn">🏆 Ver Ranking</button>
                </div>
            </div>
        </div>

        <!-- Join Room -->
        <div id="joinRoomScreen" class="screen">
            <div class="card">
                <h2 class="text-center mb-20">Entrar em Sala</h2>
                <input type="text" id="roomIdInput" placeholder="Digite o ID da sala" maxlength="20" style="text-transform:uppercase;">
                <div class="text-center">
                    <button class="btn" id="confirmJoinBtn">✅ Entrar</button>
                    <button class="btn btn-secondary" id="backFromJoinBtn">⬅️ Voltar</button>
                </div>
            </div>
        </div>

        <!-- Waiting Room -->
        <div id="waitingRoomScreen" class="screen">
            <div class="card">
                <h2 class="text-center mb-20" id="waitingTitle">🎉 Sala Criada!</h2>
                <div class="status-message status-info">
                    <p><strong>🔑 ID da Sala:</strong></p>
                    <p><span id="displayRoomId" style="font-size:1.8rem;letter-spacing:4px;font-weight:900;"></span></p>
                    <p class="mt-20">📤 Compartilhe este ID com seu amigo!</p>
                    <button class="btn btn-secondary" id="copyRoomIdBtn" style="margin-top:15px;">📋 Copiar ID</button>
                </div>
                <div class="loading" id="waitingSpinner">
                    <div class="spinner"></div>
                    <p id="waitingText">⏳ Aguardando segundo jogador...</p>
                </div>
                <div class="chat-container" style="margin-top:30px;">
                    <h3>💬 Chat</h3>
                    <div class="chat-messages" id="waitingChatMessages"></div>
                    <div class="chat-input-area">
                        <input type="text" id="waitingChatInput" placeholder="Digite uma mensagem..." maxlength="100">
                        <button class="btn" id="waitingSendChatBtn">Enviar</button>
                    </div>
                </div>
                <div class="text-center mt-20">
                    <button class="btn btn-secondary" id="cancelRoomBtn">❌ Cancelar</button>
                </div>
            </div>
        </div>

        <!-- Set Word -->
        <div id="setWordScreen" class="screen">
            <div class="card">
                <h2 class="text-center mb-20">📝 Defina a Palavra</h2>
                <div class="status-message status-info">
                    <p>🎯 Você vai definir a palavra desta rodada!</p>
                    <p>Escolha uma palavra para seu oponente adivinhar.</p>
                </div>
                <label for="categorySelect" style="color:var(--primary);font-weight:700;margin-top:15px;display:block;">Categoria:</label>
                <select id="categorySelect">
                    <option value="Geral">🌍 Geral</option>
                    <option value="Animais">🐾 Animais</option>
                    <option value="Frutas">🍎 Frutas</option>
                    <option value="Países">🌎 Países</option>
                    <option value="Profissões">👨‍💼 Profissões</option>
                    <option value="Esportes">⚽ Esportes</option>
                    <option value="Tecnologia">💻 Tecnologia</option>
                </select>
                <input type="text" id="wordInput" placeholder="Digite a palavra (apenas letras, mín. 3)" maxlength="20" style="text-transform:uppercase;">
                <div class="text-center">
                    <button class="btn" id="confirmWordBtn">✅ Confirmar Palavra</button>
                </div>
                <div class="chat-container" style="margin-top:30px;">
                    <h3>💬 Chat</h3>
                    <div class="chat-messages" id="setWordChatMessages"></div>
                    <div class="chat-input-area">
                        <input type="text" id="setWordChatInput" placeholder="Digite uma mensagem..." maxlength="100">
                        <button class="btn" id="setWordSendChatBtn">Enviar</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Game -->
        <div id="gameScreen" class="screen">
            <div class="game-area">
                <div class="game-header">
                    <div class="game-info">
                        <h3>🎮 Sala</h3>
                        <p id="gameRoomId">-</p>
                    </div>
                    <div class="game-info">
                        <h3>⏱️ Tempo</h3>
                        <p id="gameTimer" class="timer">--</p>
                    </div>
                    <div class="players-info">
                        <div class="player-card" id="player1Card">
                            <h4>Jogador 1</h4>
                            <p id="player1Name">-</p>
                            <p id="player1Score" style="color:var(--warning);">0 pts</p>
                        </div>
                        <div class="player-card" id="player2Card">
                            <h4>Jogador 2</h4>
                            <p id="player2Name">-</p>
                            <p id="player2Score" style="color:var(--warning);">0 pts</p>
                        </div>
                    </div>
                </div>

                <div class="hangman-display">
                    <svg class="hangman-svg" viewBox="0 0 200 250">
                        <line x1="10" y1="230" x2="150" y2="230" stroke="var(--primary)" stroke-width="4" stroke-linecap="round"/>
                        <line x1="50" y1="230" x2="50" y2="20" stroke="var(--primary)" stroke-width="4" stroke-linecap="round"/>
                        <line x1="50" y1="20" x2="130" y2="20" stroke="var(--primary)" stroke-width="4" stroke-linecap="round"/>
                        <line x1="130" y1="20" x2="130" y2="50" stroke="var(--primary)" stroke-width="3" stroke-linecap="round"/>
                        <circle cx="130" cy="70" r="20" stroke="var(--danger)" stroke-width="4" fill="none" class="hangman-part" id="head"/>
                        <line x1="130" y1="90" x2="130" y2="150" stroke="var(--danger)" stroke-width="4" class="hangman-part" id="body" stroke-linecap="round"/>
                        <line x1="130" y1="110" x2="100" y2="130" stroke="var(--danger)" stroke-width="4" class="hangman-part" id="leftArm" stroke-linecap="round"/>
                        <line x1="130" y1="110" x2="160" y2="130" stroke="var(--danger)" stroke-width="4" class="hangman-part" id="rightArm" stroke-linecap="round"/>
                        <line x1="130" y1="150" x2="110" y2="190" stroke="var(--danger)" stroke-width="4" class="hangman-part" id="leftLeg" stroke-linecap="round"/>
                        <line x1="130" y1="150" x2="150" y2="190" stroke="var(--danger)" stroke-width="4" class="hangman-part" id="rightLeg" stroke-linecap="round"/>
                    </svg>
                </div>

                <div class="word-display">
                    <div class="category-display" id="categoryDisplay">Categoria: -</div>
                    <div class="word-letters" id="wordLetters"></div>
                    <p class="mistakes-info">❌ Erros: <span id="mistakesCount">0</span> / 6</p>
                </div>

                <div class="keyboard" id="keyboard"></div>

                <div class="text-center mt-20">
                    <button class="btn btn-secondary" id="leaveGameBtn">🚪 Sair da Sala</button>
                </div>

                <div class="chat-container">
                    <h3>💬 Chat ao Vivo</h3>
                    <div class="chat-messages" id="chatMessages"></div>
                    <div class="chat-input-area">
                        <input type="text" id="chatInput" placeholder="Digite uma mensagem..." maxlength="100">
                        <button class="btn" id="sendChatBtn">Enviar</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Ranking -->
        <div id="rankingScreen" class="screen">
            <div class="card">
                <h2 class="text-center mb-20">🏆 Ranking Global 🏆</h2>
                <div class="ranking-list" id="rankingList">
                    <div class="loading"><div class="spinner"></div><p>Carregando ranking...</p></div>
                </div>
                <div class="text-center mt-20">
                    <button class="btn btn-secondary" id="backFromRankingBtn">⬅️ Voltar</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Result Modal -->
    <div id="resultModal" class="modal">
        <div class="modal-content" id="resultModalContent">
            <h2 id="resultTitle">Vitória!</h2>
            <p id="resultMessage"></p>
            <p id="resultWord" style="font-size:1.8rem;color:var(--primary);font-weight:700;margin:25px 0;"></p>
            <div class="stats-grid" id="resultStats"></div>
            <button class="btn" id="playAgainBtn">🔄 Jogar Novamente</button>
            <button class="btn btn-secondary" id="exitToHomeBtn">🏠 Sair</button>
        </div>
    </div>

    <script type="module">
        import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js';
        import {
            getDatabase, ref, set, get, onValue,
            push, remove, update, onDisconnect, serverTimestamp
        } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js';

        const firebaseConfig = {
            apiKey: "AIzaSyBdxd54oFM3eWH1duC5BTdJzjGGRDLMq-Q",
            authDomain: "mary-cb817.firebaseapp.com",
            databaseURL: "https://mary-cb817-default-rtdb.firebaseio.com",
            projectId: "mary-cb817",
            storageBucket: "mary-cb817.firebasestorage.app",
            messagingSenderId: "887348832569",
            appId: "1:887348832569:web:c6d9c32a1a1c402b8960e8"
        };

        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);

        // ── STATE ──────────────────────────────────────────────────────────
        const gs = {
            playerId: Math.random().toString(36).slice(2) + Date.now().toString(36),
            playerName: '',
            roomId: null,
            role: null,
            currentWord: '',
            category: 'Geral',
            maskedWord: [],
            guessedLetters: [],
            mistakes: 0,
            maxMistakes: 6,
            gameStatus: 'waiting',
            players: {},
            scores: {},
            roomListener: null,
            chatListener: null,
            timerInterval: null,
            timerStart: null,
            gameOver: false,
            roundStartTime: null
        };

        // ── AUDIO ──────────────────────────────────────────────────────────
        const audio = {
            bgMusic: null,
            isMuted: localStorage.getItem('audioMuted') === 'true',
            init() {
                this.bgMusic = new Audio('https://customer-assets.emergentagent.com/job_scalable-rtdb-app/artifacts/mgego13u_WhatsApp-Video-2026-02-02-at-20.16.54.mp3');
                this.bgMusic.loop = true;
                this.bgMusic.volume = 0.2;
                const btn = document.getElementById('audioToggle');
                this.updateBtn(btn);
                document.addEventListener('click', () => {
                    if (!this.isMuted && this.bgMusic.paused) this.bgMusic.play().catch(() => {});
                }, { once: true });
                btn.addEventListener('click', () => this.toggle());
            },
            toggle() {
                this.isMuted = !this.isMuted;
                localStorage.setItem('audioMuted', this.isMuted);
                const btn = document.getElementById('audioToggle');
                this.updateBtn(btn);
                if (this.isMuted) this.bgMusic.pause();
                else this.bgMusic.play().catch(() => {});
            },
            updateBtn(btn) {
                btn.textContent = this.isMuted ? '🔇' : '🔊';
                btn.classList.toggle('muted', this.isMuted);
            },
            // Web Audio API for sound effects
            playTone(freq, type, duration) {
                if (this.isMuted) return;
                try {
                    const ctx = new (window.AudioContext || window.webkitAudioContext)();
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.connect(gain); gain.connect(ctx.destination);
                    osc.type = type; osc.frequency.value = freq;
                    gain.gain.setValueAtTime(0.3, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
                    osc.start(); osc.stop(ctx.currentTime + duration);
                } catch(e) {}
            },
            correct() { this.playTone(880, 'sine', 0.3); },
            wrong()   { this.playTone(150, 'sawtooth', 0.4); },
            win()     { [523,659,784,1047].forEach((f,i) => setTimeout(() => this.playTone(f,'sine',0.4), i*150)); },
            lose()    { [400,320,250,200].forEach((f,i) => setTimeout(() => this.playTone(f,'sawtooth',0.4), i*150)); }
        };

        // ── PARTICLES ─────────────────────────────────────────────────────
        function initParticles() {
            const container = document.getElementById('particles');
            for (let i = 0; i < 20; i++) {
                const p = document.createElement('div');
                p.className = 'particle';
                p.style.cssText = `
                    left:${Math.random()*100}%;
                    top:${Math.random()*100}%;
                    animation-delay:${Math.random()*15}s;
                    animation-duration:${10+Math.random()*20}s;
                    background:${Math.random()>0.5?'var(--primary)':'var(--secondary)'};
                    width:${2+Math.random()*4}px; height:${2+Math.random()*4}px;
                `;
                container.appendChild(p);
            }
        }

        // ── TOAST ─────────────────────────────────────────────────────────
        function showToast(msg, type = 'info', duration = 3000) {
            const container = document.getElementById('toastContainer');
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;
            toast.textContent = msg;
            container.appendChild(toast);
            setTimeout(() => {
                toast.style.animation = 'toastSlide 0.3s ease reverse';
                setTimeout(() => toast.remove(), 300);
            }, duration);
        }

        // ── SCREEN ────────────────────────────────────────────────────────
        function showScreen(id) {
            document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
            document.getElementById(id).classList.add('active');
        }

        // ── CHAT ──────────────────────────────────────────────────────────
        function setupChat(messagesId, inputId, btnId, path) {
            const messagesEl = document.getElementById(messagesId);
            const inputEl   = document.getElementById(inputId);
            let sendBtn     = document.getElementById(btnId);

            if (!messagesEl || !inputEl || !sendBtn) return;

            // Detach previous chat listener
            if (gs.chatListener) { gs.chatListener(); gs.chatListener = null; }

            // FIX: proper arrow function syntax (original had missing =>)
            gs.chatListener = onValue(ref(database, path), (snap) => {
                messagesEl.innerHTML = '';
                const msgs = snap.val() || {};
                Object.values(msgs).sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0)).forEach(msg => {
                    const div = document.createElement('div');
                    div.className = 'chat-message';
                    const senderEl = document.createElement('div');
                    senderEl.className = 'sender';
                    senderEl.textContent = msg.sender || 'Anônimo';
                    const textEl = document.createElement('div');
                    textEl.className = 'text';
                    textEl.textContent = msg.text || '';
                    div.appendChild(senderEl);
                    div.appendChild(textEl);
                    messagesEl.appendChild(div);
                });
                messagesEl.scrollTop = messagesEl.scrollHeight;
            });

            // Replace button to remove stale listeners
            const newBtn = sendBtn.cloneNode(true);
            sendBtn.parentNode.replaceChild(newBtn, sendBtn);

            const sendMsg = () => {
                const text = inputEl.value.trim();
                if (!text) return;
                push(ref(database, path), {
                    sender: gs.playerName,
                    text,
                    timestamp: serverTimestamp()
                });
                inputEl.value = '';
            };

            newBtn.addEventListener('click', sendMsg);
            inputEl.addEventListener('keydown', e => { if (e.key === 'Enter') sendMsg(); });
        }

        // ── CLEANUP ───────────────────────────────────────────────────────
        function cleanup() {
            if (gs.roomListener) { gs.roomListener(); gs.roomListener = null; }
            if (gs.chatListener) { gs.chatListener(); gs.chatListener = null; }
            if (gs.timerInterval) { clearInterval(gs.timerInterval); gs.timerInterval = null; }
        }

        // ── HANGMAN ───────────────────────────────────────────────────────
        function updateHangman(mistakes) {
            ['head','body','leftArm','rightArm','leftLeg','rightLeg'].forEach((id, i) => {
                const el = document.getElementById(id);
                if (el) el.style.opacity = i < mistakes ? 1 : 0;
            });
        }

        // ── WORD DISPLAY ─────────────────────────────────────────────────
        // Firebase drops null values from arrays — use sentinel string to preserve slots
        const NULL_SLOT = '__NULL__';

        function toArray(val, expectedLen) {
            if (!val && expectedLen) return Array(expectedLen).fill(null);
            if (!val) return [];
            const restore = x => (x === NULL_SLOT || x === undefined) ? null : x;
            if (Array.isArray(val)) return val.map(restore);
            // Firebase stores arrays as objects: {0: x, 1: y, ...}
            const keys = Object.keys(val).map(Number).filter(n => !isNaN(n));
            if (keys.length === 0) return expectedLen ? Array(expectedLen).fill(null) : [];
            const len = Math.max(...keys) + 1;
            return Array.from({ length: len }, (_, i) => restore(val[i]));
        }

        // Replace null with sentinel before saving to Firebase
        function toFirebaseArray(arr) {
            return arr.map(x => x === null ? NULL_SLOT : x);
        }

        function updateWordDisplay() {
            const el = document.getElementById('wordLetters');
            if (!el) return;
            const wordLen = gs.currentWord.length || 0;
            const arr = toArray(gs.maskedWord, wordLen);
            el.innerHTML = arr.map(l =>
                `<span class="letter-box">${(l && l !== NULL_SLOT) ? l : ''}</span>`
            ).join('');
        }

        // ── KEYBOARD ─────────────────────────────────────────────────────
        // FIX: track if keyboard was already built to avoid full rebuild on every Firebase update
        let keyboardBuilt = false;

        function generateKeyboard() {
            const kb = document.getElementById('keyboard');
            if (!kb) return;
            // Only rebuild from scratch when starting a fresh round
            kb.innerHTML = '';
            keyboardBuilt = true;
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(letter => {
                const btn = document.createElement('button');
                btn.className = 'key-btn';
                btn.textContent = letter;
                btn.addEventListener('click', () => handleGuess(letter));
                kb.appendChild(btn);
            });
        }

        function syncKeyboardState() {
            // Re-apply disabled state from gs.guessedLetters without rebuilding
            if (!keyboardBuilt) return;
            document.querySelectorAll('.key-btn').forEach(btn => {
                const letter = btn.textContent;
                if (gs.guessedLetters.includes(letter)) {
                    btn.disabled = true;
                    btn.classList.remove('correct', 'wrong');
                    btn.classList.add(gs.currentWord.includes(letter) ? 'correct' : 'wrong');
                }
            });
        }

        function disableKey(letter, correct) {
            document.querySelectorAll('.key-btn').forEach(btn => {
                if (btn.textContent === letter) {
                    btn.disabled = true;
                    btn.classList.add(correct ? 'correct' : 'wrong');
                }
            });
        }

        // ── TIMER ─────────────────────────────────────────────────────────
        function startTimer() {
            if (gs.timerInterval) clearInterval(gs.timerInterval);
            gs.timerStart = Date.now();
            const timerEl = document.getElementById('gameTimer');
            gs.timerInterval = setInterval(() => {
                const elapsed = Math.floor((Date.now() - gs.timerStart) / 1000);
                const mins = String(Math.floor(elapsed / 60)).padStart(2, '0');
                const secs = String(elapsed % 60).padStart(2, '0');
                if (timerEl) {
                    timerEl.textContent = `${mins}:${secs}`;
                    timerEl.classList.toggle('urgent', elapsed > 90);
                }
            }, 1000);
        }

        // ── GUESS HANDLER ─────────────────────────────────────────────────
        function handleGuess(letter) {
            if (gs.role !== 'guesser' || gs.gameOver) return;
            const guessedArr = toArray(gs.guessedLetters);
            if (guessedArr.includes(letter)) return;

            const updatedGuessed = [...guessedArr, letter];
            const wordArr = gs.currentWord.split('');
            const indices = wordArr.reduce((acc, l, i) => { if (l === letter) acc.push(i); return acc; }, []);
            const updateData = { guessedLetters: updatedGuessed };

            if (indices.length > 0) {
                // FIX: always convert maskedWord from Firebase object to real array before spreading
                const currentMask = toArray(gs.maskedWord);
                const updatedMask = [...currentMask];
                indices.forEach(i => updatedMask[i] = letter);
                // Save with sentinels so Firebase preserves remaining null slots
                updateData.maskedWord = toFirebaseArray(updatedMask);
                // Won if no null slots remain
                if (!updatedMask.some(x => x === null || x === undefined)) {
                    updateData.status = 'finished';
                    updateData.result = 'guesser_won';
                    updateData.duration = Math.floor((Date.now() - (gs.roundStartTime || Date.now())) / 1000);
                }
                audio.correct();
            } else {
                const newMistakes = gs.mistakes + 1;
                updateData.mistakes = newMistakes;
                // FIX: use >= so 6th error definitely triggers game over
                if (newMistakes >= gs.maxMistakes) {
                    updateData.status = 'finished';
                    updateData.result = 'setter_won';
                    updateData.duration = Math.floor((Date.now() - (gs.roundStartTime || Date.now())) / 1000);
                }
                audio.wrong();
            }

            update(ref(database, `rooms/${gs.roomId}`), updateData);
        }

        // ── RESULT ────────────────────────────────────────────────────────
        function showResult(isWin, duration) {
            if (gs.gameOver) return;
            gs.gameOver = true;
            if (gs.timerInterval) { clearInterval(gs.timerInterval); gs.timerInterval = null; }

            const modal = document.getElementById('resultModalContent');
            const titleEl = document.getElementById('resultTitle');
            const msgEl   = document.getElementById('resultMessage');
            const wordEl  = document.getElementById('resultWord');
            const statsEl = document.getElementById('resultStats');

            modal.className = `modal-content ${isWin ? 'victory' : 'defeat'}`;
            titleEl.textContent = isWin ? '🏆 Vitória!' : '💀 Derrota!';
            msgEl.textContent   = isWin
                ? (gs.role === 'guesser' ? 'Você adivinhou a palavra!' : 'O oponente não adivinhou!')
                : (gs.role === 'guesser' ? 'Você não adivinhou a palavra.' : 'O oponente adivinhou sua palavra.');
            wordEl.textContent  = `Palavra: ${gs.currentWord}`;

            const mins = String(Math.floor((duration||0)/60)).padStart(2,'0');
            const secs = String((duration||0)%60).padStart(2,'0');
            statsEl.innerHTML = `
                <div class="stat-box"><h4>⏱️ Tempo</h4><p>${mins}:${secs}</p></div>
                <div class="stat-box"><h4>❌ Erros</h4><p>${gs.mistakes}/6</p></div>
                <div class="stat-box"><h4>📏 Letras</h4><p>${gs.currentWord.length}</p></div>
            `;

            isWin ? audio.win() : audio.lose();

            // Update score in Firebase
            const pointsKey = isWin ? gs.playerId : null;
            if (pointsKey) {
                const current = gs.scores[pointsKey] || 0;
                update(ref(database, `rooms/${gs.roomId}/scores`), { [pointsKey]: current + 1 });
                // Global ranking
                const globalRef = ref(database, `ranking/${pointsKey}`);
                get(globalRef).then(snap => {
                    const data = snap.val() || { name: gs.playerName, wins: 0 };
                    set(globalRef, { name: gs.playerName, wins: (data.wins || 0) + 1 });
                });
            }

            document.getElementById('resultModal').classList.add('active');
        }

        // ── RESET ─────────────────────────────────────────────────────────
        async function resetGame() {
            gs.gameOver = false;

            // Only the SETTER of the current round writes the reset.
            // The guesser just closes the modal and waits for the Firebase update.
            // This prevents both players writing conflicting role-flips.
            const snap = await get(ref(database, `rooms/${gs.roomId}/roles`));
            const currentRoles = snap.val() || {};
            const myCurrentRole = currentRoles[gs.playerId];

            if (myCurrentRole !== 'setter') {
                // Guesser: just wait — the setter will trigger the reset
                return;
            }

            // Build flipped roles
            const newRoles = {};
            Object.keys(currentRoles).forEach(id => {
                newRoles[id] = currentRoles[id] === 'setter' ? 'guesser' : 'setter';
            });

            await update(ref(database, `rooms/${gs.roomId}`), {
                roles: newRoles,
                currentWord: '',
                category: '',
                maskedWord: [],
                guessedLetters: [],
                mistakes: 0,
                status: 'set_word',
                result: null,
                roundStartTime: serverTimestamp()
            });
        }

        // ── ROOM UPDATE HANDLER ───────────────────────────────────────────
        function handleRoomUpdate(snap) {
            const data = snap.val();
            if (!data) {
                cleanup();
                showToast('A sala foi encerrada.', 'warning');
                showScreen('homeScreen');
                return;
            }

            gs.players        = data.players || {};
            gs.scores         = data.scores  || {};
            const roles       = data.roles   || {};
            gs.role           = roles[gs.playerId];
            gs.currentWord    = data.currentWord    || '';
            gs.category       = data.category       || '';
            // FIX: always convert Firebase object→array for maskedWord and guessedLetters
            gs.maskedWord     = toArray(data.maskedWord, gs.currentWord.length || 0);
            gs.guessedLetters = toArray(data.guessedLetters);
            gs.mistakes       = data.mistakes        || 0;
            gs.roundStartTime = data.roundStartTime  || Date.now();

            // Update player cards
            const playerEntries = Object.entries(gs.players);
            const p1 = playerEntries[0];
            const p2 = playerEntries[1];

            if (p1) {
                document.getElementById('player1Name').textContent  = p1[1].name || '-';
                document.getElementById('player1Score').textContent = `${gs.scores[p1[0]] || 0} pts`;
                document.getElementById('player1Card').className    = 'player-card' + (roles[p1[0]] === 'guesser' ? ' active-guesser' : roles[p1[0]] === 'setter' ? ' active-setter' : '');
            }
            if (p2) {
                document.getElementById('player2Name').textContent  = p2[1].name || '-';
                document.getElementById('player2Score').textContent = `${gs.scores[p2[0]] || 0} pts`;
                document.getElementById('player2Card').className    = 'player-card' + (roles[p2[0]] === 'guesser' ? ' active-guesser' : roles[p2[0]] === 'setter' ? ' active-setter' : '');
            }

            document.getElementById('gameRoomId').textContent      = gs.roomId;
            document.getElementById('categoryDisplay').textContent  = `📂 Categoria: ${gs.category || '-'}`;
            document.getElementById('mistakesCount').textContent    = gs.mistakes;

            updateWordDisplay();
            updateHangman(gs.mistakes);

            if (data.status === 'set_word') {
                gs.gameOver = false;
                keyboardBuilt = false;
                if (gs.role === 'setter') {
                    showScreen('setWordScreen');
                    setupChat('setWordChatMessages','setWordChatInput','setWordSendChatBtn', `rooms/${gs.roomId}/chat`);
                } else {
                    // Guesser waits
                    showScreen('waitingRoomScreen');
                    document.getElementById('waitingTitle').textContent = '⏳ Aguardando a palavra...';
                    document.getElementById('displayRoomId').textContent = gs.roomId;
                    const spinner = document.getElementById('waitingSpinner');
                    if (spinner) { spinner.style.display = 'block'; document.getElementById('waitingText').textContent = '⏳ Aguardando o oponente escolher a palavra...'; }
                    setupChat('waitingChatMessages','waitingChatInput','waitingSendChatBtn', `rooms/${gs.roomId}/chat`);
                }
            } else if (data.status === 'playing') {
                // Track the current word to detect a new round
                const isNewRound = !keyboardBuilt || gs._lastWord !== data.currentWord;
                gs._lastWord = data.currentWord;

                showScreen('gameScreen');

                if (isNewRound) {
                    keyboardBuilt = false;
                    startTimer();
                }

                if (gs.role === 'guesser') {
                    if (!keyboardBuilt) {
                        generateKeyboard();
                    }
                    syncKeyboardState();
                } else {
                    if (!keyboardBuilt) {
                        document.getElementById('keyboard').innerHTML =
                            '<p style="text-align:center;color:var(--text-secondary);padding:20px;">⏳ Aguardando o oponente adivinhar...</p>';
                        keyboardBuilt = true;
                    }
                }
                setupChat('chatMessages','chatInput','sendChatBtn', `rooms/${gs.roomId}/chat`);
            } else if (data.status === 'finished') {
                showScreen('gameScreen');
                setupChat('chatMessages','chatInput','sendChatBtn', `rooms/${gs.roomId}/chat`);
                if (data.result === 'guesser_won') showResult(gs.role === 'guesser', data.duration);
                else if (data.result === 'setter_won') showResult(gs.role === 'setter', data.duration);
            }

            // Auto-advance from waiting when 2nd player joins
            if (Object.keys(gs.players).length === 2 && data.status === 'waiting') {
                update(ref(database, `rooms/${gs.roomId}`), { status: 'set_word' });
            }
        }

        // ── RANKING ───────────────────────────────────────────────────────
        async function loadRanking() {
            const rankingList = document.getElementById('rankingList');
            rankingList.innerHTML = '<div class="loading"><div class="spinner"></div><p>Carregando...</p></div>';
            try {
                const snap = await get(ref(database, 'ranking'));
                const data = snap.val() || {};
                const sorted = Object.entries(data)
                    .map(([id, val]) => ({ id, name: val.name, wins: val.wins || 0 }))
                    .sort((a, b) => b.wins - a.wins)
                    .slice(0, 20);

                if (sorted.length === 0) {
                    rankingList.innerHTML = '<p style="text-align:center;color:var(--text-secondary);padding:20px;">Nenhum jogador ainda. Seja o primeiro! 🏆</p>';
                    return;
                }

                const medals = ['🥇','🥈','🥉'];
                rankingList.innerHTML = sorted.map((p, i) => `
                    <div class="ranking-item ${i < 3 ? 'top-' + (i+1) : ''}">
                        <span class="ranking-position">${medals[i] || (i+1)}</span>
                        <span class="ranking-name">${escapeHtml(p.name)}</span>
                        <span class="ranking-score">${p.wins} vit.</span>
                    </div>
                `).join('');
            } catch (e) {
                rankingList.innerHTML = '<p style="text-align:center;color:var(--danger);">Erro ao carregar ranking.</p>';
            }
        }

        function escapeHtml(str) {
            return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
        }

        // ── EVENTS ────────────────────────────────────────────────────────
        document.getElementById('createRoomBtn').addEventListener('click', async () => {
            const name = document.getElementById('playerNameInput').value.trim();
            if (!name) { showToast('Digite seu nome!', 'error'); return; }
            gs.playerName = name;
            gs.roomId = Math.random().toString(36).substring(2,8).toUpperCase();
            gs.role   = 'setter';
            gs.players = { [gs.playerId]: { name, score: 0 } };
            try {
                await set(ref(database, `rooms/${gs.roomId}`), {
                    status: 'waiting',
                    players: gs.players,
                    roles: { [gs.playerId]: 'setter' },
                    roundStartTime: serverTimestamp(),
                    createdAt: serverTimestamp()
                });
                // Auto-remove on disconnect
                onDisconnect(ref(database, `rooms/${gs.roomId}`)).remove();

                document.getElementById('displayRoomId').textContent = gs.roomId;
                document.getElementById('waitingTitle').textContent  = '🎉 Sala Criada!';
                showScreen('waitingRoomScreen');
                setupChat('waitingChatMessages','waitingChatInput','waitingSendChatBtn', `rooms/${gs.roomId}/chat`);
                gs.roomListener = onValue(ref(database, `rooms/${gs.roomId}`), handleRoomUpdate);
                showToast('Sala criada! Compartilhe o ID.', 'success');
            } catch (e) {
                console.error(e);
                showToast('Erro ao criar sala.', 'error');
            }
        });

        document.getElementById('joinRoomBtn').addEventListener('click', () => {
            const name = document.getElementById('playerNameInput').value.trim();
            if (!name) { showToast('Digite seu nome!', 'error'); return; }
            gs.playerName = name;
            showScreen('joinRoomScreen');
        });

        document.getElementById('confirmJoinBtn').addEventListener('click', async () => {
            const roomId = document.getElementById('roomIdInput').value.trim().toUpperCase();
            if (!roomId) { showToast('Digite o ID da sala!', 'error'); return; }
            try {
                const roomRef = ref(database, `rooms/${roomId}`);
                const snap    = await get(roomRef);
                if (!snap.exists())          { showToast('Sala não encontrada.', 'error'); return; }
                const data = snap.val();
                if (data.status !== 'waiting') { showToast('Sala não disponível.', 'warning'); return; }
                if (data.players && Object.keys(data.players).length >= 2) { showToast('Sala cheia!', 'warning'); return; }

                gs.roomId = roomId;
                gs.role   = 'guesser';
                gs.players = { ...data.players, [gs.playerId]: { name: gs.playerName, score: 0 } };
                await update(roomRef, {
                    players: gs.players,
                    roles: { ...(data.roles||{}), [gs.playerId]: 'guesser' },
                    status: 'set_word'
                });
                onDisconnect(ref(database, `rooms/${gs.roomId}/players/${gs.playerId}`)).remove();

                document.getElementById('displayRoomId').textContent = gs.roomId;
                document.getElementById('waitingTitle').textContent  = '⏳ Aguardando a palavra...';
                showScreen('waitingRoomScreen');
                setupChat('waitingChatMessages','waitingChatInput','waitingSendChatBtn', `rooms/${gs.roomId}/chat`);
                gs.roomListener = onValue(roomRef, handleRoomUpdate);
                showToast('Entrou na sala!', 'success');
            } catch (e) {
                console.error(e);
                showToast('Erro ao entrar na sala.', 'error');
            }
        });

        document.getElementById('backFromJoinBtn').addEventListener('click', () => showScreen('homeScreen'));

        document.getElementById('copyRoomIdBtn').addEventListener('click', () => {
            navigator.clipboard.writeText(gs.roomId)
                .then(() => showToast('ID copiado!', 'success'))
                .catch(() => showToast('Copie manualmente: ' + gs.roomId, 'warning'));
        });

        document.getElementById('cancelRoomBtn').addEventListener('click', () => {
            cleanup();
            if (gs.roomId) remove(ref(database, `rooms/${gs.roomId}`));
            gs.roomId = null;
            showScreen('homeScreen');
        });

        document.getElementById('confirmWordBtn').addEventListener('click', () => {
            const word     = document.getElementById('wordInput').value.trim().toUpperCase();
            const category = document.getElementById('categorySelect').value;
            if (word.length < 3) { showToast('A palavra deve ter pelo menos 3 letras.', 'error'); return; }
            if (!/^[A-ZÁÉÍÓÚÃÕÂÊÎÔÛÀÈÌÒÙÇ]+$/.test(word)) { showToast('Use apenas letras (sem números ou símbolos).', 'error'); return; }
            gs.currentWord = word;
            gs.category    = category;
            // Use sentinel for null slots so Firebase preserves them
            update(ref(database, `rooms/${gs.roomId}`), {
                currentWord: word,
                category,
                maskedWord: toFirebaseArray(Array(word.length).fill(null)),
                guessedLetters: [],
                mistakes: 0,
                status: 'playing',
                result: null,
                roundStartTime: serverTimestamp()
            });
        });

        document.getElementById('leaveGameBtn').addEventListener('click', () => {
            if (confirm('Tem certeza que deseja sair?')) {
                cleanup();
                if (gs.roomId) remove(ref(database, `rooms/${gs.roomId}`));
                gs.roomId = null;
                showScreen('homeScreen');
            }
        });

        document.getElementById('playAgainBtn').addEventListener('click', async () => {
            document.getElementById('resultModal').classList.remove('active');
            await resetGame();
            // If we were the guesser (resetGame returned early), wait for Firebase to redirect us
        });

        document.getElementById('exitToHomeBtn').addEventListener('click', () => {
            document.getElementById('resultModal').classList.remove('active');
            cleanup();
            if (gs.roomId) remove(ref(database, `rooms/${gs.roomId}`));
            gs.roomId = null;
            showScreen('homeScreen');
        });

        document.getElementById('viewRankingBtn').addEventListener('click', () => {
            showScreen('rankingScreen');
            loadRanking();
        });

        document.getElementById('backFromRankingBtn').addEventListener('click', () => showScreen('homeScreen'));

        // Keyboard shortcut: press Enter on name input
        document.getElementById('playerNameInput').addEventListener('keydown', e => {
            if (e.key === 'Enter') document.getElementById('createRoomBtn').click();
        });

        // ── INIT ──────────────────────────────────────────────────────────
        initParticles();
        audio.init();
        showScreen('homeScreen');
    </script>
</body>
</html>

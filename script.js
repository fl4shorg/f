// Função para copiar texto para o clipboard e mostrar notificação
function copyText(text) {
    const input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showNotification('Texto copiado: ' + text);
}

// Função para mostrar notificação
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.innerText = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Função para fechar o widget do Instagram
function closeWidget() {
    document.querySelector('.insta-widget').style.display = 'none';
}

// Função para fechar o modal
function agree() {
    document.getElementById('modal').style.display = 'none';
}

// Obter o IP do usuário
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ipValue').innerText = data.ip;
        document.getElementById('ipWarning').innerText = data.ip;
    })
    .catch(error => console.error('Erro ao buscar IP:', error));

// Exibir modal e container
document.getElementById('modal').style.display = 'flex';
document.getElementById('container').style.display = 'block';

// Contador de visitas usando localStorage
let visitCount = localStorage.getItem('visitCount') || 0;
visitCount = parseInt(visitCount) + 1;
localStorage.setItem('visitCount', visitCount);
document.getElementById('visitValue').innerText = visitCount;

// Função para obter o nível de bateria
navigator.getBattery().then(function(battery) {
    document.getElementById('batteryValue').innerText = Math.round(battery.level * 100);
    battery.addEventListener('levelchange', function() {
        document.getElementById('batteryValue').innerText = Math.round(battery.level * 100);
    });
});

// Função para obter informações do dispositivo
function getDeviceInfo() {
    const userAgent = navigator.userAgent;
    let deviceInfo;

    if (/Android/i.test(userAgent)) {
        deviceInfo = "Android";
    } else if (/iPhone/i.test(userAgent)) {
        deviceInfo = "iPhone";
    } else if (/iPad/i.test(userAgent)) {
        deviceInfo = "iPad";
    } else if (/Windows/i.test(userAgent)) {
        deviceInfo = "Windows PC";
    } else if (/Macintosh/i.test(userAgent)) {
        deviceInfo = "Mac OS";
    } else if (/Linux/i.test(userAgent)) {
        deviceInfo = "Linux PC";
    } else if (/Tablet/i.test(userAgent)) {
        deviceInfo = "Tablet";
    } else if (/Mobile/i.test(userAgent)) {
        deviceInfo = "Dispositivo Móvel";
    } else {
        deviceInfo = "Desktop";
    }

    document.getElementById('deviceValue').innerText = deviceInfo;
}

// Função para fechar a notificação
function closeNotification() {
    document.getElementById('notificationWidget').style.display = 'none';
}

function agree() {
        // Obter o elemento de áudio
        const audio = document.getElementById('background-audio');

        // Tocar a música (caso não esteja tocando)
        if (audio.paused) {
            audio.play();
        }

        // Fechar o modal (opcional)
        document.getElementById('modal').style.display = 'none';
    }
    
    function getGreeting() {
    const now = new Date();
    const hour = now.getHours();
    const username = "usuário";  // Nome do usuário, você pode dinamizar se necessário.
    let greeting = "";

    // Determina a saudação com base no horário
    if (hour >= 6 && hour < 12) {
      greeting = "Bom dia, " + username + "!";
    } else if (hour >= 12 && hour < 18) {
      greeting = "Boa tarde, " + username + "!";
    } else if (hour >= 18 && hour < 23) {
      greeting = "Boa noite, " + username + "!";
    } else {
      greeting = "Boa madrugada, " + username + "!";
    }

    // Insere a saudação com o ícone do bonequinho no elemento com id "greeting"
    document.getElementById("greeting").innerHTML = "🤖 " + greeting;
  }


// Função para atualizar a saudação de acordo com o horário
function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour < 6) {
        greeting = "Boa madrugada!";
    } else if (hour < 12) {
        greeting = "Bom dia!";
    } else if (hour < 18) {
        greeting = "Boa tarde!";
    } else {
        greeting = "Boa noite!";
    }

    document.getElementById('greeting').innerText = `${greeting} Bem-vindo!`;
}

// Inicializações
window.onload = function() {
    updateGreeting(); // Atualiza a saudação
    getDeviceInfo();  // Obtém informações do dispositivo
};
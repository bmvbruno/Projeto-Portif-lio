// js/script.js

function abrirWhatsApp() {
    const telefone = '5592991390225'; // SEU número
    
    // Mensagem que a pessoa vai receber no chat dela (para enviar a você)
    const mensagem = 'Olá Dev Bruno! 👋 Vi seu portfólio e gostaria de mais informações.';
    
    // Codificar a mensagem
    const mensagemCodificada = encodeURIComponent(mensagem);
    
    // Abrir WhatsApp com a mensagem pré-escrita
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = isMobile 
        ? `https://api.whatsapp.com/send?phone=${telefone}&text=${mensagemCodificada}`
        : `https://web.whatsapp.com/send?phone=${telefone}&text=${mensagemCodificada}`;
    
    window.open(url, '_blank');
}

// impressão o curriculo em pdf
function gerarPDF() {
    // Abre a janela de impressão
    window.print();
}
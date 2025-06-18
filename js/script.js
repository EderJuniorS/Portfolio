const subtitulo = document.getElementById('subtitulo-animado');
    const textos = ["Desenvolvedor Web", "Programador", "Desenvolvedor Front-end", "Estudante de Ciência da Computação"];
    let textoIndex = 0;
    let i = 0;
    let deletando = false;
    let esperando = false;
    
function animarTexto() {
    const textoAtual = textos[textoIndex];
        
    if (!deletando && !esperando) {
        // Modo digitação
        if (i < textoAtual.length) {
            subtitulo.innerHTML = "Eu sou um <span style='color: #0B60FF;'>" + textoAtual.substring(0, i+1) + "</span>";
            i++;
            setTimeout(animarTexto, 100);
        } else {
            esperando = true;
            setTimeout(() => {
                esperando = false;
                deletando = true;
                animarTexto();
            }, 2000); // Tempo que o texto fica completo (2s)
        }
        } else if (deletando) {
            // Modo apagando
            if (i > 0) {
                subtitulo.innerHTML = "Eu sou um <span style='color: #0B60FF;'>" + textoAtual.substring(0, i-1) + "</span>";
                i--;
                setTimeout(animarTexto, 50); // Velocidade mais rápida para apagar
            } else {
                deletando = false;
                textoIndex = (textoIndex + 1) % textos.length; // Vai para o próximo texto (volta ao primeiro após o último)
                setTimeout(animarTexto, 500); // Pequena pausa antes de começar o próximo texto
            }
        }
    }
    
// Inicia a animação quando a página carrega
window.onload = function() {
    setTimeout(animarTexto, 1000); // Delay antes de começar (1s)
};

// Carregamento de pagina
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.loader').classList.add('fade-out');
    }, 1000);
});

// Botão para voltar ao topo da pagina
window.addEventListener('scroll', function() {
    var backToTop = document.querySelector('.back-to-top');
    if (window.pageYOffset > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});
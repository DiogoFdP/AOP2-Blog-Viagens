// =================================================================
// TÓPICO 07 e 08: Objetos nativos (Date) e Manipulação de DOM
// =================================================================

// Função para exibir saudação com base na hora do usuário
function exibirSaudacao() {
    // Pega o elemento onde a saudação vai aparecer
    let elementoSaudacao = document.getElementById("saudacao");
    
    // Objeto nativo do JS para pegar a data/hora atual
    let dataAtual = new Date();
    let hora = dataAtual.getHours();
    
    let mensagem = "";

    // Lógica condicional (Comportamento)
    if (hora >= 5 && hora < 12) {
        mensagem = "Bom dia, viajante! ☀️";
    } else if (hora >= 12 && hora < 18) {
        mensagem = "Boa tarde, viajante! 🌤️";
    } else {
        mensagem = "Boa noite, viajante! 🌙";
    }

    // Manipulando o DOM para injetar o texto
    if (elementoSaudacao) {
        elementoSaudacao.innerText = mensagem;
    }
}

// Executa a saudação assim que a página carrega
exibirSaudacao();


// =================================================================
// TÓPICO 05 e 06: Validação de Formulários e Comportamento
// =================================================================

// Seleciona o formulário pelo ID (que vamos colocar lá no HTML)
let formContato = document.getElementById("form-contato");

// Verifica se o formulário existe na página atual antes de adicionar o evento
if (formContato) {
    // Adiciona um "ouvinte" para o evento de 'submit' (clicar em enviar)
    formContato.addEventListener("submit", function(evento) {
        
        // Impede a página de recarregar (comportamento padrão do form)
        evento.preventDefault();
        
        // Pega o valor que o usuário digitou no campo nome
        let nomeUsuario = document.getElementById("nome").value;
        
        // Simples validação/feedback usando alert nativo
        alert("Que legal, " + nomeUsuario + "! Sua mensagem foi recebida com sucesso. Em breve entraremos em contato com mais dicas de viagem!");
        
        // Limpa o formulário após enviar (Manipulação de DOM)
        formContato.reset();
    });
}
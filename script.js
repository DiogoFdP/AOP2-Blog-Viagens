// =================================================================
// Parte 1: Objetos nativos (Date) e Manipulação de DOM (Tópicos 7 e 8)
// =================================================================

function exibirSaudacao() {
    // Procuro no HTML se tem algum elemento com o id "saudacao" pra eu alterar
    let elementoSaudacao = document.getElementById("saudacao");
    
    // Aqui apliquei a matéria de Objetos Nativos. Peguei a data/hora do PC do usuário.
    let dataAtual = new Date();
    // Extrai só a hora do objeto
    let hora = dataAtual.getHours();
    
    let mensagem = "";

    // Lógica simples pra decidir qual texto exibir com base na hora
    if (hora >= 5 && hora < 12) {
        mensagem = "Bom dia, viajante! ☀️";
    } else if (hora >= 12 && hora < 18) {
        mensagem = "Boa tarde, viajante! 🌤️";
    } else {
        mensagem = "Boa noite, viajante! 🌙";
    }

    // Se a tag existir na página (manipulando o DOM), escreve a mensagem nela
    if (elementoSaudacao) {
        elementoSaudacao.innerText = mensagem;
    }
}

// Chamo a função direto pra rodar assim que a página abrir
exibirSaudacao();


// =================================================================
// Parte 2: Validação de Formulários e Eventos (Tópicos 5 e 6)
// =================================================================

// Pegando o meu formulário lá do HTML
let formContato = document.getElementById("form-contato");

// Coloquei esse IF porque o form só existe na página de contato. 
// Sem isso, dava erro no console nas outras páginas.
if (formContato) {
    
    // Fico "ouvindo" quando o usuário clicar em enviar (submit)
    formContato.addEventListener("submit", function(evento) {
        
        // Uso o preventDefault pra página não tentar recarregar sozinha e apagar os dados
        evento.preventDefault();
        
        // Pegando o que o usuário digitou na caixinha de "nome"
        let nomeUsuario = document.getElementById("nome").value;
        
        // Mostro um alert confirmando o envio. Simples, mas funciona.
        alert("Que legal, " + nomeUsuario + "! Sua mensagem foi recebida com sucesso. Em breve entraremos em contato com mais dicas de viagem!");
        
        // Uso o reset() do DOM pra limpar os campos pra pessoa poder enviar de novo se quiser
        formContato.reset();
    });
}

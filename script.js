document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validar formulário
        if (validarFormulario()) {
            // Coletar dados
            const dados = {
                nome: document.getElementById('nome').value,
                email: document.getElementById('email').value,
                telefone: document.getElementById('telefone').value,
                data_nascimento: document.getElementById('data_nascimento').value,
                genero: document.getElementById('genero').value,
                mensagem: document.getElementById('mensagem').value
            };

            console.log('Dados do formulário:', dados);

            // Mostrar mensagem de sucesso
            mensagemSucesso.style.display = 'block';

            // Limpar formulário após 2 segundos
            setTimeout(() => {
                formulario.reset();
                mensagemSucesso.style.display = 'none';
            }, 2000);
        }
    });

    // Função para validar formulário
    function validarFormulario() {
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const data_nascimento = document.getElementById('data_nascimento').value;
        const genero = document.getElementById('genero').value;
        const termos = document.getElementById('termos').checked;

        if (!nome) {
            alert('Por favor, preencha o campo de nome');
            return false;
        }

        if (!email) {
            alert('Por favor, preencha o campo de email');
            return false;
        }

        if (!validarEmail(email)) {
            alert('Por favor, insira um email válido');
            return false;
        }

        if (!data_nascimento) {
            alert('Por favor, selecione a data de nascimento');
            return false;
        }

        if (!genero) {
            alert('Por favor, selecione o gênero');
            return false;
        }

        if (!termos) {
            alert('Por favor, aceite os termos e condições');
            return false;
        }

        return true;
    }

    // Função para validar email
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Formatador de telefone
    const telefonInput = document.getElementById('telefone');
    telefonInput.addEventListener('input', function(e) {
        let valor = e.target.value.replace(/\D/g, '');
        if (valor.length > 0) {
            valor = '(' + valor.slice(0, 2) + ') ' + valor.slice(2, 7) + '-' + valor.slice(7, 11);
        }
        e.target.value = valor;
    });
});

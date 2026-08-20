function calcularImc() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');
    const valorImc = document.getElementById('valorImc');
    const classificacao = document.getElementById('classificacao');

    // Validação
    if (!peso || !altura || peso <= 0 || altura <= 0) {
        alert('Por favor, preencha os campos corretamente!');
        return;
    }

    // Converter altura de cm para metros
    const alturaMetros = altura / 100;

    // Calcular IMC: peso / (altura²)
    const imc = peso / (alturaMetros * alturaMetros);
    const imcArredondado = imc.toFixed(1);

    // Determinar classificação
    let classe = '';
    let texto = '';

    if (imc < 18.5) {
        classe = 'abaixo';
        texto = 'Abaixo do Peso';
    } else if (imc < 25) {
        classe = 'normal';
        texto = 'Peso Normal';
    } else if (imc < 30) {
        classe = 'sobrepeso';
        texto = 'Sobrepeso';
    } else {
        classe = 'obesidade';
        texto = 'Obesidade';
    }

    // Mostrar resultado
    valorImc.textContent = imcArredondado;
    classificacao.className = `classificacao ${classe}`;
    classificacao.textContent = texto;
    resultado.style.display = 'block';
}

function limparForm() {
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('peso').focus();
}

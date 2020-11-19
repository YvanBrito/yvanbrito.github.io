const button = document.getElementById('calculate');
button.addEventListener('click', getInputs);

function onInput() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    if (!isNaN(parseFloat(height)) && !isNaN(parseFloat(weight))) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

function getInputs() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    const imc = calculateIMC(height, weight);

    setResults(imc);

    document.getElementById('result').classList.add('slide');
}

function setResults(imc) {
    const result_title = document.getElementById('result_title');
    const result_message = document.getElementById('result_message');
    const result_imc = document.getElementById('result_imc');

    result_imc.innerHTML = imc + ' kg/m<sup>2</sup>';
    if (imc < 18.5) {
        result_title.innerText = 'Magreza';
        result_message.innerText = 'Precisa comer bastante'
    } else if (imc < 24.9) {
        result_title.innerText = 'Normal';
        result_message.innerText = 'Parabéns!!! Você tem um corpo saudável, mantenha-se nesse nível'
    } else if (imc < 30) {
        result_title.innerText = 'Sobrepeso';
        result_message.innerText = 'Peso um pouco a cima do recomendado'
    } else {
        result_title.innerText = 'Obesidade';
        result_message.innerText = 'Alimente-se com bastante frutas e verduras e pratique exercícios físicos'
    }
}

function calculateIMC(height, weight) {
    height /= 100;
    const result = weight/(height * height);
    const roundedResult = Math.round(result * 10) / 10;
    return roundedResult;
}

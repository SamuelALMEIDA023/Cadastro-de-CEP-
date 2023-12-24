const inputCep = document.getElementById('js-cep');
const buttonCep = document.getElementById('js-button');

const inputBairro = document.getElementById('js-dados-bairro');
const inputCepcad = document.getElementById('js-dados-cep');
const inputLogradouro = document.getElementById('js-dados-logradouro');
const inputEstado = document.getElementById('js-dados-estado');

const areaDados = document.querySelector('.todos-dados-cep');

const msgErro = document.getElementById('js-erro');

buttonCep.addEventListener('click', () => {
    if(inputCep.value !== "") {
        axios({
            method:"GET",
            url:`https://viacep.com.br/ws/${inputCep.value}/json/`
        })
        .then(response => {
            let data = response.data;
            inputBairro.value = data.bairro;
            inputCepcad.value = data.cep;
            inputLogradouro.value = data.logradouro;
            inputEstado.value = data.uf;

            areaDados.style.display = 'block';
            msgErro.style.display = 'none';
        });
    } else {
        areaDados.style.display = 'none';
        msgErro.style.display = 'block';

        inputBairro.value =  "";
        inputCepcad.value = "";
        inputLogradouro.value = "";
        inputEstado.value = "";
    }
});
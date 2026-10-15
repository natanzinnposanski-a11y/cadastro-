const formulario = document.getElementById('meuformulario')
const CodigoFilme = document.getElementById('meuCodigoFilme')
const Titulo = document.getElementById('meuTitulo')
const Estoque = document.getElementById('meuEstoque')
const Genero = document.getElementById('meuGenero')
const Midía = document.getElementById('meuMidía')
const Classificação = document.getElementById('meuClassificação')
const Status = document.getElementById('meuStatus')

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    
    if (CodigoFilmeInput.value === '' || tituloInput.value === '' || EstoqueInput.value === '' || GeneroInput.value === '' || Midía.value === '' || Classificação.value === '' || Status.value === '') {
        alert('Voce n terminou ainda :/.');
        return;
    }

    textoAviso.innerText = 'Parabens | ' + nomeInput.value + ' seu cadastro deu certo :)';

    textoAviso.className = 'mostrando';


    CodigoFilme.value = '';
    Titulo.value = '';
    Estoque.value = '';
    Genero.value = '';
    Midía.value = '';
    Classificação = '';
    Status.value = '';



})
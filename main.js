console.log('Olá mundo!');

// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! (Saudações com JavaScript!)';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);

// Estilizando o novo elemento
novoElemento.style.textAlign = 'center';
novoElemento.style.padding = '20px';
novoElemento.style.borderRadius = '10px';
novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';
novoElemento.style.transition = 'background-color 1s, color 1s';

// Função para alterar as cores periodicamente
function mudarCor() {
    let coresDeFundo = ['blue', 'green', 'red', 'purple', 'orange'];
    let coresDeTexto = ['yellow', 'white', 'black', 'pink', 'lightblue'];
    let indice = Math.floor(Math.random() * coresDeFundo.length);
    
    novoElemento.style.backgroundColor = coresDeFundo[indice];
    novoElemento.style.color = coresDeTexto[indice];
}

// Chama a função para mudar a cor a cada 1 segundo (1000ms)
setInterval(mudarCor, 1000);

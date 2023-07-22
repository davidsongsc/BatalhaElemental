// Função para gerar um labirinto
function Mapa(maze, container) {
    const mazeElement = document.createElement("div");
    mazeElement.classList.add("maze");

    maze.forEach(row => {
        row.forEach(cellValue => {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            if (cellValue === 1) {
                cell.classList.add("wall");
            }

            mazeElement.appendChild(cell);
        });
    });

    container.appendChild(mazeElement);
}

// Variáveis para manipular os labirintos
const mazeSize = 20; // Tamanho do labirinto

const worldContainer = document.getElementById("worldContainer");

// Obtendo o tamanho da janela
const windowWidth = window.innerWidth;

// Definindo a largura do labirinto com base no tamanho da janela
const mazeWidth = Math.min(windowWidth, mazeSize * 60);

// Ajustando o tamanho dos quadrados do labirinto
const cellSize = mazeWidth / mazeSize;

// Estilo dinâmico para a classe .maze
const mazeStyle = document.createElement("style");
mazeStyle.textContent = `
    .maze {
        grid-template-columns: repeat(${mazeSize}, ${cellSize}px);
    }
    .cell {
        width: ${cellSize}px;
        height: ${cellSize}px;
    }
 `;

document.head.appendChild(mazeStyle);

const labirinto = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ];
  

// Gerando o labirinto
Mapa(labirinto, worldContainer);

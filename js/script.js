/* MOVIMENTAÇÃO BOMBERMAN */

const bomberman = document.querySelector('.bomberman');
const step = 42;
var positionX = 1;
var positionY = 1;

const initLeft = 84;
const initTop = 40;

const bombLimit = 1;
var bombCount = 0;

const timeStep = 200;

/* Variaveis modal */
const modal = document.querySelector('.modal');
const modalText = document.querySelector('.modal h2');
const modalButton = document.querySelector('.modal button');

/*const matrizGameBoard = [
    [0,1,0,1,0,1,0,1,0,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,1,1,1,0],
    [0,1,0,1,0,1,0,1,0,1,0,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,0,1,1,1,1,1,1,1,0,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,0,1,0,1,0,1,0,1,0,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,0,1,0,1,0,1,0,1,0,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0],
];*/

// 13X15
const matrizGameBoard = [
//   0 1 2 3 4 5 6 7 8 9 0 1 2 3 4
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],// 0
    [1,0,0,0,0,0,0,1,0,0,0,0,0,0,1],// 1
    [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],// 2
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],// 3
    [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],// 4
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],// 5
    [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],// 6
    [1,0,0,0,0,0,1,0,0,0,0,0,0,0,1],// 7
    [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],// 8
    [1,0,1,0,0,0,0,1,0,0,0,0,0,0,1],// 9
    [1,0,1,0,1,0,1,0,1,0,1,1,1,0,1],// 10
    [1,0,1,0,0,0,0,0,0,0,0,0,0,0,1],// 11
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],// 12
];

// Add event listener on keydown
document.addEventListener('keydown', (event) => {
    var keyCode = event.code;
    var positionLeft = +window.getComputedStyle(bomberman).left.replace('px', '');
    var positionTop = +window.getComputedStyle(bomberman).top.replace('px', '');
    
    /* Testa a tecla pressionada */
    if (keyCode == 'ArrowRight') {
        //if ((positionLeft + step) <= 624) {
            if (canWalkRight()) {
                /*bomberman.classList.add('walk-right')
                setTimeout(() => {
                    bomberman.classList.remove('walk-right')
                }, 500);*/
                positionAnimation(positionLeft, 'right');
                
                
            }
        //} 
    } else if (keyCode == 'ArrowLeft') {
        //if ((positionLeft - step) >= 48) {
            if (canWalkLeft()) {
                bomberman.style.left = `${positionLeft - step}px`
            }
        //}
    } else if (keyCode == 'ArrowDown') {
        //if ((positionTop + step) <= 432) {
            if (canWalkDown()) {
                bomberman.style.top = `${positionTop + step}px`
                
            }
        //}
    } else if (keyCode == 'ArrowUp') {
        //if ((positionTop - step) >= 0) {
            if (canWalkUp()) {
                bomberman.style.top = `${positionTop - step}px`
            }
       //}
    } else if (keyCode == 'KeyX') {
        /* Deixar a bomba na tela e na matriz */
        if (bombCount == bombLimit) {
            // Não pode mais soltar bomba
        } else {
            dropBomb();
        }
    }

}, false);


function canWalkRight() {
    //console.log(`matrizGameBoard[${positionY}][${positionX}]`)
    if (matrizGameBoard[positionY][positionX+1] == 0) {
        positionX++;
        return true;
    } else {
        return false;
    }
}

function canWalkLeft() {
    //console.log(`matrizGameBoard[${positionY}][${positionX}]`)
    if (matrizGameBoard[positionY][positionX-1] == 0) {
        positionX--;
        return true;
    } else {
        return false;
    }
}

function canWalkDown() {
    //console.log(matrizGameBoard[positionY][positionX])
    if (matrizGameBoard[positionY+1][positionX] == 0) {
        positionY++;
        return true;
    } else {
        return false;
    }
}

function canWalkUp() {
    //console.log(matrizGameBoard[positionY][positionX])
    if (matrizGameBoard[positionY-1][positionX] == 0) {
        positionY--;
        return true;
    } else {
        return false;
    }
}

function positionAnimation(position, side) {
    if (side == 'right') {
        setTimeout(() => {
            bomberman.style.left = `${position + 7}px`
            bomberman.style.backgroundImage = 'url(img/bomberman/bomberman_right_01.png)';
        }, 0);
        setTimeout(() => {
            bomberman.style.left = `${position + 14}px`
            bomberman.style.backgroundImage = 'url(img/bomberman/bomberman_right_02.png)';
        }, 50);
        setTimeout(() => {
            bomberman.style.left = `${position + 21}px`
            bomberman.style.backgroundImage = 'url(img/bomberman/bomberman_right_03.png)';
        }, 200);
        setTimeout(() => {
            bomberman.style.left = `${position + 28}px`
            bomberman.style.backgroundImage = 'url(img/bomberman/bomberman_right_04.png)';
        }, 200);
        setTimeout(() => {
            bomberman.style.left = `${position + 35}px`
            bomberman.style.backgroundImage = 'url(img/bomberman/bomberman_right_04.png)';
        }, 200);
        setTimeout(() => {
            bomberman.style.left = `${position + 42}px`
            bomberman.style.backgroundImage = 'url(img/bomberman/bomberman_front.png)';
        }, 200);
    } else {
        
    }
}

/* BLOCOS PARA DESTRUIR */

const gameBoard = document.querySelector('.gameboard');
/*const breakableWall = document.createElement('div');
breakableWall.classList.add('breakable-wall');

gameBoard.appendChild(breakableWall);

/* Valores canto superior esquerdo */
//breakableWall.style.left = '46px';
//breakableWall.style.top = '21px';
/*
breakableWall.style.left = '94px';
breakableWall.style.top = '69px';*/

// Criar as paredes nas coordenadas
createBreakableWall(168,124)
createBreakableWall(168,82)
createBreakableWall(84,124)	
createBreakableWall(126,124)
createBreakableWall(126,208)	
createBreakableWall(168,208)
createBreakableWall(168,376)
createBreakableWall(168,418)
createBreakableWall(210,292)
createBreakableWall(252,40)
createBreakableWall(252,292)
createBreakableWall(294,40)
createBreakableWall(336,124)
createBreakableWall(336,166)
createBreakableWall(336,208)
createBreakableWall(378,292)
createBreakableWall(420,40)
createBreakableWall(420,82)
createBreakableWall(420,124)
createBreakableWall(420,292)
createBreakableWall(504,40)
createBreakableWall(504,208)
createBreakableWall(504,250)
createBreakableWall(504,376)
createBreakableWall(546,376)
createBreakableWall(588,124)
createBreakableWall(588,166)
createBreakableWall(588,334)
createBreakableWall(588,376)




function createBreakableWall(positionLeft, positionTop) {
    var breakableWall = document.createElement('div');
    breakableWall.classList.add('breakable-wall');

    gameBoard.appendChild(breakableWall);

    breakableWall.style.left = `${positionLeft}px`;
    breakableWall.style.top = `${positionTop}px`;

    /* Alocação Matriz */
    //console.log(`matrizGameBoard[${((positionTop-initTop)/step)}][${((positionLeft-initLeft)/step)}]`)
    var topX = (((positionTop-initTop)/step)+1);
    var leftY = (((positionLeft-initLeft)/step)+1);
    matrizGameBoard[topX][leftY] = 2;

    /* Criando um ID para a parede de acordo com sua posição na matriz */
    breakableWall.id = `wall-${topX}-${leftY}`;

    //console.log(matrizGameBoard)
}

function createBomb(positionLeft, positionTop) {
    var bomb = document.createElement('div');
    bomb.classList.add('bomb');

    gameBoard.appendChild(bomb);

    bomb.style.left = `${positionLeft}px`;
    bomb.style.top = `${positionTop}px`;

    /* Alocação Matriz */
    //console.log(positionTop+2)
    //console.log(`matrizGameBoard[${((((positionTop+2)-initTop)/step)+1)}][${(((positionLeft-initLeft)/step)+1)}]`)
    matrizGameBoard[((((positionTop+2)-initTop)/step)+1)][(((positionLeft-initLeft)/step)+1)] = 3;

    //console.log(matrizGameBoard)

    return bomb;
}

dropBomb = () => {
    var bombermanLeft = +window.getComputedStyle(bomberman).left.replace('px', '');
    var bombermanTop = +window.getComputedStyle(bomberman).top.replace('px', '');
    var currentBomb = createBomb(bombermanLeft, bombermanTop+30);

    bombCount++;

    var bombX = (((bombermanLeft-initLeft)/step)+1);
    var bombY = ((((bombermanTop+32)-initTop)/step)+1);
    
    // Timer para a explosão da bomba
    setTimeout(() => {
        //console.log('bomba explode')

        // Remove as paredes ao lado da bomba e seta o 0 na matriz
        if (matrizGameBoard[bombY][bombX+1] == 2) {
            document.getElementById(`wall-${bombY}-${bombX+1}`).remove();
            matrizGameBoard[bombY][bombX+1] = 0;
        } else if (matrizGameBoard[bombY][bombX-1] == 2) {
            document.getElementById(`wall-${bombY}-${bombX-1}`).remove();
            matrizGameBoard[bombY][bombX-1] = 0;
        } else if (matrizGameBoard[bombY+1][bombX] == 2) {
            document.getElementById(`wall-${bombY+1}-${bombX}`).remove();
            matrizGameBoard[bombY+1][bombX] = 0;
        } else if (matrizGameBoard[bombY-1][bombX] == 2) {
            document.getElementById(`wall-${bombY-1}-${bombX}`).remove();
            matrizGameBoard[bombY-1][bombX] = 0;
        }

        // Testa se o bomberman foi atingido pela bomba
        var bombermanCurrentLocalLeft = ((((+window.getComputedStyle(bomberman).left.replace('px', ''))-initLeft)/step)+1);
        var bombermanCurrentLocalTop = (((((+window.getComputedStyle(bomberman).top.replace('px', ''))+32)-initTop)/step)+1);
        /*console.log('['+((((+window.getComputedStyle(bomberman).left.replace('px', ''))-initLeft)/step)+1)+']['+(((((+window.getComputedStyle(bomberman).top.replace('px', ''))+32)-initTop)/step)+1)+']')*/

        //console.log(`[${bombX}][${bombY}]`)
        //console.log(`[${bombermanCurrentLocalLeft}][${bombermanCurrentLocalTop}]`)

        // Testa as posições
        if ((bombermanCurrentLocalLeft == bombX && bombermanCurrentLocalTop == bombY) ||
            (bombermanCurrentLocalLeft == bombX-1 && bombermanCurrentLocalTop == bombY) ||
            (bombermanCurrentLocalLeft == bombX+1 && bombermanCurrentLocalTop == bombY) ||
            (bombermanCurrentLocalLeft == bombX && bombermanCurrentLocalTop == bombY-1) ||
            (bombermanCurrentLocalLeft == bombX && bombermanCurrentLocalTop == bombY+1)) {
            
                // Animação morte bomberman

                // Modal informando a morte e reinicio
                modalText.innerHTML = "You Died!";
                modalButton.innerHTML = "Try again";
                modal.style.display = 'block';

        }

        // Remove a bomba da tela e da matriz
        currentBomb.remove();
        matrizGameBoard[bombY][bombX] = 0;
        bombCount--;
        
    }, 3000); // 3 segundos para a bomba explodir
}


// Clique no modal
function restartGame() {
    modal.style.display = 'none';
    window.location.reload();
}

/* MOVIMENTAÇÃO BOMBERMAN */

const bomberman = document.querySelector('.bomberman');
const step = 48;
var positionX = 0;
var positionY = 0;

const matrizGameBoard = [
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
];

// Add event listener on keydown
document.addEventListener('keydown', (event) => {
    var keyCode = event.code;
    var positionLeft = +window.getComputedStyle(bomberman).left.replace('px', '');
    var positionTop = +window.getComputedStyle(bomberman).top.replace('px', '');
    
    /* Testa a tecla pressionada */
    if (keyCode == 'ArrowRight') {
        if ((positionLeft + step) <= 624) {
            if (canWalkRight()) {
                bomberman.style.left = `${positionLeft + step}px`
            }
        } 
    } else if (keyCode == 'ArrowLeft') {
        if ((positionLeft - step) >= 48) {
            if (canWalkLeft()) {
                bomberman.style.left = `${positionLeft - step}px`
            }
        }
    } else if (keyCode == 'ArrowDown') {
        if ((positionTop + step) <= 432) {
            if (canWalkDown()) {
                bomberman.style.top = `${positionTop + step}px`
                
            }
        }
    } else if (keyCode == 'ArrowUp') {
        if ((positionTop - step) >= 0) {
            if (canWalkUp()) {
                bomberman.style.top = `${positionTop - step}px`
            }
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

createBreakableWall(94,69)
createBreakableWall(46,117)

function createBreakableWall(positionLeft, positionTop) {
    var breakableWall = document.createElement('div');
    breakableWall.classList.add('breakable-wall');

    gameBoard.appendChild(breakableWall);

    breakableWall.style.left = `${positionLeft}px`;
    breakableWall.style.top = `${positionTop}px`;
}

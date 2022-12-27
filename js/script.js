/* MOVIMENTAÇÃO BOMBERMAN */

const bomberman = document.querySelector('.bomberman');
const step = 42;
var positionX = 1;
var positionY = 1;

const initLeft = 84;
const initTop = 40;

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
                bomberman.style.left = `${positionLeft + step}px`
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
        dropBomb();
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

//createBreakableWall(94,69)
//createBreakableWall(46,117)

function createBreakableWall(positionLeft, positionTop) {
    var breakableWall = document.createElement('div');
    breakableWall.classList.add('breakable-wall');

    gameBoard.appendChild(breakableWall);

    breakableWall.style.left = `${positionLeft}px`;
    breakableWall.style.top = `${positionTop}px`;

    /* Alocação Matriz */
    matrizGameBoard[((positionTop-initTop)/step)][((positionLeft-initLeft)/step)] = 2;
}

dropBomb = () => {
    console.log('bomba na tela')

    
    setTimeout(() => {
        console.log('bomba explode')
        console.log('remove parede da tela')
    }, 3000);
}

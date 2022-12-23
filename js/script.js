/* MOVIMENTAÇÃO BOMBERMAN */

const bomberman = document.querySelector('.bomberman');
const step = 48;
var positionX = 0;
var positionY = 0;

const matrizGameBoard = [
    [0,1,0,1,0,1,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,0,1,0,1,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,0,1,1,1,1,1,1,1,0,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0,0,0,0],
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
            if (canWalkX()) {
                bomberman.style.left = `${positionLeft + step}px`
            }
        } 
    } else if (keyCode == 'ArrowLeft') {
        if ((positionLeft - step) >= 48) {
            bomberman.style.left = `${positionLeft - step}px`
        }
    } else if (keyCode == 'ArrowDown') {
        if ((positionTop + step) <= 432) {
            if (canWalkY()) {
                bomberman.style.top = `${positionTop + step}px`
                
            }
        }
    } else if (keyCode == 'ArrowUp') {
        if ((positionTop - step) >= 0) {
            bomberman.style.top = `${positionTop - step}px`
        }
    }

}, false);


function canWalkX() {
    console.log(`matrizGameBoard[${positionY}][${positionX}]`)
    if (matrizGameBoard[positionY][positionX+1] == 0) {
        positionX++;
        return true;
    } else {
        return false;
    }
}

function canWalkY() {
    console.log(matrizGameBoard[positionY][positionX+1])
    if (matrizGameBoard[positionY+1][positionX] == 0) {
        positionY++;
        return true;
    } else {
        return false;
    }
}
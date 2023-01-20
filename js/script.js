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

// Constante para controle do tempo da explosão
const timeExplosion = 1000;

// Quantidade de paredes quebráveis, altere para criar mais paredes
var numberOfBkWalls = 5;

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

    
    //console.log(((positionLeft-84) / 42) + 1);
    /*console.log(positionTop);
    console.log('*****************');

    console.log(((positionLeft-84) % 42))
    if (((positionLeft-84) % 42) == 0) {
        console.log('Pode andar')
    } else {
        console.log('Não pode andar')
    }*/
    
    /* Testa a tecla pressionada */
    if (keyCode == 'ArrowRight') {
        //if ((positionLeft + step) <= 624) {
            if (canWalkRight(positionLeft)) {
                /*bomberman.classList.add('walk-right')
                setTimeout(() => {
                    bomberman.classList.remove('walk-right')
                }, 500);*/
                //positionAnimation(positionLeft, 'right');
                /*
                var bombermanX = (((positionLeft-initLeft)/step)+1);
                var bombermanY = ((((positionTop+32)-initTop)/step)+1);

                console.log(bombermanX)
                console.log(bombermanY)

                if (Number.isInteger(bombermanX) && Number.isInteger(bombermanY)) {
                    if (canWalkRight()) {
                        //bomberman.style.left = `${positionLeft + (step/2)}px`
                        positionAnimation(positionLeft, 'right'); 
                    }
                } else {
                    //bomberman.style.left = `${positionLeft + (step/2)}px`
                    positionAnimation(positionLeft, 'right');
                }*/

                
                //move();
                //bomberman.style.left = `${positionLeft + step}px`
                //positionAnimation(positionLeft, 'right');

                positionBomberman(30, positionLeft, 'right', '01', 7, '');
                positionBomberman(60, positionLeft, 'right', '02', 14, '');
                positionBomberman(90, positionLeft, 'right', '03', 21, '');
                positionBomberman(120, positionLeft, 'right', '04', 28, '');
                positionBomberman(150, positionLeft, 'right', '04', 35, '');
                positionBomberman(180, positionLeft, 'front', '01', 42, '');

                
            }
        //} 
    } else if (keyCode == 'ArrowLeft') {
        //if ((positionLeft - step) >= 48) {
            if (canWalkLeft(positionLeft)) {
                //bomberman.style.left = `${positionLeft - step}px`
                positionBomberman(30, positionLeft, 'left', '01', -7, '');
                positionBomberman(60, positionLeft, 'left', '02', -14, '');
                positionBomberman(90, positionLeft, 'left', '03', -21, '');
                positionBomberman(120, positionLeft, 'left', '04', -28, '');
                positionBomberman(150, positionLeft, 'left', '04', -35, '');
                positionBomberman(180, positionLeft, 'front', '01', -42, '');
            }
        //}
    } else if (keyCode == 'ArrowDown') {
        //if ((positionTop + step) <= 432) {
            if (canWalkDown(positionTop)) {
                //bomberman.style.top = `${positionTop + step}px`
                positionBomberman(30, positionTop, 'front', '02', 7, 'top');
                positionBomberman(60, positionTop, 'front', '03', 14, 'top');
                positionBomberman(90, positionTop, 'front', '02', 21, 'top');
                positionBomberman(120, positionTop, 'front', '03', 28, 'top');
                positionBomberman(150, positionTop, 'front', '02', 35, 'top');
                positionBomberman(180, positionTop, 'front', '01', 42, 'top');
                
            }
        //}
    } else if (keyCode == 'ArrowUp') {
        //if ((positionTop - step) >= 0) {
            if (canWalkUp(positionTop)) {
                //bomberman.style.top = `${positionTop - step}px`
                positionBomberman(30, positionTop, 'back', '02', -7, 'top');
                positionBomberman(60, positionTop, 'back', '03', -14, 'top');
                positionBomberman(90, positionTop, 'back', '02', -21, 'top');
                positionBomberman(120, positionTop, 'back', '03', -28, 'top');
                positionBomberman(150, positionTop, 'back', '02', -35, 'top');
                positionBomberman(180, positionTop, 'front', '01', -42, 'top');
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


function canWalkRight(positionLeft) {
    if (matrizGameBoard[positionY][positionX+1] == 0) {
        if ((((positionLeft-84) / 42)+2) == positionX+1) {
            positionX++;
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function canWalkLeft(positionLeft) {
    if (matrizGameBoard[positionY][positionX-1] == 0) {
        if ((((positionLeft-84) / 42)) == positionX-1) {
            positionX--;
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function canWalkDown(positionTop) {
    if (matrizGameBoard[positionY+1][positionX] == 0) {
        if ((((positionTop-8) / 42)+2) == positionY+1) {
            positionY++;
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function canWalkUp(positionTop) {
    if (matrizGameBoard[positionY-1][positionX] == 0) {
        if ((((positionTop-8) / 42)) == positionY-1) {
            positionY--;
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

move = () => {
    bomberman.classList.add('walk-right')

    // FUNÇÃO QUE RECEBE UMA FUNÇÃO ANONIMA E UM TEMPO
    setTimeout(() => {
        bomberman.classList.remove('walk-right')
    }, 300);
}

function bombExpand(bomb) {
    bomb.classList.add('bomb-expand')

    setTimeout(() => {
        bomb.classList.remove('bomb-expand')

        bombExplode(bomb)
    }, 3000);
}

function bombExplode(bomb) {

    if (canExplodeRight()) {

        let explo = createExplosionElement(Number(bomb.style.left.replace('px', '')), Number(bomb.style.top.replace('px', '')), 'right')

        explo.classList.add('explosion')

        let img = document.createElement('img');
        img.src = 'img/bomb/bomb_explosion.png';
        
        explo.appendChild(img);
        img.classList.add('explosion-img');
        img.classList.add('explosion-right-img');

        setTimeout(() => {
            explo.remove();
        }, timeExplosion);
    }
    
    if (canExplodeLeft()) {
        let explo = createExplosionElement(Number(bomb.style.left.replace('px', '')), Number(bomb.style.top.replace('px', '')), 'left')

        explo.classList.add('explosion')

        let img = document.createElement('img');
        img.src = 'img/bomb/bomb_explosion.png';
        
        explo.appendChild(img);
        img.classList.add('explosion-img');
        img.classList.add('explosion-left-img');

        setTimeout(() => {
            explo.remove();
        }, timeExplosion);
    }

    if (canExplodeUp()) {
        
        let explo = createExplosionElement(Number(bomb.style.left.replace('px', '')), Number(bomb.style.top.replace('px', '')), 'up')

        explo.classList.add('explosion')

        let img = document.createElement('img');
        img.src = 'img/bomb/bomb_explosion.png';
        
        explo.appendChild(img);
        img.classList.add('explosion-img');
        img.classList.add('explosion-up-img');

        setTimeout(() => {
            explo.remove();
        }, timeExplosion);
    }

    if (canExplodeDown()) {
        
        let explo = createExplosionElement(Number(bomb.style.left.replace('px', '')), Number(bomb.style.top.replace('px', '')), 'down')

        explo.classList.add('explosion')

        let img = document.createElement('img');
        img.src = 'img/bomb/bomb_explosion.png';
        
        explo.appendChild(img);
        img.classList.add('explosion-img');
        img.classList.add('explosion-down-img');

        setTimeout(() => {
            explo.remove();
        }, timeExplosion);
    }

    let explo = createExplosionElement(Number(bomb.style.left.replace('px', '')), Number(bomb.style.top.replace('px', '')), 'center')

    explo.classList.add('explosion')

    let img = document.createElement('img');
    img.src = 'img/bomb/bomb_explosion.png';
    
    explo.appendChild(img);
    img.classList.add('explosion-img');
    img.classList.add('explosion-center-img');

    setTimeout(() => {
        explo.remove();
    }, timeExplosion);
}

// Cria uma div na tela para colocar a animação da explosão
function createExplosionElement(positionLeft, positionTop, side) {
    var explosion = document.createElement('div');
    explosion.classList.add('explosion');

    gameBoard.appendChild(explosion);

    if (side == 'right') {
        explosion.style.left = `${positionLeft+39}px`;
        explosion.style.top = `${positionTop}px`;
    } else if (side == 'left') {
        explosion.style.left = `${positionLeft-39}px`;
        explosion.style.top = `${positionTop}px`;
    } else if (side == 'up') {
        explosion.style.left = `${positionLeft-1}px`;
        explosion.style.top = `${positionTop-41}px`;
    } else if (side == 'down') {
        explosion.style.left = `${positionLeft-2}px`;
        explosion.style.top = `${positionTop+39}px`;
    } else {
        explosion.style.left = `${positionLeft}px`;
        explosion.style.top = `${positionTop}px`;
    }

    return explosion;
}

function canExplodeRight() {
    if (matrizGameBoard[bombY][bombX+1] == 0 || 
        matrizGameBoard[bombY][bombX+1] == 2) {
        return true;
    } else {
        return false;
    }
}

function canExplodeLeft() {
    if (matrizGameBoard[bombY][bombX-1] == 0 || 
        matrizGameBoard[bombY][bombX-1] == 2) {
        return true;
    } else {
        return false;
    }
}

function canExplodeDown() {
    if (matrizGameBoard[bombY+1][bombX] == 0 || 
        matrizGameBoard[bombY+1][bombX] == 2) {
        return true;
    } else {
        return false;
    }
}

function canExplodeUp() {
    if (matrizGameBoard[bombY-1][bombX] == 0 || 
        matrizGameBoard[bombY-1][bombX] == 2) {
        return true;
    } else {
        return false;
    }
}

function positionAnimation(position, side) {
    if (side == 'right') {
        setTimeout(() => {
            bomberman.style.left = `${position + 7}px`
            bomberman.style.backgroundImage = `url(img/bomberman/bomberman_${side}_01.png)`;
        }, 30);///*
        setTimeout(() => {
            bomberman.style.left = `${position + 14}px`
            bomberman.style.backgroundImage = `url(img/bomberman/bomberman_${side}_02.png)`;
        }, 60);///*
        setTimeout(() => {
            bomberman.style.left = `${position + 21}px`
            bomberman.style.backgroundImage = `url(img/bomberman/bomberman_${side}_03.png)`;
        }, 90);
        setTimeout(() => {
            bomberman.style.left = `${position + 28}px`
            bomberman.style.backgroundImage = `url(img/bomberman/bomberman_${side}_04.png)`;
        }, 120);
        setTimeout(() => {
            bomberman.style.left = `${position + 35}px`
            bomberman.style.backgroundImage = `url(img/bomberman/bomberman_${side}_04.png)`;
        }, 150);//*/
        setTimeout(() => {
            bomberman.style.left = `${position + 42}px`
            bomberman.style.backgroundImage = `url(img/bomberman/bomberman_front.png)`;
        }, 180);
    } else {
        
    }
}

function positionBomberman(time, position, side, nimg, pixel, pos){
    if (pos == 'top') {
        setTimeout(() => {
            bomberman.style.top = `${position + pixel}px`
            bomberman.style.backgroundImage = `url(img/bomberman/bomberman_${side}_${nimg}.png)`;
        }, time);
    } else {
        setTimeout(() => {
            bomberman.style.left = `${position + pixel}px`
            bomberman.style.backgroundImage = `url(img/bomberman/bomberman_${side}_${nimg}.png)`;
        }, time);
    }
} 

function bombAnimation(bomb, time, nimg){
    setTimeout(() => {
        //bomberman.style.top = `${position + pixel}px`
        bomb.style.backgroundImage = `url(img/bomb/bomb_${nimg}.png)`;
    }, time);
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
/*createBreakableWall(168,124)
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
createBreakableWall(588,376)*/

const lin = [84,126,168,210,252,294,336,378,420,462,504,546,588];
const col = [40,82,124,166,208,250,292,334,376,418,460];
const breakableWallCantBe = ['84;40', '126;40', '84;82', '504;82', '126;376',	'210;82', '294;82', '336;376', '378;82', '462;82', '504;418', '546;82', '126;82', '210;166', '294;166', '336;40', '378;166', '462;166', '546;166', '126;166', '210;250', '294;250', '378;250', '462;250', '546;250', '126;250', '210;334', '294;334', '378;334', '462;334', '546;334', '126;418', '126;460', '294;292', '126;334', '210;418', '294;418', '378;418', '462;418', '546;418',];


//console.log(numeros[numero]); // resultado aleatório

var cont = 0;
while (cont < numberOfBkWalls) {
    var indexLin = Math.floor(Math.random() * lin.length);
    var indexCol = Math.floor(Math.random() * col.length);
    if (testBreakableWallcantBe(indexLin, indexCol)) {
        createBreakableWall(lin[indexLin], col[indexCol]);
        breakableWallCantBe.push(`${lin[indexLin]};${col[indexCol]}`)
        cont++;
    }
}

// Testar se não pode colocar uma parede quebravel no lugar solicitado pelo metodo createBreakableWall
function testBreakableWallcantBe(line, column) {
    var ret = true;
    breakableWallCantBe.forEach(element => {
        wLin = element.split(';')[0];
        wCol = element.split(';')[1];
        if (lin[line] == wLin && col[column] == wCol) {
            ret = false;
        }
    });
    return ret;
}

// Função para criar as paredes que podem ser quebradas
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

var bombX;
var bombY;

dropBomb = () => {
    var bombermanLeft = +window.getComputedStyle(bomberman).left.replace('px', '');
    var bombermanTop = +window.getComputedStyle(bomberman).top.replace('px', '');
    var currentBomb = createBomb(bombermanLeft, bombermanTop+30);

    bombCount++;

    bombX = (((bombermanLeft-initLeft)/step)+1);
    bombY = ((((bombermanTop+32)-initTop)/step)+1);

    // Animação da bomba
    //bombAnimation(currentBomb, 50, '02');
    bombExpand(currentBomb);

    //bombExplode(currentBomb, bombY, bombX)
    
    // Timer para a explosão da bomba
    setTimeout(() => {
        //console.log('bomba explode')

        // Remove as paredes ao lado da bomba e seta o 0 na matriz
        removeWalls(bombY, bombX);
        /*if (matrizGameBoard[bombY][bombX+1] == 2) {
            
            let wallRight = document.getElementById(`wall-${bombY}-${bombX+1}`);
            wallRight.classList.add('wall-explosion');
    
            setTimeout(() => {
                wallRight.remove();
                matrizGameBoard[bombY][bombX+1] = 0;
                numberOfBkWalls--;
            }, 1000);

        }
        if (matrizGameBoard[bombY][bombX-1] == 2) {
            let wallLeft = document.getElementById(`wall-${bombY}-${bombX-1}`);
            wallLeft.classList.add('wall-explosion');

            setTimeout(() => {
                wallLeft.remove();
                matrizGameBoard[bombY][bombX-1] = 0;
                numberOfBkWalls--;
            }, 1000);
        }
        if (matrizGameBoard[bombY+1][bombX] == 2) {
            let wallTop = document.getElementById(`wall-${bombY+1}-${bombX}`);
            wallTop.classList.add('wall-explosion');

            setTimeout(() => {
                wallTop.remove();
                matrizGameBoard[bombY+1][bombX] = 0;
                numberOfBkWalls--;
            }, 1000);
        }
        if (matrizGameBoard[bombY-1][bombX] == 2) {
            let wallBotton = document.getElementById(`wall-${bombY-1}-${bombX}`);
            wallBotton.classList.add('wall-explosion');
            
            setTimeout(() => {
                wallBotton.remove();
                matrizGameBoard[bombY-1][bombX] = 0;
                numberOfBkWalls--;
            }, 1000);
        }*/

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
            bomberman.classList.add('bomberman-death');
            
            // Tempo para a animação do bomberman concluir
            setTimeout(() => {
                
                // Modal informando a morte e reinicio
                modalText.innerHTML = "You Died!";
                modalButton.innerHTML = "Try again";
                modal.style.display = 'block';
            }, 3000);

            

        } else {
            if (numberOfBkWalls == 1) {
                // Modal informando a morte e reinicio
                modalText.innerHTML = "You Win!";
                modalButton.innerHTML = "Play again";
                modal.style.display = 'block';
            }
        }

        // Remove a bomba da tela e da matriz
        currentBomb.remove();
        matrizGameBoard[bombY][bombX] = 0;
        bombCount--;
        
    }, 3000); // 3 segundos para a bomba explodir
}

function removeWalls(bY, bX) {
    if (matrizGameBoard[bY][bX+1] == 2) {
            
        let wallRight = document.getElementById(`wall-${bY}-${bX+1}`);
        wallRight.classList.add('wall-explosion');

        setTimeout(() => {
            wallRight.remove();
            matrizGameBoard[bY][bX+1] = 0;
            numberOfBkWalls--;
        }, 1000);

    }
    if (matrizGameBoard[bY][bX-1] == 2) {
        let wallLeft = document.getElementById(`wall-${bY}-${bX-1}`);
        wallLeft.classList.add('wall-explosion');

        setTimeout(() => {
            wallLeft.remove();
            matrizGameBoard[bY][bX-1] = 0;
            numberOfBkWalls--;
        }, 1000);
    }
    if (matrizGameBoard[bY+1][bX] == 2) {
        let wallTop = document.getElementById(`wall-${bY+1}-${bX}`);
        wallTop.classList.add('wall-explosion');

        setTimeout(() => {
            wallTop.remove();
            matrizGameBoard[bY+1][bX] = 0;
            numberOfBkWalls--;
        }, 1000);
    }
    if (matrizGameBoard[bY-1][bX] == 2) {
        let wallBotton = document.getElementById(`wall-${bY-1}-${bX}`);
        wallBotton.classList.add('wall-explosion');
        
        setTimeout(() => {
            wallBotton.remove();
            matrizGameBoard[bY-1][bX] = 0;
            numberOfBkWalls--;
        }, 1000);
    }
}

function wallExplosionAnimation(wall) {
    console.log('entrou')
    wall.classList.add('wall-explosion');
    
    setTimeout(() => {

    }, 1000);
}


// Clique no modal
function restartGame() {
    modal.style.display = 'none';
    window.location.reload();
}

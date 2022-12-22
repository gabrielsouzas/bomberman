/* MOVIMENTAÇÃO BOMBERMAN */

const bomberman = document.querySelector('.bomberman');

// Add event listener on keydown
document.addEventListener('keydown', (event) => {
    var keyCode = event.code;
    var positionLeft = +window.getComputedStyle(bomberman).left.replace('px', '');
    var positionTop = +window.getComputedStyle(bomberman).top.replace('px', '');
    
    /* Testa a tecla pressionada */
    if (keyCode == 'ArrowRight') {
        if ((positionLeft + 50) <= 550) {
            bomberman.style.left = `${positionLeft + 50}px`
        } 
    } else if (keyCode == 'ArrowLeft') {
        if ((positionLeft - 50) >= 0) {
            bomberman.style.left = `${positionLeft - 50}px`
        }
    } else if (keyCode == 'ArrowDown') {
        if ((positionTop + 50) <= 550) {
            bomberman.style.top = `${positionTop + 50}px`
        }
    } else if (keyCode == 'ArrowUp') {
        if ((positionTop - 50) >= 0) {
            bomberman.style.top = `${positionTop - 50}px`
        }
    }

  }, false);
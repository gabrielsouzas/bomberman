/* MOVIMENTAÇÃO BOMBERMAN */

const bomberman = document.querySelector('.bomberman');
const step = 48;

// Add event listener on keydown
document.addEventListener('keydown', (event) => {
    var keyCode = event.code;
    var positionLeft = +window.getComputedStyle(bomberman).left.replace('px', '');
    var positionTop = +window.getComputedStyle(bomberman).top.replace('px', '');
    
    /* Testa a tecla pressionada */
    if (keyCode == 'ArrowRight') {
        if ((positionLeft + step) <= 624) {
            bomberman.style.left = `${positionLeft + step}px`
        } 
    } else if (keyCode == 'ArrowLeft') {
        if ((positionLeft - step) >= 48) {
            bomberman.style.left = `${positionLeft - step}px`
        }
    } else if (keyCode == 'ArrowDown') {
        if ((positionTop + step) <= 432) {
            bomberman.style.top = `${positionTop + step}px`
        }
    } else if (keyCode == 'ArrowUp') {
        if ((positionTop - step) >= 0) {
            bomberman.style.top = `${positionTop - step}px`
        }
    }

  }, false);
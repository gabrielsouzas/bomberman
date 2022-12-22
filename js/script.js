/* MOVIMENTAÇÃO BOMBERMAN */

const bomberman = document.querySelector('.bomberman');

// Add event listener on keydown
document.addEventListener('keydown', (event) => {
    var keyCode = event.code;
    var positionLeft = +window.getComputedStyle(bomberman).left.replace('px', '');
    var positionTop = +window.getComputedStyle(bomberman).top.replace('px', '');
    
    /* Testa a tecla pressionada */
    if (keyCode == 'ArrowRight') {
        bomberman.style.left = `${positionLeft + 50}px`
    } else if (keyCode == 'ArrowLeft') {
        bomberman.style.left = `${positionLeft - 50}px`
    } else if (keyCode == 'ArrowDown') {
        bomberman.style.top = `${positionTop + 50}px`
    } else if (keyCode == 'ArrowUp') {
        bomberman.style.top = `${positionTop - 50}px`
    }

  }, false);
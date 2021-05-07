const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lamp' );

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = './imagens/ligada.jpg';
    }
}

function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = './imagens/desligada.jpg';
    }
}

function lampBroken () {
    lamp.src = './imagens/quebrada.jpg';
}

turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );
lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ( 'mouseleave', lampOff );
lamp.addEventListener ( 'dblclick', lampBroken );
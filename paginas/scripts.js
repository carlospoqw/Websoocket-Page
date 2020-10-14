//coneccion/
var socket = io();

//DOM
var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');

// Emit events
btn.addEventListener('click', function() {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    //limpia el campo de mensaje en la pagina
    message.value = "";
});
message.addEventListener('keypress', function() {
    socket.emit('typing', {
        handle: handle.value
    });
});

function playStop() {
    socket.emit('playPause', {
        handle: handle.value
    });
}

function keyPressed() {
    //move up
    if (keyIsDown(UP_ARROW)) {
        socket.emit('moveUp', {
            handle: handle.value
        });

    }
    //move down
    if (keyIsDown(DOWN_ARROW)) {
        socket.emit('moveDown', {
            handle: handle.value
        });

    }
    //move left
    if (keyIsDown(LEFT_ARROW)) {
        socket.emit('moveLeft', {
            handle: handle.value
        });

    }
    //move right
    if (keyIsDown(RIGHT_ARROW)) {
        socket.emit('moveRight', {
            handle: handle.value
        });

    }
}
//variable para crear un timer de limpieza del feedback
var clearFeedback;
//inicializa el feedback como oculto para que no aparesca apenas se escribe en el
$("#feedback").fadeOut();
//listen events
socket.on("chat", function(data) {
    output.innerHTML += '<p><strong>' + data.handle + '</strong> <br> ' + data.message + '</p>';
    feedback.innerHTML = '';
});

socket.on('typing', function(data) {
    //escribe y muestra el dato
    feedback.innerHTML = '<p><em>' + data.handle + '  esta escribiendo...</em><p>';
    $("#feedback").fadeIn();
    //elimina el timeout de limpieza y crea uno nuevo
    //cuando se acaba el timeout oculta el feedback
    try {
        clearTimeout(clearFeedback);
    } catch {};
    clearFeedback = setTimeout(function() {
        $("#feedback").fadeOut()
    }, 1800);
});

socket.on('playPause', function(data) {
    if (song.isPlaying()) {
        song.pause();
        buttonPlayStop.html('PLAY');
    } else {
        song.play();
        buttonPlayStop.html('PAUSE');
    }
});

socket.on('moveUp', function(data) {
    player.move('up');
    player.show();
});
socket.on('moveLeft', function(data) {
    player.move('left');
    player.show();
});
socket.on('moveRight', function(data) {
    player.move('right');
    player.show();
});
socket.on('moveDown', function(data) {
    player.move('down');
    player.show();
});
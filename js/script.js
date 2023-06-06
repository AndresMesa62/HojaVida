// Acceder a la cámara del dispositivo
navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
        var video = document.getElementById('preview');
        video.srcObject = stream;
        video.play();
    })
    .catch(function (error) {
        console.log('Error al acceder a la cámara: ', error);
    });

// Tomar una foto y agregar marca de agua
function takePhoto() {
    var video = document.getElementById('preview');
    var canvas = document.getElementById('canvas');
    var watermark = document.getElementById('watermark');

    // Establecer dimensiones del canvas
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Dibujar imagen del video en el canvas
    var context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Agregar marca de agua
    context.font = 'bold 24px Arial';
    context.fillStyle = 'rgba(255, 0, 0, 0.5)';
    context.fillText('Marca de agua', 10, 30);

    // Mostrar imagen con marca de agua
    var imageUrl = canvas.toDataURL();
    var imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    document.body.appendChild(imageElement);
}

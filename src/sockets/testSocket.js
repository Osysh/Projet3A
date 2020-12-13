// Côté client

var ctx = document.getElementById('canvas').getContext('2d');

socket.on("image", function(info) {
  if (info.image) {
    var img = new Image();
    img.src = 'data:image/jpeg;base64,' + info.buffer;
    ctx.drawImage(img, 0, 0);
  }
});
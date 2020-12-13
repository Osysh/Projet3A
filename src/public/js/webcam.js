// Creer un class webcam pour plus de simplicité

function init(){
    if (navigator.mediaDevices.getUserMedia) { // Demande d'autorisation de l'utilisateur
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(function (stream) {
                video.srcObject = stream;
            })
            .catch(function (err) {
                console.log("Something went wrong!");
            });
    }
}

function takeSnapshot(){
    canvas.getContext('2d').drawImage(video, 0, 0, 250, 187);
    return new Promise(res => {
        canvas.toBlob((blob) => {
            res(blob);
        })
    })
}

function stopCam(){
    var stream = this.video.srcObject;
    var tracks = stream.getTracks();

    for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
        track.stop();
    }

    this.video.srcObject = null;
}

function muteCam(){
    if (this.video.muted) {
        this.video.muted = false;
    } else {
        this.video.muted = true;
    }
}

/*
// FONCTION DE RENVOI DE LA WEBCAM
const wait = async (previous_answer) => {
    return new Promise(res => {
        setTimeout(() => {
            getData().then(data => {
                if(data != previous_answer) {
                    //console.log(data);
                    res(data);
                }
            });
        },400) // 24 images / sec
    });
}
*/

const wait = async () => {
    return new Promise(res => {
        setTimeout(() => {
            takeSnapshot().then(blob => {
                blobToBase64(blob).then(res => {
                    process(res).then(res=>{
                        var image = base64ToImage(res);
                        image.onload = () => {
                            canvasRest.getContext('2d').drawImage(image,0,0,250,187);
                        }
                    });
                })
            })
            res();
        },40) // 24 images / sec
    });
}
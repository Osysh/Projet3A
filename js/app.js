//app.js
console.log('appjs');

// lancer l'application
init();

//
// définition des boutons
//
snapshotBtn.addEventListener('click', _ => {
    takeSnapshot().then(res => {
        blobToBase64(res).then(res => {
            sendData(res);
        });
    })
});

playBtn.addEventListener("click", async () => {
    lecture = true;
    console.log('Webcam On')
    while(lecture === true) {
        await wait();
    }
});

stopBtn.addEventListener("click", () => {
    lecture = false;
    console.log('webcam Off');
});
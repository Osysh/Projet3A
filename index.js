const include = file => {
    return new Promise(res => {
        var script  = document.createElement('script'); 
        script.src  = file; 
        script.type = 'text/javascript'; 
        script.defer = true; 
        res(document.getElementsByTagName('head').item(0).appendChild(script)); 
    }) 
} 

const includeFiles = async () => {
    await include('./js/request.js');
    await include('./js/webcam.js');
    await include('./js/image_convert.js');
    await include('./js/elements.js');
    await include('./js/app.js');
}

includeFiles();

// DOM
const snapshotBtn    = document.querySelector('#take_snap');
const playBtn        = document.querySelector('#play'); 
const stopBtn        = document.querySelector('#stop'); 
const canvasRest     = document.querySelector('#canvas_rest');
const flux_sortant   = document.querySelector('#flux_entrant');
var video            = document.querySelector('#video_webcam');
var canvas           = document.createElement('canvas');

// VARIABLES
var lecture          = true;
//var videoWidth       = video.videoWidth;
//var videoHeight      = video.videoHeight;

// CONSTANTES
const server_url     = '/video';
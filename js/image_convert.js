//
// IMAGE CONVERSION SCRIPT
//

const blobToBase64 = (blob) => {
    // CONVERT BLOB TO BASE 64
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise(resolve => {
        reader.onloadend = () => {
            resolve(reader.result);
        };
    });
};


const base64ToImage = (base) => {
    // CONVERT BASE64 TO IMAGE
    var image_vid = new Image();
    image_vid.src = base;
    return image_vid;
}
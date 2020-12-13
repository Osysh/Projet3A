//
// MISE EN PLACE DES REQUETES DE L'API
//

const sendHttpRequest = (method, url, data) => {
    // FONCTION DE RENVOI DES REQUETES
    return new Promise(res=>{
        const xhttp = new XMLHttpRequest();
        xhttp.open(method, url);
        
        if (method === 'GET') {
            xhttp.onload = () => {
                res(xhttp.response);
            };
        } else {
            res()
        }
    
        xhttp.send(data);
    });
};

const getData = () => {
    // IMPLEMENTATION DE LA REQUETE GET
    return new Promise(res => {
        sendHttpRequest('GET', server_url).then(responseData => {
            res(responseData);
            console.log('Image récupérée');
        })
    })
};

const sendData = (data) => {
    // IMPLEMENTATION DE LA REQUETE POST
    return new Promise(res => {
        sendHttpRequest('POST', server_url, data).then(() => {
            console.log('Image envoyée');
            res();
        })
    })
};

//
// PROCESS REQUEST
//

const process = (data) => {
    return sendData(data).then(() => {
        return getData().then(res => {
            return res;
        })
    })
}
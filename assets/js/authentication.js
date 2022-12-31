function auth() {
    $.ajax({
        // Adresse à laquelle la requête est envoyée
        url: 'https://api.orange-sonatel.com/oauth/v1/token',
        type: 'POST',
        data: {
            grant_type: "client_credentials",
            client_secret: "534e10a2-67c6-4e8b-895f-676666bfde7a",
            client_id: "Dc4d4e93-101e-498f-b036-00a4ae374c75"
        },
        // Le délai maximun en millisecondes de traitement de la demande
        timeout: 10000,
        // La fonction à apeller si la requête aboutie
        success: function (data) {
            sessionStorage.setItem('token', data.access_token);
            console.log(sessionStorage.getItem('token'));
        },
        // La fonction à appeler si la requête n'a pas abouti
        error: function() {
            // J'affiche un message d'erreur
            alert("Désolé, aucun résultat trouvé.");
        }
    });
}

// get token after load page
$(document).ready(function(){
    auth();
});

//run this thang every 4 minutes
setInterval(function(){
    auth();
}, 240000);
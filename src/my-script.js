// The function of getting the ip
var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;

        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };
    xhr.send();
};

function displayPage(){
    const page = document.getElementById('page')
    const video = document.getElementById('myVideo')
    video.remove();
    page.classList.remove("hidden");
};

var whitelistButton = document.getElementById('button'),
    joinButton = document.getElementById('1234'),
    ip = {}, // defining the ip as an object
    clientIp; // defining the final variable of the ip

// calling the function to get the client ip
function whitelistMe() {
    getJSON('https://api.ipify.org?format=json',  function(err, data) {
        if (err != null) {
        } else {
            ip.ip = '';
            ip.ip = data.ip;

            // exporting the client ip to my function
            const finalIp = data;
            const options = {
                method : 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(finalIp)
            };
            fetch('/api', options);
            //execute(ip);

        };



    });

};

// display page

// my function to store the client ip





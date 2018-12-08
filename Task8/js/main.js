class Axios {
    get(url) {
        const promise = new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);

            xhr.onload = function() {
                if(xhr.status == 200) {
                    resolve(xhr.response);
                }
                else {
                    var err = new Error(xhr.status);
                    err.code = xhr.status;
                    reject(err);
                }
            };

            xhr.onerror  = function() {
                reject(new Error("something wrong!"));
            };

            xhr.send();
        });
        return promise;
    };
}

var axios = new Axios();
axios.get("http://localhost:3000/")
    .then(response => {
        alert(response);
    })
    .catch(err => {
        alert(err);
    });
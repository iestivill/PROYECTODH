var data = "{}";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.themoviedb.org/3/tv/%7Btv_id%7D/images?language=en-US&api_key=%3C%3Capi_key%3E%3E");

xhr.send(data);

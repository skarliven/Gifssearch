// $.ajax({
//   url: 'https://jsonplaceholder.typicode.com/users',
//   dataType: 'json',
//   sucsess: function(data){
//     console.log(data);
//   },
//   type: 'GET'
  
// })



document.getElementById("btn").addEventListener("click", getGifs);
function getGifs() {

var userInput = document.getElementById("userInput").value;
var numGifs = document.getElementById("numGifs").value;
var originalURL = "http://api.giphy.com/v1/gifs/search?q=";
    var queryURL = "https://cors-anywhere.herokuapp.com/" + originalURL

$.ajax({
  url: "http://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=i0NwF1Awg8DlkZF0TqqVgCKn0hAckF3c&limit=" + numGifs,
  dataType: "json",
  success: function(data) {
    for(var i = 0; i < data.data.length; i++) {
      document.body.innerHTML += "<div class='gif'><img src='" + data.data[i].images.original.url +"'></div>"
    }
    
  },
  error: function() {
    console.log("API call failed")
  },
  type: 'GET'
});
}

var myPlaces = ['Seoul', 'Paris', 'Los Angeles'];
var friendPlaces = ['London', 'UK', 'Paris'];

for (var i = 0; i < myPlaces.length; i++) {
  for (var j = 0; j < friendPlaces.length; j++) {
    if (myPlaces[i] === friendPlaces[j]){
       console.log(friendPlaces[j]);
    }
  }
}

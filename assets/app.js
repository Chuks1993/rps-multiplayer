$(document).ready(function() {




// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAIALrXfKeGLiDK2MN_yQ5bmS2Dnc0glXs",
    authDomain: "awesome-ddfd5.firebaseapp.com",
    databaseURL: "https://awesome-ddfd5.firebaseio.com",
    projectId: "awesome-ddfd5",
    storageBucket: "awesome-ddfd5.appspot.com",
    messagingSenderId: "491919807472"
  };
  firebase.initializeApp(config);

	var database = firebase.database();
	var playerOne = database.ref('player-one');
	var playerTwo = database.ref('player-two');

	var connect = database.ref('player-one/connected')




// connectionsRef references a specific location in our database.
// All of our connections will be stored in this directory.
var connectionsRef = database.ref("/connections");
// '.info/connected' is a special location provided by Firebase that is updated
// every time the client's connection state changes.
// '.info/connected' is a boolean value, true if the client is connected and false if they are not.
var connectedRef = database.ref(".info/connected");
// When the client's connection state changes...
connectedRef.on("value", function(snap) {
  // If they are connected..
  if (snap.val()) {
    // Add user to the connections list.
    var con = connectionsRef.push(true);
    // Remove user from the connection list when they disconnect.
    con.onDisconnect().remove();
  }
});
// When first loaded or when the connections list changes...
connectionsRef.on("value", function(snap) {
  // Display the viewer count in the html.
  // The number of online users is the number of children in the connections list.
  $("#connected-viewers").text(snap.numChildren());
}




















	var input;
	var player;

	function playerOneSelected() {
		event.preventDefault();
		$('#playerTwo').hide();
		$('#player').hide();
		$("#playerOne").attr("disabled", true);
		input = $('#player').val();
		$('#name').text('Player-Two: ' + input);

		
	};

	function playerTwoSelected() {
		event.preventDefault();
		$('#playerOne').hide();
		$('#player').hide();
		$("#playerTwo").attr("disabled", true);
		input = $('#player').val();
		$('#name').text('Player-Two: ' + input);
		
	};


	$('#playerOne').on('click', function (event) {
		playerOneSelected();
		player = 1;

	});

	$('#playerTwo').on('click', function (event) {
		playerTwoSelected();
		player = 2;
	});	


	function begin () {
		if (player === 1) && player === {
		if (true) {}
	}
}















});
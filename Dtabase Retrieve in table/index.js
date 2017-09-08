$(document).ready(function(){
	var rootRef = firebase.database().ref().child("Users");
	rootRef.on("child_added",snap=>{
		var name = snap.child("name").val();
		var email = snap.child("email").val();
		console.log(name,email);
		$("#table_body").append("<tr><td>"+ name + "</td><td>" + email +"</td><td><button>Remove</button></td></tr>");
	});
});
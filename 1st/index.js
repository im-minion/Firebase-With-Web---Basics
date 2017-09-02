
var submitButton = document.getElementById("submitButton");
var mainText = document.getElementById("mainText");
var fireHeading = document.getElementById("fireHeading");
var firstRef = firebase.database().ref();
var fireHeadingRef = firebase.database().ref('/Heading');

fireHeadingRef.on('value', function (datasnapshot) {
	console.log(datasnapshot.val());
    fireHeading.innerText = datasnapshot.val();
});

function submitClick() {

    var messageText = mainText.value;
    //var firebaseRef = firebase.database().ref();
    // console.log(messageText);
    firstRef.push().set(messageText);
}
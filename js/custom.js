// nationalist or not 

var db={

	qa:{
		1:{
			question:"Do you love your country?",
       answer:["Yes", "No"],
       ra:0
		},

		2:{
			question:"Would you be intrested in couting number of used condom's in a university?",
			answer:['Yes','No'],
      ra:1
		},

		3:{
			question:"When did you said 'Bharat Mata Ki Jai?' recently?",
			answer:['In a public gathering, in a facebook/twitter post','I dont remember exactly!'],
			ra:1
		},


		4:{
			question:"Are you good when it comes to editing pictures/videos/audios?",
			answer:['Yes, i post alot of such stuffs','No, I dont use photoshop'],
			ra:1
		},


		5:{
			question:"How will you react if someone said anything disrespectfull about your country?",
			answer:['Will kill/beat the shit out of him or her',' will try to know the reason, if possible will try to make a counter point'],
			ra:1
		},


		6:{
			question:"Do you believe in the constitution of india?",
      answer:['Yes','No'],
			ra:1
		},


		7:{
			question:"Do you like news anchors being a judge, or lawyer's being a Judge?",
      answer:['YES, Why not? After all they know the facts Well!','No, A Judge should be a Judge. NOT ANYONE ELSE'],
			ra:3
		}
	}


};


// loading fb sdk


  window.fbAsyncInit = function() {
    FB.init({
      appId      : '139900033028928',
      xfbml      : true,
      version    : 'v2.5'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
  

      $('.warning').hide();
      $('.warning').addClass('animate shake');
      
        $('.question').show();
      testAPI();
      change_question(1,0);
 
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
      
         
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      // document.getElementById('status').innerHTML = 'Please log ' +
      //   'into Facebook.';
    

    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.

  var img,nameV={};
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
  
FB.api(
  '/me',
  'GET',
  {"fields":"id,name"},
  function(response) {
   nameV=response;
  }
);



FB.api(
  '/me',
  'GET',
  {"fields":"picture.width(200).height(200)"},
  function(response) {
   
  img=response.picture.data.url;
  nameV=nameV.name;
  }
);




}






// $('.warning').hide();
$('.question').hide();
$('.result').hide();


$( "#agreed" ).click(function() {

// $('.warning').hide();

$('#agreed').hide();

// $('.question').show();

});
var label;
var score=[];
var count=1;

$( ".next" ).bind( "click", function() {

label=$('label');
var value=$("label input:checked").val();
value=parseInt(value);
console.log(value);
count++;
change_question(count,value);
uncheck();

});


function change_question(x,y){

if(x<=7){

$('.no').html(x);
$('.q').html(db.qa[x].question);

// options...
$('.Op1').html(db.qa[x].answer[0]);
$('.Op2').html(db.qa[x].answer[1]);
// $('.Op3').html(db.qa[x].answer[2]);
// $('.Op4').html(db.qa[x].answer[3]);

var temp1=db.qa[x].ra;

if(temp1==y){
	console.log("bingo!!"+y);
	score.push(1);
}
else {
	score.push(0);
	console.log("bingo!!"+"0");
}



}

else {


$('.question').hide();
$('.result').show();
calc_score();
// $(".image").attr('src',img);
$('.name').text(nameV);
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      var imageObj = new Image();
      var img2=new Image();



      img2.onload = function() {
        // context.drawImage(imageObj,0,0) ;
console.log("i am outside");

           imageObj.onload = function() {
                        
                        context.drawImage(img2,0,0) ;   
                        context.drawImage(imageObj,0,0);     
                        console.log("i am inside");   
                     };
          
          imageObj.src="img/anti.png";
      };






      // imageObj.src="img/anti.png";
      // // img2.src="img/nati.png";
      img2.src=img;

     console.log(img);
}
}



var total;



function calc_score(){



total = 0;
$.each(score,function() {
    total += this;

});

$('.total').html(total);

}


function uncheck(){

$("label input:checked").removeAttr("checked");
}
































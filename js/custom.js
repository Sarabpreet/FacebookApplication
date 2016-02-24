// nationalist or not 

var db={

	qa:{
		1:{
			question:"How much do you love your country?",
			answer:['just enough', 'enough to kill someone','can kill myself for country','as much as every proud indian'],
			ra:1
		},

		2:{
			question:"are you good enough in counting?",
			answer:['yes, have counted condoms in a national university', 'counted number of beer bottles and condoms(in a university)','Yes, counted huge number of injections  (AGAIN in a university!)','I dont know counting, i study at a university'],
			ra:2
		},

		3:{
			question:"How Are you doing? 3",
			answer:['i am good', 'i am really really good','main beer hoon bc','beer meri jaan'],
			ra:3
		},


		4:{
			question:"How Are you doing? 4",
			answer:['i am good', 'i am really really good','main beer hoon bc','beer meri jaan'],
			ra:4
		},


		5:{
			question:"How Are you doing? 5",
			answer:['i am good', 'i am really really good','main beer hoon bc','beer meri jaan'],
			ra:1
		},


		6:{
			question:"How Are you doing? 6",
			answer:['i am good', 'i am really really good','main beer hoon bc','beer meri jaan'],
			ra:2
		},


		7:{
			question:"How Are you doing? 7",
			answer:['i am good', 'i am really really good','main beer hoon bc','beer meri jaan'],
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

  var img;
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
  
FB.api('/me/friends','GET',{"fields":"picture.width(250).height(250)"},
  function(response) {
     console.log(response);
      resp=response;
  }
);


FB.api(
  '/me',
  'GET',
  {"fields":"picture.width(250).height(250)"},
  function(response) {
   
  img=response.picture.data.url;


  }
);




}






// // $('.warning').hide();
// $('.question').hide();
// $('.result').hide();





$( "#agreed" ).click(function() {

// $('.warning').hide();

$('#agreed').hide();

// $('.question').show();

});
var label;
var score=[];
var count=0;

$( ".next" ).bind( "click", function() {

label=$('label');
var value=$("label input:checked" ).val();
value=parseInt(value);
console.log(value);
count++;
change_question(count,value);
});


function change_question(x,y){

if(x<7){

$('.no').html(x);

$('.q').html(db.qa[x].question);

// options...
$('.Op1').html(db.qa[x].answer[0]);
$('.Op2').html(db.qa[x].answer[1]);
$('.Op3').html(db.qa[x].answer[2]);
$('.Op4').html(db.qa[x].answer[3]);

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
$(".image").attr('src',img);
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


































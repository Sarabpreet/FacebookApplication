// nationalist or not 

var db={

	qa:{
		1:{
			question:"Are you a proud Indian?",
       answer:["Yes", "No"],
       ra:1
		},

		2:{
			question:"Would you be intrested in counting number of used condom's in a university?",
			answer:['Yes','No'],
      ra:1
		},

		3:{
			question:"When did you said 'Bharat Mata Ki Jai?' recently?",
			answer:['In a public gathering, in a facebook/twitter post','i don\'t know (never said, or cared much)'],
			ra:1
		},


		4:{
			question:"Are you good when it comes to editing pictures/videos/audios?",
			answer:['Yes, i post alot of such stuffs','No, never done!'],
			ra:1
		},


		5:{
			question:"How will you react if someone say anything disrespectfull about your country?",
			answer:['Will kill/beat him or her.',' will try to know the reason, if possible will try to make a counter point.'],
			ra:1
		},


		6:{
			question:"If you could go to Pakistan for a bag pack trip, would you?",
      answer:['Yes','No'],
			ra:1
		},


		7:{
			question:"Do you like news anchors being a judge, or lawyer's being a Judge?",
      answer:['YES, Why not? After all they shout, know the facts etc.','No, A Judge should be a Judge. NOT ANYONE ELSE'],
			ra:1
		}
	}


};




start();






// loading fb sdk


  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1686488428288219',
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


      var a=document.querySelector('.next');
      a.click();

 
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
  var abc;
  var img,nameV={};
  var fname;
  var heading,details;
  var sco=0;
  var label;
  var score=[];
  var count=0;
  var total=0;

      var canvas = document.getElementById('myCanvas');

  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
  




FB.api('/me','GET',{"fields":"picture.width(200).height(200)"},
  function(response) {
    
    abc=response;
    img=abc.picture.data.url;

  }
);



FB.api(
  '/me',
  'GET',
  {"fields":"first_name"},
  function(response) {
      
      fname=response.first_name;
      nameV=fname;
  }
);


}





function start(){
// // $('.warning').hide();
$('.question').hide();
$('.result').hide();
$('.sharething').hide();

}


$( "#agreed" ).click(function() {

// $('.warning').hide();

$('#agreed').hide();

// $('.question').show();


});




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

console.log("-----"+x);
console.log("========="+y);
if(x<8){

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
$('.sharething').show();

setTimeout(function() {

$('.sharething').hide();
$('.result').show();

}, 5000);




sco=calc_score();
// $(".image").attr('src',img);
$('.name').text(nameV);

$('.q').html("");
$('.Op1').html("");
$('.Op2').html("");




                                    if(sco>=5) {
                                    // nationalist.
                                    console.log(sco);
                                    cavasThing(10);
                                    heading="you are one pure Indian according to our politicians and leaders, congrats there are very few of them out there!";
                                    details="It's quite impressing the way you have presented yourself here, you have strongly faced questions about visiting to pakistan to counting condoms and beer in a university!, you have faced all like a true Indian*";

                                    }
                                    if(sco<=2) {
                                       cavasThing(12);
                                       console.log(sco);

                                    heading="sorry, according to our politicians and leaders, you are a terrorist. please surrender asap!";
                                    details="We understand, it's tough being a terrorist in nation where everyone is either being nationalist or anti-nationalist, we wish you luck with your 72 virgins*";
                                    }
                                    if(sco<5 && sco>2){
                                       cavasThing(11);
                                       console.log(sco);
                                       heading="bad news!, it  seems like you're anti-nationalist according to our leaders, take care of yourself, there are lawyers out there!";
                                       details="we know it's one tough time for you, perhaps you should avoid eating noodles and wearing jeans. if it helps, we would surely like to say \"it's better than being a terrorist for sure!\"*";
                                    }
                         

}
}







function calc_score(){

$.each(score,function() {
    total += this;
});

$('.total').html(total);
return $('.total').html();
}


function uncheck(){
    $("label input:checked").removeAttr("checked");
    console.log("unchecked?");
}






    

function cavasThing(x){


        if(x==10) {

      var context = canvas.getContext('2d');
      var img2=new Image();
      var imageObj = new Image();
      var link=document.getElementById('download');


      img2.onload=function(){


            imageObj.onload = function() {
                                context.drawImage(img2,0,0) ;   
                                context.drawImage(imageObj,0,0);     
                                console.log("i am inside");   
                                 $('.heading').text(heading);
                                $('.details').text(details);
                                     
                                                   domagic(link);
                             };

            imageObj.src="img/nati.png";


              };

      img2.src=img;



        }


        if(x==11) {

      var context = canvas.getContext('2d');
      var img2=new Image();
      var imageObj = new Image();
      var link=document.getElementById('download');

      img2.onload=function(){


            imageObj.onload = function() {
                                context.drawImage(img2,0,0) ;   
                                context.drawImage(imageObj,0,0);     
                                console.log("i am inside");   
                                                $('.heading').text(heading);
                                                $('.details').text(details);
                                                domagic(link);

                                          


                             };

            imageObj.src="img/anti.png";
 

              };

      img2.src=img;
     console.log(img);



        }


  if(x==12) {


      var context = canvas.getContext('2d');
      var img2=new Image();
      var imageObj = new Image();
      var link=document.getElementById('download');


      img2.onload=function(){


            imageObj.onload = function() {
                                context.drawImage(img2,0,0) ;   
                                context.drawImage(imageObj,0,0);     
                                console.log("i am inside");   
                                $('.heading').text(heading);
                                 $('.details').text(details);
                                         domagic(link);
                                         

                             };

            imageObj.src="img/teri.png";
  
              };

      img2.src=img;
     console.log(img);


 }



}


// imageObj.src="img/anti.png";
      // // img2.src="img/nati.png";





$('.retake').bind('click',retake);
// $('.share').bind('click',share);
$('.make').bind('click',make);



function retake(){

      $('.total').html(0);
      start();
      $('.warning').show();
      count=0;
      console.log(count);
      score=[];
      total = 0;

}


function download(){








}

function domagic(x){



                                    
                                                console.log(x);
                                                console.log(canvas);
                                                x.href=canvas.toDataURL();
                                                // x.href="http://sarabpreet.in";
                                                x.setAttribute("target","_blank");
                                              



}


function share(){

var appurl="http://bit.ly/iamnationalist";
var entireMessage="[Result]\n "+nameV+" : "+heading+" \n\n ===================\nAre you nationalist? Find out@ "+appurl+" \n \n#NationalistBecause";

  FB.api('/me/feed', 'post', {message: entireMessage});
  $('.shareM').modal('toggle');


// $('.shareM').modal('toggle');

// FB.ui({
//   method: 'share',
//   href: 'http://facebook.com/sarabpreet.in',
//   caption:heading,
// }, function(response){



// });

}


function make(){

$('.makeM').modal('toggle');



}





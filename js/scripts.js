$(document).ready(function(){


///// TILES & UP/DOWN BUTTONS /////


var verticalimages = [	"0px", "627px", "1254px", "1881px", "2508px", "3135px", "3762px", "4389px", "5016px", "5643px"];

var lightboxCurrent = 0;

function downclick() {

	lightboxCurrent += 1

 	$("#internalwrapper").animate({"bottom": verticalimages[lightboxCurrent]}, 1000)
 	$("#upbutton").fadeIn()

 	if (lightboxCurrent==(verticalimages.length - 1)) {

 		$("#downbutton").fadeOut()
 		$("#upbutton").fadeIn()
 		$("rightbutton").fadeIn()

 	}


}

function upclick() {


	lightboxCurrent -= 1

 	$("#internalwrapper").animate({"bottom": verticalimages[lightboxCurrent]}, 1000)

 	$("#downbutton").fadeIn()

 	if (lightboxCurrent==(verticalimages.length - 10)) {  //NB  "-5" needs to be whatever length of array is

 		$("#upbutton").fadeOut()
 	}


}



  $("#downbutton").click(function(event) {      	

  	event.preventDefault();

  	downclick()

	});


  $("#upbutton").click(function(event) {      	

  	event.preventDefault();

  	upclick()

	});

 ///// END OF TILES & UP/DOWN BUTTONS ///// 


///////// MEDIA FADE IN & OUT /////////


  // $("#DIVTOCLICK").click(function(event) {        

  //   event.preventDefault();

  //   $("#FADEOUTDIV").fadeOut();

  //   $("#FADEINDIV").fadeIn(function(){
      
  //     $("#MEDIAHOLDER").html('IFRAME')

  //   });

    
  // });


  // $("CLOSEBUTTON?").click(function(event) {        

  //   event.preventDefault();

  //   $("#FADEOUTDIV").fadeOut(function(){
      
  //     $("#MEDIAHOLDER").html('')

  //   });

    
  // });

///////// END OF MEDIA FADE IN & OUT /////////


///////// EXPANDOR DIV CONTROLS ////////

  // $("#CLICKDIV").click(function(event){

  //   event.preventDefault();

  //   $("#EXPANDORDIV").animate({"width": "MAXWIDTH"}, 1000, function(){

  //      $("#EXPANDORDIV").animate({"height": "MAXHEIGH"}, 500, function(){

  //       $("#CLOSEBUTTON").fadeIn()

  //     });

  //     });
 

  // });

  // $("#CLOSEBUTTON").click(function(event){

  //   event.preventDefault();
  //   $("#EXPANDORDIV").css("width", "MINWIDTH");
  //   $("#EXPANDORDIV").css("height", "MINHEIGHT");
  //   $("#CLOSEBUTTON").fadeOut()


  // });

///////// END OF EXPANDOR DIV CONTROLS ////////

///////// TOGGLE BUTTON - (NUMBERS?) ////////

// $("#BUTTON").click(function(event) {        

//     event.preventDefault();

//     $("#INFO").fadeToggle()
//     $("#ANYTHINGINWAY").fadeOut()

//   });

///////// END OF TOGGLE BUTTON - (NUMBERS?) ////////

///////// LEFT & RIGHT ANIMATE ////////


  $("#rightbutton").click(function(event){

  	event.preventDefault();

  	$("#tile10").animate({"left": "-940px"}, 2000)
  	$("#rightbutton").fadeOut( function(event) {

  		$("#leftbutton").fadeIn();
  		$("#upbutton").fadeOut();  
  	});
  });

    $("#leftbutton").click(function(event){

  	event.preventDefault();

  	$("#tile10").animate({"left": "0px"}, 2000)
  	$("#leftbutton").fadeOut( function(event){

  		$("#rightbutton").fadeIn();
  		$("#upbutton").fadeIn()
  	});
  });



/////// END OF LEFT & RIGHT BUTTONS ///////

////DOWNBUTTON /////

$("#newdown").click(function(event){

    event.preventDefault();

    $("#internalwrapper").animate({"bottom": "6270px"}, 1000, function(){

      $("#titleswrapper").animate({"bottom": "2300px"}, 35000, "linear", function(){

        $("#titleswrapper").css("bottom", "0px")

          $("#titleswrapper").animate({"bottom": "2300px"}, 35000, "linear", function (){

            $("#titleswrapper").css("bottom", "0px")

            $("#titleswrapper").animate({"bottom": "2300px"}, 35000, "linear", function () {

              $("#titleswrapper").css("bottom", "548px")
              $("#rightside").css("overflow", "scroll")


            });

          });

      });

    });	

  });	


 $("#oneup").click(function(event){

    $("#internalwrapper").animate({"bottom": "5643px"}, 1000)
    $("#tweetbutton").fadeOut()

   });

    $("#backtotop").click(function(event){

    window.location.reload()

   });






















}); //ready


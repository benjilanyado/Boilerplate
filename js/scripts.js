$(document).ready(function(){


///// TILES & UP/DOWN BUTTONS /////


var verticalimages = [	"0px", "500px", "1000px", "1500px", "2000px", "2500px", "3000px", "3500px", "4000px", "4500px", "5000px", "5500px", "6000px", "6500px", "7000px", "7500px", "8000px", "8500px", "9000px", "9500px", "10000px", "10500px", "11000px", "11500px", "12000px", "12500px", "13000px", "13500px", "14000px", "14500px", "15000px"];

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

 	if (lightboxCurrent==(verticalimages.length - 31)) {  //NB  "-5" needs to be whatever length of array is

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


 $("#explore").click(function(event) {       

    event.preventDefault();

    $("#slider").animate({"left": "-1000px"}, 1000, function(){

      $("#buttons").fadeIn()
      $("#tooltip").fadeIn()
    })

  });

 $("#info1").click(function(event) {       

    event.preventDefault();

    $("#tilebox1").fadeToggle()   
    $("#tooltip").fadeOut()

  });



 $("#boxvid1").on({
  'click': function(event) {

              event.preventDefault();            
               if($("#videoholder1").css('width') == '0px'){
                $("#boxvid1 p").html('>> VIDEO')
                $("#videoholder1").animate({"width": "500px"}, 1000, function(){
                  $("#videoholder1").html('<div class="iframeholder" id="iframeholder1"><iframe width="480" height="270" src="http://www.youtube.com/embed/T8wa9MAAUNM" frameborder="0" allowfullscreen></iframe></div>')
                  })
                };

                if($("#videoholder1").css('width') == '500px'){
                  $("#boxvid1 p").html('<< VIDEO')
                  $("#videoholder1").animate({"width": "0px"}, 1000, function(){
                    $("#videoholder1").html('')
                  })
              }
            }                      
});


 //TILE 2


 $("#info2").click(function(event) {       

    event.preventDefault();

    $("#tilebox2").fadeToggle() 

  });

 //TILE 3

  $("#info3").click(function(event) {       

    event.preventDefault();

    $("#tilebox3").fadeToggle() 

  });



  //TILE 4

   $("#island1").click(function(event) {       

    event.preventDefault();

    $("#islandcopy1").fadeToggle() 

  });

    $("#island2").click(function(event) {       

    event.preventDefault();

    $("#islandcopy2").fadeToggle() 

  });

     $("#island3").click(function(event) {       

    event.preventDefault();

    $("#islandcopy3").fadeToggle() 

  });

      $("#island4").click(function(event) {       

    event.preventDefault();

    $("#islandcopy4").fadeToggle() 

  });

       $("#info4").click(function(event) {       

    event.preventDefault();

    $("#tilebox4").fadeToggle() 
    $(".island").fadeIn()

  });

//

 $("#info5").click(function(event) {       

    event.preventDefault();

    $("#tilebox5").fadeToggle() 

  });

 //TILE 6

  $("#boxvid6").on({
  'click': function(event) {

              event.preventDefault();            
               if($("#videoholder6").css('width') == '0px'){
                $("#boxvid6 p").html('>> VIDEO')
                $("#videoholder6").animate({"width": "444px"}, 1000, function(){
                  $("#videoholder6").html('<div class="iframeholder" id="iframeholder1"><iframe width="444" height="250" src="http://www.youtube.com/embed/6dCLLv5g4e4" frameborder="0" allowfullscreen></iframe></div>')
                  })
                };

                if($("#videoholder6").css('width') == '444px'){
                  $("#boxvid6 p").html('<< VIDEO')
                  $("#videoholder6").animate({"width": "0px"}, 1000, function(){
                    $("#videoholder6").html('')
                  })
              }
            }                      
});

  $("#info6").click(function(event) {       

    event.preventDefault();

    $("#tilebox6").fadeToggle() 

  });


////TILE 7

 $("#info7").click(function(event) {       

    event.preventDefault();

    $("#tilebox7").fadeToggle() 

  });

 ////TILE 8

 $("#boxvid8").on({
  'click': function(event) {

              event.preventDefault();            
               if($("#videoholder8").css('width') == '0px'){
                $("#boxvid8 p").html('>> VIDEO')
                $("#videoholder8").animate({"width": "553px"}, 1000, function(){
                  $("#videoholder8").html('<div class="iframeholder" id="iframeholder1"><iframe width="533" height="300" src="http://www.youtube.com/embed/zs2uyKUVXFc" frameborder="0" allowfullscreen></iframe></div>')
                  })
                };

                if($("#videoholder8").css('width') == '553px'){
                  $("#boxvid8 p").html('<< VIDEO')
                  $("#videoholder8").animate({"width": "0px"}, 1000, function(){
                    $("#videoholder8").html('')
                  })
              }
            }                      
});

$("#info8").click(function(event) {       

    event.preventDefault();

    $("#tilebox8").fadeToggle() 

  });


//TILE 9

$("#info9").click(function(event) {       

    event.preventDefault();

    $("#tilebox9").fadeToggle() 
    $("#pic9").fadeToggle() 

  });

$("#pic9").click(function(event) {       

    event.preventDefault();

    $("#tilebox9").fadeToggle() 
    $("#tilehead9").fadeToggle() 
    $("#whalepic").fadeToggle() 


  });



//TILE 10

$("#info10").click(function(event) {       

    event.preventDefault();

    $("#tilebox10").fadeToggle() 

  });

// TILE 11

 $("#boxvid11").on({
  'click': function(event) {

              event.preventDefault();            
               if($("#videoholder11").css('width') == '0px'){
                $("#boxvid11 p").html('VIDEO<<')
                $("#videoholder11").animate({"width": "400px"}, 1000, function(){
                  $("#videoholder11").html('<div class="iframeholder" id="iframeholder1"><iframe width="380" height="285" src="http://www.youtube.com/embed/MXTY_hEQJQ0" frameborder="0" allowfullscreen></iframe></div>')
                  })
                };

                if($("#videoholder11").css('width') == '400px'){
                  $("#boxvid11 p").html('VIDEO >>')
                  $("#videoholder11").animate({"width": "0px"}, 1000, function(){
                    $("#videoholder11").html('')
                  })
              }
            }                      
});

 $("#info11").click(function(event) {       

    event.preventDefault();

    $("#tilebox11").fadeToggle() 

  });

//TILE 12

 $("#boxvid12").on({
  'click': function(event) {

              event.preventDefault();            
               if($("#videoholder12").css('width') == '0px'){
                $("#boxvid12 p").html('VIDEO<<')
                $("#videoholder12").animate({"width": "480px"}, 1000, function(){
                  $("#videoholder12").html('<div class="iframeholder" id="iframeholder12"><iframe width="470" height="264" src="http://www.youtube.com/embed/zoFOc3vrAyU" frameborder="0" allowfullscreen></iframe></div>')
                  })
                };

                if($("#videoholder12").css('width') == '480px'){
                  $("#boxvid12 p").html('VIDEO >>')
                  $("#videoholder12").animate({"width": "0px"}, 1000, function(){
                    $("#videoholder12").html('')
                  })
              }
            }                      
});

  $("#info12").click(function(event) {       

    event.preventDefault();

    $("#tilebox12").fadeToggle() 

  });


//TILE 13

 $("#boxvid13").on({
  'click': function(event) {

              event.preventDefault();            
               if($("#videoholder13").css('width') == '0px'){
                $("#boxvid13 p").html('VIDEO<<')
                $("#videoholder13").animate({"width": "408px"}, 1000, function(){
                  $("#videoholder13").html('<div class="iframeholder" id="iframeholder13"><iframe width="388" height="291" src="http://www.youtube.com/embed/FRG5a7w6-KA" frameborder="0" allowfullscreen></iframe></div>')
                  })
                };

                if($("#videoholder13").css('width') == '407px'){
                  $("#boxvid13 p").html('VIDEO >>')
                  $("#videoholder13").animate({"width": "0px"}, 1000, function(){
                    $("#videoholder13").html('')
                  })
              }
            }                      
});

  $("#info13").click(function(event) {       

    event.preventDefault();

    $("#tilebox13").fadeToggle() 

  });

//TILE 14

 $("#boxvid14").on({
  'click': function(event) {

              event.preventDefault();            
               if($("#videoholder14").css('width') == '0px'){
                $("#boxvid14 p").html('>> VIDEO')
                $("#videoholder14").animate({"width": "332px"}, 1000, function(){
                  $("#videoholder14").html('<div class="iframeholder" id="iframeholder14"><iframe width="312" height="234" src="http://www.youtube.com/embed/d5BVO2EDweg" frameborder="0" allowfullscreen></iframe></iframe></div>')
                  })
                };

                if($("#videoholder14").css('width') == '332px'){
                  $("#boxvid14 p").html('<< VIDEO')
                  $("#videoholder14").animate({"width": "0px"}, 1000, function(){
                    $("#videoholder14").html('')
                  })
              }
            }                      
});

  $("#info14").click(function(event) {       

    event.preventDefault();

    $("#tilebox14").fadeToggle() 

  });

// TILE 15

  $("#info15").click(function(event) {       

    event.preventDefault();

    $("#tilebox15").fadeToggle() 

  });

//TILE 16

  $("#info16").click(function(event) {       

    event.preventDefault();

    $("#tilebox16").fadeToggle() 

  });

//TILE 17

 $("#info17").click(function(event) {       

    event.preventDefault();

    $("#tilebox17").fadeToggle() 

  });

//TILE 18

 $("#info18").click(function(event) {       

    event.preventDefault();

    $("#tilebox18").fadeToggle() 

  });

//TILE 19

 $("#info19").click(function(event) {       

    event.preventDefault();

    $("#tilebox19").fadeToggle() 

  });

 //TILE 20

  $("#info20").click(function(event) {       

    event.preventDefault();

    $("#tilebox20").fadeToggle() 

  });

//TILE 21

 $("#info21").click(function(event) {       

    event.preventDefault();

    $("#tilebox21").fadeToggle() 

  });

//TILE 22 

 $("#info22").click(function(event) {       

    event.preventDefault();

    $("#tilebox22").fadeToggle() 

  });

//TILE 23

var lightboximages = [  "0px", "-440px", "-880px", "-1329px"];

var japanCurrent = 0;

function rightclick() {

  japanCurrent += 1

  $("#cuttingsslide").animate({"left": lightboximages[japanCurrent]}, 500)

  if (japanCurrent==(lightboximages.length - 1)) {

    $("#right").fadeOut()
  }


}

function leftclick() {


  japanCurrent -= 1

  $("#cuttingsslide").animate({"left": lightboximages[japanCurrent]}, 500)

  if (japanCurrent==(lightboximages.length - 4)) {

    $("#left").fadeOut()
  }

}

  $("#right").click(function(event) {

    event.preventDefault();
    rightclick()
    $("#left").fadeIn()

        });

  $("#left").click(function(event) {

    event.preventDefault();
    leftclick()
    $("#right").fadeIn()

        });

  $("#gallerylink").click(function(event) {

    $("#galleryslide").fadeToggle()
    $("#tilehead23").fadeToggle()
    

        });

 $("#info23").click(function(event) {       

    event.preventDefault();

    $("#tilebox23").fadeToggle() 

  });

 //TILE 24

  $("#info24").click(function(event) {       

    event.preventDefault();

    $("#tilebox24").fadeToggle() 

  });

// TILE 25


  $("#info25").click(function(event) {       

    event.preventDefault();

    $("#tilebox25").fadeToggle() 

  });

// TILE 26

 $("#boxvid26").on({
  'click': function(event) {

              event.preventDefault();            
               if($("#videoholder26").css('width') == '0px'){
                $("#boxvid26 p").html('>> VIDEO')
                $("#videoholder26").animate({"width": "348px"}, 1000, function(){
                  $("#videoholder26").html('<div class="iframeholder" id="iframeholder14"><iframe width="328" height="246" src="http://www.youtube.com/embed/F03k4VohXOw" frameborder="0" allowfullscreen></iframe></div>')
                  })
                };

                if($("#videoholder26").css('width') == '347px'){
                  $("#boxvid26 p").html('<< VIDEO')
                  $("#videoholder26").animate({"width": "0px"}, 1000, function(){
                    $("#videoholder26").html('')
                  })
              }
            }                      
});

  $("#info26").click(function(event) {       

    event.preventDefault();

    $("#tilebox26").fadeToggle() 

  });

// TILE 27

$("#boxvid27").on({
  'click': function(event) {

              event.preventDefault();            
               if($("#videoholder27").css('width') == '0px'){
                $("#boxvid27 p").html('>> VIDEO')
                $("#videoholder27").animate({"width": "470px"}, 1000, function(){
                  $("#videoholder27").html('<div class="iframeholder" id="iframeholder14"><iframe width="450" height="253" src="http://www.youtube.com/embed/6PsPJsptHVU" frameborder="0" allowfullscreen></iframe></div>')
                  })
                };

                if($("#videoholder27").css('width') == '470px'){
                  $("#boxvid27 p").html('<< VIDEO')
                  $("#videoholder27").animate({"width": "0px"}, 1000, function(){
                    $("#videoholder27").html('')
                  })
              }
            }                      
});

  $("#info27").click(function(event) {       

    event.preventDefault();

    $("#tilebox27").fadeToggle() 

  });

// TILE 28

  $("#info28").click(function(event) {       

    event.preventDefault();

    $("#tilebox28").fadeToggle() 

  });

//TILE 29

  $("#info29").click(function(event) {       

    event.preventDefault();

    $("#tilebox29").fadeToggle() 

  });

//TILE 30

  $("#info30").click(function(event) {       

    event.preventDefault();

    $("#tilebox30").fadeToggle() 

  });

//TILE 31

  $("#more").click(function(event) {       

    event.preventDefault();

    $("#tilebox31").fadeIn() 
    $("#more").fadeOut() 
    $("#tilehead31").fadeOut() 


  });



}); //ready


// var rooms = ["4_1", "4_2", "4_3", "3_2", "2_2", "1_2", "1_1", "den"];

// var open = ["4_1", "4_2", "4_3", "3_2", "2_2", "1_2", "1_1", "0"];



// for (var i = 0; i < open.length; i++) {

// 	var roomPoly = String("#" + rooms[i]);
// 	var roomOpen = String("#openRoom" + open[i]);

// 	$(roomPoly).click(function() {
// 		$(location).attr('href', roomOpen);
// 	});
// };


$(document).ready(function(){
	 $('.roomSVGs').click(function(){
    var id = $(this).attr('class');
    console.log(id);
    IDArray = id.split(" ");
    console.log(IDArray[0]);
     var link = 'index.html#' + IDArray[0];
     console.log(link);
      $(location).attr('href', link);
    });
 });
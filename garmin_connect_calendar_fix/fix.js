$("table.calendar-table").ready(function() {

setTimeout(function(){

jQuery(".item-icon.icon-run").parent().css({"background-color": "lightblue", "color" : "black", "font-weight" : "bold" });
jQuery(".item-icon.icon-swim").parent().css({"background-color": "gold", "color" : "black", "font-weight" : "bold" });
jQuery(".item-icon.icon-cycle").parent().css({"background-color": "lightcoral", "color" : "black", "font-weight" : "bold" });
jQuery(".item-icon.icon-fitness").parent().css({"background-color": "mediumpurple", "color" : "black", "font-weight" : "bold" });
jQuery(".item-icon.icon-hike").parent().css({"background-color": "peru", "color" : "black", "font-weight" : "bold" });
jQuery(".item-icon.icon-walk").parent().css({"background-color": "yellowgreen", "color" : "black", "font-weight" : "bold" });
jQuery(".item-icon.icon-other").parent().css({"background-color": "moccasin", "color" : "black", "font-weight" : "bold" });
jQuery(".item-icon.icon-transition").parent().css({"background-color": "orangered", "color" : "black", "font-weight" : "bold" });

jQuery(".calendar-month .calendar-item").css("white-space", "normal");

jQuery("div.calendar-item div.item-content").each(function(index) { 
	var activityTitle = jQuery(this).parent().attr("title");
	var currentText = jQuery.trim(jQuery(this).text()); 
	jQuery(this).text(activityTitle + " - " + currentText); 
});


}, 3000);

    console.log("I have been loaded!");
});

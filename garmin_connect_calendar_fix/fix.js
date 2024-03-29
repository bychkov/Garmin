CalendarFix = function() {
    console.log("setting timeout...");
    setTimeout(function(){
        console.log("fixing...");
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
};

jQuery("table.calendar-table").ready(function() {
	CalendarFix();
    });
jQuery(".calendar-goto-previous").ready(function() {
	jQuery(".calendar-goto-previous").click(function() { 
	CalendarFix(); } );
	console.log("binding click for .calendar-goto-previous");
    });
jQuery(".calendar-goto-next").ready(function() {
	jQuery(".calendar-goto-next").click(function() { 
	CalendarFix(); } );
	console.log("binding click for .calendar-goto-next");
    });


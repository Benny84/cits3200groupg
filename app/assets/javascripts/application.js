// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
function hideAllForms() {
	$('#add-item-form').hide();
	$('#set-email-form').hide();
}

function cancelItemForm() {
	$('#add-item-form').hide();
}

function cancelEmailForm() {
	$('#set-email-form').hide();
}

function getPageItemId() {
	//grab it from the URL
	var curId = document.location.pathname.match(/[^\/]+$/)[0];	
	//check if its an editing page, if so get id from appropriate place
	if (curId == "edit") {
		curId = $("#itemId").attr('name');
	}
	return curId;
}

function indicateItemPath() {
	//grab current item id
	var curId = getPageItemId();
	
	//make sure we are on an item page
	if (!isNaN(curId)) {
		var i = 0;
		//then indicate the current node, and all of its direct parents until the root
		while (curId != "") {
			$("#tree" + curId).attr("style", "list-style-type: disc");
			curId = $("#tree" + curId).attr('name');
			
			//fail safe - in case of new pages being numbered do not have an item id equal to the page
			i++;
			if (i == 50) //50 levels deep hierarchy...seems safe enough 
				break;
		}
	}
}

$(function () {
	//hide the add item and email forms at page load
	hideAllForms();
	//indicate the current item path
	indicateItemPath();
	
	$('#add-item').click(function() {
		hideAllForms();
		$('#add-item-form').show();
	});
	
	$('.set-email').click(function() {
		hideAllForms();
        $('#parent_id').val($(this).attr('name'));
		$('#set-email-form').insertAfter($('#item' + $(this).attr('name')));
		$('#set-email-form').show();
	});
	
	//Date picker jQuery
	var dateToday = new Date();
	$('#datepicker').datepicker({ dateFormat: "dd/mm/yy", minDate: dateToday });
});

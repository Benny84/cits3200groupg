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
		curId = $("#getThis").attr('name');
	}
	return curId;
}

function constructHierarchy() {	
	//firstly, hide every node in the hierarchy
	//SILLY WAY TO HIDE EVERY NODE...
	for (var i = 1; i < 500; i++){
		$("#tree" + i).hide();
	}
	
	//then show the root nodes
	$('*[name = ""]').show();
	
	//grab current item id
	var curId = getPageItemId();
	//then firstly show the current items direct children
	//$('*[name = curId]').show(); //THIS DOESNT WORK
	
	//make sure we aren't on the index page or on a new root item/email page
	if (curId != "items" && curId != "new") {	
		//then show the current node, and all of its direct parents until the root
		while (curId != "") {
			$("#tree" + curId).show();
			$("#tree" + curId).attr("style", "list-style-type:disc");
			curId = $("#tree" + curId).attr('name');
		}
	
		//re-initialise curId (this can probably be done better)
		curId = getPageItemId();
		
		//bold the current item
		$("#tree" + curId).attr("style", "font-weight: bold; list-style-type:disc");
		
		//show children...ideally done before but oh well
		for (var i = 1; i < 500; i++) { //THIS IS STUPID
			if ($("#tree" + i).attr('name') == curId) {
				$("#tree" + i).show();
				$("#tree" + i).attr("style", "font-weight: normal");
			}
		}
	}	
}

$(function () {
	//hide the add item and email forms at page load
	hideAllForms();
	//construct the hierarchy according to what page you're currently on
	constructHierarchy();
	
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
	$('#datetimepicker').datetimepicker({ dateFormat: "dd/mm/yy" });
});

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

$(function () {
	hideAllForms();
	
	$('#add-item').click(function() {
		hideAllForms();
		$('#add-item-form').show();
	});
	
	$('.set-email').click(function() {
		hideAllForms();
        $('#parent-id').val($(this).attr('name'));
		$('#set-email-form').insertAfter($('#item' + $(this).attr('name')));
		$('#set-email-form').show();
	});
	
	// Add Item Form Options	
	$('#add-item-cancel').click(function() {
		$('#add-item-form').hide();
	});
	
	$('#add-item-clear').click(function() {
		document.getElementById("add-item-form").reset();
	});
	
	// Add Root Item Form Options		
	$('#add-root-item-clear').click(function() {
		document.getElementById("add-root-item-form").reset();
	});
	
	// Add Email Reminder Form Options
	/* this is set to be deleted, not sure if raissa wants to use any of it though
	$('#set-email-confirm').click(function() { 
		var date = document.getElementById("datepicker").value;
		var recip = document.getElementById("email-recip").value;
		
		$('#currentItem').append("<p class = 'emailReminder'>Email to " + recip + " at " + date + " 00:00:00 UTC</p>");
		
		document.getElementById("set-email-form").reset();
		$('#set-email-form').hide();
	});*/
	
	$('#set-email-cancel').click(function() {
		$('#set-email-form').hide();
	});
	
	$('#set-email-clear').click(function() {
		document.getElementById("set-email-form").reset();
	});
	
	//Date picker jQuery
	$('#datepicker').datepicker({ dateFormat: "dd/mm/yy" });
});

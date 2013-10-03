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

function hideCurrentItem() {
	$('#currentItemOptions').hide();
	$('#currentItem').hide();
	$('#currentItemChildren').hide();
}

$(function () {
	hideAllForms();
	
	$('#add-item').click(function() {
		hideAllForms();
		$('#add-item-form').show();
	});
	
	$('#set-email').click(function() {
		hideAllForms();
		$('#set-email-form').show();
	});
	
	$('#add-root-item').click(function() {
		hideAllForms();
		hideCurrentItem();
		$('#add-root-item-form').show();
	});
	
	// Add Item Form Options
	$('#add-item-confirm').click(function() {
		var title = document.getElementById("new-item-title").value;
		var body = document.getElementById("new-item-body").value;
		var active = document.getElementById("new-item-active").checked;

		$('#currentItemChildren').append("<h2><input type = 'checkbox' class = 'itemCheckbox" + (active ? "" : " inactive") + "'/><a href = '#'> " + title + "</a></h2><p>" + body + "</p>");
		
		document.getElementById("add-item-form").reset();
		$('#add-item-form').hide();
	});
	
	$('#add-item-cancel').click(function() {
		$('#add-item-form').hide();
	});
	
	$('#add-item-clear').click(function() {
		document.getElementById("add-item-form").reset();
	});
	
	// Add Root Item Form Options
	$('#add-root-item-confirm').click(function() {
		var title = document.getElementById("new-root-item-title").value;
		
		$('#rootChildren').append("<li><a href = '#'>" + title + "</a></li>");
		
		document.getElementById("add-root-item-form").reset();
		$('#add-root-item-form').hide();
		$('#currentItemOptions').show();
		$('#currentItem').show(); 
		$('#currentItemChildren').show();
	});
	
	$('#add-root-item-cancel').click(function() {
		$('#add-root-item-form').hide();
		$('#currentItemOptions').show();
		$('#currentItem').show(); 
		$('#currentItemChildren').show();
	});
	
	$('#add-root-item-clear').click(function() {
		document.getElementById("add-root-item-form").reset();
	});
	
	// Add Email Reminder Form Options
	$('#set-email-confirm').click(function() {
		var date = document.getElementById("email-datepicker").value;
		var recip = document.getElementById("email-recip").value;
		
		$('#currentItem').append("<p class = 'emailReminder'>Email to " + recip + " at " + date + " 00:00:00 UTC</p>");
		
		document.getElementById("set-email-form").reset();
		$('#set-email-form').hide();
	});
	
	$('#set-email-cancel').click(function() {
		$('#set-email-form').hide();
	});
	
	$('#set-email-clear').click(function() {
		document.getElementById("set-email-form").reset();
	});
	
	//Date picker jQuery
	$('#email-datepicker').datepicker();
});

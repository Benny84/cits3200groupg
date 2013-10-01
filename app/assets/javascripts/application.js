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
	$('#add-root-item-form').hide();
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
	
	$('#edit').click(function() {
		document.getElementById("main").innerHTML = "hi";
	});
	
	$('#add-item-confirm').click(function() {
		var title = document.getElementById("new-item-title").value;
		var body = document.getElementById("new-item-body").value;
		var active = document.getElementById("new-item-active").checked;

		$('#currentItemChildren').append("<form><h2><input type = 'checkbox' class = 'itemCheckbox" + (active ? "" : " inactive") + "'/><a href = '#'> " + title + "</a></h2><p>" + body + "</p></form>");
		
		document.getElementById("add-item-form").reset();
		$('#add-item-form').hide();
	});
	
	$('#add-item-cancel').click(function() {
		$('#add-item-form').hide();
	});
	
	$('#add-item-clear').click(function() {
		document.getElementById("add-item-form").reset();
	});
	
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
	
	$('#datepicker').datepicker();
});
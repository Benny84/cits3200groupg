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
$(function () {
	$('#add-item-form').hide();
	
	$('#add-item').click(function() {
		$('#add-item-form').show();
	});
	
	$('#edit').click(function() {
		document.getElementById("hi").innerHTML = "hi";
	});
	
	$('#add-item-confirm').click(function() {
		var title = document.getElementById("new-item-title").value;
		var body = document.getElementById("new-item-body").value;
		
		$('#currentItemChildren').append("<form style = 'margin-left: 30px'><p><b><input type = 'checkbox' style = 'margin-left: -20px'/> " + title + "</b></p><p><a href = '#'>" + body + "</a></p><p style = 'color: red'>Email Reminder set at</p></form>");
		
		document.getElementById("add-item-form").reset();
		$('#add-item-form').hide();
	});
	
	$('#add-item-cancel').click(function() {
		$('#add-item-form').hide();
	});
	
	$('#add-item-clear').click(function() {
		document.getElementById("add-item-form").reset();
	});
});

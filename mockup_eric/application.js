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

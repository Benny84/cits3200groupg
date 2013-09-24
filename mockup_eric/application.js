$(function () {
	$('#add-item-form').hide();
	$('#add-root-item-form').hide();
	
	$('#add-item').click(function() {
		$('#add-item-form').show();
	});
	
	$('#add-root-item').click(function() {
		$('#add-root-item-form').show();
		$('#currentItemOptions').hide();
		$('#currentItem').hide();
		$('#child1').hide(); //and loop through all children
		$('#add-item-form').hide();
	});
	
	$('#edit').click(function() {
		document.getElementById("main").innerHTML = "hi";
	});
	
	$('#add-item-confirm').click(function() {
		var title = document.getElementById("new-item-title").value;
		var body = document.getElementById("new-item-body").value;
		var active = document.getElementById("new-item-active").checked;
		
		$('#currentItemChildren').append("<form style = 'margin-left: 30px'><h2><input type = 'checkbox' style = 'margin-left: -24px" + (active ? "" : "; visibility: hidden") + "'/><a href = '#'> " + title + "</a></h2><p>" + body + "</p></form>");
		
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
		$('#child1').show();//and loop through all children
	});
	
	$('#add-root-item-cancel').click(function() {
		$('#add-root-item-form').hide();
		$('#currentItemOptions').show();
		$('#currentItem').show(); 
		$('#child1').show();//and loop through all children
	});
	
	$('#add-root-item-clear').click(function() {
		document.getElementById("add-root-item-form").reset();
	});
});

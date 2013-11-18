$.getJSON("https://www.googleapis.com/analytics/v3/metadata/ga/columns", function(json) {
	GAMetrics = json
	// In server version, this would store a local cache of JSON, and then just ping the URL above with parameter fields=etag, to check if full JSON needs to be refreshed
})

// $.widget("ui.combobox", {
// 	_create: function() {

// 	}
// })

// function loadSelectBox (element, filter) {
// 	var options = GAMetrics.items.
// 	var template = Handlebars.compile( $("#select-box").html() )
// 	element.append(template)
// }

$(function() {
    $( "#metrics" ).sortable({
    	items: "li:not(.ui-state-disabled)",
		placeholder: "ui-state-highlight",
		cursor: "move",
		cursorAt: {left:100},
		distance: 15,
		forcePlaceholderSize: true,
		contaiment: "parent"
	});
    $( "#metrics" ).disableSelection();


  });

// Transforms filter value depending on logic
// function filterLogic (filterValue) {
// 	if ($("#filter-not").val()==true) {
// 		filterValue= "!["+filterValue+"]"
// 	}

// 	switch ($("#filter-logic").val())
// 	case: "Excatly matches", "Matching regex" {
// 		return filterValue
// 	},
// 	case: "Containing" {
// 		return ".*" + filterValue + ".*"
// 	}
// 	case: "Start with" {
// 		return "^" + filterValue + ".*"
// 	}

// }
	
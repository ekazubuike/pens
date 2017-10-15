$(document).ready(function(){
	//semantic UI JS
	$('.ui.dropdown').dropdown();
	$('.ui.radio.checkbox').checkbox();

	//display disclosure date input if "yes"
	$('#yesDisclosed').on("click", function(){
		$('#dateDisclosed').removeClass("conditionalDisplay");
    });

	//hide disclosure date if "no"
    $('#noDisclosed').on("click", function(){
    	$('#dateDisclosed').addClass("conditionalDisplay");
    });

    //show infection description if checkbox checked
    $("#otherInfection").change(function() {
    	if(this.checked){
    		$("#infectionDescription").removeClass("conditionalDisplay");
    	} else {
    		$("#infectionDescription").addClass("conditionalDisplay");
    	}
    });

    //display text box if other reason
	$("#otherTest").change(function(){
		if(this.checked){
			$("#otherTestReason").removeClass("conditionalDisplay");
		}
	});

	//hide text box if not "other"
	$(".testReason").change(function(){
		$("#otherTestReason").addClass("conditionalDisplay");
	});

	//show infection description if checkbox checked
    $("#otherSymptoms").change(function() {
    	if(this.checked){
    		$("#symptomsDescription").removeClass("conditionalDisplay");
    	} else {
    		$("#symptomsDescription").addClass("conditionalDisplay");
    	}
    });

    //display text box if other reason
	$("#otherSource").change(function(){
		if(this.checked){
			$("#otherReferralSource").removeClass("conditionalDisplay");
		}
	});

	//hide text box if not "other"
	$(".mainSource").change(function(){
		$("#otherReferralSource").addClass("conditionalDisplay");
	});

	//display text box for relevant contact method
	$(".contactPreference").change(function(){
		$(this).next().toggleClass("conditionalDisplay");
	});

});
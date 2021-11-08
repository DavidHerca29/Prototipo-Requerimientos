$(document).ready(function () {
	//override jquery validate plugin defaults
	// http://stackoverflow.com/a/18754780

	$.validator.setDefaults({
	    highlight: function(element) {
	        $(element).closest(".form-group").addClass("has-error");
	    },

	    unhighlight: function(element) {
	        $(element).closest(".form-group").removeClass("has-error");
	    },

	    errorElement: "span",

	    errorClass: "help-block",

	    errorPlacement: function(error, element) {
	        if (element.parent(".input-group").length ||
	        	element.prop("type") === "checkbox" ||
	        	element.prop("type") === "radio"
	        ) {
	            error.insertAfter(element.parent());
	        } else {
	            error.insertAfter(element);
	        }
	    }
	});

	$("form").validate({
		rules: {
			email: {
				required: true,
				maxlength: 255
			},
			emailConfirm: {
				required: true,
				equalTo: "#email",
				maxlength: 255
			},
			zipCode: {
				maxlength: 32
			},
			password: {
				required: true,
				minlength: 5
			},
			passwordConfirm: {
				required: true,
				minlength: 5,
				equalTo: "#password"
			},
			termsOfUse: "required"
		},

		messages: {
			email: {
				required: "Please enter your email address.",
			},
			emailConfirm: {
				required: "Confirm your email address.",
				equalTo: "Emails do not match."
			},
			password: {
				required: "Please choose a password."
			},
			passwordConfirm: {
				required: "Confirm your password.",
				equalTo: "Passwords do not match."
			},
			termsOfUse: {
				required: "You must agree to terms of service."
			}
		}
	});
});
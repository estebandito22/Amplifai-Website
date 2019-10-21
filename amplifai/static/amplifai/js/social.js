function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $('.inputfile').blur();
      $('#post-image')
        .attr('src', e.target.result)
        .attr('style', "");
      $('.post-image-upload p')
        .attr('style', "display: none;");

    };

    reader.readAsDataURL(input.files[0]);
  }
}

function updateCheckBoxes(){
    $("#hashtag-holder input").each(function() {
      if ($("#id_social_post_form-text").val().indexOf("#" + $(this).val() + " ") > -1 || $("#id_social_post_form-text").val().indexOf("#" + $(this).val() + "#") > -1 || $("#id_social_post_form-text").val().lastIndexOf("#" + $(this).val()) + $(this).val().length + 1 == $("#id_social_post_form-text").val().length) {
        $(this).prop('checked', true);
      } else {
        $(this).prop('checked', false);
      }
    });
};

//TODO: Fix bug that removes partial substrings of tags containing other tags
$(document).ready(function() {
  $("#hashtag-holder input").click(function() {
    console.log("last index of tag " + $("#id_social_post_form-text").val().indexOf("#" + $(this).val()));
      console.log("length of val " + $("#id_social_post_form-text").val().length)
    if ($(this).prop('checked') && $("#id_social_post_form-text").val().indexOf("#" + $(this).val() + " ") === -1 && $("#id_social_post_form-text").val().indexOf("#" + $(this).val() + "#") === -1 && $("#id_social_post_form-text").val().lastIndexOf("#" + $(this).val()) + $(this).val().length + 1 != $("#id_social_post_form-text").val().length) {
      $("#id_social_post_form-text").val($("#id_social_post_form-text").val() + "#" + $(this).val());
      updateCheckBoxes();
    } else if (!$(this).prop('checked') && ($("#id_social_post_form-text").val().indexOf("#" + $(this).val() + " ") > -1 || $("#id_social_post_form-text").val().indexOf("#" + $(this).val() + "#") > -1 || $("#id_social_post_form-text").val().lastIndexOf("#" + $(this).val()) + $(this).val().length + 1 == $("#id_social_post_form-text").val().length)) {
        if ($("#id_social_post_form-text").val().indexOf("#" + $(this).val() + " ") > -1){
            $("#id_social_post_form-text").val($("#id_social_post_form-text").val().replace("#" + $(this).val(), ""));
        } else if ($("#id_social_post_form-text").val().indexOf("#" + $(this).val() + "#") > -1) {
            $("#id_social_post_form-text").val($("#id_social_post_form-text").val().replace("#" + $(this).val(), ""));
        } else if ($("#id_social_post_form-text").val().lastIndexOf("#" + $(this).val()) + $(this).val().length + 1 == $("#id_social_post_form-text").val().length){
            $("#id_social_post_form-text").val($("#id_social_post_form-text").val().replace(new RegExp("#" + $(this).val() + '$'), ""));
        }
      updateCheckBoxes();
    }
  });

  $("#id_social_post_form-text").on('input', function() {
    updateCheckBoxes();
  });
});

(function ($) {

    "use strict";

	// RADIAL PROGRESS BAR
	enableRadialProgress();

  // enableActiveTabNav();

  // fadeList("latest-hashtag-table");
  // fadeList("alltime-hashtag-table");


})(jQuery);

function enableRadialProgress(){

	$(".circular-progress").each(function(){
		var $this = $(this),
			progNumerator = $this.data('prog-numerator'),
      progDenominator = $this.data('prog-denominator'),
      progPercent = progNumerator/progDenominator;
      // progPercent = $this.data('prog-percent');
      console.log(progPercent)

		var bar = new ProgressBar.Circle(this, {
			color: '#aaa',
			strokeWidth: 4,
			trailWidth: 2,
			easing: 'easeInOut',
			duration: 1400,
			text: {

			},
			from: { color: '#aaa', width: 2 },
			to: { color: '#55a355', width: 4 },
			// Set default step function for all animate calls
			step: function(state, circle) {
				circle.path.setAttribute('stroke', state.color);
				circle.path.setAttribute('stroke-width', state.width);

				var value = Math.round(circle.value() * progDenominator);
				if (value === 0) {
					circle.setText('');
				} else {
          circle.setText(kFormatter(value));
				}

			}
		});

		$(this).waypoint(function(){
		   bar.animate(progPercent);
		},{offset: "90%"})

	});
}

function isExists(elem){
	if ($(elem).length > 0) {
		return true;
	}
	return false;
}

function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

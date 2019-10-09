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

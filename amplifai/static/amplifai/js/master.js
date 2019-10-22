


// AJAX Form Submission
$(function() {


    // This function gets cookie with a given name
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    var csrftoken = getCookie('csrftoken');

    /*
    The functions below will create a header with csrftoken
    */

    function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
    function sameOrigin(url) {
        // test that a given url is a same-origin URL
        // url could be relative or scheme relative or absolute
        var host = document.location.host; // host + port
        var protocol = document.location.protocol;
        var sr_origin = '//' + host;
        var origin = protocol + sr_origin;
        // Allow absolute or scheme relative URLs to same origin
        return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
            (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
            // or any other URL that isn't scheme relative or absolute i.e relative.
            !(/^(\/\/|http:|https:).*/.test(url));
    }

    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
                // Send the token to same-origin, relative URLs only.
                // Send the token only if the method warrants CSRF protection
                // Using the CSRFToken value acquired earlier
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });

});

function reloadPage(){
  location.reload(true);
  // (location.href + " .profile-section").reload(true);
  // $(".profile-section").load(location.href + " .profile-section");
};

// function generate_create_song_form_handler(i){
//   return function(event){
//     console.log("form " + i + " submitted!");  // sanity check
//     create_song(i);
//   }
// }
//
// function assign_create_song_form_handlers(){
//   console.log('assinging song form handlers')
//   var num_albums = $('.add-song-form').length
//   console.log(num_albums + ' albums found!')
//   for (var i = 1; i <= num_albums; i++) {
//     $('#add-song-form-'+i).on('submit', function(event){
//       event.preventDefault();
//     });
//     $('#add-song-form-'+i).on('submit', generate_create_song_form_handler(i));
//   }
// }
//
// assign_create_song_form_handlers();
//
// // AJAX for posting
// function create_song(i) {
//     console.log("create create song is working!") // sanity check
//     $.ajax({
//         url : "create_song/", // the endpoint
//         type : "POST", // http method
//         data : { album_pk : $('#add-song-form-' + i + ' input#album-pk').val(),
//                  song_title: $('#add-song-form-' + i + ' input#song-title').val(),
//                  audio_file: $('#add-song-form-' + i + ' input#audio-file').val(),
//                }, // data sent with the post request
//
//         // handle a successful response
//         success : function(json) {
//             $('#add-song-form-' + i + ' input#album-pk').val(''); // remove the value from the input
//             $('#add-song-form-' + i + ' input#song-title').val(''); // remove the value from the input
//             $('#add-song-form-' + i + ' input#audio-file').val(''); // remove the value from the input
//             console.log(json); // log the returned json to the console
//             console.log("success"); // another sanity check
//             reloadPage(); // only way I know how right now to make subsequent calls work
//             // (location.href + " #album-card-" + i).reload(true);
//             // $("#module").load(location.href + " #module");
//             // assign_create_song_form_handlers();
//         },
//
//         // handle a non-successful response
//         error : function(xhr,errmsg,err) {
//             $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
//                 " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
//             console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
//         }
//     });
// };

function generate_delete_song_form_handler(i, j){
  return function(event){
    console.log("form " + i + '-' + j + " submitted!");  // sanity check
    delete_song(i, j);
  }
}

function assign_delete_song_form_handlers(){
  console.log('assinging delete song form handlers')
  var num_albums = $('.add-song-form').length
  console.log(num_albums + ' albums found!')
  for (var i = 1; i <= num_albums; i++) {
    var num_songs = $('#album-card-' + i + ' .delete-song-form').length
    console.log(num_songs + ' songs found!')
    for (var j = 1; j <= num_songs; j++) {
      $('#delete-song-form-'+i+'-'+j).on('submit', function(event){
        event.preventDefault();
      });
      $('#delete-song-form-'+i+'-'+j).on('submit', generate_delete_song_form_handler(i, j));
    }
  }
}

assign_delete_song_form_handlers();

// AJAX for posting
function delete_song(i, j) {
    console.log("delete song is working!") // sanity check
    $.ajax({
        url : "delete_song/", // the endpoint
        type : "POST", // http method
        data : { song_pk : $('#delete-song-form-' + i + '-' + j + ' input#delete-song-pk').val()
               }, // data sent with the post request

        // handle a successful response
        success : function(json) {
            $('#delete-song-form-' + i + '-' + j + ' input#delete-song-pk').val(''); // remove the value from the input
            console.log(json); // log the returned json to the console
            console.log("success"); // another sanity check
            reloadPage(); // only way I know how right now to make subsequent calls work
        },

        // handle a non-successful response
        error : function(xhr,errmsg,err) {
            $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
                " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }
    });
};

function generate_analyze_song_form_handler(i, j){
  return function(event){
    console.log("form " + i + '-' + j + " submitted!");  // sanity check
    analyze_song(i, j);
  }
}

function assign_analyze_song_form_handlers(){
  console.log('assinging analyze song form handlers')
  var num_albums = $('.analyze-song-form').length
  console.log(num_albums + ' albums found!')
  for (var i = 1; i <= num_albums; i++) {
    var num_songs = $('#album-card-' + i + ' .analyze-song-form').length
    console.log(num_songs + ' songs found!')
    for (var j = 1; j <= num_songs; j++) {
      $('#analyze-song-form-'+i+'-'+j).on('submit', function(event){
        event.preventDefault();
      });
      $('#analyze-song-form-'+i+'-'+j).on('submit', generate_analyze_song_form_handler(i, j));
    }
  }
}

assign_analyze_song_form_handlers();

// AJAX for posting
function analyze_song(i, j) {
    console.log("analyze song is working!") // sanity check
    $.ajax({
        url : "analyze_song/", // the endpoint
        type : "POST", // http method
        data : { song_pk : $('#analyze-song-form-' + i + '-' + j + ' input#analyze-song-pk').val(),
                 // yes_analyze : yes_analyze,
               }, // data sent with the post request

        // handle a successful response
        success : function(json) {
            $('#analyze-song-form-' + i + '-' + j + ' input#analyze-song-pk').val(''); // remove the value from the input
            console.log(json); // log the returned json to the console
            console.log("success"); // another sanity check
            reloadPage(); // only way I know how right now to make subsequent calls work
        },

        // handle a non-successful response
        error : function(xhr,errmsg,err) {
            $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
                " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }
    });
};


function generate_delete_album_form_handler(i){
  return function(event){
    console.log("form " + i + " submitted!");  // sanity check
    delete_album(i);
  }
}

function assign_delete_album_form_handlers(){
  console.log('assinging delete album form handlers')
  var num_albums = $('.delete-album-form').length
  console.log(num_albums + ' albums found!')
  for (var i = 1; i <= num_albums; i++) {
    $('#delete-album-form-'+i).on('submit', function(event){
      event.preventDefault();
    });
    $('#delete-album-form-'+i).on('submit', generate_delete_album_form_handler(i));
  }
}

assign_delete_album_form_handlers();

// AJAX for posting
function delete_album(i) {
    console.log("delete album is working!") // sanity check
    $.ajax({
        url : "delete_album/", // the endpoint
        type : "POST", // http method
        data : { album_pk : $('#delete-album-form-' + i + ' input#delete-album-pk').val()
               }, // data sent with the post request

        // handle a successful response
        success : function(json) {
            $('#delete-album-form-' + i + ' input#delete-album-pk').val(''); // remove the value from the input
            console.log(json); // log the returned json to the console
            console.log("success"); // another sanity check
            reloadPage(); // only way I know how right now to make subsequent calls work
        },

        // handle a non-successful response
        error : function(xhr,errmsg,err) {
            $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
                " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }
    });
};


$('.add-song-button').on('click', function() {
    $(this).find('span.arrow').toggleClass('active');
});


// function generate_create_album_form_handler(){
//   return function(event){
//     console.log("create album form submitted!");  // sanity check
//     create_album();
//   }
// }
//
// function generate_validate_album_logo_form_handler(){
//   return function(event){
//     console.log("validate album logo form submitted!");  // sanity check
//     validate_album_logo();
//   }
// }
//
// function assign_create_album_form_handlers(){
//   console.log('assinging create album form handler')
//   $('#create-album-form').on('submit', function(event){
//     event.preventDefault();
//   });
//   // $('#create-album-form').on('submit', generate_validate_album_logo_form_handler());
//   $('#create-album-form').on('submit', generate_create_album_form_handler());
// }
//
// assign_create_album_form_handlers();
//
// // AJAX for posting
// function create_album() {
//     console.log("create album is working!") // sanity check
//     $.ajax({
//         url : "create_album/", // the endpoint
//         type : "POST", // http method
//         data : { album_title : $('#create-album-form input#album-title').val(),
//                  album_logo : $('#create-album-form input#album-logo').val(),
//                }, // data sent with the post request
//
//         // handle a successful response
//         success : function(json) {
//             $('#create-album-form input#album-title').val(''); // remove the value from the input
//             $('#create-album-form input#album-logo').val(''); // remove the value from the input
//             console.log(json); // log the returned json to the console
//             // console.log("success"); // another sanity check
//             if (json["result"] == true){
//               // $("#form-error-album-logo").text(json["form_errors"]["album_logo"][1]);
//               $("#form-error-album-logo").text(json["form_errors"]);
//               console.log("unsuccess"); // another sanity check
//             } else if (json["result"] == false) {
//               console.log("success"); // another sanity check
//               $("#form-error-album-logo").text("");
//               reloadPage();
//             }
//         },
//
//         // handle a non-successful response
//         error : function(xhr,errmsg,err) {
//             $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
//                 " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
//             console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
//         }
//     });
// };
//
//
// function validate_album_logo(){
//
//     console.log("validate album logo is working!")
//
//     var album_logo = $('#create-album-form input#album-logo').val()
//     console.log(album_logo)
//
//     $.ajax({
//       url: 'validate_album_logo/',
//       data: {
//         'album_logo': album_logo
//       },
//       dataType: 'json',
//       success: function (data) {
//         console.log(data)
//         console.log("success")
//         if (data.is_invalid) {
//           alert("Album logo must be .jpg, .png, or .jpeg");
//         }
//       }
//     });
//
// }




// // Parallax library
// var touch = Modernizr.touch;
// $('.img-holder').imageScroll({
//   imageAttribute: (touch === true) ? 'image-mobile' : 'image',
//   touch: touch
// });

// TODO: Check if this introduced a bug on the ablum collapse function
// the current open accordion will not be able to close itself
// $('[data-toggle="collapse"]').on('click',function(e){
//     if ( $(this).parents('.accordion').find('.collapse.show') ){
//         var idx = $(this).index('[data-toggle="collapse"]');
//         if (idx == $('.collapse.show').index('.collapse')) {
//             e.stopPropagation();
//         }
//     }
// });


// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.top = "-80px";
  } else {
    document.getElementById("navbar").style.top = "0";
  }
}


// $( '#navbar .navbar-nav a' ).on( 'click', function () {
//   console.log($( '#navbar .navbar-nav' ).find( 'li.active' ))
// 	$( '#navbar .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
// 	$( this ).parent( 'li' ).addClass( 'active' );
// });

$(document).ready(function() {
  $('li.active').removeClass('active');
  $('a[href="' + location.pathname + '"]').closest('li').addClass('active');
});

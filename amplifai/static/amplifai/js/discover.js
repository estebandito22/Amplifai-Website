// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

// var bar = new ProgressBar.Circle(container, {
//   color: '#aaa',
//   // This has to be the same size as the maximum width to
//   // prevent clipping
//   strokeWidth: 4,
//   trailWidth: 1,
//   easing: 'easeInOut',
//   duration: 1400,
//   text: {
//     autoStyleContainer: false
//   },
//   from: { color: '#aaa', width: 1 },
//   to: { color: '#333', width: 4 },
//   // Set default step function for all animate calls
//   step: function(state, circle) {
//     circle.path.setAttribute('stroke', state.color);
//     circle.path.setAttribute('stroke-width', state.width);
//
//     var value = Math.round(circle.value() * 100);
//     if (value === 0) {
//       circle.setText('');
//     } else {
//       circle.setText(value * 100);
//     }
//
//   }
// });
// bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
// bar.text.style.fontSize = '2rem';
//
// bar.animate(1.0);  // Number from 0.0 to 1.0




(function ($) {

    "use strict";

	// RADIAL PROGRESS BAR
	enableRadialProgress();

  // enableActiveTabNav();

  // fadeList("latest-hashtag-table");
  // fadeList("alltime-hashtag-table");


})(jQuery);

function enableRadialProgress(){

	$(".radial-progress").each(function(){
		var $this = $(this),
			progNumerator = $this.data('prog-numerator'),
      progDenominator = $this.data('prog-denominator'),
      progPercent = progNumerator/progDenominator;
      // progPercent = $this.data('prog-percent');
      console.log(progPercent)

		var bar = new ProgressBar.SemiCircle(this, {
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

//   // Get the container element
//   var btnContainer = document.getElementById("discover-nav-bar");
//
//   // Get all buttons with class="btn" inside the container
//   var btns = btnContainer.getElementsByTagName("a");
//
//   // Loop through the buttons and add the active class to the current/clicked button
//   for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function() {
//       var current = btnContainer.getElementsByClassName("active");
//
//       // If there's no active class
//       if (current.length > 0) {
//         current[0].className = current[0].className.replace(" active", "");
//       }
//
//       // Add the active class to the current/clicked button
//       this.className += " active";
//     });
//   }
//
// function fadeList(id){
//   $("#"+id+" tr").each(function(i) {
//       console.log($(this))
//       $(this)
//         .delay(50 * i)
//         .css('opacity', 0)
//         .slideDown('slow')
//         .animate(
//           { opacity: 1 },
//           { queue: false, duration: 'slow' }
//         );
//   });
// }

function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

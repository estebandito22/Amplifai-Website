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
	enableLinearProgress();
  enableLinearMinMaxProgress();

})(jQuery);

function enableLinearProgress(){

	$(".linear-absolute-progress").each(function(){
		var $this = $(this),
			progNumerator = $this.data('prog-numerator'),
      progDenominator = $this.data('prog-denominator'),
      progPercent = progNumerator/progDenominator;
      // progPercent = $this.data('prog-percent');
      // console.log(progPercent)

		var bar = new ProgressBar.Line(this, {
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
					circle.setText('-');
				} else {
          circle.setText(kFormatter(value));
				}
        // circle.setText(value);

			}
		});

		$(this).waypoint(function(){
		   bar.animate(progPercent);
		},{offset: "90%"})

	});
}

function enableLinearMinMaxProgress(){

	$(".linear-minmax-progress").each(function(){
		var $this = $(this),
			progNumerator = $this.data('prog-numerator'),
      progDenominator = $this.data('prog-denominator'),
      progMin = $this.data('prog-min'),
      progPercent = 1 - (progNumerator-progMin)/progDenominator;

		var bar = new ProgressBar.Line(this, {
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

				var value = (progNumerator).toFixed(2);
				if (value === (0.00).toFixed(2)) {
					circle.setText(' - ');
				} else {
          circle.setText('$' + value);
				}

			}
		});

    if (progNumerator > 0){
      $(this).waypoint(function(){
  		   bar.animate(progPercent);
  		},{offset: "90%"})
    };

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

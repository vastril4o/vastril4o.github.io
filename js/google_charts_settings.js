// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
	var options = {
		// title
    	//title: 'Active Users',
    	// remove legend
    	legend: { position: 'none' },
    	//legend: { position: 'bottom' },
    	animation: { duration: 1000, startup: true },
    	chartArea: { width: '80%', height: '80%' },
    	width: '100%',
    	height: '100%'
    	//hAxis: { gridlines: { color: 'transparent' }},
		//vAxis: { gridlines: { color: 'transparent' }, titleTextStyle:{color: 'transparent'} }
	}

  	// Instantiate and draw our chart, passing in some options.
  	var chart = new google.visualization.LineChart(document.getElementById('div_chart_pm'));
  	chart.draw(googleChartData(), options);

  	// Handle windows resize
  	$(window).resize(function () {
    	chart.draw(googleChartData(), options);
  	})

  	// start loop
  	// Redraw chart whit different values
  	var intervalChartRedraw = setInterval(
    	function () {
      		chart.draw(googleChartData(), options);
		}, 10000 
	);
}

function googleChartData() {
  	var data = new google.visualization.DataTable();
  	var data = google.visualization.arrayToDataTable([
    	['Month', 'Web', 'Mobile'],
    	[1, Math.random(), Math.random()],
    	[2, Math.random(), Math.random()],
    	[3, Math.random(), Math.random()],
    	[4, Math.random(), Math.random()],
    	[5, Math.random(), Math.random()],
    	[6, Math.random(), Math.random()]
  	]);
  	return data;
}
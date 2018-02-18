particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 20,
        "density": {
          "enable": false,
          "value_area": 1000
        }
      },
      "color": {
        "value": "#000000"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 5,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 5,
          "size_min": 0.5,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 250,
        "color": "#000000",
        "opacity": 0.4,
        "width": 0.4
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "bounce",
        "bounce": true,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 800,
          "size": 80,
          "duration": 2,
          "opacity": 0.8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.8
        },
        "push": {
          "particles_nb": 1
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
);

// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
  var options = {
    title: 'Active Users',
    // remove legend
    //legend: { position: 'none' },
    // add trendline for every vertical label
    animation: { duration: 1000, startup: true },
    // fix chart area in container
    chartArea: { width: '80%', height: '80%' },
    // fix container size
    width: '100%',
    height: '100%',
    legend: { position: 'bottom' }
};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.LineChart(document.getElementById('div_chart_pm'));
  chart.draw(googleChartData(), options);

  $(window).resize(function () {
    chart.draw(googleChartData(), options);
  })

  // start loop
  var interval = setInterval(function() { chart.draw(googleChartData(), options); }, 10000);
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
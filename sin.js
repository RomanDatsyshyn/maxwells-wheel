const Diagram2 = () => {
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "y(t)",
          data: [],
          borderColor: "blue",
          borderWidth: 2,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        xAxes: [
          {
            display: true
          }
        ],
        yAxes: [
          {
            display: true
          }
        ]
      }
    }
  });
  for (var x = 0.0; x <= 2 * Math.PI; x += Math.PI / 40) {
    myChart.data.labels.push("" + x.toFixed(2));
    myChart.data.datasets[0].data.push(f(x).toFixed(2));
  }
  myChart.update();

  function f(x) {
    return Math.sin(3.22 * x) * 2.5 - 2.5;
  }
};

window.addEventListener("load", Diagram2);

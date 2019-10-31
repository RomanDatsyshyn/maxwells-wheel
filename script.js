const Diagram = (T, h) => {
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
  for (var x = 0.0; x <= 2 * Math.PI; x += Math.PI / 30) {
    myChart.data.labels.push("" + x.toFixed(2));
    myChart.data.datasets[0].data.push(f(x).toFixed(2));
  }
  myChart.update();

  function f(x) {
    return Math.sin(T * x) * h - h;
  }
};

const start = () => {
  let m;
  let r0;
  let R;
  let h;
  const g = 9.8;
  let html = "";

  let value1 = document.getElementById("m").value;
  let value2 = document.getElementById("r0").value;
  let value3 = document.getElementById("R").value;
  let value4 = document.getElementById("h").value;

  m = value1;
  r0 = value2;
  R = value3;
  h = value4;

  // 2 пункт - Момент інерції
  let I = (1 / 2) * m * r0 * r0 + (1 / 2) * m * (R * R + r0 * r0);
  // 1 пункт - Тангенціальне прискорення
  let a_ = (m * r0 * r0 * g) / I;
  // 3 пункт - Періуд коливань
  let T = (2 / r0) * Math.sqrt((h * I) / (m * g));
  // 4 пункт - Сила натягу
  let F_ = m * g - m * a_;
  //////////////////// 5 пункт ////////////////////
  let OMEGA = (2 * Math.PI) / T; // 5.1
  let Phi = OMEGA * r0; // 5.2
  let DELTA_P = 2 * m * Phi; // 5.3
  let DELTA_T = (Math.PI * r0) / Phi; // 5.4
  // 5.5 - Додаткова сила натягу
  let F = DELTA_P / DELTA_T;

  html += `<h3><b>I = 1/2m * r0*r0 + 1/2m * (R*R + r0*r0) = </b>${I.toFixed(
    8
  )}</h3><br>`;
  html += `<h3><b>a = (m * r0 * r0 * g) / I = </b>${a_.toFixed(5)}</h3><br>`;
  html += `<h3><b>T = (2 / r0) * &radic;(h * I) / mg = </b>${T.toFixed(
    5
  )}</h3><br>`;
  html += `<h3><b>Fн = 2 * а = </b>${F_.toFixed(5)}</h3><br>`;
  html += `<h3><b>ω =  2π / T = </b>${OMEGA.toFixed(5)}</h3><br>`;
  html += `<h3><b>ψ = ω * r0 = </b>${Phi.toFixed(5)}</h3><br>`;
  html += `<h3><b>Δ p = 2 * m * ψ = </b>${DELTA_P.toFixed(5)}</h3><br>`;
  html += `<h3><b>Δ t = (π * r0) / ψ = </b>${DELTA_T.toFixed(5)}</h3><br>`;
  html += `<h3><b>F = Δ p / Δ t = </b>${F.toFixed(5)}</h3>`;

  document.getElementById("math_inner").innerHTML = html;

  var root = document.querySelector(":root");

  let length_string = h * 250;
  let time = T.toFixed(2) / 2;

  let yo_yo_size = R * 700;
  let stick_size = r0 * 350;
  let diff = yo_yo_size / 2.5;

  root.style.setProperty("--length-string", `-${length_string}px`);
  root.style.setProperty("--length-yo-yo", `${length_string - 10}px`);
  root.style.setProperty("--time", `${time}s`);
  root.style.setProperty("--yo-yo-size", `${yo_yo_size}px`);
  root.style.setProperty("--yo-yo-stick", `${stick_size}px`);
  root.style.setProperty("--string-left", `${diff}px`);

  Diagram(T, (h * 10) / 2);
  myChart.update();
};

let closeButton = document.querySelector(".navbar_close_button");
let toogleButton = document.querySelector(".toggle-button");
toogleButton.addEventListener("click", function () {
  toogleButton.classList.add('hide_toogle_button');

  document.querySelector("#active").classList.add("activeMe");

  closeButton.classList.remove("navbar_close_button");
});

let crossButton = document.getElementById('show_navbar_to_click_cross_icon');
crossButton.addEventListener('click', function(){
  document.querySelector("#active").classList.remove("activeMe");
  toogleButton.classList.remove('hide_toogle_button');
  closeButton.classList.add("navbar_close_button");
})


// doughnut chart code 
const dataDoughnut = {
    labels: ["possitive", "negetive", "unsure"],
    datasets: [
      {
        label: "# of Votes",
        data: [60, 20, 6],
        backgroundColor: ["#9791FF", "#FF5959", "lightgray"],
        borderColor: ["#9791FF", "#FF5959", "lightgray"],
        cutout: "70%",
      },
    ],
  };
  
  // counter plugin block
  const counter = {
    id: "counter",
    beforeDraw(Chart, args, options) {
      const {
        ctx,
        chartArea: { top, right, bottom, left, width, height },
      } = Chart;
      ctx.save();
      ctx.fillStyle = "#020344";
      ctx.fillRect(width, top + height / 2, 0, 10);
      ctx.font = "25px sans-serif";
      ctx.textAlign = "center";
      ctx.fillStyle = "#020344;";
      ctx.textWeight = ctx.fillText(
        dataDoughnut.datasets[0].data[0] + "%",
        width + 34,
        top + 10 + height / 2
      );
    },
  };
  
  // config
  const doughnutConfig = {
    type: "doughnut",
    data: dataDoughnut,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "left",
          align: "center",
          fontSize: "14",
          labels: {
            pointStyle: "circle",
            usePointStyle: true,
            padding: 14,
          },
        },
      },
    },
    plugins: [counter],
  };
  
  // data redering
  const missionDoughnut = new Chart(
    document.getElementById("doughnut"),
    doughnutConfig
  );
  
  const vissionDoughnut = new Chart(
    document.getElementById("vissionDoughnut"),
    doughnutConfig
  );
  
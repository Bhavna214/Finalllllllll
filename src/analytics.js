var xValues = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
var yValues = [7,8,9,10,11,14,15];

new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: yValues
        }]
      },
      options: {
        legend: {display: false},
        scales: {
          yAxes: [{ticks: {min: 6, max:16}}],
        },
        title: {
            display: true,
            text: "Number of applicants per day"
          }
      }
});

var xValues = ["Not shortlisted teams", "Shortlisted teams"];
var yValues = [55, 20];
var barColors = [
  "#6C5CE7",
  "#9f95ec",
];

new Chart("pieChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Shortlisted teams for hackathon"
    }
  }
});

var xValues = ["Web Development", "App Development", "Blockchain", "AI ML"];
var yValues = [15,8,7,10];
var barColors = [
  "#6C5CE7",
  "#9f95ec",
  "#2b18b8",
  "#59528e",
];

new Chart("pieChart2", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Applicants per domain"
    }
  }
});

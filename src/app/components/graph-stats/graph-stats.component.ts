import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-graph-stats",
  templateUrl: "./graph-stats.component.html",
  styleUrls: ["./graph-stats.component.css"]
})
export class GraphStatsComponent implements OnInit {
  chart = [];
  randomArray: number[] = [];
  labels: string[] = [];
  numberOfDataPoints: number = 48;

  constructor() {}

  ngOnInit(): void {
    this.randomArray = Array.from({ length: this.numberOfDataPoints }, () =>
      Math.floor(Math.random() * this.numberOfDataPoints)
    );

    // Random letter function
    let randomLetter = () => {
      let anySize = this.numberOfDataPoints;
      const characterSet = "abcdefghijklmnopqrstuvwxyz";
      let result = "";
      for (var i = 0; i < anySize; i++)
        result += characterSet[Math.floor(Math.random() * characterSet.length)];
      this.labels = result.split("");
      return result;
    };

    randomLetter();

    this.chart = new Chart("canvas", {
      type: "bar",
      data: {
        labels: this.labels,
        datasets: [
          {
            label: "Growth Rate",
            data: this.randomArray,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }
}

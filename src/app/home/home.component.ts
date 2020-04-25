import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  appleCount: number = 10;
  orangeCount: number = 10;
  grapeCount: number = 10;
  basketAppleCount: number = 0;
  basketOrangeCount: number = 0;
  basketGrapeCount: number = 0;
  constructor(public appService: AppService) {}

  ngOnInit(): void {}
  addCount(fruit) {
    switch (fruit) {
      case "apple":
        if (this.appleCount < 10) {
          this.appleCount++;
          this.basketAppleCount--;
        }
        break;
      case "orange":
        if (this.orangeCount < 10) {
          this.orangeCount++;
          this.basketOrangeCount--;
        }
        break;

      case "grape":
        if (this.grapeCount < 10) {
          this.grapeCount++;
          this.basketGrapeCount--;
        }
        break;
    }
  }
  reduceCount(fruit) {
    switch (fruit) {
      case "apple":
        if (this.appleCount > 0) {
          this.appleCount--;
          this.basketAppleCount++;
        }
        break;
      case "orange":
        if (this.orangeCount > 0) {
          this.orangeCount--;
          this.basketOrangeCount++;
        }
        break;
      case "grape":
        if (this.grapeCount > 0) {
          this.grapeCount--;
          this.basketGrapeCount++;
        }
        break;
    }
  }
}

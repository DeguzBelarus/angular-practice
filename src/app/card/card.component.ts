import { Component, Input, OnInit } from "@angular/core"
import { Card } from "../app.component"

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
  interpolation: ["{{", "}}"]
})
export class CardComponent implements OnInit {
  @Input() card: Card = { title: "", text: "" };
  @Input() index: number = 0

  // https://www.youtube.com/watch?v=Rf54BH35yrY
  // 1 31 30

  title: string = "My Card Title"
  text: string = "My sample text"

  cardDate: Date = new Date

  disabled: boolean = false
  imgURL: string = "https://angular.io/assets/images/logos/angular/angular_solidBlack.svg"
  textColor: string = 'black'

  ngOnInit(): void {
    setTimeout(() => {
      // this.imgURL = "https://angular.io/assets/images/logos/angular/angular.svg"
      // this.disabled = true
    }, 3000)
  }
  // number = 42
  // array = [1, 1, 2, 3, 5, 8, 13]
  // obj = { name: "Anton", info: { age: 36, job: "Frontend" } }

  getInfo(): string {
    return "This is my info"
  }

  changeTitle() {
    this.card.title = "Title has been changed"
  }

  inputHandler(value: string) {
    this.title = value
  }

  changeHandler() {
    console.log(this.title);
  }
}

// 48 00
// https://www.youtube.com/watch?v=Rf54BH35yrY

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() buttonClicked = new EventEmitter<number>();
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  constructor() {}

  ngOnInit() {}
  onClick() {
    var rand = Math.floor(Math.random() * 10);
    this.buttonClicked.emit(rand);
    if (rand % 2 == 0) this.evenNumbers.push(rand);
    else this.oddNumbers.push(rand);
  }
}

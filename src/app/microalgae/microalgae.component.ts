import { Component, OnInit } from '@angular/core';
import { Microalgae } from '../microalgae';
import { MICROALGAE } from '../mock-microalgae';

@Component({
  selector: 'app-microalgae',
  templateUrl: './microalgae.component.html',
  styleUrls: ['./microalgae.component.css']
})
export class MicroalgaeComponent implements OnInit {

  microalgae_list = MICROALGAE;

  constructor() { }

  ngOnInit(): void {
  }

}

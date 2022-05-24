import { Component, OnInit, Input } from '@angular/core';
import { Microalgae } from '../microalgae';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MICROALGAE } from '../mock-microalgae';

@Component({
  selector: 'app-microalgae-detail',
  templateUrl: './microalgae-detail.component.html',
  styleUrls: ['./microalgae-detail.component.css']
})
export class MicroalgaeDetailComponent implements OnInit {

  @Input() microalgae?: Microalgae;

  microalgae_list = MICROALGAE;

  selectedMicroalgae?: Microalgae;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMicroalgae();
  }

  getMicroalgae(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.selectedMicroalgae = this.microalgae_list[id-1];
  }

  goBack(): void {
    this.location.back();
  }

}
import { Component, OnInit, Input } from '@angular/core';
import { Macroalgae } from '../macroalgae';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MACROALGAE } from '../mock-macroalgae';

@Component({
  selector: 'app-macroalgae-detail',
  templateUrl: './macroalgae-detail.component.html',
  styleUrls: ['./macroalgae-detail.component.css']
})
export class MacroalgaeDetailComponent implements OnInit {

  @Input() macroalgae?: Macroalgae;

  macroalgae_list = MACROALGAE;
  macroalgae_id: number;
  selectedMacroalgae?: Macroalgae;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.macroalgae_id = 0;
  }

  ngOnInit(): void {
    this.getMacroalgae();
  }

  getMacroalgae(): void {
    this.macroalgae_id = Number(this.route.snapshot.paramMap.get('id'));
    this.selectedMacroalgae = this.macroalgae_list[this.macroalgae_id-1];
  }

  goBack(): void {
    this.location.back();
  }

}
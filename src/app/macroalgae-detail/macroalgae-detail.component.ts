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

  selectedMacroalgae?: Macroalgae;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMacroalgae();
  }

  getMacroalgae(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.selectedMacroalgae = this.macroalgae_list[id-1];
  }

  goBack(): void {
    this.location.back();
  }

}
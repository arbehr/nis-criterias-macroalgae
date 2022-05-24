import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-microalgae-verify',
  templateUrl: './microalgae-verify.component.html',
  styleUrls: ['./microalgae-verify.component.css']
})
export class MicroalgaeVerifyComponent implements OnInit {

  selectedOriginTypeLoc: string;
  selectedDistribution: string;
  selectedVector: string;
  selectedReports: string;
  selectedConspicuouness: string;
  selectedStudies: string;
  selectedOrigin: string;
  selectedEconomicEcologicalImpact: string;
  selectedCriteriaInvasivenessSpread: string;
  selectedCriteriaInvasivenessOther: string;

  constructor() { 
    this.selectedOriginTypeLoc = '';
    this.selectedDistribution = '';
    this.selectedVector = '';
    this.selectedReports = '';
    this.selectedConspicuouness = '';
    this.selectedStudies = '';
    this.selectedOrigin = '';
    this.selectedEconomicEcologicalImpact = '';
    this.selectedCriteriaInvasivenessSpread = '';
    this.selectedCriteriaInvasivenessOther = '';
  }

  ngOnInit(): void {
    
  }

}

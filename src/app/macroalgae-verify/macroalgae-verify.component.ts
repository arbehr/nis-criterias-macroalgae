import { Component, OnInit, ViewChild } from '@angular/core';
import { originTypeLoc, distribution_21, distribution_22, distribution_23, 
  vector, reports, conspicuousness, studies, origin, economicEcologicalImpact,
  criteriaInvasivenessSpread, criteriaInvasivenessOther} from './macroalgae-verify-datasource'
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MACROALGAE } from '../mock-macroalgae';
import { Macroalgae } from '../macroalgae';

@Component({
  selector: 'app-macroalgae-verify',
  templateUrl: './macroalgae-verify.component.html',
  styleUrls: ['./macroalgae-verify.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
})
export class MacroalgaeVerifyComponent implements OnInit {

  originTypeLoc: any;
  distribution_21: any;
  distribution_22: any;
  distribution_23: any;
  vector: any;
  reports: any;
  conspicuousness: any;
  studies: any;
  origin: any;
  economicEcologicalImpact: any;
  criteriaInvasivenessSpread: any;
  criteriaInvasivenessOther: any;
  selectedValues: any;
  disabledValues: any;
  status: any;
  selectedMacroalgae?: Macroalgae;
  macroalgae_list = MACROALGAE;

  ngOnInit(): void {
  }

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { 
    this.initValues();
    this.getMacroalgae();

  }

  getMacroalgae(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.selectedMacroalgae = this.macroalgae_list[id-1];
    if(this.selectedMacroalgae) {
      let arrayOfKeys = Object.keys(this.selectedMacroalgae);
      let arrayOfValues = Object.values(this.selectedMacroalgae);
      for(let i = 0; i < arrayOfKeys.length; i++) {
        let value = "";
        if(arrayOfValues[i].toString().indexOf(" - ") !== -1) {
          value = arrayOfValues[i].toString().split(" - ")[0];
          this.selectedValues[i-2] = value;

          switch(arrayOfKeys[i]) {
            case "origin_typeLoc":
              this.onChangeOriginTypeLoc(value);
              break;
            case "distribution":
              this.onChangeDistribution(value);
              break;
            case "vector":
              this.onChangeVector(value);
              break;
            case "reports":
              this.onChangeReports(value);
              break;
            case "conspicuousness":
              this.onChangeConspicuouness(value);
              break;
            case "studies":
              this.onChangeStudies(value);
              break;
            case "origin":
              this.onChangeOrigin(value);
              break;
            case "impact":
              this.onChangeEconomic_ecologic_impact(value);
              break;
            case "criteria_inv_spread":
              this.onChangeCriteria_invasiveness_spread(value);
              break;
            case "criteria_inv_other":
              this.onChangeCriteria_invasiveness_other(value);
              break;
          }
        }
      }
    }
  }

  updateSelectedValues(indexes: number[], values: string[]) {
    for(let i = 0; i < indexes.length; i++) {
      this.selectedValues[indexes[i]] = values[i];
    }
  }

  updateDisabledValues(indexes: number[], values: boolean[]) {
    for(let i = 0; i < indexes.length; i++) {
      this.disabledValues[indexes[i]] = values[i];
    }
  }

  initValues() {
    this.originTypeLoc = originTypeLoc;
    this.distribution_21 = distribution_21;
    this.distribution_22 = distribution_22;
    this.distribution_23 = distribution_23;
    this.vector = vector;
    this.reports = reports;
    this.conspicuousness = conspicuousness;
    this.studies = studies;
    this.origin = origin;
    this.economicEcologicalImpact = economicEcologicalImpact;
    this.criteriaInvasivenessSpread = criteriaInvasivenessSpread;
    this.criteriaInvasivenessOther = criteriaInvasivenessOther;
    this.selectedValues = ['', '', '', '', '', '', '', '', '', ''];
    this.disabledValues = [false, true, true, true, true, true, true, true, true, true];
    this.status = "";
  }

  onChangeOriginTypeLoc(value: string) {
    switch(value) {
      case "1.1":
        this.status = "NIS";
        this.updateSelectedValues([1, 2, 3, 4, 5, 6, 7, 8, 9], ['','','','','','','','','']);
        this.updateDisabledValues([1, 2, 3, 4, 5, 6, 7, 8, 9], [true,true,true,true,true,true,false,true,true]);
        break;
      default:
        this.status = "";
        this.updateSelectedValues([1, 2, 3, 4, 5, 6, 7, 8, 9], ['','','','','','','','','']);
        this.updateDisabledValues([1, 2, 3, 4, 5, 6, 7, 8, 9], [false,true,true,true,true,true,true,true,true]);
        break;
    }
  }

  onChangeDistribution(value: string) {
    switch(value) {
      case "2.1.1":
      case "2.1.2":
      case "2.1.3":
        this.status = "NATIVE";
        this.updateSelectedValues([2, 3, 4, 5, 6, 7, 8, 9], ['','','','','','','','','']);
        this.updateDisabledValues([2, 3, 4, 5, 6, 7, 8, 9], [true,true,true,true,true,true,true,true,true]);
        break;
      case "2.2.1":
        this.status = "NIS";
        this.updateSelectedValues([2, 3, 4, 5, 6, 7, 8, 9], ['','','','','','','','']);
        this.updateDisabledValues([2, 3, 4, 5, 6, 7, 8, 9], [true,true,true,true,true,false,true,true]);
        break;
      default:
        this.status = "";
        this.updateSelectedValues([2, 3, 4, 5, 6, 7, 8, 9], ['','','','','','','','']);
        this.updateDisabledValues([2, 3, 4, 5, 6, 7, 8, 9], [false,true,true,true,true,true,true,true]);
        break;
    }
  }

  onChangeVector(value: string) {
    switch(value) {
      case "3.1":
        this.status = "NIS";
        this.updateSelectedValues([3, 4, 5, 6, 7, 8, 9], ['','','','','','','']);
        this.updateDisabledValues([3, 4, 5, 6, 7, 8, 9], [true,true,true,true,false,true,true]);
        break;
      default:
        this.status = "";
        this.updateSelectedValues([3, 4, 5, 6, 7, 8, 9], ['','','','','','','']);
        this.updateDisabledValues([3, 4, 5, 6, 7, 8, 9], [false,true,true,true,true,true,true]);
        break;
    }
  }

  onChangeReports(value: string) {
    switch(value) {
      case "4.1":
        this.status = "NATIVE";
        this.updateSelectedValues([4, 5, 6, 7, 8, 9], ['','','','','','','']);
        this.updateDisabledValues([4, 5, 6, 7, 8, 9], [true,true,true,true,true,true,true]);
        break;
      default:
        this.status = "";
        this.updateSelectedValues([4, 5, 6, 7, 8, 9], ['','','','','','']);
        this.updateDisabledValues([4, 5, 6, 7, 8, 9], [false,true,true,true,true,true]);
        break;
    }
  }

  onChangeConspicuouness(value: string) {
    switch(value) {
      case "5.1":
        this.status = "NIS";
        this.updateSelectedValues([5, 6, 7, 8, 9], ['','','','','']);
        this.updateDisabledValues([5, 6, 7, 8, 9], [true,true,false,true,true]);
        break;
      default:
        this.status = "";
        this.updateSelectedValues([5, 6, 7, 8, 9], ['','','','','']);
        this.updateDisabledValues([5, 6, 7, 8, 9], [false,true,true,true,true]);
        break;
    }
  }

  onChangeStudies(value: string) {
    switch(value) {
      case "6.2":
        this.status = "DATA DEFFICIENT";
        this.updateSelectedValues([6, 7, 8, 9], ['','','','','']);
        this.updateDisabledValues([6, 7, 8, 9], [true,true,true,true,true]);
        break;
      default:
        this.status = "";
        this.updateSelectedValues([6, 7, 8, 9], ['','','','','']);
        this.updateDisabledValues([6, 7, 8, 9], [false,true,true,true,true]);
        break;
    }
  }

  onChangeOrigin(value: string) {
    switch(value) {
      case "7.1":
        this.status = "CRYPTOGENIC";
        this.updateSelectedValues([7, 8, 9], ['','','','']);
        this.updateDisabledValues([7, 8, 9], [true,true,true,true]);
        break;
      case "7.2":
        this.status = "DATA DEFFICIENT";
        this.updateSelectedValues([7, 8, 9], ['','','','']);
        this.updateDisabledValues([7, 8, 9], [true,true,true,true]);
        break;
    }
  }

  onChangeEconomic_ecologic_impact(value: string) {
    switch(value) {
      case "8.1.1":
      case "8.1.2":
        this.updateSelectedValues([8, 9], ['','']);
        this.updateDisabledValues([8, 9], [false,true]);
          break;
      case "8.2.1":
        this.updateSelectedValues([8, 9], ['','']);
        this.updateDisabledValues([8, 9], [true,false]);
          break;
    }
  }

  onChangeCriteria_invasiveness_spread(value: string) {
    switch(value) {
      case "9.1":
      case "9.2":
        this.status = "INVASIVE";
        this.updateSelectedValues([9], ['']);
        this.updateDisabledValues([9], [true]);
        break;
      case "9.3":
        this.status = "";
        this.updateSelectedValues([9], ['']);
        this.updateDisabledValues([9], [false]);
        break;
    }
  }

  onChangeCriteria_invasiveness_other(value: any) {
    if(value.length < 2) {
      this.status = "NOT INVASIVE";
    } else {
      this.status = "POTENTIALLY INVASIVE";
    }
  }


}
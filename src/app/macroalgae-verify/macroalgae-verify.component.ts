import { Component, OnInit, ViewChild } from '@angular/core';
import { originTypeLoc, distribution_21, distribution_22, distribution_23, 
  vector, reports, conspicuousness, studies, origin, economicEcologicalImpact,
  criteriaInvasivenessSpread, criteriaInvasivenessOther} from './macroalgae-verify-datasource'
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MACROALGAE } from '../mock-macroalgae';
import { Macroalgae } from '../macroalgae';
import { MacroalgaeService } from '../services/macroalgae.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs/internal/Observable';

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
  id = 0;
  record: any;
  specie = "";
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
  selectedMacroalgae$: Observable<Macroalgae>;
  macroalgae_list = MACROALGAE;

  ngOnInit(): void {
  }

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private service: MacroalgaeService,
    private snackBar: MatSnackBar
  ) { 
    this.initValues();
    this.selectedMacroalgae$ = new Observable;
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if(this.id) {
      this.selectedMacroalgae$ = this.service.get(this.id);
      this.getMacroalgae();
    }
  }

  getMacroalgae(): void {
    if(this.selectedMacroalgae$) {
      this.selectedMacroalgae$.subscribe(
        record => {
          let arrayOfKeys = Object.keys(record);
          let arrayOfValues = Object.values(record);
          console.log(arrayOfKeys)
          for(let i = 0; i < arrayOfKeys.length; i++) {
            let value = arrayOfValues[i];
            this.selectedValues[i-2] = value;

            switch(arrayOfKeys[i]) {
              case "specie":
                this.specie = value;
                break;
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
        });
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
    this.record = {
      conspicuousness:"",
      criteria_inv_other: "",
      criteria_inv_spread: "",
      distribution: "",
      id: 0,
      impact: "",
      origin: "",
      origin_typeLoc: "",
      reports: "",
      specie: "",
      status: "",
      studies: "",
      vector: ""
    }
  }

  onChangeOriginTypeLoc(value: string) {
    this.selectedValues[0] = value;
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
    this.selectedValues[1] = value;
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
    this.selectedValues[2] = value;
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
    this.selectedValues[3] = value;
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
    this.selectedValues[4] = value;
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
    this.selectedValues[5] = value;
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
    this.selectedValues[6] = value;
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
    this.selectedValues[7] = value;
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
    this.selectedValues[8] = value;
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
    this.selectedValues[9] = value;
    if(value.length < 2) {
      this.status = "NOT INVASIVE";
    } else {
      this.status = "POTENTIALLY INVASIVE";
    }
  }

  onSave() {
    this.updateRecord();
    if(this.id != 0) {
      this.service.update(this.record)
      .subscribe(
        result => console.log(result), error => this.onError);
    } else {
      this.service.save(this.record)
      .subscribe(
        result => console.log(result), error => this.onError);
    }
  }

  private onError() {
    this.snackBar.open('Error in saving macroalgae', '', {duration: 5000});
  }

  private onSuccess() {
    this.snackBar.open('Macroalgae saved', '', {duration: 5000});
    this.location.back();
  }

  private updateRecord() {
    this.record.origin_typeLoc = this.selectedValues[0];
    this.record.distribution = this.selectedValues[1];
    this.record.vector = this.selectedValues[2];
    this.record.reports = this.selectedValues[3];
    this.record.conspicuousness = this.selectedValues[4];
    this.record.studies = this.selectedValues[5];
    this.record.origin = this.selectedValues[6];
    this.record.economicEcologicalImpact = this.selectedValues[7];
    this.record.criteria_inv_spread = this.selectedValues[8]; 
    this.record.criteria_inv_other = this.selectedValues[9];
    this.record.status = this.status;
    this.record.specie = this.specie;
    this.record.id = this.id;
  }
}

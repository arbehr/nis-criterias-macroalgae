import { Component, OnInit, Input } from '@angular/core';
import { Macroalgae } from '../macroalgae';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MACROALGAE } from '../mock-macroalgae';
import { MacroalgaeService } from '../services/macroalgae.service';
import { Observable } from 'rxjs/internal/Observable';
import { originTypeLoc, distribution_21, distribution_22, distribution_23, 
  vector, reports, conspicuousness, studies, origin, economicEcologicalImpact,
  criteriaInvasivenessSpread, criteriaInvasivenessOther} from '../shared/macroalgae-datasource'
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-macroalgae-detail',
  templateUrl: './macroalgae-detail.component.html',
  styleUrls: ['./macroalgae-detail.component.css']
})
export class MacroalgaeDetailComponent implements OnInit {

  @Input() macroalgae?: Macroalgae;

  id = 0;
  record: any;
  specie = "";
  originTypeLoc = "";
  distribution = "";
  vector = "";
  reports = "";
  conspicuousness = "";
  studies = "";
  origin = "";
  economicEcologicalImpact = "";
  criteriaInvasivenessSpread = "";
  criteriaInvasivenessOther = "";
  status = "";
  selectedMacroalgae$: Observable<Macroalgae>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private service: MacroalgaeService,
    public dialog: MatDialog
  ) {
    this.id = 0;
    this.selectedMacroalgae$ = new Observable;
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.selectedMacroalgae$ = this.service.get(this.id);
    this.getMacroalgae();
  }

  ngOnInit(): void {
  }

  getMacroalgae() {
    if(this.selectedMacroalgae$) {
      this.selectedMacroalgae$.subscribe(
        record => {
          (record.origin_typeLoc) ? this.originTypeLoc = originTypeLoc[parseInt(record.origin_typeLoc.substring(record.origin_typeLoc.lastIndexOf('.') + 1)) - 1].viewValue : this.originTypeLoc = "";
          if(record.distribution) {
            switch(record.distribution.substring(record.distribution.indexOf('.')+1, record.distribution.lastIndexOf('.'))) {
              case '1':
                this.distribution = distribution_21[parseInt(record.distribution.substring(record.distribution.lastIndexOf('.')+1))-1].viewValue;
                break;
              case '2':
                this.distribution = distribution_22[parseInt(record.distribution.substring(record.distribution.lastIndexOf('.')+1))-1].viewValue;
                break;
              case '3':
                this.distribution = distribution_23[parseInt(record.distribution.substring(record.distribution.lastIndexOf('.')+1))-1].viewValue;
                break;
            }
          }
          (record.vector) ? this.vector = vector[parseInt(record.vector.substring(record.vector.lastIndexOf('.') + 1)) - 1].viewValue : this.vector = "";
          (record.reports) ? this.reports = reports[parseInt(record.reports.substring(record.reports.lastIndexOf('.') + 1)) - 1].viewValue : this.reports = "";
          (record.conspicuousness) ? this.conspicuousness = conspicuousness[parseInt(record.conspicuousness.substring(record.conspicuousness.lastIndexOf('.') + 1)) - 1].viewValue : this.conspicuousness = "";
          (record.studies) ? this.studies = studies[parseInt(record.studies.substring(record.studies.lastIndexOf('.') + 1)) - 1].viewValue : this.studies = "";
          (record.origin) ? this.origin = origin[parseInt(record.origin.substring(record.origin.lastIndexOf('.') + 1)) - 1].viewValue : this.origin = "";
          (record.economic_ecological_impact) ? this.economicEcologicalImpact = economicEcologicalImpact[parseInt(record.economic_ecological_impact.substring(record.economic_ecological_impact.lastIndexOf('.') + 1)) - 1].viewValue : this.economicEcologicalImpact = "";
          (record.criteria_inv_spread) ? this.criteriaInvasivenessSpread = criteriaInvasivenessSpread[parseInt(record.criteria_inv_spread.substring(record.criteria_inv_spread.lastIndexOf('.') + 1)) - 1].viewValue : this.criteriaInvasivenessSpread = "";
          if(record.criteria_inv_other.indexOf(',') !== -1) {
            let criteria_inv_other_arr = record.criteria_inv_other.split(',');
            for(let i = 0; i < criteria_inv_other_arr.length; i++) {
              this.criteriaInvasivenessOther += criteriaInvasivenessOther[parseInt(criteria_inv_other_arr[i].substring(criteria_inv_other_arr[i].lastIndexOf('.') + 1)) - 1].viewValue + "; ";
            }
          } else {
            (record.criteria_inv_other) ? this.criteriaInvasivenessOther = criteriaInvasivenessOther[parseInt(record.criteria_inv_other.substring(record.criteria_inv_other.lastIndexOf('.') + 1)) - 1].viewValue : this.criteriaInvasivenessOther = "";
          }
      });
    }
  }


  goBack(): void {
    this.location.back();
  }

  onDeleteMacroalgae() {
    this.openConfirmDialog();
  }

  openConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: "Are you sure to delete this item?"
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        let id = Number(this.route.snapshot.paramMap.get('id'));
        this.service.delete(id).subscribe();
        this.goBack();
      }
    });
  }
}
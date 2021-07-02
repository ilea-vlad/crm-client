import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {PolicyType} from '../../../../Types/PolicyType';
import {PolicyService} from '../../services/policy.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-update-policy',
  templateUrl: './update-policy.component.html',
  styleUrls: ['./update-policy.component.css']
})
export class UpdatePolicyComponent implements OnInit {
  id: string;
  selectedPolicy: PolicyType;
  editForm: FormGroup;
  myControl = new FormControl();
  options: string[];
  filteredOptions: Observable<string[]>;

  constructor(private service: PolicyService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              public modal: NgbActiveModal) {
  }

  ngOnInit(): void {
    this.runAutoComplete();
    this.populateForm();
  }

  test(): void {
    console.log(this.editForm.value);
  }

  async runAutoComplete(): Promise<void> {
    this.options = await this.service.getAllPolicySubtype().toPromise();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  public onSubmit(): void {
    this.service.updatePolicy(this.selectedPolicy.client.id.toString(), this.editForm.value);
    this.modal.close();
    location.reload();
  }

  private populateForm(): void {
    this.editForm = this.formBuilder.group({
      id: [this.selectedPolicy.id],
      types: [this.selectedPolicy.types],
      subtype: [this.selectedPolicy.subtype],
      number: [this.selectedPolicy.number],
      period: [this.selectedPolicy.period],
      startDate: [this.selectedPolicy.startDate],
      endDate: [this.selectedPolicy.endDate],
      fee: [this.selectedPolicy.fee]
    });
  }

}

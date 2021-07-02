import {Component, OnInit} from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
import {PolicyService} from '../../services/policy.service';
import {ActivatedRoute} from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-create-policy',
  templateUrl: './create-policy.component.html',
  styleUrls: ['./create-policy.component.css']
})
export class CreatePolicyComponent implements OnInit {
  closeResult = '';
  myControl = new FormControl();
  options: string[];
  filteredOptions: Observable<string[]>;

  constructor(private service: PolicyService,
              private route: ActivatedRoute,
              private modalService: NgbModal) {
  }

  private static getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    this.service.getAllPolicySubtype().subscribe(l => this.options = l);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  public onSubmit(policy: NgForm): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.createPolicy(id, policy.value.type, this.myControl.value,
      policy.value.number, policy.value.period, policy.value.startDate, policy.value.endDate, policy.value.fee);
    this.modalService.dismissAll();
    location.reload();
  }

  open(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${CreatePolicyComponent.getDismissReason(reason)}`;
    });
  }


}

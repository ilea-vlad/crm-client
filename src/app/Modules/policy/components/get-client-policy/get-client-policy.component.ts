import {Component, OnInit} from '@angular/core';
import {PolicyType} from '../../../../Types/PolicyType';
import {ActivatedRoute} from '@angular/router';
import {PolicyService} from '../../services/policy.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UpdatePolicyComponent} from '../update-policy/update-policy.component';
import {IgnoredInteceptorService} from '../../../../Services/ignored-inteceptor.service';
import {CurrencyType} from '../../../../Types/CurrencyType';
import {logger} from 'codelyzer/util/logger';


@Component({
  selector: 'app-get-client-policy',
  templateUrl: './get-client-policy.component.html',
  styleUrls: ['./get-client-policy.component.css']
})
export class GetClientPolicyComponent implements OnInit {
  list: PolicyType[];
  euroPrice: CurrencyType;
  displayedColumns = ['type', 'subtype', 'number', 'period', 'startDate', 'endDate', 'fee', 'euroFee', 'function'];

  constructor(private service: PolicyService,
              private route: ActivatedRoute,
              private modalService: NgbModal,
              private euroService: IgnoredInteceptorService) {
  }

  ngOnInit(): void {
    this.euroService.getEuroPrice().subscribe(price => {
      this.euroPrice = price;
    });

    this.setList();
  }


  editItem(policyType: PolicyType): void {
    const ref = this.modalService.open(UpdatePolicyComponent, {centered: true});
    ref.componentInstance.selectedPolicy = policyType;
    ref.result.then(() => {
      this.setList();
    });
  }

  private setList(): void {
    this.service.getPolicyByClient(this.route.snapshot.paramMap.get('id')).subscribe(l => {
      this.list = l;
    });
  }


}

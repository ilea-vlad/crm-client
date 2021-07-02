import {Component, OnInit} from '@angular/core';
import {ObservationService} from '../../services/observation.service';
import {ObservationType} from '../../../../Types/ObservationType';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-get-observations',
  templateUrl: './get-observations.component.html',
  styleUrls: ['./get-observations.component.css']
})
export class GetObservationsComponent implements OnInit {
  clientId: number;
  list: ObservationType[];

  constructor(private service: ObservationService,
              public modal: NgbActiveModal) {
  }

  ngOnInit(): void {
    this.getObservations(this.clientId);
  }

  getObservations(clientId: number): void {
    this.service.getObservations(clientId.toString()).subscribe(list => this.list = list);
  }

}

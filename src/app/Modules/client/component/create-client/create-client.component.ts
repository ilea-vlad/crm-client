import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ClientService} from '../../services/client.service';
import {ModalDismissReasons, NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  constructor(private service: ClientService,
              private modalService: NgbModal) {
  }

  closeResult = '';
  cnpExist = false;
  cnpField: string;

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
  }

  public onSubmit(clientForm: NgForm): void {
    this.service.checkCnp(clientForm.value.cnp).subscribe(data => {
      this.cnpExist = data;
      if (!this.cnpExist) {
        this.service.createClient(localStorage.getItem('username'), clientForm.value.name, clientForm.value.cnp,
          clientForm.value.phoneNumber, clientForm.value.emailAddress, clientForm.value.gdprStatus, clientForm.value.lead);
        this.modalService.dismissAll();
        location.reload();
      } else {
        this.cnpField = '';
      }
    });

  }

  open(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${CreateClientComponent.getDismissReason(reason)}`;
    });
  }

}

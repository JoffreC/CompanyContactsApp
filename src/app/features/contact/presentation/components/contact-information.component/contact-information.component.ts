import { Component } from '@angular/core';
import { Contact } from '../../../domain/models/contact.interface';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContactService } from '../../../domain/services/contact.service';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-information.component',
  imports: [MatIconModule, RouterLink, MatSnackBarModule],
  templateUrl: './contact-information.component.html',
  styleUrl: './contact-information.component.css',
})
export class ContactInformationComponent {
  contactId!: string;
  contact!: Contact;

  constructor(private route: ActivatedRoute, private contactService: ContactService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.contactId = this.route.snapshot.paramMap.get('id')!;
    this.loadContactInfo();
  }


  loadContactInfo() {
    this.contactService.getById(this.contactId).subscribe((response) => {
      this.contact = response.object;
    });
  }

  changeState() {
    this.contact.isActive = !this.contact.isActive;
    this.contactService.update({ ...this.contact, companyId: this.contact.contactCompany.id }).subscribe((response) => {
      this.contact = response.object;
      if (this.contact.isActive) {
        this.snackBar.open('Contact Enabled!', 'Close', {
          duration: 2000,
          panelClass: ['bg-green-600', 'text-white'],
        });
      } else {
        this.snackBar.open('Contact Disabled!', 'Close', {
          duration: 2000,
          panelClass: ['bg-red-500', 'text-black'],
        });
      }
    })
  }
}

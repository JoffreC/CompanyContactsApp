import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable, MatTableDataSource } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { ContactService } from '../../../domain/services/contact.service';
import { NgClass } from '@angular/common';
import { Contact } from '../../../domain/models/contact.interface';

@Component({
  selector: 'app-contact-table.component',
  imports: [
    RouterLink,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef,
    NgClass
  ],
  templateUrl: './contact-table.component.html',
  styleUrl: './contact-table.component.css',
})
export class ContactTableComponent {
  dataSource = new MatTableDataSource<Contact>();
  displayedColumns: string[] = ['firstName', 'lastName', 'fullName', 'nickname', 'birthday'];

  constructor(private contactService: ContactService) {
    this.loadContacts();
  }

  ngOnInit(): void {
    this.loadContacts();
  }

  ngAfterViewInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    this.contactService.getAll().subscribe({
      next: ({ object }) => {
        if (object) {
          this.dataSource.data = object;
        }
      },
    });
  }
}

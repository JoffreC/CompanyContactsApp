import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable, MatTableDataSource } from '@angular/material/table';
import { CompanyEssentialInfo } from '../../../domain/models/company.interface';
import { RouterLink } from '@angular/router';
import { CompanyService } from '../../../domain/services/company.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-company-table.component',
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
  templateUrl: './company-table.component.html',
  styleUrl: './company-table.component.css',
})
export class CompanyTableComponent implements OnInit, AfterViewInit{
  dataSource = new MatTableDataSource<CompanyEssentialInfo>();
  displayedColumns: string[] = ['name', 'email', 'phoneNumber'];

  constructor(private companyService: CompanyService) {
    this.loadCompanies();
  }

  ngOnInit(): void {
    this.loadCompanies();
  }

  ngAfterViewInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.companyService.getAll().subscribe({
      next: ({ object }) => {
        if (object) {
          this.dataSource.data = object;
        }
      },
    });
  }
}

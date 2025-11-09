import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../domain/services/company.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Company } from '../../../domain/models/company.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  selector: 'app-company-information.component',
  imports: [MatIconModule, RouterLink, MatSnackBarModule],
  templateUrl: './company-information.component.html',
  styleUrl: './company-information.component.css',
})
export class CompanyInformationComponent implements OnInit{
  companyId!: number;
  company!: Company;

  constructor(private route: ActivatedRoute, private companyService: CompanyService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.companyId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadCompanyInfo();
  }


  loadCompanyInfo() {
    this.companyService.getById(this.companyId).subscribe((response) => {
      this.company = response.object;
    });
  }

  changeState() {
    this.company.isActive = !this.company.isActive;
    this.companyService.update({ ...this.company }).subscribe((response) => {
      this.company = response.object;
      if (this.company.isActive) {
        this.snackBar.open('Company is enabled!', 'Close', {
          duration: 2000,
          panelClass: ['bg-green-600', 'text-white'],
        });
      } else {
        this.snackBar.open('Company is disabled', 'Close', {
          duration: 2000,
          panelClass: ['bg-red-500', 'text-black'],
        });
      }
    })
  }
}

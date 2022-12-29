import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../company.interface';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-company-viewer',
  templateUrl: './company-viewer.component.html',
  styleUrls: ['./company-viewer.component.scss']
})
export class CompanyViewerComponent implements OnInit {
  @Input() company: Company;

  constructor(public companiesService: CompaniesService) {}

  ngOnInit() {
    console.log(this.company.departments);
  }
}

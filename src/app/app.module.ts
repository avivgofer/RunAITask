import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CompaniesNavigationComponent } from './companies/companies-navigation/companies-navigation.component';
import { CompanyViewerComponent } from './companies/company-viewer/company-viewer.component';
import { DepartmentsComponent } from './departments/departments.component';
import { MatButtonModule } from '@angular/material/button';
import { EmployeesComponent } from './employees/employees.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RemoveDialogComponent } from './departments/remove-dialog/remove-dialog.component';
import { TableComponent } from './table/table.component';
@NgModule({
  declarations: [
    AppComponent,
    CompaniesNavigationComponent,
    CompanyViewerComponent,
    TableComponent,
    DepartmentsComponent,
    EmployeesComponent,
    RemoveDialogComponent
  ],
  imports: [
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatTabsModule,
    MatDialogModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CrudnutristionistService } from 'src/app/services/crudnutristionist.service';
import { AddAssistComponent } from './add-assist/add-assist.component';

@Component({
  selector: 'app-assistant',
  templateUrl: './assistant.component.html',
  styleUrls: ['./assistant.component.css']
})
export class AssistantComponent implements OnInit {
  displayedColumns: string[] = ['id',
  'email', 'phone','addresse','action'];

  dataSources!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog,private patient:CrudnutristionistService,private route:Router) { }

  ngOnInit(): void {
    this.getassit()
  }

  getassit() {
    this.patient.getassist().subscribe({
      next: (res: any) => {
        // console.log(res)
        this.dataSources = new MatTableDataSource(res)
        this.dataSources.sort = this.sort
        this.dataSources.paginator=this.paginator
      },
      error:(err)=> console.log(err)
    })
  }

  onadd() {
    const dialogRef = this.dialog.open(AddAssistComponent)
    dialogRef.afterClosed().subscribe(val => {
      this.getassit()
    })

  }

  ondelete(id : number) {
    this.patient.deleteAssist(id).subscribe(res => {
      this.getassit()
    }, err => {
      console.log(err)
    })
  }

  onedit(data: any) {
    const dialogRef = this.dialog.open(AddAssistComponent, {
      data,
    })
    dialogRef.afterClosed().subscribe(res => {
      this.getassit()
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSources.filter = filterValue.trim().toLowerCase();

    if (this.dataSources.paginator) {
      this.dataSources.paginator.firstPage();
    }
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CrudnutristionistService } from 'src/app/services/crudnutristionist.service';
import { CreateAlimentComponent } from './create-aliment/create-aliment.component';

@Component({
  selector: 'app-alimant',
  templateUrl: './alimant.component.html',
  styleUrls: ['./alimant.component.css']
})
export class AlimantComponent implements OnInit {
  istableau = false
  displayedColumns: string[] = ['id',
    'famille', 'calorie','proteine','quantity','action'];

    dataSource!: MatTableDataSource<any>;
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
  constructor(public dialog: MatDialog,private nutr:CrudnutristionistService) { }

  ngOnInit(): void {
    this.getDATA()
  }

  getDATA() {
    this.nutr.getAliment().subscribe({
      next: (res: any) => {
        // console.log(res)
        this.dataSource = new MatTableDataSource(res)
        this.dataSource.sort = this.sort
        this.dataSource.paginator=this.paginator
      },
      error:(err)=> console.log(err)
    })
  }

  onadd() {
    const dialogRef = this.dialog.open(CreateAlimentComponent)
    dialogRef.afterClosed().subscribe(val => {
      this.getDATA()
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deletenutr(id : any) {
    this.nutr.deleteAliment(id).subscribe(
       (res) => {
      this.getDATA()
    },
     (err) => {
      console.log(err)
    })
  }

  onedit(data : any) {
    const dialogRef = this.dialog.open(CreateAlimentComponent, {
      data,
    })
    dialogRef.afterClosed().subscribe(val => {
      this.getDATA()
    })
  }
}

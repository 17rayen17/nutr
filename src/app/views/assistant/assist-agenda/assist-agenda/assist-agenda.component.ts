import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions } from '@fullcalendar/core';
import { AddAppointmentsService } from 'src/app/services/add-appointments.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';

@Component({
  selector: 'app-assist-agenda',
  templateUrl: './assist-agenda.component.html',
  styleUrls: ['./assist-agenda.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AssistAgendaComponent implements OnInit  {
  Events: any[] = [];
  constructor(private dialog: MatDialog,
    private addp: AddAppointmentsService,
    private http: HttpClient) { }



  ngOnInit(): void {
    this.getdata()
  }

  getdata(): void {

    this.addp.getrdv().subscribe((res:any) => {
      const appointments = res;

      // Map each appointment to an event object with the corresponding color
      this.Events = appointments.map((appointment : any) => ({
        title: appointment.title,
        start: appointment.start,
        end: appointment.end,
        color: appointment.colors
      }));

      // Set the calendar options with the events
      this.calendarOptions = {
        events: this.Events
      };
    });



  }

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin,interactionPlugin],
    headerToolbar: {
      center: 'title',
      left: 'prev,next today',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    events: this.Events,
    dateClick: this.onDateclick.bind(this),
    // eventColor:
  };

  onDateclick() {
    // const dialogRef = this.dialog.open();
    // dialogRef.afterClosed().subscribe(val => {
    //   this.getdata()
    // })
  }

  handleEventRender(info: any) {
    const event = info.event;
    const element = info.el;

    element.setAttribute('aria-label', event.title + ' ' + event.description);
    console.log(element)
  }


}

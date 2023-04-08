import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions, EventDropArg } from '@fullcalendar/core';
import { AddAppointmentsService } from 'src/app/services/add-appointments.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { DatePipe } from '@angular/common';
import { AddAgendaAssistComponent } from './add-agenda-assist/add-agenda-assist.component';

@Component({
  selector: 'app-assist-agenda',
  templateUrl: './assist-agenda.component.html',
  styleUrls: ['./assist-agenda.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DatePipe]
})
export class AssistAgendaComponent implements OnInit  {
  Events: any[] = [];
  constructor(private dialog: MatDialog,
    private addp: AddAppointmentsService,
    private datePipe: DatePipe,
    private http: HttpClient) { }



  ngOnInit(): void {
    this.getdata()

  }

  getdata(): void {

    this.addp.getrdv().subscribe((res: any) => {
      const appointments = res;

      // Map each appointment to an event object with the corresponding color
      this.Events = appointments.map((appointment: any) => ({
        id:appointment.id,
        title: appointment.title,
        start: this.datePipe.transform(appointment.start, 'yyyy-MM-dd'),
        endStr:appointment.end,
        name: appointment.name,
        color: appointment.colors
      }));
      // console.log(this.Events)
      // Set the calendar options with the events
      this.calendarOptions = {
        events: this.Events
      };
    });



  }

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin,listPlugin],
    headerToolbar: {
      center: 'title',
      left: 'prev,next today',
      right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    events: this.Events,
    dateClick: this.onDateclick.bind(this),
    eventClick: this.onEventClick.bind(this),
    eventDrop: function (eventDropInfo) {
      const newStart = eventDropInfo.event.start;
      const newEnd = eventDropInfo.event.end;
      // this.http.put
      if (!confirm("Are you sure about this change?")) {
        eventDropInfo.revert();
      }
  },

  };

  eventdrops(eventDropInfo: EventDropArg) {

  }

  onDateclick() {
    const dialogRef = this.dialog.open(AddAgendaAssistComponent);
    dialogRef.afterClosed().subscribe(val => {
      this.getdata()
    })
  }

  onEventClick(data : any) {
    const dialogRef = this.dialog.open(AddAgendaAssistComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getdata()
    });
  }


  formatEndTime(endTime: string): string {
    // console.log('endTime:', endTime);
    const dateObj = new Date(endTime);
    // console.log('dateObj:', dateObj);
    return dateObj.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  }

  logEvent(event: any) {
    console.log('event:', event);
  }



}

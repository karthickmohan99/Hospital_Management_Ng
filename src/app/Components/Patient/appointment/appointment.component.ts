import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/Service/AppointmentService/appointment.service';
import { SessionServiceService } from 'src/app/Service/SessionService/session-service.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {

  sessions: any;
  myValue: any;
  p:number=1;
  itemsPerPage:number=3;
  total: any;


  constructor(private sessionService: SessionServiceService,private appointmenService: AppointmentService,
    private router: Router) { this.myValue = this.sessionService.getttedValue(); }

  ngOnInit(): void {
    this.getSessions();
  }

  private getSessions(){
    this.sessionService.getSessions().subscribe(data => {
      this.sessions = data;
      this.total = data.length
      console.log(data);
      
    });
  }
getAppNo(){
  const data =(this.myValue.source._value +1);
  this.appointmenService.setValue(data)
  console.log('set data to book now', data);
  
}

  viewSessions(id: number){
    this.router.navigate(['/bookings', id]);
  }

  updateSession(id: number){
    this.router.navigate(['update-session', id]);
  }

  deleteSession(id: number){
    this.sessionService.deleteSession(id).subscribe( data => {
      console.log(data);
      this.getSessions();
    })
  }

}

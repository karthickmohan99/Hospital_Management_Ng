import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionServiceService } from 'src/app/Service/SessionService/session-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor-session',
  templateUrl: './doctor-session.component.html',
  styleUrls: ['./doctor-session.component.css']
})
export class DoctorSessionComponent {
  sessions: any;
  p:number=1;
  itemsPerPage:number=5;
  total: any;

  constructor(private service: SessionServiceService,private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.getSession();
  }

  private getSession(){
    this.service.getSessions().subscribe(data => {
      this.sessions = data;
      this.total=data.length;
      console.log(data);
      
    });
  }


  sessionDetails(id: number){
    this.router.navigate(['session-details', id]);
  }

  updateSession(id: number){
    this.router.navigate(['update-session', id]);
  }

  deleteSessions(id: number){
    this.service.deleteSession(id).subscribe( data => {
      console.log(data);

      Swal.fire({
        title: 'Are you sure want to cancel?',
        text: 'You will not be able to recover this session!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, cancel it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Deleted!',
            'Your session has been canceled.',
            'success'
          )
          
          // this.router.navigate(['patient/mybooking']);
          this.getSession();
        } 
      })
    
    })
  }
}

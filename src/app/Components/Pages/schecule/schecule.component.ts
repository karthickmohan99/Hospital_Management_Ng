import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';


import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { ToastrService } from 'ngx-toastr'; 
import { HttpErrorResponse } from '@angular/common/http';

import { ScheduleService } from 'src/app/Service/AdminService/schedule.service';
import { DoctorService } from 'src/app/Service/AdminService/doctor.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-schecule',
  templateUrl: './schecule.component.html',
  styleUrls: ['./schecule.component.css']
})
export class ScheculeComponent {
   
  //selectedDoctor:any;
  defaultValue='Select Doctor';
  editMode: boolean = false;
  selectedDoctorId :any;
  selectedDoctor: any; 
  doctorss:any;
  selectedSessions: any = {};
  sessionDetails: any[]=[];
  closeResult:string;
  currentDate: string = this.datePipe.transform(new Date(), 'yyyy-MM-dd') || '';
  p:number=1;
  itemsPerPage:number=5;
  total: any;

  constructor(private datePipe: DatePipe,private modalService: NgbModal,private sessionService:ScheduleService,private toastr: ToastrService,private doctorService: DoctorService){}
  
  
  ngOnInit(): void {
    this.getSessionDetails();
    this.loadDoctors();
   
  }


  loadDoctors(): void {
    this.doctorService.getDoctors().subscribe(
      (data:any) => {
        this.doctorss = data; 
        console.log(this.doctorss,"Doctor get response schedule")
      },
      (error:any) => {
        console.error('Error loading doctors:', error);
      }
    );
  }
  // onSelected(event: any) {
  //   console.log(this.doctorss,"doctorss")
  //   const selectedDoctorId = parseInt(event.target.value, 10);
    
  //   console.log(selectedDoctorId,"doc id")
  //   this.selectedDoctor = this.doctorss.find(doctor => doctor.did === selectedDoctorId);
  //   console.log(this.selectedDoctor, 'selected doctor object'); // Check the selected doctor object
  // }

  // onSelected(event: any) {
  //   const selectedDoctorId = event.target.value; // Parse the ID as integer
  //   this.selectedDoctor = { did: selectedDoctorId }; // Create the doctor object with the selected ID
  //   console.log(this.selectedDoctor, 'selected doctor object'); // Check the selected doctor object
  // 
   onSelected(event: any) {
    this. selectedDoctorId = parseInt(event.target.value, 10);
         console.log(this. selectedDoctorId ,"iddddd")
    // try {
    //   this.selectedDoctor = await this.doctorService.getDoctorById(selectedDoctorId).toPromise();
      
    //   console.log(this.selectedDoctor, 'selected doctor object getby id');
    // } catch (error) {
    //   console.error('Error fetching doctor:', error);
    // }
  }

	
  formatDate(dateString: string | null): any {
    if (!dateString) {
      return ''; // Handle null value
    }
    
    const [day, month, year] = dateString.split('-');
    const formattedDate = new Date(Number(year), Number(month) - 1, Number(day));
    return this.datePipe.transform(formattedDate, 'dd MMM yyyy');
  }

  formatTime(timeString: string): string {
    const [hours, minutes] = timeString.split(':');
    return `${hours}:${minutes} ${this.getMeridian(+hours)}`;
  }

  getMeridian(hours: number): string {
    return hours >= 12 ? 'PM' : 'AM';
  }

  
   //open modal popup
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  onSubmit(formData: any){

   
   
    //  formData.doctor=this.selectedDoctor;

   
    console.log(formData,"formdata")
   // formData.doctor=this.selectedDoctorId;
    // formData.selectDoctor = this.selectedDoctorId;
    //console.log(this.selectedDoctorId,"doctor id")

    const formattedDate = this.datePipe.transform(formData.sessionDate, 'dd-MM-yyyy');
    formData.sessionDate = formattedDate;
    console.log(formData,"addform")
    const sessionData =
    {
      sessionTitle:formData.sessionTitle ,
      doctorName: formData.doctor,
      appointmentNumber: formData.appointmentNumber,
      sessionDate:formData.sessionDate ,
      scheduleTime:formData.scheduleTime,
      consultFee:formData.consultFee
  }
  console.log(sessionData,"addform") 
    
  
    this.sessionService.addSession(sessionData).subscribe(
      response => {
        console.log('Session added successfully:', response);
        this.getSessionDetails();
        this.toastr.success('Session added successfully')
        this.modalService.dismissAll();
        
             },
      (error:HttpErrorResponse) => {
        console.error('Error adding Session:', error);
        this.toastr.warning('Something went wrong!')

      
      }
    );
    
    

   
  }


 //get all sessions
  getSessionDetails() {
    this.sessionService.getAllSessions()
      .subscribe(
        data => {
          console.log(data,"session get request")

          this.sessionDetails = data;
          this.total = data.length;
          
        },
        error => {
          console.error('Error fetching sessions:', error);
        }
      );
  }

//delete session
  deleteSession(sessionid: any): void {
    console.log(sessionid,"doctorid");
    this.sessionService.deleteSession(sessionid).subscribe(
      () => {
        console.log(`Doctor with ID ${sessionid} deleted successfully`);
     
        Swal.fire({
          title: 'Are you sure want to cancel?',
          text: 'You will not be able to retair the session!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, cancel it!',
          cancelButtonText: 'No, keep it'
        }).then((result) => {
          if (result.value) {
            Swal.fire(
              'Deleted!',
              'Session has been deleted.',
              'success'
            )
            
            // this.router.navigate(['patient/mybooking']);
            this.getSessionDetails();
          } 
        })
        
      },
      (error:HttpErrorResponse) => {
        console.error(`Error deleting Session with ID ${sessionid}`, error);
       
      }
    );
  }


  openDetails(targetModal:any,session:any,editMode: boolean){
    this.editMode=editMode
    this.selectedSessions = { ...session };
    console.log(this.selectedSessions,"edit session")
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    console.log(session.sid,"edit doctor");

  }

  onEdit(): void{
    this.sessionService.updateSession(this.selectedSessions).subscribe(
      (response) => {
        console.log('Session updated successfully:', response);
        this.toastr.success('Sesssion updated successfully')
        this.getSessionDetails();
        this.modalService.dismissAll();
      },
      (error) => {
        console.error('Error updating Session:', error);
        this.toastr.warning('Something went wrong!')

      }
    );
    
  }


  
}

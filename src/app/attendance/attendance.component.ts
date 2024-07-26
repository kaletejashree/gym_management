import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  newMember: any = {};
  members: any[] = [];
  selectedMember: string = '';
  attendanceDate: string = '';
  attendanceStatus: string = '';
  attendances: any[] = [];

  ngOnInit() {
    this.members = [
      { name: 'Tejashree', address: '456 Aundh Road, Pune, Maharashtra, 411007', weight: 55, height: 160, photo: 'tejashree.jpg' },
      { name: 'Vaibhav', address: '789 Laxmi Road, Pune, Maharashtra, 411030', weight: 75, height: 180, photo: 'vaibhav.jpg' },
      { name: 'Jyoti', address: '101 Shivajinagar, Pune, Maharashtra, 411005', weight: 60, height: 165, photo: 'jyoti.jpg' },
      { name: 'Prajkta', address: '202 Koregaon Park, Pune, Maharashtra, 411001', weight: 58, height: 162, photo: 'prajkta.jpg' },
      { name: 'Shreenay', address: '303 Baner Road, Pune, Maharashtra, 411045', weight: 70, height: 170, photo: 'shreenay.jpg' },
      { name: 'Pooja', address: '404 Viman Nagar, Pune, Maharashtra, 411014', weight: 62, height: 167, photo: 'pooja.jpg' },
      { name: 'Priti', address: '505 Kalyani Nagar, Pune, Maharashtra, 411006', weight: 57, height: 163, photo: 'priti.jpg' },
      { name: 'Sangita', address: '606 Hadapsar, Pune, Maharashtra, 411028', weight: 65, height: 168, photo: 'sangita.jpg' },
      { name: 'Ritesh', address: '707 Magarpatta City, Pune, Maharashtra, 411028', weight: 80, height: 185, photo: 'ritesh.jpg' },
      { name: 'Jyoti', address: '808 Pimple Saudagar, Pune, Maharashtra, 411027', weight: 63, height: 166, photo: 'jyoti2.jpg' }
    ];

    // Load stored attendance data from local storage
    const storedAttendances = localStorage.getItem('attendances');
    if (storedAttendances) {
      this.attendances = JSON.parse(storedAttendances);
    }
  }

  addAttendance() {
    if (this.selectedMember && this.attendanceDate && this.attendanceStatus) {
      const newAttendance = {
        member: this.selectedMember,
        date: this.attendanceDate,
        status: this.attendanceStatus
      };
      this.attendances.push(newAttendance);

      // Save updated attendances to local storage
      localStorage.setItem('attendances', JSON.stringify(this.attendances));

      this.selectedMember = '';
      this.attendanceDate = '';
      this.attendanceStatus = '';
    } else {
      alert('Please fill in all fields.');
    }
  }

  deleteAttendance(index: number) {
    this.attendances.splice(index, 1);

    // Save updated attendances to local storage
    localStorage.setItem('attendances', JSON.stringify(this.attendances));
  }
}

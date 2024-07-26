import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrl: './addmember.component.css'
})
export class AddmemberComponent implements OnInit {
  newMember = { name: '', address: '', weight: '', height: '', photo: '' };
  members: { name: string, address: string, weight: string, height: string, photo: string }[] = [];


  ngOnInit() {
    this.loadMembers();
  }
 
  
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.newMember.photo = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.newMember.name && this.newMember.address && this.newMember.weight && this.newMember.height && this.newMember.photo) {
      this.members.push({ ...this.newMember });
      this.saveMembers();
      this.newMember = { name: '', address: '', weight: '', height: '', photo: '' };
    }
  }
  deleteMember(index: number) {
    if (confirm('Are you sure you want to delete this member?')) {
      this.members.splice(index, 1);
      this.saveMembers();
    }
  }
  saveMembers() {
    localStorage.setItem('members', JSON.stringify(this.members));
  }

  loadMembers() {
    const members = localStorage.getItem('members');
    if (members) {
      this.members = JSON.parse(members);
    }
}
}

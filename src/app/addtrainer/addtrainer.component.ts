import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtrainer',
  templateUrl: './addtrainer.component.html',
  styleUrls: ['./addtrainer.component.css']
})
export class AddtrainerComponent implements OnInit {
  newTrainer = { name: '', specialty: '', photo: '' };
  trainers: { name: string, specialty: string, photo: string }[] = [];

  ngOnInit() {
    this.loadTrainers();
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.newTrainer.photo = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.newTrainer.name && this.newTrainer.specialty && this.newTrainer.photo) {
      this.trainers.push({ ...this.newTrainer });
      this.saveTrainers();
      this.newTrainer = { name: '', specialty: '', photo: '' };
    }
  }

  deleteTrainer(index: number) {
    if (confirm('Are you sure you want to delete this trainer?')) {
      this.trainers.splice(index, 1);
      this.saveTrainers();
    }
  }

  saveTrainers() {
    localStorage.setItem('trainers', JSON.stringify(this.trainers));
  }

  loadTrainers() {
    const trainers = localStorage.getItem('trainers');
    if (trainers) {
      this.trainers = JSON.parse(trainers);
    }
  }
}

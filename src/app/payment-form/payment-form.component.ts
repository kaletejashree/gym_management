import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent {
  paymentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      name: [''],
      cardNumber: [''],
      expiry: [''],
      cvv: [''],
      amount: ['']
    });
  }

  onSubmit(): void {
    console.log(this.paymentForm.value);
  }

  generatePDF(): void {
    const doc = new jsPDF();
    const formValue = this.paymentForm.value;

    // Set title and gym name
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.setTextColor(0, 102, 204); // Dark blue color
    doc.text('Fitness Gym', 10, 20);

    // Receipt Title
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0); // Black color
    doc.text('Payment Receipt', 10, 35);

    // Add a horizontal line
    doc.setDrawColor(0, 0, 0); // Black color for the line
    doc.setLineWidth(1);
    doc.line(10, 40, 200, 40); // Line from x1, y1 to x2, y2

    // Receipt Details
    doc.setFontSize(16);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0); // Black color

    doc.text(`Name: ${formValue.name}`, 10, 50);
    doc.text(`Card Number: ${formValue.cardNumber}`, 10, 60);
    doc.text(`Expiry Date: ${formValue.expiry}`, 10, 70);
    doc.text(`CVV: ${formValue.cvv}`, 10, 80);
    doc.text(`Amount: $${formValue.amount}`, 10, 90);

    // Add a footer with a thank you note
    doc.setFontSize(12);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(100, 100, 100); // Gray color
    doc.text('Thank you for your payment!', 10, 110);
    doc.text('For any queries, contact us at support@fitnessgym.com', 10, 120);

    // Add a border around the receipt
    doc.setDrawColor(0, 0, 0); // Black color for the border
    doc.setLineWidth(0.5);
    doc.rect(10, 10, 190, 120); // Rectangle border

    doc.save('payment-receipt.pdf');
  }
}

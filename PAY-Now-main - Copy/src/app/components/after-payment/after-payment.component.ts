import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PayService } from 'src/app/services/pay.service';
@Component({
  selector: 'app-after-payment',
  templateUrl: './after-payment.component.html',
  styleUrls: ['./after-payment.component.css'],
})
export class AfterPaymentComponent implements OnInit {
  public n: any;
  constructor(private router: Router, private tran: PayService) {}

  ngOnInit(): void {
    let c: any;

    c = JSON.parse(localStorage.getItem('Payment') || '{}');
    localStorage.clear();
    console.log(c);
    this.tran.payCheck(c).subscribe(
      (data) => {
        console.log('SUCCESS', data);
        this.n = data;
      },
      (error) => {
        console.log('ERROR', error);
      }
    );
  }
  ngonChange(): void {}
}

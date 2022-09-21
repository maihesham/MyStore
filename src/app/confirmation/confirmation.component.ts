import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  TotalPrice:number=0;
  userName:string=""
  constructor(private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
   this.TotalPrice= this.activatedRoute.snapshot.params['totalPrice'];
   this.userName= this.activatedRoute.snapshot.params['name'];
  }

}

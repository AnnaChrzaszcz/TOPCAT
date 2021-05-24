import { Component } from '@angular/core';
import {NgForm, FormControl, Validators} from '@angular/forms';
import {OrderService} from '../order.service';

interface Order {
  name: string;
  team: string;
  mail: string;
  size: string;
  model: string;
}

interface Size {
  value: string;
  viewValue: string;
}

interface Model {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-tokay',
  templateUrl: './tokay.component.html',
  styleUrls: ['./tokay.component.css']
})
export class TokayComponent {
  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);


  size = '';

  sizes: Size[] = [
    {value: '36', viewValue: '36'},
    {value: '36,5', viewValue: '36,5'},
    {value: '37', viewValue: '37'},
    {value: '38', viewValue: '38'},
    {value: '38,5', viewValue: '38,5'},
    {value: '39', viewValue: '39'},
    {value: '40', viewValue: '40'},
    {value: '40,5', viewValue: '40,5'},
    {value: '41', viewValue: '41'},
    {value: '42', viewValue: '42'},
    {value: '42,5', viewValue: '42,5'},
    {value: '43', viewValue: '43'},
    {value: '44', viewValue: '44'},
    {value: '44,5', viewValue: '44,5'},
    {value: '45', viewValue: '45'},
    {value: '46', viewValue: '46'},
    {value: '46,5', viewValue: '46,5'},
    {value: '47', viewValue: '47'},
  ];

  models: Model[] = [
    {value: 'black', viewValue: 'Black'},
    {value: 'light_grey', viewValue: 'Light Grey'},

  ];
  constructor(public orderService: OrderService){}

  onAddPost(form: NgForm): void{
    console.log(form);
    if(form.invalid){
      return;
    }
    const order: Partial<Order> = {
      name: form.value.name,
      team: form.value.team,
      mail: form.value.mail,
      size: form.value.size,
      model: form.value.model,
    };
      this.orderService.orderCleats(order as Order)
      .subscribe(
      result => {
        alert('Thank you, ' + order.name + '! Your expression of interest for ' + order.model + ' TOKAY cleats, size: ' + order.size + ' has been submitted. You can try on your shoes in TOP CAT store or contact the organisers to do it other way. See you! 🎉');
        console.log(result);
        form.resetForm();
      },
      error => {
        console.log(error)
        alert('Ups, ' + order.name + '! Smth went wrong... Please try again or try dm ZWR to complete your preorer.');
      }
    );


  }

}

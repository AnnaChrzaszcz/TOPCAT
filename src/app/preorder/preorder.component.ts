import { Component } from '@angular/core';
import {NgForm, FormControl, Validators} from '@angular/forms';
import { Order } from './order.model';
import {OrderService} from '../order.service';

interface Size {
  value: string;
  viewValue: string;
}

interface Model {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-preorder',
  templateUrl: './preorder.component.html',
  styleUrls: ['./preorder.component.css']
})
export class PreorderComponent {
  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  enteredTitle = '';
  enteredContent = '';
  sex = '';
  size = '';

  maleSizes: Size[] = [
    {value: 'male_xs', viewValue: 'XS'},
    {value: 'male_s', viewValue: 'S'},
    {value: 'male_m', viewValue: 'M'},
    {value: 'male_l', viewValue: 'L'},
    {value: 'male_xl', viewValue: 'XL'},
    {value: 'male_xxl', viewValue: 'XXL'},
    {value: 'male_xxxl', viewValue: 'XXXL'},
  ];
  femaleSizes: Size[] = [
    {value: 'female_xs', viewValue: 'XS'},
    {value: 'female_s', viewValue: 'S'},
    {value: 'female_m', viewValue: 'M'},
    {value: 'female_l', viewValue: 'L'},
    {value: 'female_xl', viewValue: 'XL'},
    {value: 'female_xxl', viewValue: 'XXL'}
    ];
  models: Model[] = [
    {value: 'white_morning', viewValue: 'White Morning'},
    {value: 'black_neon', viewValue: 'Black Neon'},

  ];
  // models: Model[] = [
  //   {value: 'party_panther', viewValue: 'Party Panther', image: 'assets/images/icon1.png'},
  //   {value: 'blue_tiger', viewValue: 'Blue Tiger', image: 'assets/images/icon2.png'},
  //   {value: 'mellow_tiger', viewValue: 'Mellow Tiger', image: 'assets/images/icon3.png'},
  //   {value: 'cosmic_cheetah', viewValue: 'Cosmic Cheetah', image: 'assets/images/icon4.png'},
  //   {value: 'happy_cheetah', viewValue: 'Happy Cheetah', image: 'assets/images/icon5.png'},

  // ];
  // sizes: string[] = ['S', 'M', 'L'];
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
      this.orderService.orderTanktop(order as Order)
      .subscribe(
      result => {
        alert('Thank you, ' + order.name + '! Your order for ' + order.model + ' tank top, size: ' + order.size + ' has been submitted. You can collect your tank top in TOP CAT store or contact the organisers to do it other way. See you! 🎉');
        console.log(result);
        form.resetForm();
      },
      error => {
        console.log("BŁĄĄĄĄĄĄĄĄĄĄĄĄĄĄĄĄD!!")
        console.log(error)
        alert('Ups, ' + order.name + '! Smth went wrong... Please try again or try dm ZWR to complete your preorer.');
      }
    );


  }
  onChangeSex(sex: string): void{
    this.sex = sex;
    console.log(this.sex);
  }
}

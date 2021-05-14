import { Component, OnInit } from '@angular/core';
import {NgForm, FormControl, Validators} from '@angular/forms';
import { Order } from './order.model';

interface Size {
  value: string;
  viewValue: string;
}

interface Model {
  value: string;
  viewValue: string;
  image: string;
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
    {value: 'party_panther', viewValue: 'Party Panther', image: '../../assets/images/icon1.png'},
    {value: 'blue_tiger', viewValue: 'Blue Tiger', image: '../../assets/images/icon2.png'},
    {value: 'mellow_tiger', viewValue: 'Mellow Tiger', image: '../../assets/images/icon3.png'},
    {value: 'cosmic_cheetah', viewValue: 'Cosmic Cheetah', image: '../../assets/images/icon4.png'},
    {value: 'happy_cheetah', viewValue: 'Happy Cheetah', image: '../../assets/images/icon5.png'},

  ];
  // sizes: string[] = ['S', 'M', 'L'];
  // constructor(public postService: PostService){}

  onAddPost(form: NgForm): void{
    console.log(form);
    if(form.invalid){
      return;
    }
    const post: Order = {
      name: form.value.name,
      team: form.value.team,
      mail: form.value.mail,
      size: form.value.size,
      model: form.value.model,
      // sex: form.value.sex

    };
    // this.postService.addPost(form.value.title, form.value.content);
    // form.resetForm();
  }
  onChangeSex(sex: string): void{
    this.sex = sex;
    console.log(this.sex);
  }

  checkSex(sex: string): boolean{
    if (this.sex === sex){
      return true;
    }
    else{
      return false;
    }
  }
}

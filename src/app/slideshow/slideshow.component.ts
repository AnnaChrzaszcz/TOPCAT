import { AfterViewInit, Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements AfterViewInit {

  slideIndex: number = 1;
  @Input() slidesSet: string;
  tanktop = [
    {
      indexOf: 1,
      source: 'assets/images/1.png',
      name: 'Party Panther'
    },
    {
      indexOf: 2,
      source: 'assets/images/2.png',
      name: 'Blue Tiger'
    },
    {
      indexOf: 3,
      source: 'assets/images/3.png',
      name: 'Mellow Tiger'
    },
    {
      indexOf: 4,
      source: 'assets/images/4.png',
      name: 'Cosmic Cheetah'
    },
    {
      indexOf: 5,
      source: 'assets/images/5.png',
      name: 'Happy Cheetah'
    }
  ]
  tokay = [
    {
      indexOf: 1,
      source: 'assets/images/tokay1.jpg',
      name: ''
    },
    {
      indexOf: 2,
      source: 'assets/images/tokay2.jpg',
      name: ''
    },
    {
      indexOf: 3,
      source: 'assets/images/tokay3.jpg',
      name: ''
    },
    {
      indexOf: 4,
      source: 'assets/images/tokay4.jpg',
      name: ''
    },
    {
      indexOf: 5,
      source: 'assets/images/tokay5.jpg',
      name: ''
    },
    {
      indexOf: 6,
      source: 'assets/images/tokay6.jpg',
      name: ''
    }
  ]
  slides = [];

  constructor() { }

  ngOnInit(): void{
    this.getSlidesSet(this.slidesSet);
  }

  getSlidesSet(set: string){

    if (set === 'tanktop'){
      this.slides = this.tanktop;
    }
    if (set === 'tokay'){
      this.slides = this.tokay;
    }

  }

  ngAfterViewInit(): void {
    this.showSlides(this.slideIndex);
  }
  plusSlides(n): void {
    this.showSlides(this.slideIndex += n);
  }
  currentSlide(n): void {
    this.showSlides(this.slideIndex = n);
  }
  showSlides(n): void {
    let i;
    const slides = Array.from(document.getElementsByClassName(this.slidesSet) as HTMLCollectionOf<HTMLElement>);
    const dots = Array.from(document.getElementsByClassName('dot') as HTMLCollectionOf<HTMLElement>);
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[this.slideIndex - 1].style.display = 'block';
    dots[this.slideIndex - 1].className += ' active';
  }
}

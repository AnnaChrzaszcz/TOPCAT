import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  slideIndex: number = 1;

  constructor() { }

  ngOnInit(): void {
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
    const slides = Array.from(document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>);
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

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{

  title = 'TOPCATTT';
  ogloszenia = true;
  tabela = false;
  rozpiska = false;
  mapka = false;
  program = false;
  spirit = false;
  menu: boolean[] = [this.ogloszenia, this.tabela, this.rozpiska, this.mapka, this.program];
  spiritMap = {Zawierucha: 0,
    mJah: 0,
    Flow: 0,
    OUT: 0,
    '4hands': 0,
    FUJ: 0,
    RJP: 0,
    'BUMP!': 0,
    'Czarna Kompania': 0,
    'Rainbow Banana': 0,
    'KWR Knury': 0,
    'Grandmaster Flash': 0
  };
  i = 1;

  ngOnInit(): void {
    this.menu.forEach(el => {
      console.log(el);
    });
  }


  fun_ogloszenia(): void {
    this.ogloszenia = true;
    this.tabela = false;
    this.rozpiska = false;
    this.program = false;
    this.mapka = false;
    this.spirit = false;
    /*this.menu.forEach(el => {
      el = false;
    });
    this.menu[0] = true;*/
  }

  fun_rozpiska(): void {
   this.rozpiska = true;
   this.tabela = false;
   this.program = false;
   this.ogloszenia = false;
   this.mapka = false;
   this.spirit = false;
  }

  fun_mapka(): void {
    this.mapka = true;
    this.rozpiska = false;
    this.tabela = false;
    this.program = false;
    this.ogloszenia = false;
    this.spirit = false;
  }

  fun_program(): void {
    this.program = true;
    this.mapka = false;
    this.rozpiska = false;
    this.tabela = false;
    this.ogloszenia = false;
    this.spirit = false;
  }
  fun_charts(): void {
    this.tabela = true;
    this.rozpiska = false;
    this.program = false;
    this.ogloszenia = false;
    this.mapka = false;
    this.spirit = false;
  }

  fun_spirit(): void {
    this.spirit = true;
    this.tabela = false;
    this.rozpiska = false;
    this.program = false;
    this.ogloszenia = false;
    this.mapka = false;
  }
}

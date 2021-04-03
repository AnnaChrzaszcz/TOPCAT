import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'TOPCATTT';
  ogloszenia = true;
  tabela = false;
  rozpiska = false;
  mapka = false;
  program = false;
  spirit = false;
  stream = false;
  rules = false;
  rozpiska2020 = false;
  program2020 = false;
  spirit2020 = false;
  stream2020 = false;
  tabela2020 = false;

  /* menu: boolean[] = [this.ogloszenia, this.tabela, this.rozpiska, this.mapka, this.program];
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
   };*/

 /* ngOnInit(): void {
    this.menu.forEach(el => {
      console.log(el);
    });
  }*/


  fun_ogloszenia(): void {
    this.ogloszenia = true;
    this.tabela = false;
    this.rozpiska = false;
    this.program = false;
    this.mapka = false;
    this.spirit = false;
    this.stream = false;
    this.rules = false;
    this.rozpiska2020 = false;
    this.program2020 = false;
    this.spirit2020 = false;
    this.stream2020 = false;
    this.tabela2020 = false;
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
   this.stream = false;
   this.rules = false;
    this.rozpiska2020 = false;
    this.program2020 = false;
    this.spirit2020 = false;
    this.stream2020 = false;
    this.tabela2020 = false;
  }

  fun_mapka(): void {
    this.mapka = true;
    this.rozpiska = false;
    this.tabela = false;
    this.program = false;
    this.ogloszenia = false;
    this.spirit = false;
    this.stream = false;
    this.rules = false;
    this.rozpiska2020 = false;
    this.program2020 = false;
    this.spirit2020 = false;
    this.stream2020 = false;
    this.tabela2020 = false;
  }

  fun_program(): void {
    this.program = true;
    this.mapka = false;
    this.rozpiska = false;
    this.tabela = false;
    this.ogloszenia = false;
    this.spirit = false;
    this.stream = false;
    this.rules = false;
    this.rozpiska2020 = false;
    this.program2020 = false;
    this.spirit2020 = false;
    this.stream2020 = false;
    this.tabela2020 = false;
  }
  fun_charts(): void {
    this.tabela = true;
    this.rozpiska = false;
    this.program = false;
    this.ogloszenia = false;
    this.mapka = false;
    this.spirit = false;
    this.stream = false;
    this.rules = false;
    this.rozpiska2020 = false;
    this.program2020 = false;
    this.spirit2020 = false;
    this.stream2020 = false;
    this.tabela2020 = false;
  }

  fun_spirit(): void {
    this.spirit = true;
    this.tabela = false;
    this.rozpiska = false;
    this.program = false;
    this.ogloszenia = false;
    this.mapka = false;
    this.stream = false;
    this.rules = false;
    this.rozpiska2020 = false;
    this.program2020 = false;
    this.spirit2020 = false;
    this.stream2020 = false;
    this.tabela2020 = false;
  }

  fun_stream(): void {
    this.stream = true;
    this.spirit = false;
    this.tabela = false;
    this.rozpiska = false;
    this.program = false;
    this.ogloszenia = false;
    this.mapka = false;
    this.rules = false;
    this.rozpiska2020 = false;
    this.program2020 = false;
    this.spirit2020 = false;
    this.stream2020 = false;
    this.tabela2020 = false;
  }

  fun_rules(): void {
    this.rules = true;
    this.stream = false;
    this.spirit = false;
    this.tabela = false;
    this.rozpiska = false;
    this.program = false;
    this.ogloszenia = false;
    this.mapka = false;
    this.rozpiska2020 = false;
    this.program2020 = false;
    this.spirit2020 = false;
    this.stream2020 = false;
    this.tabela2020 = false;
  }
  fun_rozpiska2020(): void {
    this.mapka = false;
    this.rozpiska = false;
    this.tabela = false;
    this.program = false;
    this.ogloszenia = false;
    this.spirit = false;
    this.stream = false;
    this.rules = false;
    this.rozpiska2020 = true;
    this.program2020 = false;
    this.spirit2020 = false;
    this.stream2020 = false;
    this.tabela2020 = false;
  }

  fun_program2020(): void {
    this.program = false;
    this.mapka = false;
    this.rozpiska = false;
    this.tabela = false;
    this.ogloszenia = false;
    this.spirit = false;
    this.stream = false;
    this.rules = false;
    this.rozpiska2020 = false;
    this.program2020 = true;
    this.spirit2020 = false;
    this.stream2020 = false;
    this.tabela2020 = false;
  }
  fun_charts2020(): void {
    this.tabela = false;
    this.rozpiska = false;
    this.program = false;
    this.ogloszenia = false;
    this.mapka = false;
    this.spirit = false;
    this.stream = false;
    this.rules = false;
    this.rozpiska2020 = false;
    this.program2020 = false;
    this.spirit2020 = false;
    this.stream2020 = false;
    this.tabela2020 = true;
  }

  fun_spirit2020(): void {
    this.spirit = false;
    this.tabela = false;
    this.rozpiska = false;
    this.program = false;
    this.ogloszenia = false;
    this.mapka = false;
    this.stream = false;
    this.rules = false;
    this.rozpiska2020 = false;
    this.program2020 = false;
    this.spirit2020 = true;
    this.stream2020 = false;
    this.tabela2020 = false;
  }

  fun_stream2020(): void {
    this.stream = false;
    this.spirit = false;
    this.tabela = false;
    this.rozpiska = false;
    this.program = false;
    this.ogloszenia = false;
    this.mapka = false;
    this.rules = false;
    this.rozpiska2020 = false;
    this.program2020 = false;
    this.spirit2020 = false;
    this.stream2020 = true;
    this.tabela2020 = false;
  }
}

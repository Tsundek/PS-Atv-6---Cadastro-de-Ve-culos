import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FORMComponent } from './form/form.component';
import { TABELAComponent } from './tabela/tabela.component';
import { SERVICOService } from './servico.service';

// para usar a moeda do Brasil
import {LOCALE_ID} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FORMComponent, TABELAComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SERVICOService, {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    }]
})
export class AppModule { }

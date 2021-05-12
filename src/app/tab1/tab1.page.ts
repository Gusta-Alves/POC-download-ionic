import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  constructor() {}

  async iniciar(){
    await Browser.open({ url: 'https://sistemashomologacao.suafaculdade.com.br/cdn/pdf.html' });
  }

}

import { browser, by, element } from 'protractor';

export class AppPage {
  credenciais:any;

  constructor(){
    this.credenciais ={
      nome:'manuel',
      senha:123
    }
  }
  navigateTo() {
    // return browser.get(browser.baseUrl) as Promise<any>;
    return browser.get('http://localhost:4000/login')
  }

  efetuarLogin(){
    element(by.css('[name="usuario_user"]')).sendKeys(this.credenciais.nome);
    element(by.css('[name="senha_user"]')).sendKeys(this.credenciais.senha);
    element(by.css('[name="btn_login"]')).click();
    // element(by.css('[name="btn_logar"]')).click();
    element(by.className('ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-left')).click();

    element(by.className('ui-menuitem-link ui-corner-all ng-star-inserted')).click();
  }
  getTitleText() {
    return element(by.css('usuario_user')).getText() as Promise<string>;
  }
}

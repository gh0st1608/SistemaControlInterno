import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingGrabadoComponents } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HeaderComponent } from './componentes/header/header.component';
//import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    //HeaderComponent,
    //FooterComponent,
    routingGrabadoComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

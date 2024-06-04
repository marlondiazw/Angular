import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


    let a: number = 1;
  type Persona = {
    name: string,
    apel:string,
    age: number
  }


  function savePersona (persona: Persona){
    persona.age = 1
    persona.name = "Davidsg"
    console.log(`Hola ${persona.age}`)
  }
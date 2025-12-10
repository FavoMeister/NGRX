import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'myApp';
  dato$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.dato$ = this.store.select('mensaje');
    // Si quieres subscribirte para ver el valor:
    this.dato$.subscribe(console.log);
  }

  spanishMessage(){
    // Despacha una acción para cambiar el mensaje en español
    this.store.dispatch({ type: 'SPANISH' });
  }

  englishMessage(){
    this.store.dispatch({ type: 'ENGLISH' });
  }
}

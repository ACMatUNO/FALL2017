import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {NoteTemplateComponent} from "./note-list/note-template/note-template.component";
import {NoteListComponent} from "./note-list/note-list.component";


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NoteTemplateComponent,
    NoteListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

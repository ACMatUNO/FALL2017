import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {NavvybarComponent} from "./nav-bar/nav-bar.component";
import {NotelistComponent} from "./note-list/note-list.component";
import {SettingsPageComponent} from "./settings-page/settings-page.component";
import {NoteTemplateComponent} from "./note-list/note-template/note-template.component";


//ng does a lot of its thing by using annotations
@NgModule({

  //any component made should be declared here, otherwise angular willnot know where to find them
  declarations: [
    AppComponent,
    NavvybarComponent,
    NotelistComponent,
    SettingsPageComponent,
    NoteTemplateComponent

  ],
  imports: [ // typically just packaged up files for adding in other features.
    BrowserModule, //There are root modules and feature modules. Only the root module imports the browserModule
    HttpModule,
    FormsModule,
    RouterModule.forRoot([{
      path: '',
      component : NotelistComponent
    }, {
      path : 'settings',
      component : SettingsPageComponent
    }
    ])
  ],
  providers: [], //providers get injected into classes to provide things like database support
  bootstrap: [AppComponent] //
})
export class AppModule { }

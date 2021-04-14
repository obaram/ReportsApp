import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {reducers} from './state/app.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ReportsEffects} from './reports/state/reports.effects';
import {ReportsService} from './shared/services/reports.service';
import {HttpClientModule} from '@angular/common/http';
import {ReportsListComponent} from './reports/reports-list/reports-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ReportsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    EffectsModule.forRoot([ReportsEffects]),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
  ],
  providers: [ReportsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

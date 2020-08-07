import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LastMovieComponent } from './last-movie.component';
import { TranslateModule, TranslateLoader, TranslateService, TranslateStore } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/app.module';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('LastMovieComponent', () => {
  let component: LastMovieComponent;
  let fixture: ComponentFixture<LastMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastMovieComponent ],
      imports: [IonicModule.forRoot(),
        TranslateModule.forChild({
          loader:{
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
          },
        }),
      ],
      providers: [
        HttpClient,
        TranslateService,
        TranslateStore,
        HttpHandler,
        HttpClient
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LastMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieCardComponent } from './movie-card.component';
import { TranslateService, TranslateLoader, TranslateModule, TranslateStore } from '@ngx-translate/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { createTranslateLoader } from 'src/app/app.module';
import { UrlSerializer, Router } from '@angular/router';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCardComponent ],
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
        UrlSerializer,
        Router
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

});

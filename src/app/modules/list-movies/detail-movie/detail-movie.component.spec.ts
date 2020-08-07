import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailMovieComponent } from './detail-movie.component';
import { TranslateModule, TranslateLoader, TranslateService, TranslateStore } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/app.module';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlSerializer, Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('DetailMovieComponent', () => {
  let component: DetailMovieComponent;
  let fixture: ComponentFixture<DetailMovieComponent>;
  const fakeActivatedRoute = { // Mock
    queryParams: of(
      {
        id_params: 'id_params_test'
      }
    ),
    params: of(
      {
        id_query_params: 'id_query_params_test'
      }
    )
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMovieComponent ],
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
        Router,
        {provide: ActivatedRoute, useValue: fakeActivatedRoute}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


});

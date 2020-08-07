import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListMoviesComponent } from './list-movies.component';
import { HttpHandler, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateService, TranslateStore, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/app.module';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ListMoviesComponent', () => {
  let component: ListMoviesComponent;
  let fixture: ComponentFixture<ListMoviesComponent>;
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
      declarations: [ ListMoviesComponent ],
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
        HttpClientModule,
        HttpClient,
        TranslateService, 
        TranslateStore,
        HttpHandler,
        {provide: ActivatedRoute, useValue: fakeActivatedRoute}
      ]
    }).compileComponents();


    fixture = TestBed.createComponent(ListMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


});

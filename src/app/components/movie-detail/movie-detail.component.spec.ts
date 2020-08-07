import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieDetailComponent } from './movie-detail.component';
import { TranslateModule, TranslateLoader, TranslateService, TranslateStore } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/app.module';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;

  let card: {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailComponent ],
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
        TranslateStore,
        HttpHandler  
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    component.card = {}
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LastMovieComponent } from './last-movie.component';

describe('LastMovieComponent', () => {
  let component: LastMovieComponent;
  let fixture: ComponentFixture<LastMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastMovieComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LastMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

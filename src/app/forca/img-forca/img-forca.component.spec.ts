import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgForcaComponent } from './img-forca.component';

describe('ImgForcaComponent', () => {
  let component: ImgForcaComponent;
  let fixture: ComponentFixture<ImgForcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgForcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgForcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

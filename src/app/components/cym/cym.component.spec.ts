import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CymComponent } from './cym.component';

describe('CymComponent', () => {
  let component: CymComponent;
  let fixture: ComponentFixture<CymComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CymComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

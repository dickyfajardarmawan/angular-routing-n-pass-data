import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherFirstComponent } from './other-first.component';

describe('OtherFirstComponent', () => {
  let component: OtherFirstComponent;
  let fixture: ComponentFixture<OtherFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

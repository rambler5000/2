import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SilkiComponent } from './silki.component';

describe('SilkiComponent', () => {
  let component: SilkiComponent;
  let fixture: ComponentFixture<SilkiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilkiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

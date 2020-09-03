import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycomponenttwoComponent } from './mycomponenttwo.component';

describe('MycomponenttwoComponent', () => {
  let component: MycomponenttwoComponent;
  let fixture: ComponentFixture<MycomponenttwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycomponenttwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycomponenttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

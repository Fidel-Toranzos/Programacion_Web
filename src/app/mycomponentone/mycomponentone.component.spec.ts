import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycomponentoneComponent } from './mycomponentone.component';

describe('MycomponentoneComponent', () => {
  let component: MycomponentoneComponent;
  let fixture: ComponentFixture<MycomponentoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycomponentoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycomponentoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

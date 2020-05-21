import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TailwindDemoComponent } from './tailwind-demo.component';

describe('TailwindDemoComponent', () => {
  let component: TailwindDemoComponent;
  let fixture: ComponentFixture<TailwindDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TailwindDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TailwindDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

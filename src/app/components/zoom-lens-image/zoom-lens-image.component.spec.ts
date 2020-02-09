import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomLensImageComponent } from './zoom-lens-image.component';

describe('ZoomLensImageComponent', () => {
  let component: ZoomLensImageComponent;
  let fixture: ComponentFixture<ZoomLensImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomLensImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomLensImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

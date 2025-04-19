import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSheetComponent } from './contact-sheet.component';

describe('ContactSheetComponent', () => {
  let component: ContactSheetComponent;
  let fixture: ComponentFixture<ContactSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

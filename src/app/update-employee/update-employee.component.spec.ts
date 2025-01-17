import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UpdateEmployeeComponent } from "./update-employee.component";

describe("UpdateEmployeeComponent", () => {
  let component: UpdateEmployeeComponent;
  let fixture: ComponentFixture<UpdateEmployeeComponent>;
  let submitted: boolean = true;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateEmployeeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

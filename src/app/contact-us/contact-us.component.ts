import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.less"],
})
export class ContactUsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  formData = {
    Name: "",
    Email: "",
    ContactNumber: "",
    CompanyName: "",
    Country: "",
    InterestedIn: "",
    Comments: "",
  };

  countries: string[] = ["Afghanistan", "India", "USA", "Germany"];

  interested_in: string[] = [
    "BOPET Films",
    "Metallised Films",
    "Polyster Resins & Chips",
    "BOPP Films (coming soon)",
    "Other",
  ];

  onKeyPress(event: KeyboardEvent): void {
    if (!/^[0-9]$/.test(event.key)) {
      event.preventDefault();
    }
  }

  onSubmit(form: any): void {
    if (form.valid) {
      console.log("Form submitted:", this.formData);
      alert("Form submitted successfully!");
    } else {
      alert("Please fill all required fields correctly.");
    }
  }
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.less"],
})
export class ContactUsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  maxFileSize = 2 * 1024 * 1024;
  selectedFile: File | null = null;
  formData = {
    contactNumber: "",
    email: "",
    country: "",
    file: null,
    Name: "",
    // formData: ""
  };

  countries = ["Afghanistan"];

  interested_in = [
    "BOPET Films",
    "Metallised Films",
    "Polyster Resins & Chips",
    "BOPP Films (comming soon)",
    "other",
  ];
  // formData = {
  //   Country: this.countries[1];
  // }
  onKeyPress(event: KeyboardEvent): void {
    const isDigit = /^[0-9]$/.test(event.key);
    if (!isDigit) {
      event.preventDefault();
    }
  }

  onSubmit(form: any) {
    if (form.valid) {
      console.log("Form submitted:", this.formData);
    } else {
      alert("Please fill all required fields correctly");
    }
  }
}

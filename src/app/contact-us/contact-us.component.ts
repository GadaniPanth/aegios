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
  };

  country = ["Afghanistan",];


  interested_in = [
    "BOPET Films",
    "Metallised Films",
    "Polyster Resins & Chips",
    "BOPP Films (comming soon)",
    "other",
  ];

  onKeyPress(event: KeyboardEvent) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
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

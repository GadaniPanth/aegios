import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-career",
  templateUrl: "./career.component.html",
  styleUrls: ["./career.component.less"],
})
export class CareerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  maxFileSize = 2 * 1024 * 1024; // 2MB in bytes
  selectedFile: File | null = null;
  formData = {
    contactNumber: "",
    email: "",
    function: "",
    file: null,
  };

  functions = [
    "All",
    "Finance",
    "Accounting",
    "HR & Administration",
    "Quality Assurance",
    "Production",
    "Marketing & Sales",
    "Logistics",
    "Supply chain & Procurement",
    "IT",
    "Maintenance",
    "Other",
  ];

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file.size > this.maxFileSize) {
        alert("File size exceeds 2MB limit");
        event.target.value = ""; // Clear the file input
        this.selectedFile = null;
      } else {
        this.selectedFile = file;
        this.formData.file = file;
      }
    }
  }

  onKeyPress(event: KeyboardEvent) {
    const charCode = event.which ? event.which : event.keyCode;
    // Only allow numbers (0-9)
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }
  onSubmit(form: any) {
    if (form.valid) {
      console.log("Form submitted:", this.formData);
      // Add your form submission logic here
    } else {
      // Form is invalid
      alert("Please fill all required fields correctly");
    }
  }
}

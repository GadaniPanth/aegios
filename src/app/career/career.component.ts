import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-career",
  templateUrl: "./career.component.html",
  styleUrls: ["./career.component.less"],
})
export class CareerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  maxFileSize = 2 * 1024 * 1024; // 2MB
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
        event.target.value = "";
        this.selectedFile = null;
        this.formData.file = null;
      } else {
        this.selectedFile = file;
        this.formData.file = file;
      }
    }
  }

  onKeyPress(event: KeyboardEvent) {
    const isNumberKey = /^[0-9]$/.test(event.key);
    if (!isNumberKey) {
      event.preventDefault();
    }
  }

  onSubmit(form: any) {
    if (form.valid && this.selectedFile) {
      console.log("Form submitted:", this.formData);
      alert("Form submitted successfully!");
      form.resetForm();
      this.selectedFile = null;
    } else {
      alert("Please fill all required fields correctly and upload a file.");
    }
  }
}

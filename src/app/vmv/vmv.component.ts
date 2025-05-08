import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vmv',
  templateUrl: './vmv.component.html',
  styleUrls: ['./vmv.component.less']
})
export class VmvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  activeTab = "tab1";

  tabs = [
    {
      id: "tab1",
      label: "OUR VISION",
      // title: "Content for Tab 1",
      // content: "This is the content for the first tab.",
      align: "left",
    },
    {
      id: "tab2",
      label: "OUR PURPOSE",
      // title: "Content for Tab 2",
      // content: "This is the content for the second tab.",
      align: "left",
    },
    {
      id: "tab3",
      label: "OUR MISSION",
      // title: "Content for Tab 3",
      // content: "This is the content for the third tab.",
      align: "left",
    },
  ];

  selectTab(tabId: string) {
    this.activeTab = tabId;
  }

}

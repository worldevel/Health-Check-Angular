import { Component, OnInit } from "@angular/core";
import { greetingModel } from "./greetingModel";
import { SystemHealth } from "./interface/system-health";
import { SystemCpu } from "./interface/system-cpu";
import { DashboardService } from "./services/dashboard.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  public greetings: greetingModel[];
  public traceList: any[] = [];
  public selectedTrace: any;
  public systemHealth: SystemHealth;
  public systemCpu: SystemCpu;
  public processUpTime: string;
  public http200Traces: any[] = [];
  public http400Traces: any[] = [];
  public http404Traces: any[] = [];
  public http500Traces: any[] = [];
  public httpDefaultTraces: any[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getTrace();
  }

  private getTrace(): void {
    this.dashboardService.getHttpTrace().subscribe((response: any) => {
      console.log(response.traces);
      this.processTraces(response.traces);
    });
  }

  private processTraces(traces: any): void {
    this.traceList = traces;
    this.traceList.forEach((trace) => {
      switch (trace.response.status) {
        case 200:
          this.http200Traces.push(trace);
          break;
        case 400:
          this.http400Traces.push(trace);
          break;
        case 404:
          this.http404Traces.push(trace);
          break;
        case 500:
          this.http500Traces.push(trace);
          break;
        default:
          this.httpDefaultTraces.push(trace);
      }
    });
  }

  public onSelectTrace(trace: any): void {
    this.selectedTrace = trace;
    document.getElementById("trace-modal").click();
  }
}

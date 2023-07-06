import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { SystemHealth } from "src/app/interface/system-health";
import { SystemCpu } from "src/app/interface/system-cpu";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  public getHttpTrace(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/actuator/httptrace`);
  }

  public getSystemsHealth(): Observable<SystemHealth> {
    return this.http.get<SystemHealth>(`${this.apiServerUrl}/health`);
  }

  public getSystemsCpu(): Observable<SystemCpu> {
    return this.http.get<SystemCpu>(
      `${this.apiServerUrl}metrics/system.cpu.count`
    );
  }

  public getProcessUptime(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}metrics/process.uptime`);
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { greetingModel } from "../greetingModel";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class HealthCheckService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getGreeting(): Observable<greetingModel[]> {
    return this.http.get<any>(`${this.apiServerUrl}/greeting`);
  }
}

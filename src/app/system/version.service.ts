/** Angular Imports */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from 'app/settings/settings.service';

/** rxjs Imports */
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  constructor(private http: HttpClient,
    private settingsService: SettingsService) { }

  getBackendInfo(): Observable<any> {
    return this.http.get(this.settingsService.serverUrl+'/actuator/info');
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  public edit_ship: {
    "id": string,
    "boat_code": string,
    "boat_name": string,
    "time": string,
    "is_delete": number,
  };
  public edit_device: {
    "id": string,
    "fault_id": string,
    "fault_code": string,
    "fault_name": string,
    "device_id": string,
    "device_code": string,
    "device_name": string,
    "boat_id": string,
    "boat_code": string,
    "boat_name": string,
    "time": string,
    "is_deal": number,
    "is_delete": number,
  };

  constructor() { }
}

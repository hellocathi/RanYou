import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    public fault_type;
    public ship_fault;
    public device_fault;
    public ship_warn;
    public device_warn;
    constructor() { }
}

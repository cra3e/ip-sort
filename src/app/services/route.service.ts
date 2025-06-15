import { Injectable } from '@angular/core';
import { Route } from '../models/route.model';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  getRoutes(): Route[] {
    return [
      { uuid: '1', address: '0.0.0.0/0', gateway: '193.0.174.1', interface: 'Подключение Ethernet' },
      { uuid: '2', address: '10.1.30.0/24', gateway: '0.0.0.0', interface: 'Гостевая сеть' },
      { uuid: '3', address: '192.168.1.0/24', gateway: '0.0.0.0', interface: 'Домашняя сеть' },
      { uuid: '4', address: '193.0.174.0/24', gateway: '0.0.0.0', interface: 'Подключение Ethernet' },
      { uuid: '5', address: '193.0.175.0/25', gateway: '193.0.174.10', interface: 'Подключение Ethernet' },
      { uuid: '6', address: '193.0.175.22/32', gateway: '193.0.174.1', interface: 'Подключение Ethernet' },
      { uuid: '7', address: '172.16.0.0/16', gateway: '192.168.1.1', interface: 'Сеть VPN' },
      { uuid: '8', address: '10.0.0.0/8', gateway: '10.1.30.1', interface: 'Корпоративная сеть' }
    ];
  }
}

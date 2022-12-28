import request from '@/utils/request';
export type { LocationStaffListType, LocationFenceListType, LocationCarListType } from './types';
import type { LocationStaffListType, LocationFenceListType, LocationCarListType } from './types';

export function locationStaffList() {
  return request<LocationStaffListType[]>({
    url: `/location/staff/list`,
    method: 'GET',
  });
}

export function locationCarList() {
  return request<LocationCarListType[]>({
    url: `/location/car/list`,
    method: 'GET',
  });
}

export function locationFenceList() {
  return request<LocationFenceListType[]>({
    url: `/location/fence/list`,
    method: 'GET',
  });
}

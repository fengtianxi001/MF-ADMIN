import request from '@/utils/request';
export type { DevicePageType } from './types';
import type { DevicePageType } from './types';

export function devicePage(orgId: string) {
  return request<DevicePageType[]>({
    url: `/device/page`,
    method: 'GET',
    params: {
      orgId,
    },
  });
}

import request from '@/utils/request';
export type { WarningPageType } from './types';
import type { WarningPageType } from './types';

export function warningPage() {
  return request<WarningPageType[]>({
    url: `/warning/page`,
    method: 'GET',
  });
}

import request from '@/utils/request';
export type { BreakdownPageType } from './types';
import type { BreakdownPageType } from './types';

export function BreakdownPage() {
  return request<BreakdownPageType[]>({
    url: `/breakdown/page`,
    method: 'GET',
  });
}

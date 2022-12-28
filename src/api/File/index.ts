import request from '@/utils/request';
export type { FilePageType } from './types';
import type { FilePageType } from './types';

export function filePage() {
  return request<FilePageType[]>({
    url: `/file/page`,
    method: 'GET',
  });
}

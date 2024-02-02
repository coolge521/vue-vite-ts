import request from '@/service';
import type { IResponse } from './types';
export const getSuggestionHall = (data: any) => {
  return request<any, IResponse>({
    url: '/suggestion/api/biz/record/home/page',
    method: 'GET',
    data
  });
};

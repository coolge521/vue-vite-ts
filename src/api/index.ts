import request from '@/service';
import type { PageBody } from '@/api/types';
export const getSuggestionHall = (data: any) => {
  return request<any, PageBody<any>>({
    url: '/suggestion/api/biz/record/home/page',
    method: 'GET',
    data
  });
};

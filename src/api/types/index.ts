export interface PageBody<T> {
  totalCount: number;
  pageSize: number;
  curPage: number;
  totalPage: number;
  list: T[];
}

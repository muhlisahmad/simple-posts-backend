export interface PageQuery {
  page: number;
  size: number;
}

export interface Paging extends PageQuery {
  total_data: number;
  total_page: number;
}

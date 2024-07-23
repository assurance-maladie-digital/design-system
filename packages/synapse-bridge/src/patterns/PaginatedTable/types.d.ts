export interface SortOption {
  key: string
  order: 'desc' | 'asc'
}

export interface GroupOption {
  key: string
  order: 'desc' | 'asc'
}

export interface DataOptions {
  page: number
  itemsPerPage: number
  sortBy: string[]
  sortDesc: boolean[]
  groupBy: string[]
  groupDesc: boolean[]
  multiSort: boolean
  mustSort: boolean
}

export interface PaginatedTableProps {
  items: any[]
  headers: DataTableHeaders
  options: DataOptions
}

export interface DataTableHeaders {
  title?: string
  value?: string
  key?: string
}

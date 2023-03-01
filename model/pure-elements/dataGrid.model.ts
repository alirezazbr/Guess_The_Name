import { GridRowsProp, GridColDef } from '@mui/x-data-grid'

export interface IDataGrid {
  rows: GridRowsProp
  columns: GridColDef[]
  pageSize?: number
  checkboxSelection?: boolean
  rowsPerPageOptions?: [number]
  disableSelectionOnClick?: boolean
}

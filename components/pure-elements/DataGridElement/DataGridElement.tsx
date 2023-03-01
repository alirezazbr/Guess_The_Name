import { ForwardedRef, forwardRef } from 'react'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'

import { IDataGrid } from '@/model/pure-elements/dataGrid.model'

interface IProps {
  customCss?: string
  rows: GridRowsProp
  columns: GridColDef[]
}

const DataGridElement = forwardRef(
  (props: IDataGrid & IProps, ref: ForwardedRef<HTMLDivElement> | null) => {
    const { rows, columns, ...rest } = props

    return (
      <div className="w-full h-[300px]">
        <DataGrid ref={ref} rows={rows} columns={columns} {...rest} />
      </div>
    )
  },
)

export default DataGridElement

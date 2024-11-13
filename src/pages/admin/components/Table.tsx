import DataTable, { createTheme } from "react-data-table-component";

interface TableProps {
  columns: any[];
  data: any[];
}

createTheme('dark', {
  text: {
    primary: 'white',
  },
  background: {
    default: 'transparent',
  },
  divider: {
    default: '#7DA3A3',
  }
})

const customStyles = {
  head: {
    style: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
    }
  },
  rows: {
    style: {
      fontSize: '1rem',
    }
  }
}

export function Table({ columns, data }: TableProps) {
  return (
    <div className="overflow-x-scroll w-full">
      <DataTable
        columns={columns}
        data={data}
        pagination
        paginationPerPage={10}
        selectableRows
        onSelectedRowsChange={(state) => console.log(state.selectedRows)}
        theme="dark"
        customStyles={customStyles}
      />
    </div>
  )
}

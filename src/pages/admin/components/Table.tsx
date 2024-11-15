import DataTable, { createTheme } from "react-data-table-component";
import { Loading } from "./Loading";
import { Error } from "./Error";

interface TableProps {
  columns: any[];
  data: any[];
  loading?: boolean;
  error?: Error | null;
}

createTheme('dark', {
  text: {
    primary: 'white',
  },
  background: {
    default: 'transparent',
  },
  divider: {
    default: '#E5EDED',
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

export function Table({ columns, data, loading, error }: TableProps) {

  if (loading) return <Loading />
  if (error) return <Error message={error.message} />

  return (
    <div className="overflow-x-scroll w-full">
      <DataTable
        columns={columns}
        data={data}
        pagination
        paginationPerPage={10}
        // selectableRows
        // onSelectedRowsChange={(state) => console.log(state.selectedRows)}
        theme="dark"
        customStyles={customStyles}
      />
    </div>
  )
}

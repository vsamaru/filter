import React from 'react'
import styled from 'styled-components'
import { useTable, useFilters,  useAsyncDebounce } from 'react-table'  //useGlobalFilter,
// A great library for fuzzy filtering/sorting items
import matchSorter from 'match-sorter'

//import makeData from './makeData'
let th = [{"firstName":"crib","lastName":"cub","age":23,"visits":28,"progress":83,"status":"relationship"},{"firstName":"establishment","lastName":"marble","age":12,"visits":41,"progress":81,"status":"relationship"},{"firstName":"scale","lastName":"act","age":27,"visits":40,"progress":46,"status":"relationship"},{"firstName":"instruction","lastName":"glove","age":26,"visits":46,"progress":28,"status":"single"},{"firstName":"aspect","lastName":"destruction","age":1,"visits":22,"progress":61,"status":"single"},{"firstName":"apples","lastName":"ball","age":4,"visits":88,"progress":81,"status":"relationship"},{"firstName":"desk","lastName":"affair","age":29,"visits":4,"progress":67,"status":"relationship"},{"firstName":"basin","lastName":"efficiency","age":23,"visits":60,"progress":59,"status":"single"},{"firstName":"beetle","lastName":"representative","age":17,"visits":26,"progress":41,"status":"relationship"},{"firstName":"journey","lastName":"pin","age":12,"visits":84,"progress":33,"status":"single"},{"firstName":"pollution","lastName":"disaster","age":1,"visits":81,"progress":40,"status":"relationship"},{"firstName":"shopping","lastName":"sail","age":23,"visits":39,"progress":35,"status":"single"},{"firstName":"leg","lastName":"relation","age":11,"visits":85,"progress":68,"status":"single"},{"firstName":"approval","lastName":"department","age":10,"visits":45,"progress":14,"status":"relationship"},{"firstName":"celery","lastName":"cousin","age":18,"visits":15,"progress":47,"status":"relationship"},{"firstName":"thrill","lastName":"brake","age":15,"visits":39,"progress":12,"status":"relationship"},{"firstName":"yak","lastName":"watch","age":9,"visits":4,"progress":40,"status":"complicated"},{"firstName":"rice","lastName":"advertising","age":2,"visits":97,"progress":7,"status":"single"},{"firstName":"bed","lastName":"leg","age":24,"visits":47,"progress":14,"status":"single"},{"firstName":"quicksand","lastName":"delivery","age":6,"visits":87,"progress":6,"status":"single"},{"firstName":"independence","lastName":"fall","age":22,"visits":23,"progress":5,"status":"single"},{"firstName":"recognition","lastName":"reality","age":23,"visits":6,"progress":63,"status":"complicated"},{"firstName":"cracker","lastName":"children","age":9,"visits":15,"progress":67,"status":"relationship"},{"firstName":"pancake","lastName":"arch","age":2,"visits":28,"progress":13,"status":"relationship"},{"firstName":"football","lastName":"cat","age":28,"visits":44,"progress":76,"status":"relationship"},{"firstName":"ad","lastName":"money","age":24,"visits":6,"progress":30,"status":"single"},{"firstName":"membership","lastName":"robin","age":2,"visits":47,"progress":34,"status":"single"},{"firstName":"top","lastName":"table","age":18,"visits":12,"progress":65,"status":"relationship"},{"firstName":"crime","lastName":"dealer","age":13,"visits":45,"progress":60,"status":"single"},{"firstName":"sample","lastName":"midnight","age":19,"visits":41,"progress":22,"status":"single"},{"firstName":"estate","lastName":"plot","age":28,"visits":24,"progress":40,"status":"complicated"},{"firstName":"response","lastName":"college","age":1,"visits":12,"progress":76,"status":"relationship"},{"firstName":"eyes","lastName":"cheese","age":8,"visits":16,"progress":57,"status":"complicated"},{"firstName":"coal","lastName":"elevator","age":28,"visits":19,"progress":92,"status":"relationship"},{"firstName":"magic","lastName":"sink","age":12,"visits":71,"progress":9,"status":"complicated"},{"firstName":"message","lastName":"soda","age":20,"visits":39,"progress":68,"status":"complicated"},{"firstName":"boundary","lastName":"studio","age":6,"visits":2,"progress":1,"status":"relationship"},{"firstName":"pets","lastName":"rifle","age":13,"visits":94,"progress":8,"status":"single"},{"firstName":"concept","lastName":"cemetery","age":19,"visits":46,"progress":3,"status":"complicated"},{"firstName":"waste","lastName":"bait","age":29,"visits":78,"progress":65,"status":"single"},{"firstName":"category","lastName":"efficiency","age":8,"visits":84,"progress":15,"status":"complicated"},{"firstName":"confusion","lastName":"card","age":27,"visits":60,"progress":4,"status":"complicated"},{"firstName":"fifth","lastName":"departure","age":28,"visits":31,"progress":41,"status":"relationship"},{"firstName":"coal","lastName":"tale","age":13,"visits":72,"progress":42,"status":"single"},{"firstName":"worker","lastName":"organization","age":23,"visits":25,"progress":7,"status":"relationship"},{"firstName":"flock","lastName":"farm","age":10,"visits":34,"progress":75,"status":"single"},{"firstName":"ladybug","lastName":"advice","age":19,"visits":74,"progress":8,"status":"relationship"},{"firstName":"twig","lastName":"perspective","age":15,"visits":58,"progress":64,"status":"complicated"},{"firstName":"measure","lastName":"sail","age":7,"visits":48,"progress":45,"status":"complicated"},{"firstName":"depth","lastName":"cup","age":27,"visits":62,"progress":66,"status":"complicated"},{"firstName":"picture","lastName":"guidance","age":28,"visits":4,"progress":24,"status":"relationship"},{"firstName":"aunt","lastName":"volcano","age":27,"visits":90,"progress":5,"status":"single"},{"firstName":"self","lastName":"volume","age":22,"visits":7,"progress":95,"status":"relationship"},{"firstName":"sir","lastName":"activity","age":29,"visits":85,"progress":51,"status":"single"},{"firstName":"brush","lastName":"drink","age":1,"visits":12,"progress":92,"status":"relationship"},{"firstName":"taste","lastName":"fireman","age":29,"visits":54,"progress":45,"status":"relationship"},{"firstName":"plate","lastName":"kitten","age":6,"visits":26,"progress":50,"status":"single"},{"firstName":"playground","lastName":"board","age":26,"visits":73,"progress":94,"status":"single"},{"firstName":"development","lastName":"shop","age":25,"visits":58,"progress":51,"status":"single"},{"firstName":"pencil","lastName":"hydrant","age":13,"visits":49,"progress":32,"status":"complicated"},{"firstName":"yard","lastName":"goose","age":3,"visits":83,"progress":45,"status":"complicated"},{"firstName":"inspection","lastName":"regret","age":9,"visits":80,"progress":85,"status":"relationship"},{"firstName":"channel","lastName":"economics","age":14,"visits":75,"progress":59,"status":"complicated"},{"firstName":"fang","lastName":"revenue","age":28,"visits":72,"progress":3,"status":"relationship"},{"firstName":"store","lastName":"cigarette","age":8,"visits":42,"progress":1,"status":"relationship"},{"firstName":"candidate","lastName":"baseball","age":29,"visits":52,"progress":84,"status":"complicated"},{"firstName":"poem","lastName":"library","age":25,"visits":5,"progress":99,"status":"single"},{"firstName":"year","lastName":"fiction","age":1,"visits":80,"progress":26,"status":"relationship"},{"firstName":"decision","lastName":"humor","age":14,"visits":20,"progress":63,"status":"complicated"},{"firstName":"low","lastName":"garden","age":4,"visits":53,"progress":15,"status":"complicated"},{"firstName":"weight","lastName":"dress","age":9,"visits":11,"progress":64,"status":"complicated"},{"firstName":"appointment","lastName":"dime","age":17,"visits":2,"progress":53,"status":"complicated"},{"firstName":"lunch","lastName":"treatment","age":24,"visits":96,"progress":66,"status":"single"},{"firstName":"childhood","lastName":"kick","age":15,"visits":53,"progress":65,"status":"complicated"},{"firstName":"iron","lastName":"beam","age":3,"visits":58,"progress":23,"status":"relationship"},{"firstName":"boat","lastName":"ladder","age":12,"visits":40,"progress":96,"status":"complicated"},{"firstName":"trucks","lastName":"relation","age":7,"visits":14,"progress":2,"status":"complicated"},{"firstName":"tub","lastName":"tennis","age":26,"visits":58,"progress":6,"status":"complicated"},{"firstName":"pain","lastName":"stream","age":13,"visits":79,"progress":69,"status":"relationship"},{"firstName":"debt","lastName":"mass","age":20,"visits":62,"progress":76,"status":"single"},{"firstName":"airplane","lastName":"afternoon","age":10,"visits":59,"progress":57,"status":"single"},{"firstName":"drug","lastName":"twig","age":4,"visits":87,"progress":64,"status":"relationship"},{"firstName":"mint","lastName":"park","age":18,"visits":40,"progress":54,"status":"single"},{"firstName":"difference","lastName":"pest","age":28,"visits":63,"progress":13,"status":"relationship"},{"firstName":"chair","lastName":"shake","age":9,"visits":80,"progress":84,"status":"relationship"},{"firstName":"juice","lastName":"airplane","age":14,"visits":91,"progress":18,"status":"complicated"},{"firstName":"studio","lastName":"establishment","age":8,"visits":66,"progress":12,"status":"complicated"},{"firstName":"instance","lastName":"sheep","age":16,"visits":45,"progress":8,"status":"single"},{"firstName":"children","lastName":"cloud","age":3,"visits":23,"progress":13,"status":"single"},{"firstName":"employer","lastName":"sisters","age":8,"visits":47,"progress":65,"status":"complicated"},{"firstName":"percentage","lastName":"marketing","age":15,"visits":43,"progress":39,"status":"single"},{"firstName":"exam","lastName":"loaf","age":7,"visits":89,"progress":73,"status":"single"},{"firstName":"sleet","lastName":"recognition","age":4,"visits":41,"progress":36,"status":"single"},{"firstName":"kittens","lastName":"problem","age":24,"visits":62,"progress":35,"status":"single"},{"firstName":"bikes","lastName":"basket","age":23,"visits":81,"progress":87,"status":"relationship"},{"firstName":"degree","lastName":"duck","age":21,"visits":75,"progress":22,"status":"relationship"},{"firstName":"end","lastName":"teeth","age":1,"visits":2,"progress":17,"status":"single"},{"firstName":"speaker","lastName":"owl","age":15,"visits":93,"progress":36,"status":"single"},{"firstName":"winter","lastName":"rod","age":16,"visits":2,"progress":50,"status":"relationship"},{"firstName":"sweater","lastName":"climate","age":15,"visits":60,"progress":45,"status":"relationship"}]
// th = JSON.stringify(th)
// console.log(th)
const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <span>
      Search:{' '}
      <input
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: '1.1rem',
          border: '0',
        }}
      />
    </span>
  )
}

// Define a default UI for filtering
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length

  return (
    <input
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  )
}

// This is a custom filter UI for selecting
// a unique option from a list
function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach(row => {
      options.add(row.values[id])
    })
    return [...options.values()]
  }, [id, preFilteredRows])

  // Render a multi-select box
  return (
    <select
      value={filterValue}
      onChange={e => {
        setFilter(e.target.value || undefined)
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

// This is a custom filter UI that uses a
// slider to set the filter value between a column's
// min and max values
function SliderColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the min and max
  // using the preFilteredRows

  const [min, max] = React.useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    preFilteredRows.forEach(row => {
      min = Math.min(row.values[id], min)
      max = Math.max(row.values[id], max)
    })
    return [min, max]
  }, [id, preFilteredRows])

  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        value={filterValue || min}
        onChange={e => {
          setFilter(parseInt(e.target.value, 10))
        }}
      />
      <button onClick={() => setFilter(undefined)}>Off</button>
    </>
  )
}

// This is a custom UI for our 'between' or number range
// filter. It uses two number boxes and filters rows to
// ones that have values between the two
function NumberRangeColumnFilter({
  column: { filterValue = [], preFilteredRows, setFilter, id },
}) {
  const [min, max] = React.useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    preFilteredRows.forEach(row => {
      min = Math.min(row.values[id], min)
      max = Math.max(row.values[id], max)
    })
    return [min, max]
  }, [id, preFilteredRows])

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <input
        value={filterValue[0] || ''}
        type="number"
        onChange={e => {
          const val = e.target.value
          setFilter((old = []) => [val ? parseInt(val, 10) : undefined, old[1]])
        }}
        placeholder={`Min (${min})`}
        style={{
          width: '70px',
          marginRight: '0.5rem',
        }}
      />
      to
      <input
        value={filterValue[1] || ''}
        type="number"
        onChange={e => {
          const val = e.target.value
          setFilter((old = []) => [old[0], val ? parseInt(val, 10) : undefined])
        }}
        placeholder={`Max (${max})`}
        style={{
          width: '70px',
          marginLeft: '0.5rem',
        }}
      />
    </div>
  )
}

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [row => row.values[id]] })
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = val => !val

// Our table component
function Table({ columns, data }) {
  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true
        })
      },
    }),
    []
  )

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
    },
    useFilters, // useFilters!
   // useGlobalFilter // useGlobalFilter!
  )

  // We don't want to render all of the rows for this example, so cap
  // it for this use case
  const firstPageRows = rows.slice(0, 10)

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                  {/* Render the columns filter UI */}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
          <tr>
            <th
              colSpan={visibleColumns.length}
              style={{
                textAlign: 'left',
              }}
            >
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <br />
      <div>Showing the first 20 results of {rows.length} rows</div>
      <div>
        <pre>
          <code>{JSON.stringify(state.filters, null, 2)}</code>
        </pre>
      </div>
    </>
  )
}

// Define a custom filter filter function!
function filterGreaterThan(rows, id, filterValue) {
  return rows.filter(row => {
    const rowValue = row.values[id]
    return rowValue >= filterValue
  })
}

// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
filterGreaterThan.autoRemove = val => typeof val !== 'number'

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
            // Use our custom `fuzzyText` filter on this column
            filter: 'fuzzyText',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
            Filter: SliderColumnFilter,
            filter: 'equals',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
            Filter: NumberRangeColumnFilter,
            filter: 'between',
          },
          {
            Header: 'Status',
            accessor: 'status',
            Filter: SelectColumnFilter,
            filter: 'includes',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
            Filter: SliderColumnFilter,
            filter: filterGreaterThan,
          },
        ],
      },
    ],
    []
  )

  const data = React.useMemo(() =>  th, [])

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  )
}

export default App

import React from 'react';
import {AgGridReact} from 'ag-grid-react';

import  'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-blue.css';

const Table = ({data}) => {
    const rowData = data;
    const columnDefs = [];
      
    if(rowData.length){
        const obj = rowData[0];
        const values = Object.keys(obj);
        values.map(v=> columnDefs.push({field: v,filter: 'agNumberColumnFilter'}));
    }
    return (
        <div className='ag-theme-blue' style={{height:800}}>
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
            />
        </div>
    )

}

export default Table;
import React, { useState,useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import Papa from 'papaparse'
import { ModuleRegistry } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';
// import React, { useState, useEffect } from 'react';
// import { AgGridReact } from 'ag-grid-react';
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-quartz.css";
// import Papa from 'papaparse';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

// Create new GridExample component

export default function About() {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    Papa.parse('/layout.csv', {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: function (results) {
        setRowData(results.data);
      }
    });
  }, []);
  const pagination = true;
  const colDefs = [
    { field: "location", filter: true },
    { field: "x", filter: "agNumberColumnFilter" },
    { field: "y", filter: "agNumberColumnFilter" },
    { field: "z", filter: "agNumberColumnFilter" }
  ];

  const defaultColDef = {
    flex: 1,
  };

  return (
    <div className={"ag-theme-quartz-dark"} style={{ width: '100%', height: '100%' }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} defaultColDef={defaultColDef} pagination={pagination} />
    </div>
  );
}

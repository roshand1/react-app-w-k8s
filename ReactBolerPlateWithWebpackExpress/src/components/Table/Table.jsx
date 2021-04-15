import React, { useState } from 'react';
import classNames from "classnames";
import './table.css';
import './Table-Dynamic.jsx'

function Table(props) {
    const {headers = [], data = []} = props;
    const [initialData, setColumnData] = useState(data);
    const columnHeader = [];
    const nestedColumnHeader = [];

    const displayHeader = (headersToDisplay, isNestedTable) => {
        var fillColumnHeader = false;
        var fillNestedColumnHeader = false;
        if (!columnHeader || !(columnHeader.length > 0)) fillColumnHeader = true;
        if (!nestedColumnHeader || !(nestedColumnHeader.length > 0)) fillNestedColumnHeader = true;
        return headersToDisplay.map((header,i) => 
            {
                if(isNestedTable && fillNestedColumnHeader){
                    nestedColumnHeader.push(Object.keys(header)[0]);
                }else{ 
                    debugger;
                    if (fillColumnHeader) columnHeader.push(Object.keys(header)[0]);
                }
                return <div className="text">{header[Object.keys(header)[0]]}</div>
            })};

    const toggleNestedTable = (row,index) =>{
        const newList = initialData.map((item,i) => {
            if (i === index) {
              const updatedItem = {
                ...item,
                showNestedTable : !item.showNestedTable
              };
       
              return updatedItem;
            }
       
            return item;
          });
          setColumnData(newList);
    }

    const createDataRow = (columnHeader, row,index, hasNestedTable) => columnHeader.map(h => {
        if(hasNestedTable) return <button onClick={() => toggleNestedTable(row, index)} className="toggle-down-button text">{row[h]}</button>
        return <div className="text">{row[h]}</div>
    })

    const displayData = (dataToDisplay, isNestedTable) => dataToDisplay.map((d,i) => {
        return (<div className="wrapper text-2 table-row data-row">
            {isNestedTable ? createDataRow(nestedColumnHeader,d,i,false): createDataRow(columnHeader,d,i,d.hasNestedTable)}
                {d.hasNestedTable && d.showNestedTable && renderTable(d.nestedData.headers, d.nestedData.data,true)}
            </div>)
        }
    );

    
    const renderTable = (headersToDisplay, dataToDisplay,isNestedTable) => {
        debugger;
        const classes = classNames({
            'container-fluid': true,
            'inside-table':isNestedTable
          });

        const headerClasses = classNames({
            'table-row wrapper': true,
            'inside-table-header':isNestedTable,
            'header':!isNestedTable
          });
           
        return(
            <div className={classes}>
                <div className={headerClasses}>
                    <div className="wrapper text-4">
                        <div className="wrapper text-2">
                            {displayHeader(headersToDisplay,isNestedTable)}
                        </div>
                    </div>
                </div>
                <div className="wrapper text-4">
                        {displayData(dataToDisplay,isNestedTable)}
                </div>
            </div>
    )}

    return (
        <div>{renderTable(headers, initialData, false)}</div>
    );
  }
  export default Table;
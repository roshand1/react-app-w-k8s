import './table.css';

function Table(props) {
    const {headers, data} = props;
    var columnHeader = [];
    
    const displayHeader = () => headers.map((header,i) => 
    {
        columnHeader.push(Object.keys(header)[0]);
        return <div className="text">{header[Object.keys(header)[0]]}</div>
    });

    const displayData = () => data.map((d,i) => {
        return (<div className="wrapper text-2 table-row wrapper">
            {columnHeader.map(h => {
                    return <div className="text">{d[h]}</div>
                })}
            </div>)
        }
    );
    
    return (
        <div className="container-fluid">
          <div className="table-row wrapper header">
            <div className="wrapper text-4">
              <div className="wrapper text-2">
                {displayHeader()}
              </div>
            </div>
            </div>
            <div className="wrapper text-4">
                {displayData()}
            </div>
        </div>
    );
  }
  export default Table;
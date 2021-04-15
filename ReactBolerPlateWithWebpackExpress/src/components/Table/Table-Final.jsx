import './table.css';

function Table() {
    return (
        <div className="container-fluid">
          <div className="table-row wrapper header">
            <div className="wrapper text-4">
              <div className="wrapper text-2">
                <div className="text">First Name</div>
                <div className="text">Last Name</div>
              </div>
              <div className="wrapper text-2">
                <div className="text">Email</div>
                <div className="text">Birthday</div>
              </div>
            </div>
            </div>

          <div className="table-row wrapper">
            <div className="wrapper text-4">
              <div className="wrapper text-2">
                <div className="text">Vasan</div>
                <div className="text">Subramanian</div>
              </div>
              <div className="wrapper text-2">
                <div className="text" title="vasan@example.com">vasan@example.com</div>
                <div className="text">January 14, 1996</div>
              </div>
            
              <div className="container-fluid inside-table">
          <div className="table-row wrapper inside-table-header">
            <div className="wrapper text-4">
              <div className="wrapper text-2">
                <div className="text">First Name</div>
                <div className="text">Last Name</div>
              </div>
              <div className="wrapper text-2">
                <div className="text">Email</div>
                <div className="text">Birthday</div>
              </div>
            </div>
            </div>

          <div className="table-row wrapper">
            <div className="wrapper text-4">
              <div className="wrapper text-2">
                <div className="text">Vasan</div>
                <div className="text">Subramanian</div>
              </div>
              <div className="wrapper text-2">
                <div className="text" title="vasan@example.com">vasan@example.com</div>
                <div className="text">January 14, 1996</div>
              </div>
            </div>
          </div>

          <div className="table-row wrapper">
            <div className="wrapper text-4">
              <div className="wrapper text-2">
                <div className="text">Firstname</div>
                <div className="text">Lastname</div>
              </div>
              <div className="wrapper text-2">
                <div className="text" title="ns@example.org">ns@example.org</div>
                <div className="text">February 31, 1948</div>
              </div>
            </div>
          </div>
          
          <div className="table-row wrapper">
            <div className="wrapper text-4">
              <div className="wrapper text-2">
                <div className="text">Example</div>
                <div className="text">McDude</div>
              </div>
              <div className="wrapper text-2">
                <div className="text" title="N/A">--</div>
                <div className="text">December 31, 1960</div>
              </div>
            </div>
          </div>
    </div>
            
            
            </div>
          </div>

          <div className="table-row wrapper">
            <div className="wrapper text-4">
              <div className="wrapper text-2">
                <div className="text">Firstname</div>
                <div className="text">Lastname</div>
              </div>
              <div className="wrapper text-2">
                <div className="text" title="ns@example.org">ns@example.org</div>
                <div className="text">February 31, 1948</div>
              </div>
            </div>
          </div>
          
          <div className="table-row wrapper">
          <div className="wrapper text-4">
            <div className="wrapper text-2">
              <div className="text">Example</div>
              <div className="text">McDude</div>
            </div>
            <div className="wrapper text-2">
              <div className="text" title="N/A">--</div>
              <div className="text">December 31, 1960</div>
            </div>
          </div>
        </div>
        </div>
    );
  }
  export default Table;
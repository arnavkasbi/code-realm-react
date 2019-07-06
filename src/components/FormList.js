import React from 'react';

class FormList extends React.Component {  
  constructor(props) {
    super(props);
  }



  render() {
      let list = [];
    if(this.props.listData.length > 0 ){
        list.push(
            <div className="li-section">
                     <label>Name</label>
                     <label>Email</label>
                     <label>Message</label>
                      </div>
                        )  ; 
        this.props.listData.map(val => {
            list.push(
                <div className="li-section">
                    <span>{val.name}</span>
                    <span>{val.email}</span>
                    <span>{val.msg}</span>
                </div>
            )  ; 
        });
    } else {
        list.push(
        <div className="li-section">
          No data available
          </div>
        );
    }

    return (
      <div className="List">
        {list}
      </div>
    );
  }
}

export default FormList;

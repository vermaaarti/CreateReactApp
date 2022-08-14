import React from 'react';

export default function User(props) {
    let name = props.Fname + " " + props.Lname;
  return (
    <div className="my-2">
    <div className="card  mb-2" style={{ width: "15rem"}}><div style={{boxShadow: "3px 3px white"}} >
        <img src={props.avatar} className="card-img-top" alt="avatar" />
        <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{props.email}</p>
        </div>
    </div></div>
</div>
  )
}

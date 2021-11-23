import React from 'react';
import './Details.css';

const Details = ({ d }) => {
    return (
        <div className="container">

            <div className="detail">
                <div>
                    <p>{`Id : ${d.id}`}</p>
                    <p>{`Name : ${d.name}`}</p>
                    <p>{`EmailId : ${d.emailId}`}</p>
                </div>
                <div>
                    <p>{`Gender : ${d.gender}`}</p>
                    <p>{`Location : ${d.location}`}</p>
                    <div className="department">{`Department : ${d.department}`}</div>
                </div>
            </div>

            <p>{`About Me : ${d.aboutMe}`}</p>
            {/* <select>
                <option value="0">LOcation:</option>
                <option value="1">Audi</option>
                <option value="2">BMW</option>
                <option value="3">Citroen</option>
                <option value="4">Ford</option>
            </select> */}
        </div>
    );
};

export default Details;
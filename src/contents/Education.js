import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="BCA" where="UPTECH Computer Consultancy" from="2010" to="2013"/>
            <Widecard title="SSLC | HSC" where="SVM INTER College" from="2007" to="2009"/>
            </div>
            )
        }
    }
    
export default Education
    
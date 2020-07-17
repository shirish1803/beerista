import React, { Component } from 'react';
import Cardd from './cardComponents';
import { Card, CardImg, CardText, CardBody, CardTitle, Row } from "reactstrap";


class CardDetail extends Component {
    render() {
        return (
            <div className="background">
                <div className="container ">
                    <Cardd />
                </div>
            </div>

        )
    }
}
export default CardDetail;
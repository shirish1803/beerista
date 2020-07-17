import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Col, Button } from "reactstrap";
import '../App.css';

class Cardd extends Component {
    constructor() {
        super();
        this.state = {
            users: null
        }
    }
    componentDidMount() {
        fetch('https://api.airtable.com/v0/appvm9YvXhQ6cXt6W/Popular%20Beer%20Styles?api_key=keyrvMFzhia9d69qo').then((resp) => {
            resp.json().then((result) => {
                // console.warn(result)
                this.setState({ users: result.records });
                console.log(this.state.users)

            })
        })
    }
    render() {
        return (
            <div className="row">
                
                 {
                    this.state.users ?
                        this.state.users.map((item, i) =>
                                <div className="col-12 col-md-4">
                                         <div className="cardgrid">
                                <Card body id="card" inverse style={{ backgroundColor: 'black' }}>
                                    <CardImg id='img' className="offset-3 offset-md-3" src={item.fields.Attachments[0].url} />
                                    <CardBody className="cardBody">
                                        <CardTitle className="d-flex justify-content-center">{item.fields.Name}</CardTitle>
                                        <CardText className="cardtext" style={{fontSize:'14px'}}>{item.fields.Description}</CardText>
                                    </CardBody>
                                    <Button className="cardButton divbutton">Get the Details  </Button>
                                    
                                </Card>
                                </div>
                                </div>
                               
                                
                            
                        )
                        :
                        null
                }
                
            </div>
        )
    }
}

export default Cardd;
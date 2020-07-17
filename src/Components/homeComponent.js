import React, { Component } from 'react';
import { jumbotron, Button } from 'reactstrap';
import Header from './headerComponent';
import '../App.css';

class Home extends Component {
    render() {
        return (
            <div >
                <div className="jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h1 className="header">Quaratine with us</h1>
                                <h3>Quarantine is hard. Quarantine is boring.</h3>
                                <p>We hear you.<br></br><br></br>That’s why we’ve curated some uber cool services, tools and a bunch of unbelievable online activities for you and your family.<br></br><br></br>And as if that’s not enough, these are hand-picked for crazy discounts! So, go on. Dig in, find something you love and stay sane. You can thank us later</p>
                                <Button className="homebutton">Contribute</Button>
                            </div>
                            <div className="col-12 col-sm-6">
                                <img id="headerimg" src={require('../Img/headerimg.jpg')} alt='header image' />
                            </div>
                        </div>
                    </div>


                </div>
                
            </div>

        )
    }
}
export default Home;
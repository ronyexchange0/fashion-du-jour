import React from 'react';

import Button from "../../components/button/button.component";
import Input from '../../components/input/input.component';
import ImageGrid from '../../components/image-grid/image-grid.component';

import "./contact-us.style.scss";

const ContactUs = () => {
    return (
        <main className="contact-us-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-between align-items-center">
                        <h1>Contact Us</h1>
                        <form>
                            <div className="row inputs">
                                <div className="col-md-6">
                                    <Input type="text" placeholder="First Name"/>
                                </div>
                                <div className="col-md-6">
                                    <Input type="text" placeholder="Last Name"/>
                                </div>
                                <div className="col-md-12">
                                    <Input type="email" placeholder="Email"/>
                                </div>
                                <div className="col-md-12">
                                    <textarea placeholder="Message"></textarea>
                                </div>
                            </div>
                            <div className="btn-wrapper text-center">
                                <Button text="submit"/>
                            </div>
                        </form>
                    </div>

                    <div className="col-md-6 grid-image-wrapper">
                        <ImageGrid />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ContactUs

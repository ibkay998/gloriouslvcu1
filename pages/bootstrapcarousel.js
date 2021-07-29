import React, { Component } from 'react'  

import Carousel from 'react-bootstrap/Carousel'  

export class BootstrapCarousel extends Component {  

        render() {  
        return (  
            <div>  
                <div class='container-fluid' >  
                    <div className="row title" style={{ marginBottom: "20px" }} >  
                        <div class="col-sm-10 btn btn-warning">  
                            How To Use Bootstrap Carousel In ReactJS  
                        </div>  
                    </div>  
                </div>  
                    <div className='container-fluid' >  
                        <Carousel>  
                            <Carousel.Item style={{height:'700px'}} >  
                                <img style={{height:'700px'}}  
                                className=" w-100%"  
                                src={'assests/img1.png'}  />  
                                <Carousel.Caption>      
                                    <h3>First Demo </h3>  
                                </Carousel.Caption>  
                            </Carousel.Item  >  
                            <Carousel.Item style={{height:'700px'}}>  
                                <img style={{height:'700px'}}  
                                className=" w-100%"  
                                src={'assests/img2.png'}    />  
                                <Carousel.Caption>  
                                    <h3>Second Demo</h3>  
                                </Carousel.Caption>  
                            </Carousel.Item>  
                            <Carousel.Item style={{height:'700px'}}>  
                                <img style={{height:'700px'}}  
                                    className=" w-100%"  
                                    src={'assests/img3.png'}   />  
                                <Carousel.Caption>  
                                    <h3>Third Demo</h3>  
                                </Carousel.Caption>  
                            </Carousel.Item>  
                        </Carousel>  
                        </div>  
                </div>  
                )  
        }  

}  
export default BootstrapCarousel  
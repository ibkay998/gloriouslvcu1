import { color } from '@chakra-ui/react'
import React, { Component } from 'react'  
import styles from '../styles/bootstrapcarousel.module.css'

import Carousel from 'react-bootstrap/Carousel'  

export class BootstrapCarousel extends Component {  

        render() {  
        return (  
            <div>  
               
                    <div className='container-fluid' >  
                        <Carousel>  
                            <Carousel.Item style={{height:'700px'}} >  
                                <img style={{height:'400px'}}  
                                className=" w-100%"  
                                src={'assests/img1.png'}  />  
                                <Carousel.Caption>      
                                    <h3>We teach the truth of Christ</h3> 
                                </Carousel.Caption>  
                            </Carousel.Item  >  
                            <Carousel.Item style={{height:'700px'}}>  
                                <img style={{height:'400px'}}  
                                className=" w-100%"  
                                src={'assests/img2.png'}    />  
                                <Carousel.Caption>  
                                    <h3>We train a people For Christ</h3>  
                                </Carousel.Caption>  
                            </Carousel.Item>  
                            <Carousel.Item style={{height:'700px'}}>  
                                <img style={{height:'400px'}}  
                                    className=" w-100%"  
                                    src={'assests/img3.png'}   />  
                                <Carousel.Caption>  
                                    <h3>We are a people for Christ</h3>  
                                </Carousel.Caption>  
                            </Carousel.Item> 
                            <Carousel.Item style={{height:'700px'}}>  
                                <img style={{height:'400px'}}  
                                    className=" w-100%"  
                                    src={'assests/Untitled-1@2x.png'}   />  
                                <Carousel.Caption>  
                                    <h3>We raise a people for Christ</h3>  
                                </Carousel.Caption>  
                            </Carousel.Item> 
                        </Carousel>  
                        </div>  
                </div>  
                )  
        }  

}  
export default BootstrapCarousel  
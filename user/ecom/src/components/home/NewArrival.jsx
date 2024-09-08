import React, { Component, Fragment } from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export class NewArrival extends Component {
  render() {
    var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay:true,
    autoplaySpeed:3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return (
      <Fragment>
         <Container className='text-center' fluid={true}>
          <div>
            <div className='section-title text-center mb-55'><h2>NEW ARRIVAL</h2>
            <p>fashion empowers us, you is the power</p></div>
          </div>

          <Row>
          <Slider {...settings}>
        <div>
        <Card className="image-box card"> 
          <img className="center" src="https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/v/z/1/-original-imahfbgnuqkuxbgh.jpeg?q=70"/>
        <Card.Body>
          <p className='product-name-on-card'>Haier Washing Machine</p>
          <p className='product-price-on-card'>Price: RM7,900</p>

        </Card.Body>
        </Card>
        </div>
        <div>
        <Card className="image-box card"> 
          <img className="center" src="https://rukminim2.flixcart.com/image/612/612/xif0q/suitcase/r/f/c/-original-imagypsrkjhy6kbt.jpeg?q=70"/>
        <Card.Body>
          <p className='product-name-on-card'>Luggage</p>
          <p className='product-price-on-card'>Price: RM900</p>

        </Card.Body>
        </Card>
        </div>
        <div>
        <Card className="image-box card"> 
          <img className="center" src="https://rukminim2.flixcart.com/image/312/312/xif0q/instant-camera/y/l/3/mini-12-instax-16791340-fujifilm-original-imagzkbhzrx7ssyd.jpeg?q=70"/>
        <Card.Body>
          <p className='product-name-on-card'>rolexwatch</p>
          <p className='product-price-on-card'>Price: RM23,000</p>

        </Card.Body>
        </Card>
        </div>
        <div>
        <Card className="image-box card"> 
          <img className="center" src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/q/g/8/-original-imah2fvbehd7tfgf.jpeg?q=70"/>
        <Card.Body>
          <p className='product-name-on-card'>rolexwatch</p>
          <p className='product-price-on-card'>Price: RM23,000</p>

        </Card.Body>
        </Card>
        </div>
        <div>
        <Card className="image-box card"> 
          <img className="center" src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/q/g/8/-original-imah2fvbehd7tfgf.jpeg?q=70"/>
        <Card.Body>
          <p className='product-name-on-card'>rolexwatch</p>
          <p className='product-price-on-card'>Price: RM23,000</p>

        </Card.Body>
        </Card>
        </div>
        <div>
        <Card className="image-box card"> 
          <img className="center" src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/q/g/8/-original-imah2fvbehd7tfgf.jpeg?q=70"/>
        <Card.Body>
          <p className='product-name-on-card'>rolexwatch</p>
          <p className='product-price-on-card'>Price: RM23,000</p>

        </Card.Body>
        </Card>
        </div>
        <div>
        <Card className="image-box card"> 
          <img className="center" src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/q/g/8/-original-imah2fvbehd7tfgf.jpeg?q=70"/>
        <Card.Body>
          <p className='product-name-on-card'>rolexwatch</p>
          <p className='product-price-on-card'>Price: RM23,000</p>

        </Card.Body>
        </Card>
        </div>
        <div>
        <Card className="image-box card"> 
          <img className="center" src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/q/g/8/-original-imah2fvbehd7tfgf.jpeg?q=70"/>
        <Card.Body>
          <p className='product-name-on-card'>rolexwatch</p>
          <p className='product-price-on-card'>Price: RM23,000</p>

        </Card.Body>
        </Card>
        </div>
      </Slider>

          </Row>

         </Container>
      </Fragment>
    )
  }
}

export default NewArrival

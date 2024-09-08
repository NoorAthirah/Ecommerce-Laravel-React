import React, { Component, Fragment } from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap'


export class FeaturedProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center' fluid={true}>
          <div>
            <div className='section-title text-center mb-55'><h2>FEATURED PRODUCTS</h2>
            <p>fashion empowers us, you is the power</p></div>
          </div>
      <Row>
        <Col className="p-1" key={1} xl={2} lg={2}  md={2} sm={4} xs={6}>
        <Card className="image-box card"> 
          <img className="center" src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/q/g/8/-original-imah2fvbehd7tfgf.jpeg?q=70"/>
        <Card.Body>
          <p className='product-name-on-card'>rolexwatch</p>
          <p className='product-price-on-card'>Price: RM23,000</p>

        </Card.Body>
        </Card>
        </Col>

        <Col className="p-1" key={1} xl={2} lg={2}  md={2} sm={4} xs={6}>
        <Card className="image-box card"> 
          <img className="center" src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/p/p/j/-original-imagq9hbbbfeh2ty.jpeg?q=70"/>
        <Card.Body>
          <p className='product-name-on-card'>rolexwatch</p>
          <p className='product-price-on-card'>Price: RM23,000</p>

        </Card.Body>
        </Card>
        </Col>

        <Col className="p-1" key={1} xl={2} lg={2}  md={2} sm={4} xs={6}>
        <Card className="image-box card"> 
          <img className="center" src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/2/8/a/-original-imah2fvbeyhyczva.jpeg?q=70"/>
        <Card.Body>
          <p className='product-name-on-card'>rolexwatch</p>
          <p className='product-price-on-card'>Price: RM20,000</p>

        </Card.Body>
        </Card>
        </Col>

        <Col className="p-1" key={1} xl={2} lg={2}  md={2} sm={4} xs={6}>
        <Card className="image-box card"> 
          <img className="center" src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/w/g/5/-original-imahycqrb5ykevjc.jpeg?q=70"/>
        <Card.Body>
          <p className='product-name-on-card'>rolexwatch</p>
          <p className='product-price-on-card'>Price: RM13,000</p>

        </Card.Body>
        </Card>
        </Col>

        <Col className="p-1" key={1} xl={2} lg={2}  md={2} sm={4} xs={6}>
        <Card className="image-box card"> 
          <img className="center" src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/e/t/5/-original-imagrv6gzeaqhb7b.jpeg?q=70"/>
        <Card.Body>
          <p className='product-name-on-card'>rolexwatch</p>
          <p className='product-price-on-card'>Price: RM19,000</p>

        </Card.Body>
        </Card>
        </Col>
        <Col className="p-1" key={1} xl={2} lg={2}  md={2} sm={4} xs={6}>
        <Card className="image-box card"> 
          <img className="center" src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/i/n/y/-original-imagxp8vf9yphjtg.jpeg?q=70"/>
        <Card.Body>
          <p className='product-name-on-card'>rolexwatch</p>
          <p className='product-price-on-card'>Price: RM21,000</p>

        </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>

      </Fragment>
    )
  }
}

export default FeaturedProducts

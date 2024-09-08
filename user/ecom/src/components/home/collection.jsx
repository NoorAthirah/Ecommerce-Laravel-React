import React, { Component, Fragment } from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap'

export class collection extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center' fluid={true}>
        <div>
            <div className='section-title text-center mb-55'><h2>COLLECTIONS</h2>
            <p>fashion empowers us, you is the power</p></div>
          </div>
            <Row>
                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="image-box card"> 
          <img className="center w-75" src="https://rukminim2.flixcart.com/image/612/612/l3t2fm80/shirt/l/0/4/xxl-r-petal-pink-stoneberg-original-imageum8qmynhwnz.jpeg?q=70"/>
        <Card.Body>
          <p className='product-name-on-card'>rolexwatch</p>
          <p className='product-price-on-card'>Price: RM23,000</p>

        </Card.Body>
        </Card>
                </Col>

                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="image-box card"> 
          <img className="center w-75" src="https://rukminim2.flixcart.com/image/612/612/l3t2fm80/shirt/l/0/4/xxl-r-petal-pink-stoneberg-original-imageum8qmynhwnz.jpeg?q=70"/>
        <Card.Body>
          <p className='product-name-on-card'>rolexwatch</p>
          <p className='product-price-on-card'>Price: RM23,000</p>

        </Card.Body>
        </Card>
                </Col>

                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="image-box card"> 
          <img className="center w-75" src="https://rukminim2.flixcart.com/image/612/612/l3t2fm80/shirt/l/0/4/xxl-r-petal-pink-stoneberg-original-imageum8qmynhwnz.jpeg?q=70"/>
        <Card.Body>
          <p className='product-name-on-card'>rolexwatch</p>
          <p className='product-price-on-card'>Price: RM23,000</p>

        </Card.Body>
        </Card>
                </Col>

                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="image-box card"> 
          <img className="center w-75" src="https://rukminim2.flixcart.com/image/612/612/l3t2fm80/shirt/l/0/4/xxl-r-petal-pink-stoneberg-original-imageum8qmynhwnz.jpeg?q=70"/>
        <Card.Body>
          <p className='product-name-on-card'>rolexwatch</p>
          <p className='product-price-on-card'>Price: RM23,000</p>

        </Card.Body>
        </Card>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default collection

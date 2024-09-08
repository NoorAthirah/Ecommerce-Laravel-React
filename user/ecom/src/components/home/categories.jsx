import React, { Component, Fragment } from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap'

export class categories extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center' fluid={true}>
          <div>
            <div className='section-title text-center mb-55'><h2>CATEGORIES</h2>
            <p>fashion empowers us, you is the power</p></div>
          </div>
            <Row>
                <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12} >
                <Row>

                    <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6} >
                    <Card className="h-100 w-100 text-center"> 
                    <Card.Body>
                    <img className="center" src="https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100"/>
                    <h5 className='category-name'>TOP OFFERS</h5>
                    </Card.Body>
                    </Card>
                    </Col>

                    <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6} >
                    <Card className="h-100 w-100 text-center"> 
                    <Card.Body>
                    <img className="center" src="https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100"/>
                    <h5 className='category-name'>MOBILE</h5>
                    </Card.Body>
                    </Card>
                    </Col>

                    <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6} >
                    <Card className="h-100 w-100 text-center"> 
                    <Card.Body>
                    <img className="center" src="https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100"/>
                    <h5 className='category-name'>ELECTRONICS</h5>
                    </Card.Body>
                    </Card>
                    </Col>

                    <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6} >
                    <Card className="h-100 w-100 text-center"> 
                    <Card.Body>
                    <img className="center" src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100"/>
                    <h5 className='category-name'>APPLIANCES</h5>
                    </Card.Body>
                    </Card>
                    </Col>


                    

  
                </Row>
                </Col>

                <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12} >
                <Row>

                    <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6} >
                    <Card className="h-100 w-100 text-center"> 
                    <Card.Body>
                    <img className="center" src="https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100"/>
                    <h5 className='category-name'>TRAVEL</h5>
                    </Card.Body>
                    </Card>
                    </Col>

                    <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6} >
                    <Card className="h-100 w-100 text-center"> 
                    <Card.Body>
                    <img className="center" src="https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100"/>
                    <h5 className='category-name'>TOYS</h5>
                    </Card.Body>
                    </Card>
                    </Col>

                    <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6} >
                    <Card className="h-100 w-100 text-center"> 
                    <Card.Body>
                    <img className="center" src="https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100"/>
                    <h5 className='category-name'>FASHION</h5>
                    </Card.Body>
                    </Card>
                    </Col>
                    
                    <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6} >
                    <Card className="h-100 w-100 text-center"> 
                    <Card.Body>
                    <img className="center" src="https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100"/>
                    <h5 className='category-name'>WATCH</h5>
                    </Card.Body>
                    </Card>
                    </Col>


                    

  
                </Row>
                </Col>

                
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default categories

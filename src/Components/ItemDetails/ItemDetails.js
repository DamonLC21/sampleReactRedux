import React, { Component } from 'react';
import { Row, Col, Button, Collapse, Card, Media} from 'react-bootstrap';

export default class ItemDetails extends Component {

    constructor(props){
        super(props);
        this.state={
            open: false
        }
    };

  render() {
    return (
      <div>
        <Button 
            className="item-details-button"
            variant="link"
            onClick={() => this.setState({open: !this.state.open})}
            >
            {this.state.open === false ? `See`:`Hide`} item details
            {this.state.open === false ? ` +`:` -`}
        </Button>
        <Collapse in={this.state.open}>
            <div>
                <Card className="detail-body">
                    <Media>
                        <img 
                        width={100} 
                        height={100} 
                        className="align-self-center mr-3"
                        alt="thumbnail" 
                        src="https://i5.walmartimages.com/asr/5da7cd4c-3585-4f37-8bf4-02323ddaf124_1.430e428b3cd47988efbce2b83555ce2a.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" />
                        <Media.Body>
                            <h5>Your Items</h5>
                            <p>Straight Talk Apple iPhone XS MAX w/64GB, Gray</p>
                            <Row className="show-grid">
                                <Col md={6}>
                                    <strong>{`$${this.props.price}`}</strong>
                                    <br />
                                    <strong className="price-strike">{`$${this.props.price}`}</strong>
                                </Col>
                                <Col md={6}> Qty: 1 </Col>
                            </Row>
                        </Media.Body>
                    </Media>
                </Card>
            </div>
        </Collapse>
      </div>
    )
  }
}

import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Subtotal from './Components/Subtotal';
import Pickup from './Components/Pickup';
import TaxesFees from './Components/TaxesFees';
import EstimatedTotal from './Components/EstimatedTotal';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import PromoCode from './Components/PromoCode/PromoCode';
import './App.css';
import { connect } from 'react-redux'
import { handleChange } from './actions/promoCodeActions'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      total: 1099.99,
      pickupSavings: -5.67,
      taxes: 0,
      estimate: 0,
      disablePromoButton: false
    }
  }

  componentDidMount = () => {
    this.setState({
      taxes: (this.state.total + this.state.pickupSavings) * 0.0831
    },
    function(){
      this.setState({
        estimate: this.state.total + this.state.pickupSavings + this.state.taxes
      })
    })
  }

  giveDiscountHandler = () => {
    if(this.props.promoCode === 'DISCOUNT'){
      this.setState({
        estimate: this.state.estimate * 0.9
      },
      function(){
        this.setState({
          disablePromoButton: true
        })
      })
      }
      else{
        alert("Invalid Promo Code.  Please Try Again")
      }
  }

  render() {
    return (
      <div className="container">
        <Container className="purchase-card">
          <Subtotal price={this.state.total.toFixed(2)} />
          <Pickup price={this.state.pickupSavings} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal price={this.state.estimate.toFixed(2)} />
          <ItemDetails price={this.state.estimate.toFixed(2)}/>
          <hr />
          <PromoCode 
            giveDiscount={() => this.giveDiscountHandler()} 
            isDisabled={this.state.disablePromoButton}
          />
        </Container>
       
      </div>
 
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
})

export default connect (mapStateToProps, { handleChange })(App);

import React, { Component } from 'react'
import Modal from 'react-responsive-modal';
import { Column, Row } from 'simple-flexbox';
import Thumb from '../../../Thumb';

export class productWithSubMenu extends Component {
  constructor(props) {
    super(props)  
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.state = {
      open: false,
      subMenus: []
    }
  }

  componentDidMount() {
    let subMenus = this.props.product.subMenus.map(submenu => {
      let menu = this.props.menus.find(menu => menu.key === submenu);
      submenu = menu;
      return submenu;
    });
    console.log(subMenus)
    this.setState({ subMenus })
  }
  
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  buyMenu = () => {
    alert('Sipariş Verildi.')
  };

  render() {
    let { open } = this.state;
    return (
      <div
        className="shelf-item"
        key={this.props.product.name}>
        <Thumb
          onClick={this.onOpenModal}
          classes="shelf-item__thumb"
          src={require(`../../../../images/${this.props.product.image}`)}
          alt={this.props.product.name}/>
        <p className="shelf-item__title">{this.props.product.name}</p>
        <div onClick={this.onOpenModal} className="shelf-item__buy-btn"> { this.props.product.price }₺ </div>
        <Modal center styles={{ modal: { minWidth: '90%' } }} open={open} onClose={this.onCloseModal}>
          <h2> {this.props.product.name} </h2>
          <Row vertical='center'>
            { this.state.subMenus.map(p => {
              console.log(p)
              return (
                <Column flexGrow={1} style={{ minWidth: 200 }} horizontal='center'>
                  <h3> { p.description } </h3>
                  <select onChange={e => console.log(e.target.value)}>
                    { p.items.map(item => {
                      return <option value={item.name}>{item.name}</option>
                    }) }
                  </select>
                </Column>
              )
            }) }
          </Row>
          <Row style={{ justifyContent: 'center' }}>
            <button onClick={this.buyMenu} style={{ backgroundColor: '#1b1a20', color: '#fff', borderRadius: 20, height: 50, marginTop: 40, padding: 10 }}>
              SATIN AL {this.props.product.price} ₺
             </button>
          </Row>
        </Modal>
      </div>
    )
  }
}

export default productWithSubMenu;

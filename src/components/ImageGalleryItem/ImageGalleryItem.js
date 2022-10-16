import { Component } from 'react';

export default class ImageGlleryItem extends Component {
    state = { showModal: false };
  
    toggleModal = () => {
      this.setState(({ showModal }) => ({
        showModal: !showModal,
      }));
    };
  
    render() {
      const { item } = this.props;
      return (
        <>
          <li id={item.id}>
            <img
              src={item.webformatURL}
              alt={item.tags}
              onClick={this.toggleModal}
            />
            
          </li>
        </>
      );
    }
  }
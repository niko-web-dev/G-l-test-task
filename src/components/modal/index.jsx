import React from 'react'
import './modal.scss'

class Modal extends React.Component {

    state = {
        isActiveModal: false,
    }

    toggleActiveModal = () => {
      this.setState({
        isActiveModal: !this.state.isActiveModal
      })
    }

  render() {
      let { btnText, children } = this.props;
            
      return (
        <>
          <button
                className="modal-btn"
                onClick={() => this.toggleActiveModal()}>
                 {btnText}
          </button>

          <div
                className={this.state.isActiveModal ? 'modal active' : 'modal'}
                onClick={() => this.toggleActiveModal()}>

            <div
                className={this.state.isActiveModal ? 'modal-content active' : 'modal-content'}
                onClick={(e) => e.stopPropagation()}>
                { children }

                <button
                    className="modal-close"
                    onClick={() => this.toggleActiveModal()}>
                    X
                </button>

            </div>


            
          </div>
        </>
      )
    }
}

export default Modal
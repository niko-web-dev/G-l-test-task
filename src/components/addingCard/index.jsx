import React from 'react'
import Modal from '../modal'

export class AddingCard extends React.Component {

  render() {
      // console.log(this.props)
    const { state,
            formHandler,
            handlerInputTitle,
            handlerInputDescription,
            handlerInputPrice } = this.props;

    return (
      <Modal btnText='Добавть карту товара'>

        <form className="form"
              onSubmit={formHandler}>
          <input className="form-btn"
                type="text"
                name="title"
                placeholder="Введите название"
                value={state.inputTitle}
                onChange={e => handlerInputTitle(e)}
          />
          <input className="form-btn"
                type="text"
                name="description"
                placeholder="Введите описание"
                value={state.inputDescription}
                onChange={e => handlerInputDescription(e)}
          />
          <input className="form-btn"
                type="text"
                name="price"
                placeholder="Введите цену"
                value={state.inputPrice}
                onChange={e => handlerInputPrice(e)}
          />

          <button className="form-btn form-btn-submit">
                Добавить
          </button>
        </form>
      
      </Modal>
    )
  }
}

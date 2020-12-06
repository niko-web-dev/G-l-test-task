import React from 'react';

import Modal from "../modal";

class Auth extends React.Component {


  render() {
    const { authUser,
           handlerInputLogin,
           handlerInputPassword } = this.props

    return (
        <Modal
            btnText="Авторизируйтесь для добавления товара">

            <form className="form"
                  onSubmit={authUser}>

                <p>Ваш логин: "user"</p>
                <input className="form-btn"
                       type="text"
                       placeholder="Введите login"
                       onChange={e => handlerInputLogin(e)}
                />
                <p>Ваш пароль: "123"</p>
                <input className="form-btn"
                       type="password"
                       placeholder="Введите пароль"
                       onChange={e => handlerInputPassword(e)}
                />

                <button className="form-btn form-btn-submit">
                    Войти
                </button>
            </form>

        </Modal>

    );
  };

};
export default Auth;

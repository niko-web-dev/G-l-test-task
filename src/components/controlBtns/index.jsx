import React from 'react';
import {withStore} from "../../state/withStore";
import * as axios from "axios";


import { ADD_PRODUCT } from "../../state/stores/ProductsStore";
import { AUTH_USER } from "../../state/stores/AuthStore";
import AddingCard from "../addingCard";
import Auth from "../auth";

const PATH_DB = "/db.json"



class ControlBtns extends React.Component {

    state = {
        inputName: '',
        inputPassword: '',
        inputTitle: '',
        inputDescription: '',
        inputPrice: ''
    }


    addProduct = (newProduct) => {
        this.props.dispatch(
            ADD_PRODUCT,
            newProduct
        )
    };

    formHandler = (e) => {
        e.preventDefault()

        if ( this.state.inputTitle && this.state.inputDescription && this.state.inputPrice) {
            const newProduct = {
                id: Date.now(),
                title: this.state.inputTitle,
                description: this.state.inputDescription,
                price: `${this.state.inputPrice} ₽`
            }

            this.addProduct(newProduct)

            this.setState({
                inputTitle: '',
                inputDescription: '',
                inputPrice: ''
            })
        } else {
            console.log('no')
        }



    };

    getUsersDb = async () => {
        return axios.get(PATH_DB)
    }

    authUser = async e => {
        e.preventDefault()
        const formDataName = this.state.inputName
        const formDataPass = this.state.inputPassword

            this.getUsersDb()
                .then(res => {
                    const userData = res.data
                    if(formDataName === userData[0].login
                        && formDataPass === userData[0].password) {
                        this.props.dispatch( AUTH_USER,
                            {
                                isAuth: true
                            }
                        )
                    }
                })




    }

    handlerInputLogin = e => {
        this.setState({inputName: e.target.value})
    }

    handlerInputPassword = e => {
        this.setState({inputPassword: e.target.value})
    }

    handlerInputTitle = e => {
        this.setState({inputTitle: e.target.value})
    }

    handlerInputDescription = e => {
        this.setState({inputDescription: e.target.value})
    }

    handlerInputPrice = e => {
        this.setState({inputPrice: e.target.value})
    }

    render() {
        return (
            <div>
                {
                    this.props.isAuth

                        ?
                            <AddingCard
                                state={this.state}
                                addProduct={this.addProduct}
                                formHandler={this.formHandler}
                                handlerInputTitle={this.handlerInputTitle}
                                handlerInputDescription={this.handlerInputDescription}
                                handlerInputPrice={this.handlerInputPrice}
                            />

                        :
                            <Auth
                                isAuth={this.props.isAuth}
                                getUsersDb={this.getUsersDb}
                                authUser={this.authUser}
                                handlerInputLogin={this.handlerInputLogin}
                                handlerInputPassword={this.handlerInputPassword}
                            />

                }

            </div>
        );
    }
}

export default withStore("users", (data) => data)(ControlBtns);

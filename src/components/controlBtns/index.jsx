import React from 'react';

import { AddingCard }from "../addingCard";

import { ADD_PRODUCT } from "../../state/stores/ProductsStore";


export class ControlBtns extends React.Component {

    state = {
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
        const newProduct = {
            id: Date.now(),
            title: this.state.inputTitle,
            description: this.state.inputDescription,
            price: `${this.state.inputPrice} ₽`
        }

        this.addProduct(newProduct)
        this.setState({inputTitle: ''})
        this.setState({inputDescription: ''})
        this.setState({inputPrice: ''})
    };


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
        console.log(this.props)
        return (
            <div>

                <AddingCard
                    state={this.state}
                    addProduct={this.addProduct}
                    formHandler={this.formHandler}
                    handlerInputTitle={this.handlerInputTitle}
                    handlerInputDescription={this.handlerInputDescription}
                    handlerInputPrice={this.handlerInputPrice}
                />

            </div>
        );
    }
}


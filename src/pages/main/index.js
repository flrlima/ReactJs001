import React, { Component } from 'react';
import api from "../../services/api";

import './styles.css';

export default class Main extends Component{

    state = {
        products: [],
    }

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        //console.log(response.data.docs);
        this.setState({ products: response.data.docs });

    };

    render(){

        const {products} = this.state;
        //return <h3>Contagem de produtos: {this.state.products.length}</h3>;
        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <a href="">Acessar</a>
                    </article>
                    //<h3 key={product._id}>{product.title}</h3>
                ))}
                <div className="actions">
                    <button id="botao1">Anterior</button>
                    <button id="botao2">Próximo</button>
                </div>
            </div>
        );
    }
}
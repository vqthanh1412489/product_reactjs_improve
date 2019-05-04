import React from 'react';
import './ProducsPage.scss';

import { connect } from "react-redux";
import { actFetchProductsRequest } from './actions';

import Products from '../../components/Products/index';
import Product from '../../components/Product/index';

class ProducsPage extends React.Component {
    componentDidMount(){
        this.props.onFetchProducts();
    }
    render(){
        var { products } = this.props
        return (
            <div className="col-sm-12">
                <div className="panel panel-success">
                    <div className="panel-heading">List Products</div>
                    <div className="panel-body">
                        <Products>
                            { this.onShowProducts(products) }
                        </Products>
                    </div>
                </div>
            </div>
        );
    }

    onShowProducts = products => {
        var result = null;
        if (products.length > 0){
            result = products.map((product, index) => {
                return (
                    <Product
                        key={index}
                        product={product}
                        index={index}
                        onToggleStatus={this.onToggleStatus}
                        onDeleteProduct={this.onDeleteProduct}
                    />
                );
            });
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchProducts: () => {
            dispatch(actFetchProductsRequest());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProducsPage);

import React from 'react';
import { firestore } from '../firebase';
import Circular from './lifescycle';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: ``,
            size: '',
            amount: 0,
            tmp: '',
            gift: '',
            content: '',
            basket: '',
            menuInfo: {},
        };
    }
    componentDidMount = async () => {
        console.log(this.props.match.params.id);

        let menu = {};

        try {
            await firestore
                .collection('order')
                .doc(this.props.match.params.id)
                .get()
                .then((data) => {
                    menu = {
                        name: data.data().name,
                        price: data.data().price,
                    };

                    this.setState({
                        menuInfo: menu,
                    });
                });
        } catch (e) {
            console.log(e);
        }
    };
    render() {
        const { amount, menuInfo } = this.state;
        return (
            <div className="m_main">
                {length === 0 ? (
                    <div>
                        <Circular />
                    </div>
                ) : (
                    <>
                        <div className="m-content">
                            <div className="m-c_header">
                                <div className="img">
                                    <img href="/" />
                                </div>
                                <div className="c_content">
                                    {length === 0 ? (
                                        <div>
                                            <Circular />
                                        </div>
                                    ) : (
                                        <>
                                            <div className="name">{menuInfo.name}</div>
                                            <div className="price">{menuInfo.price}원</div>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="amount">
                                <div className="puls">
                                    <input type="button" value="+" onClick={this._amount1} />
                                </div>
                                <div className="a_amount">{this.state.amount}개</div>
                                <div className="minus">
                                    <input type="button" value="-" onClick={this._amount2} />
                                </div>
                            </div>
                            <div className="buy">
                                <input type="button" value="주문하기" onClick={this._buy} />
                            </div>
                        </div>
                    </>
                )}
            </div>
        );
    }

    _amount1 = () => {
        const { amount } = this.state;
        this.setState({
            amount: this.state.amount + 1,
        });
    };
    _amount2 = () => {
        const { amount } = this.state;
        this.setState({
            amount: this.state.amount - 1,
        });
    };

    _buy = () => {
        alert('주문하기');
    };
}

export default Menu;

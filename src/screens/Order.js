import React from 'react';
import { firestore } from '../firebase';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Circular from './lifescycle';

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuList: [],
        };
    }
    componentDidMount() {
        const { menuList } = this.state;

        let data = [];
        try {
            firestore
                .collection('order')
                .get()
                .then((res) => {
                    res.forEach((doc) =>
                        data.push({
                            key: doc.id,
                            name: doc.data().name,
                            price: doc.data().price,
                        })
                    );

                    this.setState({
                        menuList: data,
                    });
                });
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        const { menuList } = this.state;
        return (
            <div className="o_content">
                {/* <div className="o_product">
                                    <div className="m_img">사진</div>
                                    <div className="m_name">이름</div>
                                    <div className="m_price">가격</div>
                                </div> */}
                {menuList.length === 0 ? (
                    <div className="circular">
                        <Circular />
                    </div>
                ) : (
                    menuList.map((menu) => {
                        return (
                            <div className="o_menu" key={menu.key}>
                                <input type="hidden" value={menu.key} name="id" />
                                <Link to={`/order/menu/${menu.key}`}>
                                    <div className="m_all">
                                        <div className="m_c_photo">
                                            <img href="/" />
                                        </div>
                                        <div className="m_c_content">
                                            <div className="m_c-name">이름 : {menu.name}</div>
                                            <div className="m_c-price">가격 : {menu.price}원</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })
                )}
            </div>
        );
    }

    _test = () => {
        console.log('order test');
    };
}

export default Order;

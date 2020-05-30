import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Router>
                    <Route>
                        <div className="m_content1">
                            <div className="m_ad">
                                <Link to="/news">뉴스 또는 광고</Link>
                            </div>
                        </div>

                        <div className="m_content2">
                            <div className="top">
                                <div className="t_coupon">
                                    <Link to="/coupon">coupon</Link>
                                </div>
                                <div className="t_news">
                                    <Link to="/news">news</Link>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="b_hold">
                                    <Link to="/hold">hold</Link>
                                </div>
                                <div className="b_order">
                                    <Link to="/order">order</Link>
                                </div>
                            </div>
                        </div>
                    </Route>
                </Router>
            </div>
        );
    }
}

export default Main;

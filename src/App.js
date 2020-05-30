import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Main, Header, Order, Menu, News } from './screens';
import { firestore } from './firebase';

class App extends React.Component {
    componentDidMount() {
        console.log(firestore);
    }
    render() {
        return (
            <div className="App">
                <Router>
                    <div className="header">
                        <Link to="/">CAFE</Link>
                    </div>
                    <div className="content">
                        <Route exact path="/order" component={Order} />
                        <Route exact path="/order/menu/:id" component={Menu} />
                        <Route exact path="/news" component={News} />
                        <Route exact path="/" component={Main}></Route>
                    </div>
                </Router>
                {/* <div className="footer">footer</div> */}
            </div>
        );
    }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import '../style/main.css';
class Xiatian extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value:"22222222"};

    }

    render(){
        return (<div>
            <input ref="txt1" type="text" value="1231haha111"/>
            <span>{this.state.value}</span>
        </div>);
    }
}

ReactDOM.render(
    <Xiatian />,
    document.getElementById('root')
);

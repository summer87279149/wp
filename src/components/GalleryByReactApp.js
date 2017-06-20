import React from 'react';
import ReactDOM from 'react-dom';
import '../style/main.css';

//获取图片相关的资源
var imagesDatas = require('../data/imageData.json');
imagesDatas = (function(arr) {
    for (var i = 0;i < arr.length;i++){
        var signalImageData = arr[i];
        signalImageData.imageURL = require('../img/'+signalImageData.fileName);
        arr[i] = signalImageData;
    }
    return arr;
})(imagesDatas);


class ImgFigure extends React.Component{
    render(){
        return(
            <figure className="img-figure">
                <img src={this.props.data.imageURL} alt={this.props.data.title}/>
                <figcaption>
                    <h2 className="title">{this.props.data.title}</h2>
                </figcaption>
            </figure>
        )
    }
}

class GalleryByReactApp extends React.Component{
    
    constructor() {
        super();
    }
    render(){
        var conUnits = [];
        var imgFigures=[];
        imagesDatas.forEach(function (e) {
            imgFigures.push(<ImgFigure key={e.fileName} data={e}/>);
        });
        return (<section className="stage">
            <section className="img-sec">
                {imgFigures}
            </section>
            <nav className="controller-nav">
            </nav>
        </section>);
    }
}

ReactDOM.render(
    <GalleryByReactApp />,
    document.getElementById('root')
);

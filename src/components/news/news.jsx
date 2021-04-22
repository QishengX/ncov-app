import React, {Component} from 'react';
import axios from "axios";


import '../../css/news/news.css'

export default class News extends Component{
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            flag: null,
            box: null,
            con1: null,
            speed: 20
        };
    }
    ScrollUp = () =>{
        if( this.state.box.scrollTop>=135){
            this.state.box.scrollTop=0;
        }else
            this.state.box.scrollTop++;
        // console.log(this.state.box?.scrollTop)
    };

    Stop = () => {
        clearInterval(this.state.flag);
        this.setState({flag: null});
    };

    Up = () => {
        var flag = setInterval(this.ScrollUp,this.state.speed);
        this.setState({flag: flag});
    };

    componentDidMount() {
        var box = document.getElementById("news-wrap");
        var con1 = document.getElementById("news");
        this.setState({
            box: box,
            con1: con1,
            flag: setInterval(this.ScrollUp, this.state.speed)
        });
        axios.get(`http://localhost:8080/news`)
            .then((response) => {
                var news = response["data"]["news"];
                this.setState({news: news});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const {news} = this.state;
        return (
            <div id="news-wrap">
                <ul id="news" className="news" onMouseOut={this.Up} onMouseOver={this.Stop}>
                    {
                        news.map((item, index) => {
                            return(
                                <li key={index}>
                                    <a href={item["sourceUrl"]} target="_blank">
                                        <span className="title">{item["title"]}</span>
                                        <span className="time">{item["time"]}</span>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
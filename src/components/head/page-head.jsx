import React, {Component} from 'react';

// import '../../css/head/page-head.css'

export default class PageHead extends Component{


    render() {
        return(
            <div className="bnt">
                <div className="topbnt_left fl">
                    <ul>
                        <li className="active"><a href="#">警情警力</a></li>
                        <li><a href="#">实有人口</a></li>
                        <li><a href="#">流动人口</a></li>
                        <li><a href="#">实名制</a></li>
                    </ul>
                </div>
                <h1 className="tith1 fl">实时追踪</h1>
                <div className=" fr topbnt_right">
                    <ul>
                        <li><a href="#">返回</a></li>
                        <li><a href="#">分析报告</a></li>
                        <li><a href="#">交通</a></li>
                        <li><a href="#">舆情</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
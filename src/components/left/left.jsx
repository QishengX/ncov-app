import React, {Component} from 'react';
import axios from 'axios';

import icondown from "../../img/icondown.png";
import iconup from "../../img/iconup.png";

import '../../css/left/left.css'
const echarts = require('echarts');
export default class Left extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('aleftboxtmidd'));
        var option = {
            color:['#4d72d9','#76c4bf','#e5ffc7'],
            backgroundColor: 'rgba(1,202,217,.2)',
            grid: {
                left:60,
                right:60,
                top:20,
                bottom:0,
                containLabel: true
            },
            legend: {
                left: 10,
                top: 5,
                textStyle:{
                    fontSize:10,
                    color:'rgba(255,255,255,.6)'
                },
                data: ['A照','B照','C照']
            },
            calculable : true,
            series : [

                {
                    name:'面积模式',
                    type:'pie',
                    radius : [20, 70],
                    center : ['50%', '55%'],
                    roseType : 'area',
                    data:[
                        {value:187650, name:'A照'},
                        {value:145896, name:'B照'},
                        {value:148920, name:'C照'},

                    ]
                }
            ]
        };
        myChart.setOption(option);
    }

    render() {
        return(
            <div className="left1">
                <div className="aleftboxttop pt1"><h2 className="tith2">进州车辆情况</h2>
                    <div className="lefttoday_tit" style={{height:8 + '%'}}><p className="fl">地区：甘孜</p><p
                        className="fm">周期：每日</p><p className="fr">2018-06-14</p></div>
                    <div className="tlbox">
                        <ul>
                            <li>
                                <p className="text">
                                    <span className="w12">本地车辆:</span>
                                    <span><i className="ricon1" />昨日:6</span>
                                    <span><i className="tricon1" />今日:5</span>
                                    <span className="tr"><img src={icondown} alt="down-arrow" height="16" /> 1</span>
                                </p>
                                <p className="rwith"><span className="rwith_img" style={{width: 60 + '%'}} /></p>
                            </li>
                            <li>
                                <p className="text">
                                    <span className="w12">外地车辆:</span>
                                    <span><i className="ricon2" />昨日:600</span>
                                    <span><i className="tricon2" />今日:500</span>
                                    <span className="tr"><img src={iconup} alt="down-arrow" height="16"/> 1</span>
                                </p>
                                <p className="rwith bgc2"><span className="rwith_img qgc2" style={{width: 40 + '%'}} /></p>
                            </li>
                            <li>
                                <p className="text">
                                    <span className="w12">乘客人员数量:</span>
                                    <span><i className="ricon3" />昨日:6</span>
                                    <span><i className="tricon3" />今日:5</span>
                                    <span className="tr"><img src={iconup} alt="down-arror" height="16"/> 1</span>
                                </p>
                                <p className="rwith bgc3"><span className="rwith_img qgc3" style={{width: 50 + '%'}} /></p>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="aleftboxtmidd">
                    <h2 className="tith2 pt2">出州车辆情况</h2>
                    <div className="lefttoday_tit" style={{height:8 + '%'}}><p className="fl">地区：甘孜</p><p
                        className="fm">周期：每日</p><p className="fr">2018-06-14</p></div>
                    <div className="tlbox">
                        <ul>
                            <li>
                                <p className="text">
                                    <span className="w12">本地车辆:</span>
                                    <span><i className="ricon1"/>昨日:6</span>
                                    <span><i className="tricon1"/>今日:5</span><span className="tr">
                                    <img src={icondown} alt="down-arror" height="16"/> 1</span>
                                </p>
                                <p className="rwith"><span className="rwith_img" style={{width: 60 + '%'}}/></p>
                            </li>
                            <li>
                                <p className="text">
                                    <span className="w12">外地车辆:</span>
                                    <span><i className="ricon2"/>昨日:600</span>
                                    <span><i className="tricon2"/>今日:500</span>
                                    <span className="tr"><img src={iconup} height="16"/> 1</span>
                                </p>
                                <p className="rwith bgc2"><span className="rwith_img qgc2" style={{width: 40 + '%'}}/></p>
                            </li>
                            <li>
                                <p className="text"><span className="w12">乘客人员数量:</span>
                                    <span><i className="ricon3"/>昨日:6</span>
                                    <span><i className="tricon3"/>今日:5</span>
                                    <span className="tr"><img src={iconup} height="16"/> 1</span>
                                </p>
                                <p className="rwith bgc3"><span className="rwith_img qgc3" style={{width: 50 + '%'}}/></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="aleftboxtbott">
                    <h2 className="tith2">总体驾驶人统计</h2>
                    <div id="aleftboxtmidd" className="aleftboxtbott_cont2"/>
                </div>
            </div>
        )
    }
}
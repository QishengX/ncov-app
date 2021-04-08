import React, {Component} from 'react';
import axios from "axios";


import beijing from './beijing'
import China from './中华人民共和国'

import MyEchart from "../charts/my_echart";
import '../../css/center/center.css'

const echarts = require('echarts');
export default class Center extends Component{

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        //地图
        var mapChart1 = echarts.init(document.getElementById('topmap'));
        echarts.registerMap("北京", beijing);
        echarts.registerMap("China", China);
        axios.get(`http://localhost:8080/area`)
            .then((response) => {
                // mapChart的配置
                var option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b}<br/>{c} (个)'
                    },
                    visualMap: {
                        type: 'piecewise',
                        inRange: {
                            color: ['#FFE8E8', '#E03355', '#95002F'],
                            symbolSize: [30, 100]
                        },
                        pieces: [
                            {min: 50000}, // 不指定 max，表示 max 为无限大（Infinity）。
                            {min: 1000, max: 4999},
                            {min: 500, max: 999},
                            {min: 100, max: 499},
                            {min: 10, max: 99},
                            // {value: 123, label: '123（自定义特殊颜色）', color: 'grey'}, // 表示 value 等于 123 的情况。
                            {max: 9}     // 不指定 min，表示 min 为无限大（-Infinity）。
                        ],
                        textStyle: {
                            color: 'white'
                        }

                    },
                    series:[
                        {
                            name: "China",
                            type: "map",
                            map: "China",
                            roam: true,
                            center: [103.066229,35.355346],
                            zoom: 1.7,
                            data: response["data"]["confirmedCount"]
                        }
                    ]
                };
                //设置图表的配置项
                mapChart1.setOption(option);
                //地图点击事件，进行省份切换
                mapChart1.on('click',(params) => {
                    axios.get(`http://localhost:8080/singleArea/` + params.name)
                        .then((response) => {
                            console.log(response["data"]);

                        })
                        .catch((error) => {
                            console.log(error);
                        })
                });

            })
            .catch((error) => {
                console.log(error);
            });

        axios.get(`http://localhost:8080/singleArea/湖北省`)
            .then((response) => {
                //中间图表1
                var myChart2 = echarts.init(document.getElementById('amiddboxtbott1'));
                var option2 = {
                    color:['#00ffff','#7fd7b1', '#5578cf', '#5ebbeb', '#d16ad8','#f8e19a',  '#00b7ee', '#81dabe','#5fc5ce'],
                    backgroundColor: 'rgba(1,202,217,.2)',
                    grid: {
                        left: '5%',
                        right: '8%',
                        bottom: '7%',
                        top:'8%',
                        containLabel: true
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        axisLine:{
                            lineStyle:{
                                color:'rgba(255,255,255,.2)'
                            }
                        },
                        splitLine:{
                            lineStyle:{
                                color:'rgba(255,255,255,.1)'
                            }
                        },
                        axisLabel:{
                            color:"rgba(255,255,255,.7)"
                        },
                        data: response["data"]["date"]
                    },
                    yAxis: {
                        type: 'value',
                        axisLine:{
                            lineStyle:{
                                color:'rgba(255,255,255,.2)'
                            }
                        },
                        splitLine:{
                            lineStyle:{
                                color:'rgba(255,255,255,.1)'
                            }
                        },
                        axisLabel:{
                            color:"rgba(255,255,255,.7)"
                        },
                    },
                    series: [
                        {
                            name:'2020年',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:response["data"]["nCovStatistics_data"]["confirmedCount"]
                        }

                    ]
                };
                myChart2.setOption(option2);
            })
            .catch((error) => {
                console.log(error);
            });

        //中间图表2
        var myChart3 = echarts.init(document.getElementById('arightboxbott'));
        var option3 = {
            color:['#00ffff','#7fd7b1', '#5578cf', '#5ebbeb', '#d16ad8','#f8e19a',  '#00b7ee', '#81dabe','#5fc5ce'],
            backgroundColor: 'rgba(1,202,217,.2)',

            grid: {
                left: '5%',
                right: '8%',
                bottom: '7%',
                top:'8%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.2)'
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.1)'
                    }
                },
                axisLabel:{
                    color:"rgba(255,255,255,.7)"
                },
                data: ['6-08','6-09','6-10','6-11','6-12','6-13','6-14']
            },
            yAxis: {
                type: 'value',
                axisLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.2)'
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.1)'
                    }
                },
                axisLabel:{
                    color:"rgba(255,255,255,.7)"
                },
            },
            series: [
                {
                    name:'2014年',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[120, 132, 101, 134, 90, 230, 210]
                }

            ]
        };
        myChart3.setOption(option3);
    }

    render() {
        return(
            <div className="mrbox_topmidd">
                <div className="amiddboxttop">
                    <h2 className="tith2 pt1">疫情地图</h2>
                    <div className="hot_map" id="topmap" onClick={this.toProvince}/>
                </div>
                <div className="amidd_bott">
                    <div className="amiddboxtbott1 fl">
                        <h2 className="tith2 pt1">疫情累计数据变化</h2>
                        <div className="lefttoday_tit"><p className="fr">2018-06-14</p></div>
                        <div id="amiddboxtbott1" className="amiddboxtbott1content2"/>
                    </div>
                    <div className="amiddboxtbott2 fl"><h2 className="tith2 pt1">单日疫情数据变化</h2>
                        <div id="arightboxbott" className="amiddboxtbott2content"/>
                    </div>
                </div>
            </div>
        )
    }
}
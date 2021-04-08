import React, {Component} from 'react';
import * as echarts from 'echarts';

import MyEchart from "../charts/my_echart";
import News from "../news/news";

import '../../css/right/right.css'
import DataChange from "../changes/data_change";

export default class Right extends Component{
    constructor(props) {
        super(props);
        this.state = {
            option1: {
                color: ['#7ecef4'],
                backgroundColor: 'rgba(1,202,217,.2)',
                grid: {
                    left: 20,
                    right: 50,
                    top: 23,
                    bottom: 30,
                    containLabel: true
                },

                xAxis: {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,.2)'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,0)'
                        }
                    },
                    axisLabel: {
                        color: "rgba(255,255,255,1)"
                    },
                    data: ['1000', '5000', '10000', '15000', '20000', '25000'],
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,.5)'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,.1)'
                        }
                    },
                    axisLabel: {
                        color: "rgba(255,255,255,.5)"
                    },
                    data: ['C2', 'C1', 'B2', 'B1', 'A3', 'A2', 'A1']
                },
                series: [
                    {
                        name: '2011年',
                        type: 'bar',
                        barWidth: 30,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    1, 0, 0, 1,
                                    [
                                        {offset: 0, color: 'rgba(230,253,139,.7)'},
                                        {offset: 1, color: 'rgba(41,220,205,.7)'}
                                    ]
                                )
                            }
                        },
                        data: [18203, 23489, 29034, 18203, 23489, 29034, 29034]
                    }
                ]
            },
            option2: {
                // backgroundColor: '#fff',
                tooltip: {},
                series: [{
                    type: 'wordCloud',
                    gridSize: 2,
                    sizeRange: [12, 50],
                    rotationRange: [-45, 0, 45, 90],
                    shape: 'circle',
                    width: 600,
                    height: 400,
                    drawOutOfBound: true,
                    textStyle: {
                        color: function () {
                            return 'rgb(' + [
                                Math.round(Math.random() * 255),
                                Math.round(Math.random() * 255),
                                Math.round(Math.random() * 255)
                            ].join(',') + ')';
                        }
                    },
                    layoutAnimation: true,  //词云动画，可以按小时、天等进行展示
                    emphasis: {
                        textStyle: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: [
                        {
                            name: 'Sam S Club',
                            value: 8124,
                            textStyle: {
                                color: 'black'
                            },
                            emphasis: {
                                textStyle: {
                                    color: 'red'
                                }
                            }
                        },
                        {
                            name: 'Macys',
                            value: 6181
                        },
                        {
                            name: 'Amy Schumer',
                            value: 4386
                        },
                        {
                            name: 'Jurassic World',
                            value: 4055
                        },
                        {
                            name: 'Charter Communications',
                            value: 2467
                        },
                        {
                            name: 'Chick Fil A',
                            value: 2244
                        },
                        {
                            name: 'Planet Fitness',
                            value: 1898
                        },
                        {
                            name: 'Pitch Perfect',
                            value: 1484
                        },
                        {
                            name: 'Express',
                            value: 1112
                        },
                        {
                            name: 'Home',
                            value: 965
                        },
                        {
                            name: 'Johnny Depp',
                            value: 847
                        },
                        {
                            name: 'Lena Dunham',
                            value: 582
                        },
                        {
                            name: 'Lewis Hamilton',
                            value: 555
                        },
                        {
                            name: 'KXAN',
                            value: 550
                        },
                        {
                            name: 'Mary Ellen Mark',
                            value: 462
                        },
                        {
                            name: 'Farrah Abraham',
                            value: 366
                        },
                        {
                            name: 'Rita Ora',
                            value: 360
                        },
                        {
                            name: 'Serena Williams',
                            value: 282
                        },
                        {
                            name: 'NCAA baseball tournament',
                            value: 273
                        },
                        {
                            name: 'Point Break',
                            value: 265
                        }
                    ]
                }]
            }

        }
    }

    render() {
        return(
            <div className="mrbox_top_right">
                <div className="arightboxtop"><h2 className="tith2">各省疫情数据</h2>

                </div>
                <div className="arightboxbott"><h2 className="tith2 ">疫情词云</h2>
                    <MyEchart id="aleftboxtmiddr" className="arightboxbottcont2" option={this.state.option2} />
                </div>
            </div>
        )
    }
}
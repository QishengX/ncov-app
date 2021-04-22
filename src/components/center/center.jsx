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
        this.state = {
            lineDataLocation: '全国'  //折线图展示数据的区域名称
        }
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
                    title:
                        [{
                            text: '全国疫情累计确诊',
                            left: '25%',
                            top: '4%',
                            textStyle: {
                                color: '#fff',
                                fontSize: 16
                            }
                        },
                            {
                                id: 'statistic',
                                text: "当前疫情新增确诊",
                                left: '75%',
                                top: '3%',
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 16
                                }
                            }
                        ],
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b}<br/>{c} (个)',
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
                    grid: {
                        right: '1%',
                        top: '12%',
                        bottom: '4%',
                        width: '35%'
                    },
                    xAxis: {
                        type: 'value',
                        scale: true,
                        position: 'top',
                        min: 0,
                        boundaryGap: false,
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            margin: 2,
                            textStyle: {
                                color: '#aaa'
                            }
                        },
                    },
                    yAxis: {
                        type: 'category',
                        //  name: 'TOP 20',
                        nameGap: 16,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#ddd'
                            }
                        },
                        axisTick: {
                            show: false,
                            lineStyle: {
                                color: '#ddd'
                            }
                        },
                        axisLabel: {
                            interval: 0,
                            textStyle: {
                                color: '#ddd'
                            }
                        },
                        data: response["data"]["provinceName"].slice(0, 9)
                    },
                    series:[
                        {
                            name: "China",
                            type: "map",
                            map: "China",
                            left: '13%',
                            roam: true,
                            center: [103.066229,35.355346],
                            zoom: 1.7,
                            data: response["data"]["confirmedCount"]
                        },
                        {
                            zlevel: 1.5,
                            type: 'bar',
                            symbol: 'none',
                            itemStyle: {
                                normal: {
                                    color: '#1DE9B6'
                                }
                            },
                            data: response["data"]["currentConfirmedCount"].slice(0, 9)
                        }
                    ]
                };
                //设置图表的配置项
                mapChart1.setOption(option);
                //地图点击事件，进行省份切换
                mapChart1.on('click',(params) => {
                    //地图下钻功能，由于数据不足、或数据属性名称不一致，该功能暂时无法实现
                    // axios.get('http://localhost:8080/maps/' + params.name + '.json')
                    //     .then((response) => {
                    //         echarts.registerMap("Map", response["data"]);
                    //         axios.get(`http://localhost:8080/singleAreaNow/` + params.name)
                    //             .then((response) => {
                    //                 // mapChart的配置
                    //                 var option = {
                    //                     title:
                    //                         [{
                    //                             text: '全国疫情累计确诊',
                    //                             left: '25%',
                    //                             top: '4%',
                    //                             textStyle: {
                    //                                 color: '#fff',
                    //                                 fontSize: 16
                    //                             }
                    //                         },
                    //                             {
                    //                                 id: 'statistic',
                    //                                 text: "当前疫情新增确诊",
                    //                                 left: '75%',
                    //                                 top: '3%',
                    //                                 textStyle: {
                    //                                     color: '#fff',
                    //                                     fontSize: 16
                    //                                 }
                    //                             }
                    //                         ],
                    //                     tooltip: {
                    //                         trigger: 'item',
                    //                         formatter: '{b}<br/>{c} (个)',
                    //                     },
                    //                     visualMap: {
                    //                         type: 'piecewise',
                    //                         inRange: {
                    //                             color: ['#FFE8E8', '#E03355', '#95002F'],
                    //                             symbolSize: [30, 100]
                    //                         },
                    //                         pieces: [
                    //                             {min: 50000}, // 不指定 max，表示 max 为无限大（Infinity）。
                    //                             {min: 1000, max: 4999},
                    //                             {min: 500, max: 999},
                    //                             {min: 100, max: 499},
                    //                             {min: 10, max: 99},
                    //                             // {value: 123, label: '123（自定义特殊颜色）', color: 'grey'}, // 表示 value 等于 123 的情况。
                    //                             {max: 9}     // 不指定 min，表示 min 为无限大（-Infinity）。
                    //                         ],
                    //                         textStyle: {
                    //                             color: 'white'
                    //                         }
                    //
                    //                     },
                    //                     grid: {
                    //                         right: '1%',
                    //                         top: '12%',
                    //                         bottom: '4%',
                    //                         width: '35%'
                    //                     },
                    //                     xAxis: {
                    //                         type: 'value',
                    //                         scale: true,
                    //                         position: 'top',
                    //                         min: 0,
                    //                         boundaryGap: false,
                    //                         splitLine: {
                    //                             show: false
                    //                         },
                    //                         axisLine: {
                    //                             show: false
                    //                         },
                    //                         axisTick: {
                    //                             show: false
                    //                         },
                    //                         axisLabel: {
                    //                             margin: 2,
                    //                             textStyle: {
                    //                                 color: '#aaa'
                    //                             }
                    //                         },
                    //                     },
                    //                     yAxis: {
                    //                         type: 'category',
                    //                         //  name: 'TOP 20',
                    //                         nameGap: 16,
                    //                         axisLine: {
                    //                             show: true,
                    //                             lineStyle: {
                    //                                 color: '#ddd'
                    //                             }
                    //                         },
                    //                         axisTick: {
                    //                             show: false,
                    //                             lineStyle: {
                    //                                 color: '#ddd'
                    //                             }
                    //                         },
                    //                         axisLabel: {
                    //                             interval: 0,
                    //                             textStyle: {
                    //                                 color: '#ddd'
                    //                             }
                    //                         },
                    //                         data: response["data"]["provinceName"].slice(0, 9)
                    //                     },
                    //                     series:[
                    //                         {
                    //                             name: "China",
                    //                             type: "map",
                    //                             map: "Map",
                    //                             left: '13%',
                    //                             roam: true,
                    //                             // center: [103.066229,35.355346],
                    //                             zoom: 1.1,
                    //                             data: response["data"]["confirmedCount"]
                    //                         },
                    //                         {
                    //                             zlevel: 1.5,
                    //                             type: 'bar',
                    //                             symbol: 'none',
                    //                             itemStyle: {
                    //                                 normal: {
                    //                                     color: '#1DE9B6'
                    //                                 }
                    //                             },
                    //                             data: response["data"]["currentConfirmedCount"].slice(0, 9)
                    //                         }
                    //                     ]
                    //                 };
                    //                 //设置图表的配置项
                    //                 mapChart1.setOption(option);
                    //             })
                    //             .catch((error) => {
                    //                 console.log(error);
                    //             })
                    //     })
                    //     .catch((error) => {
                    //         console.log(error);
                    //     });
                    axios.get(`http://localhost:8080/singleArea/` + params.name)
                        .then((response) => {
                            //中间折线图
                            this.setState({lineDataLocation: params.name})
                            var myChart2 = echarts.init(document.getElementById('amiddboxtbott1'));
                            var option2 = {
                                color:['#00ffff','#7fd7b1', '#5578cf', '#5ebbeb', '#d16ad8','#f8e19a',  '#00b7ee', '#81dabe','#5fc5ce'],
                                backgroundColor: 'rgba(1,202,217,.2)',
                                toolbox: {
                                    show: true,
                                    feature: {
                                        dataZoom: {
                                            yAxisIndex: 'none'
                                        },
                                        dataView: {readOnly: false},
                                        magicType: {type: ['line', 'bar']},
                                        restore: {},
                                        saveAsImage: {}
                                    }
                                },
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
                                legend: {
                                    textStyle: {
                                        color: 'white',
                                    },
                                    data: ['新增确诊', '新增疑似', '新增死亡', '累计确诊', '现有疑似', '累计死亡']
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
                                        name:'累计确诊',
                                        type:'line',
                                        lineStyle: {
                                            color: '#bfa'
                                        },
                                        data:response["data"]["nCovStatistics_data"]["confirmedCount"]
                                    },
                                    {
                                        name:'新增疑似',
                                        type:'line',
                                        data:response["data"]["nCovStatistics_data"]["suspectedCountIncr"]
                                    },
                                    {
                                        name:'新增确诊',
                                        type:'line',
                                        data:response["data"]["nCovStatistics_data"]["currentConfirmedIncr"]
                                    },
                                    {
                                        name:'新增死亡',
                                        type:'line',
                                        data:response["data"]["nCovStatistics_data"]["deadIncr"]
                                    },
                                    {
                                        name:'现有疑似',
                                        type:'line',
                                        data:response["data"]["nCovStatistics_data"]["suspectedCount"]
                                    },
                                    {
                                        name:'累计死亡',
                                        type:'line',
                                        data:response["data"]["nCovStatistics_data"]["deadCount"]
                                    }

                                ]
                            };
                            myChart2.setOption(option2);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                });

            })
            .catch((error) => {
                console.log(error);
            });

        axios.get(`http://localhost:8080/singleArea/湖北省`)
            .then((response) => {
                //中间折线图
                var myChart2 = echarts.init(document.getElementById('amiddboxtbott1'));
                var option2 = {
                    color:['#00ffff','#7fd7b1', '#5578cf', '#5ebbeb', '#d16ad8','#f8e19a',  '#00b7ee', '#81dabe','#5fc5ce'],
                    backgroundColor: 'rgba(1,202,217,.2)',
                    toolbox: {
                        show: true,
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            dataView: {readOnly: false},
                            magicType: {type: ['line', 'bar']},
                            restore: {},
                            saveAsImage: {}
                        }
                    },
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
                    legend: {
                        textStyle: {
                            color: 'white',
                        },
                        data: ['新增确诊', '新增疑似', '新增死亡', '累计确诊', '现有疑似', '累计死亡']
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
                            name:'累计确诊',
                            type:'line',
                            lineStyle: {
                                color: '#bfa'
                            },
                            data:response["data"]["nCovStatistics_data"]["confirmedCount"]
                        },
                        {
                            name:'新增疑似',
                            type:'line',
                            data:response["data"]["nCovStatistics_data"]["suspectedCountIncr"]
                        },
                        {
                            name:'新增确诊',
                            type:'line',
                            data:response["data"]["nCovStatistics_data"]["currentConfirmedIncr"]
                        },
                        {
                            name:'新增死亡',
                            type:'line',
                            data:response["data"]["nCovStatistics_data"]["deadIncr"]
                        },
                        {
                            name:'现有疑似',
                            type:'line',
                            data:response["data"]["nCovStatistics_data"]["suspectedCount"]
                        },
                        {
                            name:'累计死亡',
                            type:'line',
                            data:response["data"]["nCovStatistics_data"]["deadCount"]
                        }

                    ]
                };
                myChart2.setOption(option2);
            })
            .catch((error) => {
                console.log(error);
            });
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
                        <h2 className="tith2 pt1">{this.state.lineDataLocation + '疫情累计数据变化'}</h2>
                        <div id="amiddboxtbott1" className="amiddboxtbott1content2"/>
                    </div>
                </div>
            </div>
        )
    }
}
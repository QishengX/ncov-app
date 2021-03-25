import React, {Component} from 'react';

import beijing from './beijing'
import China from './中华人民共和国'

import '../../css/center/center.css'

const echarts = require('echarts');
export default class Center extends Component{


    componentDidMount() {
        //地图
        var mapChart1 = echarts.init(document.getElementById('topmap'));
        echarts.registerMap("北京", beijing);
        echarts.registerMap("China", China);
        // mapChart的配置
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: '{b}<br/>{c} (个)'
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },
            visualMap: {
                min: 0,
                max: 2000,
                text:['高','低'],
                realtime: false,
                calculable: true,
                inRange: {
                    color: ['lightskyblue','yellow', 'orangered']
                }
            },
            series:[
                // {
                //     name: '北京各区',
                //     type: 'map',//type必须声明为 map 说明该图标为echarts 中map类型
                //     map: '北京', //这里需要特别注意。如果是中国地图，map值为china，如果为各省市则为中文。这里用北京
                //     aspectScale: 0.75, //长宽比. default: 0.75
                //     zoom: 1.2,
                //     //roam: true,
                //     itemStyle:{
                //         normal:{label:{show:true}},
                //         emphasis:{label:{show:true}}
                //     },
                //     data: [
                //         {name:'东城区', value: 1800},
                //         {name:'西城区', value: 1700},
                //         {name:'朝阳区', value: 1600},
                //         {name:'丰台区', value: 1400},
                //         {name:'石景山区', value: 1200},
                //         {name:'海淀区', value: 1000},
                //         {name:'门头沟区', value: 800},
                //         {name:'房山区', value: 600},
                //         {name:'通州区', value: 400},
                //         {name:'顺义区', value: 200},
                //         {name:'昌平区', value: 100},
                //         {name:'大兴区', value: 300},
                //         {name:'怀柔区', value: 500},
                //         {name:'平谷区', value: 700},
                //         {name:'密云县', value: 900},
                //         {name:'延庆县', value: 1100}
                //
                //     ]
                // },
                {
                    name: "China",
                    type: "map",
                    map: "China",
                    roam: true,
                    // aspectScale: 0.75, //长宽比. default: 0.75
                    // zoom: 1.2,
                    // itemStyle:{
                    //     normal:{label:{show:true}},
                    //     emphasis:{label:{show:true}}
                    // },
                    // data: [
                    //     {name:'东城区', value: 1800},
                    //     {name:'西城区', value: 1700},
                    //     {name:'朝阳区', value: 1600},
                    //     {name:'丰台区', value: 1400},
                    //     {name:'石景山区', value: 1200},
                    //     {name:'海淀区', value: 1000},
                    //     {name:'门头沟区', value: 800},
                    //     {name:'房山区', value: 600},
                    //     {name:'通州区', value: 400},
                    //     {name:'顺义区', value: 200},
                    //     {name:'昌平区', value: 100},
                    //     {name:'大兴区', value: 300},
                    //     {name:'怀柔区', value: 500},
                    //     {name:'平谷区', value: 700},
                    //     {name:'密云县', value: 900},
                    //     {name:'延庆县', value: 1100}
                    //
                    // ]
                }
            ]
        };
        //设置图表的配置项
        mapChart1.setOption(option);
        //中间图表1
        var myChart2 = echarts.init(document.getElementById('amiddboxtbott1'));
        var data = [
            [[28604,77,17099,'Australia',1990],[31163,77.4,2440,'Canada',1990],[1516,68,1605773,'China',1990],[13670,74.7,10082,'Cuba',1990],[28599,75,49805,'Finland',1990],[29476,77.1,569499,'France',1990],[31476,75.4,789237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870776,'India',1990],[29550,79.1,129285,'Japan',1990],[2076,67.9,201954,'North Korea',1990],[12087,72,42954,'South Korea',1990],[24021,75.4,33934,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,381958,'Poland',1990],[19349,69.6,1475652,'Russia',1990],[10670,67.3,53905,'Turkey',1990],[26424,75.7,57117,'United Kingdom',1990],[37062,75.4,252810,'United States',1990]],
            [[44056,81.8,23973,'Australia',2015],[43294,81.7,35927,'Canada',2015],[13334,76.9,1376043,'China',2015],[21291,78.5,11562,'Cuba',2015],[38923,80.8,55057,'Finland',2015],[37599,81.9,64345,'France',2015],[44053,81.1,80545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311027,'India',2015],[36162,83.5,126571,'Japan',2015],[1390,71.4,251317,'North Korea',2015],[34644,80.7,503439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,386194,'Poland',2015],[23038,73.13,143918,'Russia',2015],[19360,76.5,78630,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321771,'United States',2015]]
        ];

        var option2 = {
            backgroundColor: 'rgba(1,202,217,.2)',
            grid: {
                left:40,
                right:40,
                top:50,
                bottom:40
            },
            title: {
                top: 5,
                left:20,
                textStyle:{
                    fontSize:10,
                    color:'rgba(255,255,255,.6)'
                },
                text: '环比类型：日环比'
            },
            // legend: {
            //     right: 10,
            //     top: 5,
            //     textStyle:{
            //       fontSize:10,
            //       color:'rgba(255,255,255,.6)'
            //     },
            //     data: ['1990', '2015']
            // },
            xAxis: {
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
                }
            },
            yAxis: {
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
                scale: true
            },
            series: [ {
                name: '2015',
                data: data[1],
                type: 'scatter',
                symbolSize: function (data) {
                    return Math.sqrt(data[2]) / 5e2;
                },
                label: {
                    emphasis: {
                        show: true,
                        formatter: function (param) {
                            return param.data[3];
                        },
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(25, 100, 150, 0.5)',
                        shadowOffsetY: 5,
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: 'rgb(129, 227, 238)'
                        }, {
                            offset: 1,
                            color: 'rgb(25, 183, 207)'
                        }])
                    }
                }
            }]
        };
        myChart2.setOption(option2);

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
                    <div className="hot_map" id="topmap"/>
                </div>
                <div className="amidd_bott">
                    <div className="amiddboxtbott1 fl">
                        <h2 className="tith2 pt1">疫情累计趋势</h2>
                        <div className="lefttoday_tit"><p className="fr">2018-06-14</p></div>
                        <div id="amiddboxtbott1" className="amiddboxtbott1content2"/>
                    </div>
                    <div className="amiddboxtbott2 fl"><h2 className="tith2 pt1">疫情新增趋势</h2>
                        <div id="arightboxbott" className="amiddboxtbott2content"/>
                    </div>
                </div>
            </div>
        )
    }
}
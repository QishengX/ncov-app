import React, {Component} from 'react';

import '../../css/right/right.css'

const echarts = require('echarts');
export default class Right extends Component{

    componentDidMount() {
        var myChart1 = echarts.init(document.getElementById('aleftboxtbott'));
        var option1 = {
            color:['#7ecef4'],
            backgroundColor: 'rgba(1,202,217,.2)',
            grid: {
                left:20,
                right:50,
                top:23,
                bottom:30,
                containLabel: true
            },

            xAxis: {
                type: 'value',
                axisLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.2)'
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,0)'
                    }
                },
                axisLabel:{
                    color:"rgba(255,255,255,1)"
                },
                data: ['1000','5000','10000','15000','20000','25000'],
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                axisLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.5)'
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.1)'
                    }
                },
                axisLabel:{
                    color:"rgba(255,255,255,.5)"
                },
                data: ['C2','C1','B2','B1','A3','A2','A1']
            },
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    barWidth :30,
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
                    data: [18203, 23489, 29034,18203, 23489, 29034, 29034]
                }
            ]
        };
        myChart1.setOption(option1);

        var myChart2 = echarts.init(document.getElementById('aleftboxtmiddr'));
        var option2 = {
            color:['#f1b1ff','#aae3fb','#e5ffc7'],
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
        myChart2.setOption(option2);

    }

    render() {
        return(
            <div className="mrbox_top_right">
                <div className="arightboxtop"><h2 className="tith2">当前高风险地区</h2>
                    <div id="aleftboxtbott" className="aleftboxtbott_contr"/>
                </div>
                <div className="arightboxbott"><h2 className="tith2 ">疫情词云</h2>

                    <div id="aleftboxtmiddr" className="arightboxbottcont2"/>
                </div>
            </div>
        )
    }
}
import React, {Component} from 'react';

import DataChange from "../changes/data_change";

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
                <DataChange area="顺义区" data_date="2018-06-14"/>

                <div className="aleftboxtbott">
                    <h2 className="tith2">总体驾驶人统计</h2>
                    <div id="aleftboxtmidd" className="aleftboxtbott_cont2"/>
                </div>

                <DataChange area="顺义区" data_date="2018-06-14"/>
            </div>
        )
    }
}
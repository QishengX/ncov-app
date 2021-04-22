import React, {Component} from 'react';

import DataChange from "../changes/data_change";
import MyEchart from "../charts/my_echart";

import '../../css/left/left.css'
import News from "../news/news";
import * as echarts from "echarts";

export default class Left extends Component{
    constructor(props) {
        super(props);
        var current_data = ['现存确诊', '疑似感染', '死亡人数', '重症病例数'];
        var data_incr = ['较昨日新增确诊', '较昨日新增疑似', '新增治愈', '较昨日新增死亡数', '较昨日新增重症病例'];
        var colorList = ['#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac'];

        this.state = {
            option: {
                tooltip: {
                    formatter: function(param) {
                        if (param.data.type == null) {
                            return param.data.name + ":" + param.value + '个';
                        } else {
                            return param.data.type + ":" + param.value + '个';
                        }
                    }
                },
                series: [{
                    name: '累计病例数据',
                    type: 'pie',
                    radius: [0, '30%'],
                    label: {
                        position: 'inner',
                    },
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                return colorList[params.dataIndex]
                            }
                        }
                    },
                    selectedMode: 'single',
                    data: [{
                        value: 2156,
                        name: '累计确诊',
                    },
                    {
                        value: 1239,
                        name: '累计治愈',

                    }]
                },
                {
                    name: '现存病例数据',
                    type: 'pie',
                    radius: ['40%', '55%'],
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                return colorList[params.dataIndex]
                            }
                        }
                    },
                    label: {
                        normal: {
                            color: '#9AAFC5',
                            formatter: function(params) {
                                if (params.value !== 0)
                                    return params.data.type;
                                else
                                    return '';
                            },
                            show: true,

                        },

                    },
                    data: [{
                        value: 135,
                        name: current_data[0],
                        type: current_data[0],

                    },
                        {
                            value: 200,
                            name: current_data[1],
                            type: current_data[1],

                        },
                        {
                            value: 100,
                            name: current_data[2],
                            type: current_data[2],

                        },
                        {
                            value: 50,
                            name: current_data[3],
                            type: current_data[3],

                        },
                        {
                            value: 310,
                            name: data_incr[0],
                            type: data_incr[0],

                        },
                        {
                            value: 234,
                            name: data_incr[1],
                            type: data_incr[1],

                        },
                        {
                            value: 35,
                            name: data_incr[2],
                            type: data_incr[2],

                        },
                        {
                            value: 100,
                            name: data_incr[3],
                            type: data_incr[3],

                        },
                        {
                            value: 40,
                            name: data_incr[4],
                            type: data_incr[4],

                        },
                    ]
            }
                ]
            }
        }
    }

    componentDidMount() {
        var myPieChart = echarts.init(document.getElementById('aleftboxtmidd'));
        var current_data = ['现存确诊', '疑似感染', '死亡人数', '重症病例数'];
        var data_incr = ['较昨日新增确诊', '较昨日新增疑似', '新增治愈', '较昨日新增死亡数', '较昨日新增重症病例'];
        var colorList = ['#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac', '#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac'];
        var option = {
            tooltip: {
                formatter: function(param) {
                    if (param.data.type == null) {
                        return param.data.name + ":" + param.value + '个';
                    } else {
                        return param.data.type + ":" + param.value + '个';
                    }
                }
            },
            series: [{
                name: '累计病例数据',
                type: 'pie',
                radius: [0, '30%'],
                label: {
                    position: 'inner',
                },
                itemStyle: {
                    normal: {
                        color: function(params) {
                            return colorList[params.dataIndex]
                        }
                    }
                },
                selectedMode: 'single',
                data: [{
                    value: 2156,
                    name: '累计确诊',
                },
                    {
                        value: 1239,
                        name: '累计治愈',

                    }]
            },
                {
                    name: '现存病例数据',
                    type: 'pie',
                    radius: ['40%', '55%'],
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                return colorList[params.dataIndex]
                            }
                        }
                    },
                    label: {
                        normal: {
                            color: '#9AAFC5',
                            formatter: function(params) {
                                if (params.value !== 0)
                                    return params.data.type;
                                else
                                    return '';
                            },
                            show: true,

                        },

                    },
                    data: [{
                        value: 135,
                        name: current_data[0],
                        type: current_data[0],

                    },
                        {
                            value: 200,
                            name: current_data[1],
                            type: current_data[1],

                        },
                        {
                            value: 100,
                            name: current_data[2],
                            type: current_data[2],

                        },
                        {
                            value: 50,
                            name: current_data[3],
                            type: current_data[3],

                        },
                        {
                            value: 310,
                            name: data_incr[0],
                            type: data_incr[0],

                        },
                        {
                            value: 234,
                            name: data_incr[1],
                            type: data_incr[1],

                        },
                        {
                            value: 35,
                            name: data_incr[2],
                            type: data_incr[2],

                        },
                        {
                            value: 100,
                            name: data_incr[3],
                            type: data_incr[3],

                        },
                        {
                            value: 40,
                            name: data_incr[4],
                            type: data_incr[4],

                        },
                    ]
                }
            ]
        };
        myPieChart.setOption(option);
    }

    render() {
        return(
            <div className="left1">
                <DataChange area="全国"/>

                <div className="aleftboxtbott">
                    <h2 className="tith2">病患类型比例</h2>
                    <div id="aleftboxtmidd" className="aleftboxtbott_cont2"/>
                </div>

                <div className="aleftboxtbott my-aleftboxtbott">
                    <h2 className="tith2">疫情新闻</h2>
                    <News area="顺义区疫情新闻" data_date="2018-06-14"/>
                </div>
            </div>
        )
    }
}
import React, {Component} from 'react';

import DataChange from "../changes/data_change";
import MyEchart from "../charts/my_echart";

import '../../css/left/left.css'
import icondown from "../../img/icondown.png";
import iconup from "../../img/iconup.png";
import News from "../news/news";

export default class Left extends Component{
    constructor(props) {
        super(props);
        this.state = {
            option: {
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
                        color:'rgba(255,255,255)'
                    },
                    data: ['累计确诊','新增确诊','累计治愈']
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
                            {value:187650, name:'累计确诊'},
                            {value:145896, name:'新增确诊'},
                            {value:148920, name:'累计治愈'},

                        ]
                    }
                ]
            }
        }
    }

    render() {
        return(
            <div className="left1">
                <DataChange area="顺义区" data_date="2018-06-14"/>

                <div className="aleftboxtbott">
                    <h2 className="tith2">病患类型比例</h2>
                    <MyEchart id="aleftboxtmidd" className="aleftboxtbott_cont2" option={this.state.option}/>
                </div>

                {/*<DataChange area="顺义区疫情新闻" data_date="2018-06-14"/>*/}
                <div className="aleftboxtbott my-aleftboxtbott">
                    <h2 className="tith2">疫情新闻</h2>
                    <News area="顺义区疫情新闻" data_date="2018-06-14"/>
                </div>
            </div>
        )
    }
}
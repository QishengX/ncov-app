import React, {Component} from 'react';
import * as echarts from 'echarts';
import 'echarts-wordcloud';

export default class MyEchart extends Component{

    componentDidMount() {
        var myChart = echarts.init(document.getElementById(this.props.id));
        var option = this.props.option;
        myChart.setOption(option);
    }

    render() {
        return(
            <div id={this.props.id} className={this.props.className}/>
        )
    }
}
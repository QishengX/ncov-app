import React, {Component} from 'react';
import icondown from "../../img/icondown.png";
import iconup from "../../img/iconup.png";
import axios from "axios";

export default class DataChange extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: {
                currentConfirmedCount: null,
                currentConfirmedIncr:null,
                confirmedCount: null,
                confirmedIncr: null,
                curedCount: null,
                curedIncr: null,
                suspectedCount: null,
                suspectedCountIncr: null,
                deadCount: null,
                deadIncr: null,
            },
            date: null
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/overall`)
            .then((response) => {
                var overall_data = response["data"]["overall_data"][0];
                var data = {
                    currentConfirmedCount: overall_data["currentConfirmedCount"],
                    currentConfirmedIncr: overall_data["currentConfirmedIncr"],
                    confirmedCount: overall_data["confirmedCount"],
                    confirmedIncr: overall_data["confirmedIncr"],
                    curedCount: overall_data["curedCount"],
                    curedIncr: overall_data["curedIncr"],
                    suspectedCount: overall_data["suspectedCount"],
                    suspectedCountIncr: overall_data["suspectedIncr"],
                    deadCount: overall_data["deadCount"],
                    deadIncr: overall_data["deadIncr"],
                };
                var date = response["data"]["date"];
                this.setState({data: data, date: date});

            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const attrs = this.props;
        const {data} = this.state;
        const {date} = this.state;
        return(
            <div className="aleftboxtmidd">
                <h2 className="tith2 pt2">{attrs.area + "疫情数据"}</h2>
                <div className="lefttoday_tit" style={{height:24 + 'px'}}><p className="fl">地区：{attrs.area}</p><p
                    className="fm">周期：每日</p><p className="fr">{date}</p></div>
                <div className="tlbox">
                    <ul>
                        <li>
                            <p className="text">
                                <span className="w12">现存确诊:</span>
                                <span><i className="ricon1"/>昨日:{data.currentConfirmedCount - data.currentConfirmedIncr}</span>
                                <span><i className="tricon1"/>今日:{data.currentConfirmedCount}</span><span className="tr">
                                    <img src={icondown} alt="down-arror" height="16"/> {data.currentConfirmedIncr}</span>
                            </p>
                            <p className="rwith"><span className="rwith_img" style={{width: (data.currentConfirmedCount - data.currentConfirmedIncr) / (2 *
                                data.currentConfirmedCount - data.currentConfirmedIncr) * 100 + '%'}}/></p>
                        </li>
                        <li>
                            <p className="text">
                                <span className="w12">累计确诊:</span>
                                <span><i className="ricon2"/>昨日:{data.confirmedCount - data.confirmedIncr}</span>
                                <span><i className="tricon2"/>今日:{data.confirmedCount}</span>
                                <span className="tr"><img src={iconup} height="16"/> {data.confirmedIncr}</span>
                            </p>
                            <p className="rwith bgc2"><span className="rwith_img qgc2" style={{width: (data.confirmedCount - data.confirmedIncr) / (2 *
                                data.confirmedCount - data.confirmedIncr) * 100 + '%'}}/></p>
                        </li>
                        <li>
                            <p className="text">
                                <span className="w12">疑似感染:</span>
                                <span><i className="ricon2"/>昨日:{data.suspectedCount - data.suspectedCountIncr}</span>
                                <span><i className="tricon2"/>今日:{data.suspectedCount}</span>
                                <span className="tr"><img src={iconup} height="16"/> {data.suspectedCountIncr}</span>
                            </p>
                            <p className="rwith bgc2"><span className="rwith_img qgc2" style={{width: (data.suspectedCount - data.suspectedCountIncr) / (2 *
                                    data.suspectedCount - data.suspectedCountIncr) * 100 + '%'}}/></p>
                        </li>
                        <li>
                            <p className="text"><span className="w12">累计治愈:</span>
                                <span><i className="ricon3"/>昨日:{data.curedCount - data.curedIncr}</span>
                                <span><i className="tricon3"/>今日:{data.curedCount}</span>
                                <span className="tr"><img src={iconup} height="16"/> {data.curedIncr}</span>
                            </p>
                            <p className="rwith bgc3"><span className="rwith_img qgc3" style={{width: (data.curedCount - data.curedIncr) / (2 *
                                data.curedCount - data.curedIncr) * 100 + '%'}}/></p>
                        </li>
                        <li>
                            <p className="text"><span className="w12">累计死亡:</span>
                                <span><i className="ricon3"/>昨日:{data.deadCount - data.deadIncr}</span>
                                <span><i className="tricon3"/>今日:{data.deadCount}</span>
                                <span className="tr"><img src={iconup} height="16"/> {data.deadIncr}</span>
                            </p>
                            <p className="rwith bgc3"><span className="rwith_img qgc3" style={{width: (data.deadCount - data.deadIncr) / (2 *
                                data.deadCount - data.deadIncr) * 100 + '%'}}/></p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
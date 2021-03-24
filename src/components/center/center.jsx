import React, {Component} from 'react';

export default class Center extends Component{

    render() {
        return(
            <div className="mrbox_topmidd" style={{width: 69 + '%'}}>
                <div className="amiddboxttop">
                    <h2 className="tith2 pt1">实时地图</h2>
                    <div className="hot_map" id="topmap"/>
                </div>
                <div className="amidd_bott">
                    <div className="amiddboxtbott1 fl">
                        <h2 className="tith2 pt1">每日上户车辆</h2>
                        <div className="lefttoday_tit"><p className="fr">2018-06-14</p></div>
                        <div id="amiddboxtbott1" className="amiddboxtbott1content2"/>
                    </div>
                    <div className="amiddboxtbott2 fl"><h2 className="tith2 pt1">高危车辆统计</h2>
                        <div id="arightboxbott" className="amiddboxtbott2content"/>
                    </div>
                </div>
            </div>
        )
    }
}
import React,{Component} from 'react';
import '../component-css/Topbar.css';
import circle from '../component-css/image/circle.png';

class Topbar extends Component{

    render(){
        return(
            <div className="mainTopBar">
                <div>
                    <img src={circle} className="logo"/>
                    <p className="domainName">Thai-pga</p>
                </div>
                <div>
                    <input type="button" value="sign In" className="button topbarButton"/>
                    <input type="button" value="sign up" className="button topbarButton"/>
                </div>
            </div>
        );
    }

}

export default Topbar;
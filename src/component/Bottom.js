import React,{Component} from 'react';
import '../component-css/Bottom.css';
import facebook from '../component-css/image/facebook.png';
import twitter from '../component-css/image/twitter.png';
import instagram from '../component-css/image/ig.png';

class Bottom extends Component{
    render(){
        return(
            <div className="mainBottom">
                <div className="BottomLeft">
                    <table>
                        <tr>
                            <th className="grey">CONTACT US</th>
                            <td className="tdBottom grey">+66 000 000 000</td>
                            <th className="thBottom grey">INFOMATION</th>
                            <td className="tdBottom grey"><a>About us</a></td>
                            <th className="thBottom grey">FOLLOW US</th>
                            <td><img src={facebook} className="BottomIcon tdBottom"/></td>
                            <td className="tdBottom grey"><a>Facebook</a></td>
                        </tr>
                        <tr>
                            <th></th>
                            <td className="tdBottom grey">pds@pds.com</td>
                            <th></th>
                            <td className="tdBottom grey"><a>Work with us</a></td>
                            <th></th>
                            <td><img src={twitter} className="BottomIcon tdBottom"/></td>
                            <td className="tdBottom grey"><a>Twitter</a></td>
                        </tr>
                        <tr>
                            <th></th>
                            <td className="tdBottom grey">Address</td>
                            <th></th>
                            <td className="tdBottom"><a>Privacy Policy</a></td>
                            <th></th>
                            <td><img src={instagram} className="BottomIcon tdBottom"/></td>
                            <td className="tdBottom"><a>Instagram</a></td>
                        </tr>
                        <tr>
                            <th></th>
                            <td></td>
                            <th></th>
                            <td className="tdBottom"><a>Terms & Conditions</a></td>
                        </tr>
                        <tr>
                            <th></th>
                            <td></td>
                            <td className="thBottom" colSpan="3">
                                <p className="copyright grey">©PDS Co ,LTD 2019</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default Bottom;
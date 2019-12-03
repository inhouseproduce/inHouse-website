import React, { Component } from 'react';
import './style.css';

import Header from '../../Components/Headers/MainHeader';
import SideBar from './Components/SideBar';
import BodyHeader from './Components/BodyHeader';
import BodyContent from './Components/BodyContent';
import axios from 'axios';
class DashboardPage extends Component {
    state = {
        fleetList:['1','2']
    };

    componentDidMount(){
        axios.get('/get/json', res => {
            console.log('response', res)
        })
    }

    render(){
        return (
            <div className='dashboard-page-container'>
                <Header />
                <div className='dashboard-body-container'>
                    <div className='dashboard-body-inner'>
                        <SideBar/>
                        <div className='body-view'>
                            <div className='body-view-inner'>
                                <BodyHeader/>
                                <div className='inner-body-container'>
                                    <BodyContent fleetList={this.state.fleetList}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default DashboardPage;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

import Header from '../../Components/Headers/MainHeader';
import SideBar from './Components/SideBar';
import BodyHeader from './Components/BodyHeader';
import BodyContent from './Components/BodyContent';

// Actions
import { getAllFleets } from '../../Store/actions/crud/readFleet';

class DashboardPage extends Component {
    componentDidMount(){
        this.props.getFleetList();
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
                                    <BodyContent/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
    }
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      getFleetList: ()=> dispatch( getAllFleets())
    }
  };
  export default connect( mapStateToProps, mapDispatchToProps)( DashboardPage );
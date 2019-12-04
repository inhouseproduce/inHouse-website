import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

import Header from '../../Components/Headers/MainHeader';
import SideBar from './Components/SideBar';
import BodyHeader from './Components/BodyHeader';
import BodyContent from './Components/BodyContent';

// Actions
import { getAllFleets } from '../../Store/actions/CRUD/getFleet';

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
                                    <BodyContent fleetList={this.props.fleetList}/>
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
        fleetList: state.app.fleetList
    }
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      getFleetList: ()=> dispatch( getAllFleets())
    }
  };
  export default connect( mapStateToProps, mapDispatchToProps)( DashboardPage );
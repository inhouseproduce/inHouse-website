import React from 'react';
import Aux from '../../../../hoc/_Aux';
import DEMO from '../../../../store/constant';

import avatar1 from '../../../../assets/images/user/avatar-1.jpg';

const TableContent = props => {
    return (
        <Aux>
            {(props.clientList || []).map((client, i) => {
                return (
                    <div key={i} className='media friendlist-box align-items-center justify-content-center m-b-20'>
                        <div className='m-r-10 photo-table'>
                            <a href={DEMO.BLANK_LINK}><img className='rounded-circle' style={{ width: '40px' }} src={avatar1} alt='activity-user' /></a>
                        </div>
                        <div className='media-body'>
                            <h6 className='m-0 d-inline'>Silje Larsen</h6>
                            <span className='float-right d-flex  align-items-center'><i className='fa fa-caret-up f-22 m-r-10 text-c-green' />3784</span>
                        </div>
                    </div>
                )
            })}
        </Aux>
    )
};

export default TableContent;
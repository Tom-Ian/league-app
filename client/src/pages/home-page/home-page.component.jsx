import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import FreeRotation from '../../components/free-rotation/free-rotation.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { fetchFreeRotationStartAsync } from '../../redux/free-rotation/free-rotation.actions';

import './home-page.styles.scss';

const FreeRotationWithSpinner = WithSpinner(FreeRotation);

const HomePage = ({ isFetching, fetchFreeRotationStartAsync }) => {
    
    useEffect(() => {
        fetchFreeRotationStartAsync();
    }, [fetchFreeRotationStartAsync])

    return(
        <div className='home-page-container'>
            <FreeRotationWithSpinner isLoading={isFetching}/>
        </div>
    )
    
}

const mapStateToProps = state => {
    const { freeRotation } = state;
    return { isFetching: freeRotation.isFetching}
}

const mapDispatchToProps = dispatch => ({
    fetchFreeRotationStartAsync: () => dispatch(fetchFreeRotationStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
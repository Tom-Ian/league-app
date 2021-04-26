import React, { useEffect, Suspense } from 'react';
import { connect } from 'react-redux';

import SummonerHeader from '../../components/summoner-header/summoner-header.component';
import MatchHistory from '../../components/match-history/match-history.component';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import './summoner.styles.scss';
import { fetchCurrentSummonerStartAsync} from '../../redux/summoner/summoner.actions';
import { useParams } from 'react-router';

const MatchHistoryWithSpinner = WithSpinner(MatchHistory);
const SummonerHeaderWithSpinner = WithSpinner(SummonerHeader)

const SummonerPage = ({ isFetchingCurrentSummoner, isFetchingRecentAram, fetchCurrentSummonerStartAsync}) => {

    let { urlDisplayName } = useParams();

    useEffect(() => {
        fetchCurrentSummonerStartAsync(urlDisplayName);
    }, [urlDisplayName, fetchCurrentSummonerStartAsync])

    return (
        <div className='summoner-page-container'>
            <SummonerHeaderWithSpinner isLoading={isFetchingCurrentSummoner} />
            <MatchHistoryWithSpinner isLoading={isFetchingRecentAram}/>
        </div>
    )
}

const mapStateToProps = state => {
    const { summoner } = state;
    return { 
        isFetchingRecentAram: summoner.isFetchingRecentAram,
        isFetchingCurrentSummoner: summoner.isFetchingCurrentSummoner
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCurrentSummonerStartAsync: urlDisplayName => dispatch(fetchCurrentSummonerStartAsync(urlDisplayName))
})


export default connect(mapStateToProps, mapDispatchToProps)(SummonerPage);
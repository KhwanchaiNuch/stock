import React from 'react'
import AppViewWrapperPure from 'components/app-view-wrapper'
import { withRouter } from 'react-router-dom'
import Icon from 'assets/images/SiamStarch.png'
import { useStoreActions, useStoreState } from 'easy-peasy'
import get from 'lodash/get'

const HomeMBView = (props) => {
    const clearUser = useStoreActions((actions) => actions.user.clearUser)
    const user = useStoreState((state) => state.user.user)

    return (
        <AppViewWrapperPure page="content">
            <div className="header-mobile">
                <h1>
                    {'NK'}
                </h1>
                <div className="user-menu">
                    <p>{get(user, 'username', '')}</p>
                    <div className="sub-menu-user-dt">
                        <div className="sub-menu-container">
                            <div
                                className="menu-item"
                                onClick={() => {
                                    clearUser();
                                    props.history.push('/login')
                                }}
                            >
                                <p>{'Log out'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <main className="container-home-form">
                <div className="home-form">
                    <img src={Icon} />
                    {/* <div
                        className="btn-menu-home"
                        onClick={() => {
                            props.history.push('/handheld/RM/INBOUND')
                        }}
                    >
                        RM Inbound
                    </div> */}
                    {/* <div
                        className="btn-menu-home"
                        onClick={() => {
                            props.history.push('/handheld/RM/INBOUND')
                        }}
                    >
                        RM Inbound
                    </div>
                    <div
                        className="btn-menu-home"
                        onClick={() => {
                            props.history.push('/handheld/WIP/INBOUND')
                        }}
                    >
                        WIP Inbound
                    </div>
                    <div
                        className="btn-menu-home"
                        onClick={() => {
                            props.history.push('/handheld/FG/INBOUND')
                        }}
                    >
                        FG Inbound
                    </div>
                    <div
                        className="btn-menu-home"
                        onClick={() => {
                            props.history.push('/handheld/BS/INBOUND')
                        }}
                    >
                        BS Inbound
                    </div> */}
                    <div
                        className="btn-menu-home"
                        onClick={() => {
                            props.history.push('/handheld/INBOUND')
                        }}
                    >
                        Inbound
                    </div>
                    <div
                        className="btn-menu-home"
                        onClick={() => {
                            props.history.push('/handheld/qc')
                        }}
                    >
                        QC Check
                    </div>
                    <div
                        className="btn-menu-home"
                        onClick={() => {
                            props.history.push('/handheld/OUTBOUND')
                        }}
                    >
                        Outbound
                    </div>
                  
                    <div
                        className="btn-menu-home"
                        onClick={() => {
                            props.history.push('/handheld/finalcheck')
                        }}
                    >
                        Warehouse FinalCheck
                    </div>
                    <div
                        className="btn-menu-home"
                        onClick={() => {
                            props.history.push('/handheld/inventory')
                        }}
                    >
                        Inventory
                    </div>
                    <div
                        className="btn-menu-home"
                        onClick={() => {
                            props.history.push('/handheld/move')
                        }}
                    >
                        Move
                    </div>
                    <div
                        className="btn-menu-home"
                        onClick={() => {
                            props.history.push('/handheld/move2')
                        }}
                    >
                        Move NG
                    </div>
                    <div
                        className="btn-menu-home"
                        onClick={() => {
                            props.history.push('/handheld/detail')
                        }}
                    >
                        Detail
                    </div>
                </div>
            </main>
        </AppViewWrapperPure>
    )
}

export default withRouter(HomeMBView)

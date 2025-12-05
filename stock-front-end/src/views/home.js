import React, { useEffect } from 'react'
import AppViewWrapperPure from 'components/app-view-wrapper'
import IconInbound from 'assets/images/icon-home-inbound.png'
import IconOutbound from 'assets/images/icon-home-outbound.png'
import IconInventory from 'assets/images/icon-home-Inventory.png'
import IconStock from 'assets/images/icon-home-stock.png'
import IconMaster from 'assets/images/icon-home-master.png'
import IconHistory from 'assets/images/icon-home-history.png'
import { withRouter } from 'react-router-dom'
import { useWindowWidth } from '@react-hook/window-size'

const HomeView = (props) => {
    const windowWidth = useWindowWidth()

    useEffect(() => {
        if (windowWidth <= 767) {
            props.history.push('/handheld')
        }
    }, [windowWidth])

    return (
        <AppViewWrapperPure page="content">
            <main className="container-home">
                <h1>Select Menu</h1>
                <div className="menu-list-wrapper">
                    <div
                        className="menu-home"
                        onClick={() => {
                            props.history.push('/receipt-list/RM/INBOUND')
                        }}
                    >
                        <div className="box-border-menu">
                            <div className="menu-icon">
                                <img src={IconInbound} />
                            </div>
                        </div>
                        <p>Inbound</p>
                    </div>
                    <div
                        className="menu-home"
                        onClick={() => {
                            props.history.push('/receipt-list/RM/OUTBOUND')
                        }}
                    >
                        <div className="box-border-menu">
                            <div className="menu-icon">
                                <img src={IconOutbound} />
                            </div>
                        </div>
                        <p>Outbound</p>
                    </div>
                    <div
                        className="menu-home"
                        onClick={() => {
                            props.history.push('/inventory')
                        }}
                    >
                        <div className="box-border-menu">
                            <div className="menu-icon">
                                <img src={IconInventory} />
                            </div>
                        </div>
                        <p>Inventory</p>
                    </div>
                    <div
                        className="menu-home"
                        onClick={() => {
                            props.history.push('/stock-part-no')
                        }}
                    >
                        <div className="box-border-menu">
                            <div className="menu-icon">
                                <img src={IconStock} />
                            </div>
                        </div>
                        <p>Stock</p>
                    </div>
                    <div
                        className="menu-home"
                        onClick={() => {
                            props.history.push('/master-product')
                        }}
                    >
                        <div className="box-border-menu">
                            <div className="menu-icon">
                                <img src={IconMaster} />
                            </div>
                        </div>
                        <p>Master</p>
                    </div>
                    <div
                        className="menu-home"
                        onClick={() => {
                            props.history.push('/history')
                        }}
                    >
                        <div className="box-border-menu">
                            <div className="menu-icon">
                                <img src={IconHistory} />
                            </div>
                        </div>
                        <p>History</p>
                    </div>
                </div>
            </main>
        </AppViewWrapperPure>
    )
}

export default withRouter(HomeView)

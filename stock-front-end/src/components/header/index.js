import React from 'react'
import { get } from 'lodash'
import { withRouter } from 'react-router-dom'
import { useStoreActions, useStoreState } from 'easy-peasy'
import Icon from 'assets/images/SiamStarch.png'

const Header = (props) => {
    const isActiveMaster = ['/master-product', '/master-operater', '/master-area', '/master-customer', '/master-supplier'].includes(get(props, 'history.location.pathname', ''))
    const isActiveInbound = ['/receipt-list/RM/INBOUND', '/receipt-list/WIP/INBOUND','/receipt-list/FG/INBOUND','/receipt-list/BS/INBOUND',
        '/receipt/RM/INBOUND', '/receipt/WIP/INBOUND','/receipt/FG/INBOUND','/receipt/BS/INBOUND']
        .includes(get(props, 'history.location.pathname', ''))
    const isActiveOutbound = ['/receipt-list/PICKUP/OUTBOUND']
        .includes(get(props, 'history.location.pathname', ''))
    const isActiveStock = ['/stock-part-no'].includes(get(props, 'history.location.pathname', ''))
    const isActiveInventory = ['/inventory'].includes(get(props, 'history.location.pathname', ''))
    const isActiveHistory= ['/history'].includes(get(props, 'history.location.pathname', ''))
    const isActiveQCCheck= ['/qc-check'].includes(get(props, 'history.location.pathname', ''))

    
    const isActiveHandheld = ['/handheld', '/handheld/rm/inbound', '/handheld/fg/inbound', '/handheld/rm/outbound', '/handheld/fg/outbound',
        '/handheld/inventory', '/handheld/move'].includes(get(props, 'history.location.pathname', ''))
    const clearUser = useStoreActions((actions) => actions.user.clearUser)
    const user = useStoreState((state) => state.user.user)
    
    return (
        <header>
            <div className="container">
                <div className="logo" onClick={() => { props.history.push('/') }}>
                    <img src={Icon} />
                </div>
                <div className="menu">
                    <div className={`menu-item ${isActiveInbound ? 'is-active' : ''}`} onClick={() => { props.history.push('/receipt-list/RM/INBOUND') }}>
                        Inbound
                    </div>
                    <div className={`menu-item ${isActiveOutbound ? 'is-active' : ''}`} onClick={() => { props.history.push('/receipt-list/PICKUP/OUTBOUND') }}>
                        Outbound
                    </div>
                    <div className={`menu-item ${isActiveHandheld ? 'is-active' : ''}`} onClick={() => { props.history.push('/handheld') }}>
                        Handheld
                    </div>
                    <div className={`menu-item ${isActiveInventory ? 'is-active' : ''}`} onClick={() => { props.history.push('/inventory') }}>
                        Inventory
                    </div>
                    <div className={`menu-item ${isActiveStock ? 'is-active' : ''}`} onClick={() => { props.history.push('/stock-part-no') }}>
                        Stock
                    </div>
                    <div className={`menu-item ${isActiveMaster ? 'is-active' : ''}`} onClick={() => { props.history.push('/master-product') }}>
                        Master
                    </div>
                    <div className={`menu-item ${isActiveHistory ? 'is-active' : ''}`} onClick={() => { props.history.push('/history') }}>
                        History
                    </div>
                      <div className={`menu-item ${isActiveQCCheck ? 'is-active' : ''}`} onClick={() => { props.history.push('/qc-check') }}>
                        QC Check
                    </div>
                </div>
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
        </header>
    )
}

export default withRouter(Header)

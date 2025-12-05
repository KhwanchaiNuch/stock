import React from 'react'
import { withRouter } from 'react-router-dom'

const SubHeader = (props) => {
    switch(props.data) {
        case ('RMINBOUND'):
            return (
                <div className="container">
                    <p className="is-active" onClick={() => { props.history.push('/receipt-list/RM/INBOUND') }}>RM Receipt order List</p>
                    <p onClick={() => { props.history.push('/receipt-list/WIP/INBOUND') }}>WIP Receipt order List</p>
                    <p onClick={() => { props.history.push('/receipt-list/FG/INBOUND') }}>FG Receipt order List</p>
                    <p onClick={() => { props.history.push('/receipt-list/BS/INBOUND') }}>BS Receipt order List</p>
                </div>
            )
        case ('WIPINBOUND'):
            return (
                <div className="container">
                    <p onClick={() => { props.history.push('/receipt-list/RM/INBOUND') }}>RM Receipt order List</p>
                    <p className="is-active" onClick={() => { props.history.push('/receipt-list/WIP/INBOUND') }}>WIP Receipt order List</p>
                    <p onClick={() => { props.history.push('/receipt-list/FG/INBOUND') }}>FG Receipt order List</p>
                    <p onClick={() => { props.history.push('/receipt-list/BS/INBOUND') }}>BS Receipt order List</p>
                </div>
            )
        case ('FGINBOUND'):
            return (               
                <div className="container">
                    <p onClick={() => { props.history.push('/receipt-list/RM/INBOUND') }}>RM Receipt order List</p>
                    <p onClick={() => { props.history.push('/receipt-list/WIP/INBOUND') }}>WIP Receipt order List</p>
                    <p className="is-active" onClick={() => { props.history.push('/receipt-list/FG/INBOUND') }}>FG Receipt order List</p>
                    <p onClick={() => { props.history.push('/receipt-list/BS/INBOUND') }}>BS Receipt order List</p>
                </div>
            )
        case ('BSINBOUND'):
            return (
                <div className="container">
                    <p onClick={() => { props.history.push('/receipt-list/RM/INBOUND') }}>RM Receipt order List</p>
                    <p onClick={() => { props.history.push('/receipt-list/WIP/INBOUND') }}>WIP Receipt order List</p>
                    <p onClick={() => { props.history.push('/receipt-list/FG/INBOUND') }}>FG Receipt order List</p>
                    <p className="is-active" onClick={() => { props.history.push('/receipt-list/BS/INBOUND') }}>BS Receipt order List</p>
                </div>
            )
        case ('PICKUPOUTBOUND'):
            return (
                <div className="container">
                    <p className="is-active" onClick={() => { props.history.push('/receipt-list/PICKUP/OUTBOUND') }}>Pickup List</p>
                </div>
            )
        // case ('RMOUTBOUND'):
        //     return (
        //         <div className="container">
        //             <p className="is-active" onClick={() => { props.history.push('/receipt-list/RM/OUTBOUND') }}>RM Pickup List</p>
        //             <p onClick={() => { props.history.push('/receipt-list/WIP/OUTBOUND') }}>WIP Pickup List</p>
        //             <p onClick={() => { props.history.push('/receipt-list/FG/OUTBOUND') }}>FG Pickup List</p>
        //             <p onClick={() => { props.history.push('/receipt-list/BS/OUTBOUND') }}>BS Pickup List</p>
        //         </div>
        //     )
        // case ('WIPOUTBOUND'):
        //     return (
        //         <div className="container">
        //             <p onClick={() => { props.history.push('/receipt-list/RM/OUTBOUND') }}>RM Pickup List</p>
        //             <p className="is-active" onClick={() => { props.history.push('/receipt-list/WIP/OUTBOUND') }}>WIP Pickup List</p>
        //             <p onClick={() => { props.history.push('/receipt-list/FG/OUTBOUND') }}>FG Pickup List</p>
        //             <p onClick={() => { props.history.push('/receipt-list/BS/OUTBOUND') }}>BS Pickup List</p>
        //         </div>
        //     )
        // case ('FGOUTBOUND'):
        //     return (               
        //         <div className="container">
        //             <p onClick={() => { props.history.push('/receipt-list/RM/OUTBOUND') }}>RM Pickup List</p>
        //             <p onClick={() => { props.history.push('/receipt-list/WIP/OUTBOUND') }}>WIP Pickup List</p>
        //             <p className="is-active" onClick={() => { props.history.push('/receipt-list/FG/OUTBOUND') }}>FG Pickup List</p>
        //             <p onClick={() => { props.history.push('/receipt-list/BS/OUTBOUND') }}>BS Pickup List</p>
        //         </div>
        //     )
        // case ('BSOUTBOUND'):
        //     return (
        //         <div className="container">
        //             <p onClick={() => { props.history.push('/receipt-list/RM/OUTBOUND') }}>RM Pickup List</p>
        //             <p onClick={() => { props.history.push('/receipt-list/WIP/OUTBOUND') }}>WIP Pickup List</p>
        //             <p onClick={() => { props.history.push('/receipt-list/FG/OUTBOUND') }}>FG Pickup List</p>
        //             <p className="is-active" onClick={() => { props.history.push('/receipt-list/BS/OUTBOUND') }}>BS Pickup List</p>
        //         </div>
        //     )
        default:
            return (
                <div className="container">
                    <p className="is-active" onClick={() => { props.history.push('/receipt-list/RM/INBOUND') }}>RM Receipt order List</p>
                    <p onClick={() => { props.history.push('/receipt-list/WIP/INBOUND') }}>WIP Receipt order List</p>
                    <p onClick={() => { props.history.push('/receipt-list/FG/INBOUND') }}>FG Receipt order List</p>
                    <p onClick={() => { props.history.push('/receipt-list/BS/INBOUND') }}>BS Receipt order List</p>
                </div>
            )
    }
}

export default withRouter(SubHeader);
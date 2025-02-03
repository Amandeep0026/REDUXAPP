import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index' 
import { useSelector } from 'react-redux'

const Shop = () => {
    const dispatch = useDispatch()
    const balance = useSelector(state => state.amount)
    const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
    return (
        <>
        <h1>Deposit/Withdraw Money</h1>
            {/* <button className="btn btn-primary mx-2" onClick={()=> {dispatch(actionCreators.withdrawMoney(100))}} >-</button>
                Update Balance 
            <button className="btn btn-primary mx-2" onClick={()=> {dispatch(actionCreators.depositMoney(100))}}>+</button> */}


            <button className="btn btn-primary mx-2" onClick={()=> {withdrawMoney(100)}} >-</button>
                Update Balance ({balance})
            <button className="btn btn-primary mx-2" onClick={()=> {depositMoney(100)}}>+</button>
        </>
    )
}

export default Shop
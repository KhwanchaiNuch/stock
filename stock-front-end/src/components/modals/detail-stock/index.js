import React from 'react'
import Modal from 'react-modal'
import { useStoreActions, useStoreState } from 'easy-peasy'
import ModalContainer from '../container'
import { modalStyles } from '../styles'
import * as F from './styled'
import useGet from 'hooks/useGet'
import IconArrow from 'assets/images/ico-arrow-b.png'
import { map, get, isEmpty } from 'lodash'
import { withRouter } from 'react-router-dom'

const DetailStock = ({ title, id, ...props }) => {
  const closeModal = useStoreActions(dispatch => dispatch.modal.closeModal)
  const { isOpen } = useStoreState(state => state.modal)
  const styles = modalStyles(770)

  const { data } = useGet('/api/v1/product/stock/product-detail', {
    variables: {
      productId: id,
    }
  })

    // Format the number as Thai Baht currency
    const formattedAmount = new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB',
    });


  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={() => {
        closeModal()
      }}
      style={styles}
      closeTimeoutMS={330}
    >
      <ModalContainer>
        <F.Container>
          <h1>
            {`Detail - ${title}`}
          </h1>
          {!isEmpty(get(data, 'result.areas', [])) && (
            <table className="area-section">
              <tbody>
                <tr className="items-area">
                  <td className="item">
                    <p>Area No.</p>
                  </td>
                  <td className="item">
                    <p>Lot No</p>
                  </td>
                  <td className="item">
                    Stock
                  </td>
                  <td className="item">
                    Price
                  </td>
                  <td className="item">
                    Sum
                  </td>
                </tr>
                {map(get(data, 'result.areas', []), (v, i) => {
                  return (
                    <tr key={i} className="items-area">
                      <td className="item">
                        {get(v, 'area.areaNo', '')}
                      </td>
                      <td className="item">
                        {get(v, 'lotNo', '')}
                      </td>
                      <td className="item">
                        {`${get(v, 'temp_stock', 0)}`}
                      </td>
                      <td className="item">
                        {`${formattedAmount.format(get(v, 'price', 0))}`}
                      </td>
                      <td className="item">
                        {`${formattedAmount.format(get(v, 'temp_sumPrice', 0))}`}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )}
          {!isEmpty(get(data, 'result.receiptItems', [])) && (
            <>
              <div className="receipt-amount">
                <p>
                  {`receipt Amount ${get(data, 'result.receiptItems', []).length}`}
                </p>
              </div>
              <div className="receipt-item-wrapper">
                {map(get(data, 'result.receiptItems', []), (v, i) => {
                  return (
                    <div
                      className="receipt-item"
                      key={`receipt-item-${i}`}
                      onClick={() => {
                        closeModal()
                        props.history.push(`/receipt/${get(v, 'receiptNo', '')}`)
                      }}
                    >
                      <p>{'receipt no.'}</p>
                      <span>{get(v, 'receiptNo', '')}</span>
                      <img src={IconArrow} />
                    </div>
                  )
                })}
              </div>
            </>
          )}
        </F.Container>
      </ModalContainer>
    </Modal>
  )
}

export default withRouter(DetailStock)

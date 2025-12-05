import React from 'react'
import { useStoreState } from 'easy-peasy'
import AddMasterProduct from './add-master-product'
import AddMasterOperator from './add-master-operater'
import AddMasterArea from './add-master-area'
import AddMasterCustomer from './add-master-customer'
import AddMasterSupplier from './add-master-supplier'
import EditStockPartNo from './edit-stock-part-no'
import StartInventory from './start-inventory'
import EditHistoryNote from './edit-history-note'
import EditReceiptNote from './edit-receipt-note'
import EditMasterProduct from './edit-master-product'
import ReceiptNumber from './receipt-number'
import ErrorScan from './scan/error'
import DetailStock from './detail-stock'
import AdjustInventory from './adjust-inventory'
import DeleteReceiptItem from './delete-receipt-item'
import CreateReceiptPDF from './create-files/receipt-pdf'
import CreateReceipt from './create-receipt/receipt'
import CreatePickup from './create-pickup/pickup'
import HideReceipt from './hide-receipt/hide-receipt'
import UnhideReceipt from './unhide-receipt/unhide-receipt'

// ✅ เพิ่มอันนี้
import EditQcStatus from './edit-qc-status'

const MODAL_COMPONENTS = {
  CREATE_RECEIPT_PDF: CreateReceiptPDF,
  CREATE_RECEIPT: CreateReceipt,
  CREATE_PICKUP: CreatePickup,
  ADD_MASTER_PRODUCT: AddMasterProduct,
  ADD_MASTER_OPERATER: AddMasterOperator,
  ADD_MASTER_AREA: AddMasterArea,
  ADD_MASTER_CUSTOMER: AddMasterCustomer,
  ADD_MASTER_SUPPLIER: AddMasterSupplier,
  EDIT_STOCK_PART_NO: EditStockPartNo,
  START_INVENTORY: StartInventory,
  EDIT_MASTER_PRODUCT: EditMasterProduct,
  EDIT_HISTORY_NOTE: EditHistoryNote,
  EDIT_RECEIPT_NOTE: EditReceiptNote,
  RECEIPT_NUMBER: ReceiptNumber,
  ERROR_SCAN: ErrorScan,
  DETAIL_STOCK: DetailStock,
  ADJUST_INVENTORY: AdjustInventory,
  DELETE_RECEIPT_ITEM: DeleteReceiptItem,
  HIDE_RECEIPT: HideReceipt,
  UNHIDE_RECEIPT: UnhideReceipt,

  // ✅ map type ใหม่ให้ modalRoot รู้จัก
  EDIT_QC_STATUS: EditQcStatus,
}

const modalRoot = () => {
  const { modalType, modalProps } = useStoreState((state) => state.modal)
  if (!modalType) {
    return null
  }

  const SpecificModal = MODAL_COMPONENTS[modalType]
  return <SpecificModal {...modalProps} />
}

export default modalRoot

export interface IGetRawMaterialInBoundOutBound {
  id: string;
  status: string;
  quantity: number;
  invoiceNo: string;
  lotNo: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  date: Date;
  partNo: string;
  partName: string;
  supplier: string;
  receivedBy: string;
}

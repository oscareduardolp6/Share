import { SiteTypesEnum } from "./SiteTypes.ts";

export interface TransactionDTO {
  transactionId: number
  productId: string 
  price: number 
  quantity: number
  date: Date 
  clientId: string 
  supplierId: string 
  type: TransactionTypes
  fromSite: SiteTypesEnum
  toSite: SiteTypesEnum
  sellerId?: number
  sellerName?: string
}

export enum TransactionTypes {
  Sale = 1,
  Purchase = 2, 
  Error = 3, 
  SiteMovement = 4
}

const descriptionsTransactionsTypes = {
  1: 'Venta', 
  2: 'Compra', 
  3: 'Error', 
  4: 'Movimiento entre almacenes'
}

export const transactionTypesDescription = Object.freeze(descriptionsTransactionsTypes)
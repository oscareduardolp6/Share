import { SiteTypesEnum } from "./SiteTypes";

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
  folio?: string
  productCategory?: string

}

export enum TransactionTypes {
  PublicSale = 1,
  Purchase = 2, 
  Error = 3, 
  SiteMovement = 4, 
  MortgageSale = 5
}

const descriptionsTransactionsTypes = {
  1: 'Venta Pública', 
  2: 'Compra', 
  3: 'Error', 
  4: 'Movimiento entre almacenes', 
  5: 'Venta Hipóteca'
}

export const transactionTypesDescription = Object.freeze(descriptionsTransactionsTypes)
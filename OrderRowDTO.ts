import { TransactionTypes } from "./TransactionDTO.ts";

export interface OrderRowDTO {
  productID: string 
  clientID: string
  privateSiteQuantity: number
  publicSiteQuantity: number
  sellerID: string
  sellType: TransactionTypes
  folio?: string
  price: number 
}
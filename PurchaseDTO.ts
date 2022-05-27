export interface PurchaseDTO {
  productId: string
  privateStockAdded: number 
  publicStockAdded: number
  supplierId?: string
  price: number
}
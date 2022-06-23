export interface ProductDTO {
  id: string 
  name: string 
  description: string 
  color: string 
  brand: string 
  fabric: string 
  size: string 
  price: number 
  mortgagePrice: number 
  publicPrice: number 
  suppliers: string
  shouldAlertLowStock: boolean 
  alertLowStockQuantity: number
  showSiteQuantity: number
  privateSiteQuantity: number
}

export const initializedProductDTO: ProductDTO = {
  id                    : '', 
  name                  : '', 
  description           : '', 
  brand                 : '', 
  color                 : '', 
  fabric                : '', 
  size                  : '', 
  suppliers             : '',
  price                 : 0, 
  mortgagePrice         : 0, 
  privateSiteQuantity   : 0, 
  publicPrice           : 0, 
  showSiteQuantity      : 0, 
  alertLowStockQuantity : 0, 
  shouldAlertLowStock   : false
}
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
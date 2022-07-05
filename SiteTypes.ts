export type SitesTypes = 
    1 // Private Stock 
  | 2 // Públic Stock 
  | 3 // Failed Site 
  | 4 // Client (Sale)
  | 5 // Purchase 

export const FAILED_SITE = 3 

export enum SiteTypesEnum {
  PrivateSite = 1, 
  PublicSite  = 2,
  FailedSite  = 3, 
  ClientSite  = 4, 
  Purchase    = 5 //Agregar a la base de datos
}

export const siteNames: Record<SitesTypes, string> = {
  "1": 'Almacén', 
  "2": 'Exhibición', 
  "3": 'Error', 
  "4": 'Cliente', 
  "5": 'Proveedor'
}
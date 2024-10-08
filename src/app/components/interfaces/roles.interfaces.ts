export interface RolePermissions {
    id: number;
    Roles_id: number;
    List_Roles: number;
    Add_Roles: number;
    Modify_Roles: number;
    Delete_Roles: number;
    List_Users: number;
    Add_Users: number;
    Modify_Users: number;
    Delete_Users: number;
    List_Unit_Org: number;
    List_Sales_Org: number;
    Add_Sales_Org: number;
    Modify_Sales_Org: number;
    Delete_Sales_Org: number;
    List_Devices: number;
    Add_Devices: number;
    Modify_Devices: number;
    Delete_Devices: number;
    List_Accounts: number;
    Add_Accounts: number;
    Modify_Accounts: number;
    Delete_Accounts: number;
    List_Prospects: number;
    Add_Prospects: number;
    Modify_Prospects: number;
    List_Type_Accounts: number;
    Add_Type_Accounts: number;
    Modify_Type_Accounts: number;
    Delete_Type_Accounts: number;
    List_Classifications_Accounts: number;
    Add_Classifications_Accounts: number;
    Modify_Classifications_Accounts: number;
    Delete_Classifications_Accounts: number;
    Lista_Contacts: number;
    Add_Contacts: number;
    Modify_Contacts: number;
    Delete_Contacts: number;
    List_Warehouses: number;
    Add_Warehouses: number;
    Modify_Warehouses: number;
    Delete_Warehouses: number;
    List_Routes: number;
    Add_Routes: number;
    Modify_Routes: number;
    Delete_Routes: number;
    List_Trucks: number;
    Add_Trucks: number;
    Modify_Trucks: number;
    Delete_Trucks: number;
    List_Payment_Conditions: number;
    Add_Payment_Conditions: number;
    Modify_Payment_Conditions: number;
    Delete_Payment_Conditions: number; 
    List_Competence_Business: number; 
    Add_Competence_Business:number; 
    Modify_Competence_Business:number; 
    Delete_Competence_Business:number; 
    List_Competence_Products:number; 
    Add_Competence_Products:number; 
    Modify_Competence_Products:number; 
    Delete_Competence_Products:number; 
    List_Order_Type:number; 
    Add_Order_Type:number; 
    Modify_Order_Type:number; 
    Delete_Order_Type:number; 
    List_Group_Promotions:number; 
    Add_Group_Promotions:number; 
    Modify_Group_Promotions:number; 
    Delete_Group_Promotions:number; 
    List_Promotions:number; 
    Add_Promotions:number; 
    Modify_Promotions:number; 
   Delete_Promotions:number; 
   List_Orders:number; 
   Add_Orders:number; 
   Modify_Orders:number; 
   Delete_Orders:number; 
   List_Orders_history:number; 
   List_Collections:number; 
   Add_Collections:number; 
   Modify_Collections:number; 
   Delete_Collections:number; 
   List_Collections_Pending:number; 
   Add_Collections_Pending:number; 
   Modify_Collections_Pending:number; 
   Delete_Collections_Pending:number; 
   List_Returns:number; 
   Add_Returns:number; 
   Modify_Returns:number; 
   Delete_Returns:number; 
   List_Credit_Note:number; 
   Add_Credit_Note:number; 
   Modify_Credit_Note:number; 
   Delete_Credit_Note:number; 
   List_Debit_Note:number; 
   Add_Debit_Note:number; 
   Modify_Debit_Note:number; 
   Delete_Debit_Note:number;  
   List_Delivery_Management:number;  
   Add_Delivery_Management:number;  
   Modify_Delivery_Management:number;  
   Delete_Delivery_Management:number;  
   List_Prices_Captured:number;  
   Add_Prices_Captured:number;  
   Modify_Prices_Captured:number;  
   Delete_Prices_Captured:number;  
   List_Loads:number;  
   Add_Loads:number;  
   Modify_Loads:number;  
   Delete_Loads:number;  
   List_Stocks:number;  
   List_Reloads:number;  
   Add_Reloads:number;  
   Modify_Reloads:number;  
   Delete_Reloads:number;

  created_at:string,
  updated_at:string,
  deleted_at:string | null,
  created_user:string | null,
  updated_user:string | null,
  deleted_user:string | null,
  Add_Unit_Org :number,
  Modify_Unit_Org :number,
  Delete_Unit_Org :number
}


export interface Role {
  id?: number;
  Code: string;
  Description: string;
  Sales_Organizations_id: number;
  created_at?: string; // Puedes usar Date si prefieres manejarlo como objeto de fecha
  updated_at?: string; // Lo mismo aquí
  deleted_at?: string | null; // Puede ser null
  created_user?: string | null; // Puede ser null
  updated_user?: string | null; // Puede ser null
  deleted_user?: string | null; // Puede ser null
}

export interface NewRole {
  Code: string;
  Description: string;
  Sales_Organizations_id: number;
}
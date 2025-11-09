export interface AllContactsResponse {
    message: string;
    object:  Contact[];
}

export interface ContactResponse {
    message: string;
    object:  Contact;
}


export interface UpdateContact {
  id: string;      
  firstName?: string;
  middleName?: string;
  lastName?: string;  
  nickname: string;   
  birthday?: string;  
  gender?: string;    
  isActive: boolean;  
  companyId?: number; 
}

export interface Contact {
    id:             string;
    firstName:      string;
    middleName:     string;
    lastName:       string;
    nickname:       string;
    birthday:       string;
    gender:         string;
    isActive:       boolean;
    contactCompany: ContactCompany;
}

export interface ContactCompany {
    id:          number;
    name:        string;
    email:       string;
    phoneNumber: string;
    isActive:    boolean;
}
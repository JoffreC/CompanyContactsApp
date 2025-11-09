export interface CompanyEssentialInfoResponse {
    message: string;
    object: CompanyEssentialInfo[];
}

export interface CompanyEssentialInfo {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    isActive: boolean;
}

export interface CompanyResponse {
    message: string;
    object: Company;
}

export interface Company {
    id: number;
    employerIdentificationNumber: string;
    name: string;
    structure: string;
    email: string;
    phoneNumber: string;
    locations: Location[];
    contacts: ContactInfo[];
    isActive: boolean;
}

export interface UpdateCompany {
    id: number;
    employerIdentificationNumber: string;
    name: string;
    structure: string;
    email: string;
    phoneNumber: string;
    locations: Location[];
    isActive: boolean;
}

export interface ContactInfo {
    id: string;
    firstName: string;
    middleName: string;
    lastName: string;
    nickname: string;
    birthday: Date;
    gender: string;
    isActive: boolean;
}

export interface Location {
    id: number;
    firstAddress: string;
    secondAddress: string;
    city: string;
    province: string;
    country: string;
    companyId: number;
}

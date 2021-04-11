
export interface security {
    ip: string,
    host: string,
    cookie: string,
    userAgent: string,
    deviceFingerPrint: string,
}

export interface operationResult {
    code: string,
    message: string
}

export interface requestLogin {
    channelId: string,
    username: string,
    password: string,
    language: string,
    security: security,
}

export interface responseLogin {
    operationResult: operationResult,
    channel?: object,
    program?: object,
    authenticationToken?: string,
    firstName?: string,
    lastName?: string,
    mustChangePassword?: boolean,
    [propName: string]: any;
}

export interface requestGetAccount {
    channelId: string,
    language: string,
    email: string,
    security: security,
}

export interface responseGetAccount {
    operationResult: operationResult,
    escapeBot: string,
    accountResultDto: AccountResult,
}


export interface AccountResult {
    channelID: string,
    channelId: number,
    accountId: string,
    bin: string,
    balance: string,
    redemptionValuePerPoint: string,
    fl: string, // bolean?
    accountSumaryDto: AccountSumaryDto
}

export interface AccountSumaryDto {
    status: string,
    firstName: string,
    lastName1: string,
    emailaddress: string,
    creditCards: object[],
    validateName: boolean
}







/* ip: '12.12.12.12',
    host: 'Localhost',
    cookie: 'cookie',
    userAgent: 'userAgent',
    deviceFingerPrint: 'deviceFingerPrint', */
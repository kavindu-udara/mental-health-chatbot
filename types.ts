export interface Message {
    text: string;
    isUser: boolean;
    time: string;
}

export interface Provider {
    callbackUrl: string;
    id: string;
    name: string;
    signinUrl: string;
    type: string;
}

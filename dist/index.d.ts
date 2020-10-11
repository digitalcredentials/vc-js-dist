declare const _exports: {
    issue: (options?: {
        credential: any;
        suite: any;
        purpose?: any;
        documentLoader?: any;
        expansionMap?: any;
        compactProof?: boolean;
    }) => Promise<any>;
    createPresentation: ({ verifiableCredential, id, holder }?: {
        verifiableCredential?: any;
        id?: string;
        holder?: string;
    }) => any;
    signPresentation: (options?: {
        presentation: any;
        suite: any;
        purpose?: any;
        domain?: string;
        challenge: string;
        documentLoader?: Function;
    }) => Promise<{
        VerifiablePresentation: any;
    }>;
    verify: (options?: {
        presentation: any;
    }) => Promise<import("./vc.js").VerifyPresentationResult>;
    verifyCredential: (options?: {
        credential: any;
    }) => Promise<import("./vc.js").VerifyCredentialResult>;
    CredentialIssuancePurpose: typeof import("./CredentialIssuancePurpose.js");
    defaultDocumentLoader: any;
    _checkCredential: (credential: any) => void;
    _checkPresentation: (presentation: any) => void;
    dateRegex: RegExp;
};
export = _exports;

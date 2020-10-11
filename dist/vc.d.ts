export type VerifyPresentationResult = {
    /**
     * - True if verified, false if not.
     */
    verified: boolean;
    presentationResult: object;
    credentialResults: any[];
    error: object;
};
export type VerifyCredentialResult = {
    /**
     * - True if verified, false if not.
     */
    verified: boolean;
    statusResult: object;
    results: any[];
    error: object;
};
/**
 * @typedef {object} VerifyPresentationResult
 * @property {boolean} verified - True if verified, false if not.
 * @property {object} presentationResult
 * @property {Array} credentialResults
 * @property {object} error
 */
/**
 * @typedef {object} VerifyCredentialResult
 * @property {boolean} verified - True if verified, false if not.
 * @property {object} statusResult
 * @property {Array} results
 * @property {object} error
 */
/**
 * Issues a verifiable credential (by taking a base credential document,
 * and adding a digital signature to it).
 *
 * @param {object} [options={}] - The options to use.
 *
 * @param {object} options.credential - Base credential document.
 * @param {LinkedDataSignature} options.suite - Signature suite (with private
 *   key material), passed in to sign().
 *
 * Either pass in a ProofPurpose, or a default one will be created:
 * @param {ProofPurpose} [options.purpose]
 *
 * Other optional params passed to `sign()`:
 * @param {object} [options.documentLoader] - A document loader.
 * @param {object} [options.expansionMap] - An expansion map.
 * @param {boolean} [options.compactProof] - Should the proof be compacted.
 *
 * @throws {Error} If missing required properties.
 *
 * @returns {Promise<VerifiableCredential>} Resolves on completion.
 */
export function issue(options?: {
    credential: object;
    suite: any;
    purpose: any;
    documentLoader: object;
    expansionMap: object;
    compactProof: boolean;
}): Promise<any>;
/**
 * Creates an unsigned presentation from a given verifiable credential.
 *
 * @param {object} options - Options to use.
 * @param {object|Array<object>} [options.verifiableCredential] - One or more
 *   verifiable credential.
 * @param {string} [options.id] - Optional VP id.
 * @param {string} [options.holder] - Optional presentation holder url.
 *
 * @throws {TypeError} If verifiableCredential param is missing.
 * @throws {Error} If the credential (or the presentation params) are missing
 *   required properties.
 *
 * @returns {Presentation} The credential wrapped inside of a
 *   VerifiablePresentation.
 */
export function createPresentation({ verifiableCredential, id, holder }?: {
    verifiableCredential: object | Array<object>;
    id: string;
    holder: string;
}): any;
/**
 * Signs a given presentation.
 *
 * @param {object} [options={}] - Options to use.
 *
 * Required:
 * @param {Presentation} options.presentation
 * @param {LinkedDataSignature} options.suite - passed in to sign()
 *
 * Either pass in a ProofPurpose, or a default one will be created with params:
 * @param {ProofPurpose} [options.purpose]
 * @param {string} [options.domain]
 * @param {string} options.challenge - Required.
 *
 * @param {Function} [options.documentLoader]
 *
 * @returns {Promise<{VerifiablePresentation}>} A VerifiablePresentation with
 *   a proof.
 */
export function signPresentation(options?: {
    presentation: any;
    suite: any;
    purpose: any;
    domain: string;
    challenge: string;
    documentLoader: Function;
}): Promise<{
    VerifiablePresentation;
}>;
/**
 * Verifies a verifiable presentation:
 *   - Checks that the presentation is well-formed
 *   - Checks the proofs (for example, checks digital signatures against the
 *     provided public keys).
 *
 * @param {object} [options={}] - The options to use.
 *
 * @param {VerifiablePresentation} options.presentation - Verifiable
 *   presentation, signed or unsigned, that may contain within it a
 *   verifiable credential.
 *
 * @param {LinkedDataSignature|LinkedDataSignature[]} suite - One or more
 *   signature suites that are supported by the caller's use case. This is
 *   an explicit design decision -- the calling code must specify which
 *   signature types (ed25519, RSA, etc) are allowed.
 *   Although it is expected that the secure resolution/fetching of the public
 *   key material (to verify against) is to be handled by the documentLoader,
 *   the suite param can optionally include the key directly.
 *
 * @param {boolean} [options.unsignedPresentation=false] - By default, this
 *   function assumes that a presentation is signed (and will return an error if
 *   a `proof` section is missing). Set this to `true` if you're using an
 *   unsigned presentation.
 *
 * Either pass in a proof purpose,
 * @param {AuthenticationProofPurpose} [options.presentationPurpose] - Optional
 *   proof purpose (a default one will be created if not passed in).
 *
 * or a default purpose will be created with params:
 * @param {string} [options.challenge] - Required if purpose is not passed in.
 * @param {string} [options.controller]
 * @param {string} [options.domain]
 *
 * @param {Function} [options.documentLoader]
 * @param {Function} [options.checkStatus]
 *
 * @returns {Promise<VerifyPresentationResult>} The verification result.
 */
export function verify(options?: {
    presentation: any;
}): Promise<VerifyPresentationResult>;
/**
 * Verifies a verifiable credential:
 *   - Checks that the credential is well-formed
 *   - Checks the proofs (for example, checks digital signatures against the
 *     provided public keys).
 *
 * @param {object} [options={}]
 *
 * @param {object} options.credential - Verifiable credential.
 *
 * @param {LinkedDataSignature|LinkedDataSignature[]} suite - One or more
 *   signature suites that are supported by the caller's use case. This is
 *   an explicit design decision -- the calling code must specify which
 *   signature types (ed25519, RSA, etc) are allowed.
 *   Although it is expected that the secure resolution/fetching of the public
 *   key material (to verify against) is to be handled by the documentLoader,
 *   the suite param can optionally include the key directly.
 *
 * @param {CredentialIssuancePurpose} [options.purpose] - Optional
 *   proof purpose (a default one will be created if not passed in).
 * @param {Function} [options.documentLoader]
 * @param {Function} [options.checkStatus] - Optional function for checking
 *   credential status if `credentialStatus` is present on the credential.
 *
 * @returns {Promise<VerifyCredentialResult>} The verification result.
 */
export function verifyCredential(options?: {
    credential: object;
}): Promise<VerifyCredentialResult>;
export const CredentialIssuancePurpose: typeof import("./CredentialIssuancePurpose");
export const defaultDocumentLoader: any;
/**
 * @param {object} credential - An object that could be a VerifiableCredential.
 * @throws {Error}
 * @private
 */
export function _checkCredential(credential: object): void;
/**
 * @param {object} presentation - An object that could be a presentation.
 * @throws {Error}
 * @private
 */
export function _checkPresentation(presentation: object): void;
export const dateRegex: RegExp;

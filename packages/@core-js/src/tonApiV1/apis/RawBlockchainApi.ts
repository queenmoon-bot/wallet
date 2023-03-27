/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: contact@fslabs.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Account,
  Block,
  Transaction,
  Transactions,
  Validators,
} from '../models';
import {
    AccountFromJSON,
    AccountToJSON,
    BlockFromJSON,
    BlockToJSON,
    TransactionFromJSON,
    TransactionToJSON,
    TransactionsFromJSON,
    TransactionsToJSON,
    ValidatorsFromJSON,
    ValidatorsToJSON,
} from '../models';

export interface GetAccountRequest {
    account: string;
}

export interface GetBlockByIdRequest {
    blockId: string;
}

export interface GetTransactionRequest {
    hash: string;
}

export interface GetTransactionsRequest {
    account?: string;
    maxLt?: number;
    minLt?: number;
    limit?: number;
}

/**
 * RawBlockchainApi - interface
 * 
 * @export
 * @interface RawBlockchainApiInterface
 */
export interface RawBlockchainApiInterface {
    /**
     * Get raw account data
     * @param {string} account address in raw (hex without 0x) or base64url format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RawBlockchainApiInterface
     */
    getAccountRaw(requestParameters: GetAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Account>>;

    /**
     * Get raw account data
     */
    getAccount(requestParameters: GetAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Account>;

    /**
     * Get block by id
     * @param {string} blockId block id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RawBlockchainApiInterface
     */
    getBlockByIdRaw(requestParameters: GetBlockByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Block>>;

    /**
     * Get block by id
     */
    getBlockById(requestParameters: GetBlockByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Block>;

    /**
     * Get transaction by hash
     * @param {string} hash transaction hash in hex (without 0x) or base64url format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RawBlockchainApiInterface
     */
    getTransactionRaw(requestParameters: GetTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transaction>>;

    /**
     * Get transaction by hash
     */
    getTransaction(requestParameters: GetTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transaction>;

    /**
     * Get transactions
     * @param {string} [account] address in raw (hex without 0x) or base64url format
     * @param {number} [maxLt] omit this parameter to get last transactions
     * @param {number} [minLt] omit this parameter to get last transactions
     * @param {number} [limit] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RawBlockchainApiInterface
     */
    getTransactionsRaw(requestParameters: GetTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transactions>>;

    /**
     * Get transactions
     */
    getTransactions(requestParameters: GetTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transactions>;

    /**
     * Get validators info list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RawBlockchainApiInterface
     */
    getValidatorsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Validators>>;

    /**
     * Get validators info list
     */
    getValidators(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Validators>;

}

/**
 * 
 */
export class RawBlockchainApi extends runtime.BaseAPI implements RawBlockchainApiInterface {

    /**
     * Get raw account data
     */
    async getAccountRaw(requestParameters: GetAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Account>> {
        if (requestParameters.account === null || requestParameters.account === undefined) {
            throw new runtime.RequiredError('account','Required parameter requestParameters.account was null or undefined when calling getAccount.');
        }

        const queryParameters: any = {};

        if (requestParameters.account !== undefined) {
            queryParameters['account'] = requestParameters.account;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("JWTAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/blockchain/getAccount`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountFromJSON(jsonValue));
    }

    /**
     * Get raw account data
     */
    async getAccount(requestParameters: GetAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Account> {
        const response = await this.getAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get block by id
     */
    async getBlockByIdRaw(requestParameters: GetBlockByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Block>> {
        if (requestParameters.blockId === null || requestParameters.blockId === undefined) {
            throw new runtime.RequiredError('blockId','Required parameter requestParameters.blockId was null or undefined when calling getBlockById.');
        }

        const queryParameters: any = {};

        if (requestParameters.blockId !== undefined) {
            queryParameters['block_id'] = requestParameters.blockId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("JWTAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/blockchain/getBlock`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BlockFromJSON(jsonValue));
    }

    /**
     * Get block by id
     */
    async getBlockById(requestParameters: GetBlockByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Block> {
        const response = await this.getBlockByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get transaction by hash
     */
    async getTransactionRaw(requestParameters: GetTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transaction>> {
        if (requestParameters.hash === null || requestParameters.hash === undefined) {
            throw new runtime.RequiredError('hash','Required parameter requestParameters.hash was null or undefined when calling getTransaction.');
        }

        const queryParameters: any = {};

        if (requestParameters.hash !== undefined) {
            queryParameters['hash'] = requestParameters.hash;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("JWTAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/blockchain/getTransaction`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionFromJSON(jsonValue));
    }

    /**
     * Get transaction by hash
     */
    async getTransaction(requestParameters: GetTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transaction> {
        const response = await this.getTransactionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get transactions
     */
    async getTransactionsRaw(requestParameters: GetTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transactions>> {
        const queryParameters: any = {};

        if (requestParameters.account !== undefined) {
            queryParameters['account'] = requestParameters.account;
        }

        if (requestParameters.maxLt !== undefined) {
            queryParameters['maxLt'] = requestParameters.maxLt;
        }

        if (requestParameters.minLt !== undefined) {
            queryParameters['minLt'] = requestParameters.minLt;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("JWTAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/blockchain/getTransactions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionsFromJSON(jsonValue));
    }

    /**
     * Get transactions
     */
    async getTransactions(requestParameters: GetTransactionsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transactions> {
        const response = await this.getTransactionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get validators info list
     */
    async getValidatorsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Validators>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("JWTAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/blockchain/validators`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ValidatorsFromJSON(jsonValue));
    }

    /**
     * Get validators info list
     */
    async getValidators(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Validators> {
        const response = await this.getValidatorsRaw(initOverrides);
        return await response.value();
    }

}

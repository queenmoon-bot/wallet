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
  Subscriptions,
} from '../models';
import {
    SubscriptionsFromJSON,
    SubscriptionsToJSON,
} from '../models';

export interface GetSubscriptionsByWalletRequest {
    account: string;
}

/**
 * SubscriptionApi - interface
 * 
 * @export
 * @interface SubscriptionApiInterface
 */
export interface SubscriptionApiInterface {
    /**
     * Get all subscriptions by wallet address
     * @param {string} account address in raw (hex without 0x) or base64url format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionApiInterface
     */
    getSubscriptionsByWalletRaw(requestParameters: GetSubscriptionsByWalletRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Subscriptions>>;

    /**
     * Get all subscriptions by wallet address
     */
    getSubscriptionsByWallet(requestParameters: GetSubscriptionsByWalletRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Subscriptions>;

}

/**
 * 
 */
export class SubscriptionApi extends runtime.BaseAPI implements SubscriptionApiInterface {

    /**
     * Get all subscriptions by wallet address
     */
    async getSubscriptionsByWalletRaw(requestParameters: GetSubscriptionsByWalletRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Subscriptions>> {
        if (requestParameters.account === null || requestParameters.account === undefined) {
            throw new runtime.RequiredError('account','Required parameter requestParameters.account was null or undefined when calling getSubscriptionsByWallet.');
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
            path: `/v1/subscription/getByWallet`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionsFromJSON(jsonValue));
    }

    /**
     * Get all subscriptions by wallet address
     */
    async getSubscriptionsByWallet(requestParameters: GetSubscriptionsByWalletRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Subscriptions> {
        const response = await this.getSubscriptionsByWalletRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

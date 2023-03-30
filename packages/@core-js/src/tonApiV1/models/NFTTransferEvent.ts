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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface NFTTransferEvent
 */
export interface NFTTransferEvent {
    /**
     * 
     * @type {number}
     * @memberof NFTTransferEvent
     */
    eventId: number;
    /**
     * 
     * @type {string}
     * @memberof NFTTransferEvent
     */
    eventName: NFTTransferEventEventNameEnum;
    /**
     * 
     * @type {string}
     * @memberof NFTTransferEvent
     */
    newOwner: string;
    /**
     * 
     * @type {string}
     * @memberof NFTTransferEvent
     */
    nftAddress: string;
}


/**
 * @export
 */
export const NFTTransferEventEventNameEnum = {
    NewTransaction: 'new_transaction'
} as const;
export type NFTTransferEventEventNameEnum = typeof NFTTransferEventEventNameEnum[keyof typeof NFTTransferEventEventNameEnum];


/**
 * Check if a given object implements the NFTTransferEvent interface.
 */
export function instanceOfNFTTransferEvent(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "eventId" in value;
    isInstance = isInstance && "eventName" in value;
    isInstance = isInstance && "newOwner" in value;
    isInstance = isInstance && "nftAddress" in value;

    return isInstance;
}

export function NFTTransferEventFromJSON(json: any): NFTTransferEvent {
    return NFTTransferEventFromJSONTyped(json, false);
}

export function NFTTransferEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): NFTTransferEvent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'eventId': json['event_id'],
        'eventName': json['event_name'],
        'newOwner': json['new_owner'],
        'nftAddress': json['nft_address'],
    };
}

export function NFTTransferEventToJSON(value?: NFTTransferEvent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'event_id': value.eventId,
        'event_name': value.eventName,
        'new_owner': value.newOwner,
        'nft_address': value.nftAddress,
    };
}


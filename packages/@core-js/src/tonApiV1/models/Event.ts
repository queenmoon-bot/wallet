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
import type { Action } from './Action';
import {
    ActionFromJSON,
    ActionFromJSONTyped,
    ActionToJSON,
} from './Action';
import type { Fee } from './Fee';
import {
    FeeFromJSON,
    FeeFromJSONTyped,
    FeeToJSON,
} from './Fee';

/**
 * 
 * @export
 * @interface Event
 */
export interface Event {
    /**
     * 
     * @type {Array<Action>}
     * @memberof Event
     */
    actions: Array<Action>;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    eventId: string;
    /**
     * 
     * @type {Array<Fee>}
     * @memberof Event
     */
    fees: Array<Fee>;
    /**
     * Event is not finished yet. Transactions still happening
     * @type {boolean}
     * @memberof Event
     */
    inProgress: boolean;
    /**
     * scam
     * @type {boolean}
     * @memberof Event
     */
    isScam: boolean;
    /**
     * 
     * @type {number}
     * @memberof Event
     */
    lt: number;
    /**
     * 
     * @type {number}
     * @memberof Event
     */
    timestamp: number;
}

/**
 * Check if a given object implements the Event interface.
 */
export function instanceOfEvent(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "actions" in value;
    isInstance = isInstance && "eventId" in value;
    isInstance = isInstance && "fees" in value;
    isInstance = isInstance && "inProgress" in value;
    isInstance = isInstance && "isScam" in value;
    isInstance = isInstance && "lt" in value;
    isInstance = isInstance && "timestamp" in value;

    return isInstance;
}

export function EventFromJSON(json: any): Event {
    return EventFromJSONTyped(json, false);
}

export function EventFromJSONTyped(json: any, ignoreDiscriminator: boolean): Event {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actions': ((json['actions'] as Array<any>).map(ActionFromJSON)),
        'eventId': json['event_id'],
        'fees': ((json['fees'] as Array<any>).map(FeeFromJSON)),
        'inProgress': json['in_progress'],
        'isScam': json['is_scam'],
        'lt': json['lt'],
        'timestamp': json['timestamp'],
    };
}

export function EventToJSON(value?: Event | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actions': ((value.actions as Array<any>).map(ActionToJSON)),
        'event_id': value.eventId,
        'fees': ((value.fees as Array<any>).map(FeeToJSON)),
        'in_progress': value.inProgress,
        'is_scam': value.isScam,
        'lt': value.lt,
        'timestamp': value.timestamp,
    };
}


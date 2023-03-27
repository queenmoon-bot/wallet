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
import type { TvmStackRecord } from './TvmStackRecord';
import {
    TvmStackRecordFromJSON,
    TvmStackRecordFromJSONTyped,
    TvmStackRecordToJSON,
} from './TvmStackRecord';

/**
 * 
 * @export
 * @interface MethodExecutionResult
 */
export interface MethodExecutionResult {
    /**
     * 
     * @type {boolean}
     * @memberof MethodExecutionResult
     */
    success: boolean;
    /**
     * tvm exit code
     * @type {number}
     * @memberof MethodExecutionResult
     */
    exitCode: number;
    /**
     * 
     * @type {Array<TvmStackRecord>}
     * @memberof MethodExecutionResult
     */
    stack: Array<TvmStackRecord>;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof MethodExecutionResult
     */
    decoded?: { [key: string]: any; };
}

/**
 * Check if a given object implements the MethodExecutionResult interface.
 */
export function instanceOfMethodExecutionResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "success" in value;
    isInstance = isInstance && "exitCode" in value;
    isInstance = isInstance && "stack" in value;

    return isInstance;
}

export function MethodExecutionResultFromJSON(json: any): MethodExecutionResult {
    return MethodExecutionResultFromJSONTyped(json, false);
}

export function MethodExecutionResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): MethodExecutionResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': json['success'],
        'exitCode': json['exit_code'],
        'stack': ((json['stack'] as Array<any>).map(TvmStackRecordFromJSON)),
        'decoded': !exists(json, 'decoded') ? undefined : json['decoded'],
    };
}

export function MethodExecutionResultToJSON(value?: MethodExecutionResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'exit_code': value.exitCode,
        'stack': ((value.stack as Array<any>).map(TvmStackRecordToJSON)),
        'decoded': value.decoded,
    };
}


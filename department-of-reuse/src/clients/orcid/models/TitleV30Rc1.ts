/* tslint:disable */
/* eslint-disable */
/**
 * ORCID Public
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: Latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TitleV30Rc1
 */
export interface TitleV30Rc1 {
    /**
     * 
     * @type {string}
     * @memberof TitleV30Rc1
     */
    value?: string;
}

export function TitleV30Rc1FromJSON(json: any): TitleV30Rc1 {
    return TitleV30Rc1FromJSONTyped(json, false);
}

export function TitleV30Rc1FromJSONTyped(json: any, ignoreDiscriminator: boolean): TitleV30Rc1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function TitleV30Rc1ToJSON(value?: TitleV30Rc1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
    };
}


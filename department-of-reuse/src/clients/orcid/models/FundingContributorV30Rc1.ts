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
import {
    ContributorEmailV30Rc1,
    ContributorEmailV30Rc1FromJSON,
    ContributorEmailV30Rc1FromJSONTyped,
    ContributorEmailV30Rc1ToJSON,
    ContributorOrcidV30Rc1,
    ContributorOrcidV30Rc1FromJSON,
    ContributorOrcidV30Rc1FromJSONTyped,
    ContributorOrcidV30Rc1ToJSON,
    CreditNameV30Rc1,
    CreditNameV30Rc1FromJSON,
    CreditNameV30Rc1FromJSONTyped,
    CreditNameV30Rc1ToJSON,
    FundingContributorAttributesV30Rc1,
    FundingContributorAttributesV30Rc1FromJSON,
    FundingContributorAttributesV30Rc1FromJSONTyped,
    FundingContributorAttributesV30Rc1ToJSON,
} from './';

/**
 * 
 * @export
 * @interface FundingContributorV30Rc1
 */
export interface FundingContributorV30Rc1 {
    /**
     * 
     * @type {ContributorOrcidV30Rc1}
     * @memberof FundingContributorV30Rc1
     */
    contributorOrcid?: ContributorOrcidV30Rc1;
    /**
     * 
     * @type {CreditNameV30Rc1}
     * @memberof FundingContributorV30Rc1
     */
    creditName?: CreditNameV30Rc1;
    /**
     * 
     * @type {ContributorEmailV30Rc1}
     * @memberof FundingContributorV30Rc1
     */
    contributorEmail?: ContributorEmailV30Rc1;
    /**
     * 
     * @type {FundingContributorAttributesV30Rc1}
     * @memberof FundingContributorV30Rc1
     */
    contributorAttributes?: FundingContributorAttributesV30Rc1;
}

export function FundingContributorV30Rc1FromJSON(json: any): FundingContributorV30Rc1 {
    return FundingContributorV30Rc1FromJSONTyped(json, false);
}

export function FundingContributorV30Rc1FromJSONTyped(json: any, ignoreDiscriminator: boolean): FundingContributorV30Rc1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contributorOrcid': !exists(json, 'contributor-orcid') ? undefined : ContributorOrcidV30Rc1FromJSON(json['contributor-orcid']),
        'creditName': !exists(json, 'credit-name') ? undefined : CreditNameV30Rc1FromJSON(json['credit-name']),
        'contributorEmail': !exists(json, 'contributor-email') ? undefined : ContributorEmailV30Rc1FromJSON(json['contributor-email']),
        'contributorAttributes': !exists(json, 'contributor-attributes') ? undefined : FundingContributorAttributesV30Rc1FromJSON(json['contributor-attributes']),
    };
}

export function FundingContributorV30Rc1ToJSON(value?: FundingContributorV30Rc1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contributor-orcid': ContributorOrcidV30Rc1ToJSON(value.contributorOrcid),
        'credit-name': CreditNameV30Rc1ToJSON(value.creditName),
        'contributor-email': ContributorEmailV30Rc1ToJSON(value.contributorEmail),
        'contributor-attributes': FundingContributorAttributesV30Rc1ToJSON(value.contributorAttributes),
    };
}


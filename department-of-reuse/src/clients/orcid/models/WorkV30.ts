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
    Citation,
    CitationFromJSON,
    CitationFromJSONTyped,
    CitationToJSON,
    CountryV30,
    CountryV30FromJSON,
    CountryV30FromJSONTyped,
    CountryV30ToJSON,
    CreatedDateV30,
    CreatedDateV30FromJSON,
    CreatedDateV30FromJSONTyped,
    CreatedDateV30ToJSON,
    ExternalIDsV30,
    ExternalIDsV30FromJSON,
    ExternalIDsV30FromJSONTyped,
    ExternalIDsV30ToJSON,
    LastModifiedDateV30,
    LastModifiedDateV30FromJSON,
    LastModifiedDateV30FromJSONTyped,
    LastModifiedDateV30ToJSON,
    PublicationDateV30,
    PublicationDateV30FromJSON,
    PublicationDateV30FromJSONTyped,
    PublicationDateV30ToJSON,
    SourceV30,
    SourceV30FromJSON,
    SourceV30FromJSONTyped,
    SourceV30ToJSON,
    TitleV30,
    TitleV30FromJSON,
    TitleV30FromJSONTyped,
    TitleV30ToJSON,
    UrlV30,
    UrlV30FromJSON,
    UrlV30FromJSONTyped,
    UrlV30ToJSON,
    WorkContributorsV30,
    WorkContributorsV30FromJSON,
    WorkContributorsV30FromJSONTyped,
    WorkContributorsV30ToJSON,
    WorkTitleV30,
    WorkTitleV30FromJSON,
    WorkTitleV30FromJSONTyped,
    WorkTitleV30ToJSON,
} from './';

/**
 * 
 * @export
 * @interface WorkV30
 */
export interface WorkV30 {
    /**
     * 
     * @type {CreatedDateV30}
     * @memberof WorkV30
     */
    createdDate?: CreatedDateV30;
    /**
     * 
     * @type {LastModifiedDateV30}
     * @memberof WorkV30
     */
    lastModifiedDate?: LastModifiedDateV30;
    /**
     * 
     * @type {SourceV30}
     * @memberof WorkV30
     */
    source?: SourceV30;
    /**
     * 
     * @type {number}
     * @memberof WorkV30
     */
    putCode?: number;
    /**
     * 
     * @type {string}
     * @memberof WorkV30
     */
    path?: string;
    /**
     * 
     * @type {WorkTitleV30}
     * @memberof WorkV30
     */
    title?: WorkTitleV30;
    /**
     * 
     * @type {TitleV30}
     * @memberof WorkV30
     */
    journalTitle?: TitleV30;
    /**
     * 
     * @type {string}
     * @memberof WorkV30
     */
    shortDescription?: string;
    /**
     * 
     * @type {Citation}
     * @memberof WorkV30
     */
    citation?: Citation;
    /**
     * 
     * @type {string}
     * @memberof WorkV30
     */
    type?: WorkV30TypeEnum;
    /**
     * 
     * @type {PublicationDateV30}
     * @memberof WorkV30
     */
    publicationDate?: PublicationDateV30;
    /**
     * 
     * @type {ExternalIDsV30}
     * @memberof WorkV30
     */
    externalIds?: ExternalIDsV30;
    /**
     * 
     * @type {UrlV30}
     * @memberof WorkV30
     */
    url?: UrlV30;
    /**
     * 
     * @type {WorkContributorsV30}
     * @memberof WorkV30
     */
    contributors?: WorkContributorsV30;
    /**
     * 
     * @type {string}
     * @memberof WorkV30
     */
    languageCode?: WorkV30LanguageCodeEnum;
    /**
     * 
     * @type {CountryV30}
     * @memberof WorkV30
     */
    country?: CountryV30;
    /**
     * 
     * @type {string}
     * @memberof WorkV30
     */
    visibility?: WorkV30VisibilityEnum;
}

/**
* @export
* @enum {string}
*/
export enum WorkV30TypeEnum {
    Annotation = 'annotation',
    ArtisticPerformance = 'artistic-performance',
    BookChapter = 'book-chapter',
    BookReview = 'book-review',
    Book = 'book',
    ConferenceAbstract = 'conference-abstract',
    ConferencePaper = 'conference-paper',
    ConferencePoster = 'conference-poster',
    DataManagementPlan = 'data-management-plan',
    DataSet = 'data-set',
    DictionaryEntry = 'dictionary-entry',
    Disclosure = 'disclosure',
    DissertationThesis = 'dissertation-thesis',
    EditedBook = 'edited-book',
    EncyclopediaEntry = 'encyclopedia-entry',
    Invention = 'invention',
    JournalArticle = 'journal-article',
    JournalIssue = 'journal-issue',
    LectureSpeech = 'lecture-speech',
    License = 'license',
    MagazineArticle = 'magazine-article',
    Manual = 'manual',
    NewsletterArticle = 'newsletter-article',
    NewspaperArticle = 'newspaper-article',
    OnlineResource = 'online-resource',
    Other = 'other',
    Patent = 'patent',
    PhysicalObject = 'physical-object',
    Preprint = 'preprint',
    RegisteredCopyright = 'registered-copyright',
    Report = 'report',
    ResearchTechnique = 'research-technique',
    ResearchTool = 'research-tool',
    Software = 'software',
    SpinOffCompany = 'spin-off-company',
    StandardsAndPolicy = 'standards-and-policy',
    SupervisedStudentPublication = 'supervised-student-publication',
    TechnicalStandard = 'technical-standard',
    Test = 'test',
    Trademark = 'trademark',
    Translation = 'translation',
    Website = 'website',
    WorkingPaper = 'working-paper',
    Undefined = 'undefined'
}/**
* @export
* @enum {string}
*/
export enum WorkV30LanguageCodeEnum {
    Ab = 'ab',
    Aa = 'aa',
    Af = 'af',
    Ak = 'ak',
    Sq = 'sq',
    Am = 'am',
    Ar = 'ar',
    An = 'an',
    Hy = 'hy',
    As = 'as',
    Av = 'av',
    Ae = 'ae',
    Ay = 'ay',
    Az = 'az',
    Bm = 'bm',
    Ba = 'ba',
    Eu = 'eu',
    Be = 'be',
    Bn = 'bn',
    Bh = 'bh',
    Bi = 'bi',
    Bs = 'bs',
    Br = 'br',
    Bg = 'bg',
    My = 'my',
    Ca = 'ca',
    Ch = 'ch',
    Ce = 'ce',
    ZhCn = 'zh_CN',
    ZhTw = 'zh_TW',
    Cu = 'cu',
    Cv = 'cv',
    Kw = 'kw',
    Co = 'co',
    Cr = 'cr',
    Hr = 'hr',
    Cs = 'cs',
    Da = 'da',
    Dv = 'dv',
    Nl = 'nl',
    Dz = 'dz',
    En = 'en',
    Eo = 'eo',
    Et = 'et',
    Ee = 'ee',
    Fo = 'fo',
    Fj = 'fj',
    Fi = 'fi',
    Fr = 'fr',
    Fy = 'fy',
    Ff = 'ff',
    Gl = 'gl',
    Lg = 'lg',
    Ka = 'ka',
    De = 'de',
    El = 'el',
    Kl = 'kl',
    Gn = 'gn',
    Gu = 'gu',
    Ht = 'ht',
    Ha = 'ha',
    Iw = 'iw',
    Hz = 'hz',
    Hi = 'hi',
    Ho = 'ho',
    Hu = 'hu',
    Is = 'is',
    Io = 'io',
    Ig = 'ig',
    In = 'in',
    Ia = 'ia',
    Ie = 'ie',
    Iu = 'iu',
    Ik = 'ik',
    Ga = 'ga',
    It = 'it',
    Ja = 'ja',
    Jv = 'jv',
    Kn = 'kn',
    Kr = 'kr',
    Ks = 'ks',
    Kk = 'kk',
    Km = 'km',
    Ki = 'ki',
    Rw = 'rw',
    Ky = 'ky',
    Kv = 'kv',
    Kg = 'kg',
    Ko = 'ko',
    Ku = 'ku',
    Kj = 'kj',
    Lo = 'lo',
    La = 'la',
    Lv = 'lv',
    Li = 'li',
    Ln = 'ln',
    Lt = 'lt',
    Lu = 'lu',
    Lb = 'lb',
    Mk = 'mk',
    Mg = 'mg',
    Ms = 'ms',
    Ml = 'ml',
    Mt = 'mt',
    Gv = 'gv',
    Mi = 'mi',
    Mr = 'mr',
    Mh = 'mh',
    Mo = 'mo',
    Mn = 'mn',
    Na = 'na',
    Nv = 'nv',
    Ng = 'ng',
    Ne = 'ne',
    Nd = 'nd',
    Se = 'se',
    No = 'no',
    Nb = 'nb',
    Nn = 'nn',
    Ny = 'ny',
    Oc = 'oc',
    Oj = 'oj',
    Or = 'or',
    Om = 'om',
    Os = 'os',
    Pi = 'pi',
    Pa = 'pa',
    Fa = 'fa',
    Pl = 'pl',
    Pt = 'pt',
    Ps = 'ps',
    Qu = 'qu',
    Rm = 'rm',
    Ro = 'ro',
    Rn = 'rn',
    Ru = 'ru',
    Sm = 'sm',
    Sg = 'sg',
    Sa = 'sa',
    Sc = 'sc',
    Gd = 'gd',
    Sr = 'sr',
    Sn = 'sn',
    Ii = 'ii',
    Sd = 'sd',
    Si = 'si',
    Sk = 'sk',
    Sl = 'sl',
    So = 'so',
    Nr = 'nr',
    St = 'st',
    Es = 'es',
    Su = 'su',
    Sw = 'sw',
    Ss = 'ss',
    Sv = 'sv',
    Tl = 'tl',
    Ty = 'ty',
    Tg = 'tg',
    Ta = 'ta',
    Tt = 'tt',
    Te = 'te',
    Th = 'th',
    Bo = 'bo',
    Ti = 'ti',
    To = 'to',
    Ts = 'ts',
    Tn = 'tn',
    Tr = 'tr',
    Tk = 'tk',
    Tw = 'tw',
    Ug = 'ug',
    Uk = 'uk',
    Ur = 'ur',
    Uz = 'uz',
    Ve = 've',
    Vi = 'vi',
    Vo = 'vo',
    Wa = 'wa',
    Cy = 'cy',
    Wo = 'wo',
    Xh = 'xh',
    Ji = 'ji',
    Yo = 'yo',
    Za = 'za',
    Zu = 'zu'
}/**
* @export
* @enum {string}
*/
export enum WorkV30VisibilityEnum {
    Limited = 'limited',
    RegisteredOnly = 'registered-only',
    Public = 'public'
}

export function WorkV30FromJSON(json: any): WorkV30 {
    return WorkV30FromJSONTyped(json, false);
}

export function WorkV30FromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkV30 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdDate': !exists(json, 'created-date') ? undefined : CreatedDateV30FromJSON(json['created-date']),
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV30FromJSON(json['last-modified-date']),
        'source': !exists(json, 'source') ? undefined : SourceV30FromJSON(json['source']),
        'putCode': !exists(json, 'put-code') ? undefined : json['put-code'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'title': !exists(json, 'title') ? undefined : WorkTitleV30FromJSON(json['title']),
        'journalTitle': !exists(json, 'journal-title') ? undefined : TitleV30FromJSON(json['journal-title']),
        'shortDescription': !exists(json, 'short-description') ? undefined : json['short-description'],
        'citation': !exists(json, 'citation') ? undefined : CitationFromJSON(json['citation']),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'publicationDate': !exists(json, 'publication-date') ? undefined : PublicationDateV30FromJSON(json['publication-date']),
        'externalIds': !exists(json, 'external-ids') ? undefined : ExternalIDsV30FromJSON(json['external-ids']),
        'url': !exists(json, 'url') ? undefined : UrlV30FromJSON(json['url']),
        'contributors': !exists(json, 'contributors') ? undefined : WorkContributorsV30FromJSON(json['contributors']),
        'languageCode': !exists(json, 'language-code') ? undefined : json['language-code'],
        'country': !exists(json, 'country') ? undefined : CountryV30FromJSON(json['country']),
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
    };
}

export function WorkV30ToJSON(value?: WorkV30 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created-date': CreatedDateV30ToJSON(value.createdDate),
        'last-modified-date': LastModifiedDateV30ToJSON(value.lastModifiedDate),
        'source': SourceV30ToJSON(value.source),
        'put-code': value.putCode,
        'path': value.path,
        'title': WorkTitleV30ToJSON(value.title),
        'journal-title': TitleV30ToJSON(value.journalTitle),
        'short-description': value.shortDescription,
        'citation': CitationToJSON(value.citation),
        'type': value.type,
        'publication-date': PublicationDateV30ToJSON(value.publicationDate),
        'external-ids': ExternalIDsV30ToJSON(value.externalIds),
        'url': UrlV30ToJSON(value.url),
        'contributors': WorkContributorsV30ToJSON(value.contributors),
        'language-code': value.languageCode,
        'country': CountryV30ToJSON(value.country),
        'visibility': value.visibility,
    };
}


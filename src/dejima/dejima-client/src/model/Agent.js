/**
 * ES 物件API
 * （株）いい生活 が提供予定の 物件情報API のインターフェイス仕様書  いい物件Oneに登録した賃貸物件情報を参照する物件参照API仕様について定める。  ※1: 開発中のため、実際のリリース時の仕様は異なる場合がございます。  ※2: 売買物件に関する仕様に関してはα版であり、今後大きな仕様の見直しを行う可能性がございます。  ## リソース仕様  ### 通信仕様  HTTP/2 および HTTP/1.1 をサポートする。通信はTLSで暗号化されたHTTPSのみを許可する。  ### リクエストヘッダ  リクエストヘッダには以下の指定を必須とする。  | No. | リクエストヘッダのフィールド名 | 指定値 | |:---:|:-------------------------------|:-------| | 1 | Accept | application/json | | 2 | X-Api-Key | 弊社が指定するキー。ご利用のお客様を特定するためのもの。 |  Acceptヘッダには、常にapplication/json を指定する。 これにより、レスポンスがJSONであることを指示する。  ### データフォーマットと文字コード  データフォーマットはJSON、文字コードはUTF-8とする。  ### データ型  通常のJSONの型以外に擬似型としていくつかのデータ型を用意している。 これは、JSON標準では表現しきれないデータや、不動産特有のデータを扱うために定義したもので使用する。 また、ここに記載の無いデータ型については、 OpenAPI Specification (Version 3.0.2) の DataTypes に準拠する。  * [DataTypes](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#data-types)   | No. | 型 | 説明 | |:---:|:---|:-----| | 1 | string | JSON標準の文字列 | | 2 | int | JSON標準の整数 | | 3 | float | JSON標準の浮動小数点数 | | 4 | bool | JSON標準の真偽値 | | 5 | datetime | ISO8611フォーマットの日付時刻を表す文字列。YYYY-MM-DDTHH:MM:SS。 <br> 例: 2015-08-26T19:16:03 = 2015年8月26日19時16分03秒 | | 6 | date | ISO8611フォーマットの日付を表す文字列。YYYY-MM-DD。 <br> 例: 2015-08-26 = 2015年8月26日 | | 7 | datejun | 後述 |  #### datejun型  いい生活独自の日付と旬を表すフォーマット。YYYYMMJDD。  * YYYY: 西暦年 * MM: 月。01～12。ただし00とすることにより、年単位までの精度の数字を表現可能。 * J: 旬。1=上旬、2=中旬、3=下旬。 0とすることで月単位までの精度の数字を表現可能。 * DD: 日。01～31。ただし00とすることにより、旬単位までの精度の数字を表現可能。日単位の精度の場合、1～10日までは旬を1、11～20日までは旬を2、21日以降は旬を3と指定する必要がある。 * 例:     * 201900000 = 2019年     * 201901000 = 2019年1月     * 201903100 = 2019年3月上旬     * 201912300 = 2019年12月下旬     * 201906105 = 2019年6月5日     * 201908216 = 2019年8月16日  ## 検索パラメータ  ### OR 検索  パラメータタイプが `array` のキーについては、クエリパラメータで複数指定を行った場合、 指定された値のいずれかに一致する対象を検索する（ OR 検索）。  ex) `?layout_type_code=1&layout_type_code=2`  ### ソート順  `*.order` という名前のパラメータでソート順を指定可能。ascを指定したとき昇順、descを指定したとき降順となる。  ex) `?price.order=desc`  基本的にソート順は一つだけ指定する。 
 *
 * The version of the OpenAPI document: 6.1.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Staff from './Staff';

/**
 * The Agent model module.
 * @module model/Agent
 * @version 6.1.3
 */
class Agent {
    /**
     * Constructs a new <code>Agent</code>.
     * 店舗
     * @alias module:model/Agent
     * @param customerKey {Number} 
     * @param agentGuid {String} 
     * @param agentShopName {String} 
     * @param staff {Array.<module:model/Staff>} 
     */
    constructor(customerKey, agentGuid, agentShopName, staff) { 
        
        Agent.initialize(this, customerKey, agentGuid, agentShopName, staff);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, customerKey, agentGuid, agentShopName, staff) { 
        obj['customer_key'] = customerKey;
        obj['agent_guid'] = agentGuid;
        obj['agent_shop_name'] = agentShopName;
        obj['staff'] = staff;
    }

    /**
     * Constructs a <code>Agent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Agent} obj Optional instance to populate.
     * @return {module:model/Agent} The populated <code>Agent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Agent();

            if (data.hasOwnProperty('customer_key')) {
                obj['customer_key'] = ApiClient.convertToType(data['customer_key'], 'Number');
            }
            if (data.hasOwnProperty('agent_guid')) {
                obj['agent_guid'] = ApiClient.convertToType(data['agent_guid'], 'String');
            }
            if (data.hasOwnProperty('agent_tel_number')) {
                obj['agent_tel_number'] = ApiClient.convertToType(data['agent_tel_number'], 'String');
            }
            if (data.hasOwnProperty('agent_fax_number')) {
                obj['agent_fax_number'] = ApiClient.convertToType(data['agent_fax_number'], 'String');
            }
            if (data.hasOwnProperty('agent_email')) {
                obj['agent_email'] = ApiClient.convertToType(data['agent_email'], 'String');
            }
            if (data.hasOwnProperty('agent_shop_address')) {
                obj['agent_shop_address'] = ApiClient.convertToType(data['agent_shop_address'], 'String');
            }
            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
            }
            if (data.hasOwnProperty('agent_shop_name')) {
                obj['agent_shop_name'] = ApiClient.convertToType(data['agent_shop_name'], 'String');
            }
            if (data.hasOwnProperty('agent_organization')) {
                obj['agent_organization'] = ApiClient.convertToType(data['agent_organization'], 'String');
            }
            if (data.hasOwnProperty('agent_url_caption')) {
                obj['agent_url_caption'] = ApiClient.convertToType(data['agent_url_caption'], 'String');
            }
            if (data.hasOwnProperty('agent_url')) {
                obj['agent_url'] = ApiClient.convertToType(data['agent_url'], 'String');
            }
            if (data.hasOwnProperty('agent_license_number')) {
                obj['agent_license_number'] = ApiClient.convertToType(data['agent_license_number'], 'String');
            }
            if (data.hasOwnProperty('staff')) {
                obj['staff'] = ApiClient.convertToType(data['staff'], [Staff]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} customer_key
 */
Agent.prototype['customer_key'] = undefined;

/**
 * @member {String} agent_guid
 */
Agent.prototype['agent_guid'] = undefined;

/**
 * @member {String} agent_tel_number
 */
Agent.prototype['agent_tel_number'] = undefined;

/**
 * @member {String} agent_fax_number
 */
Agent.prototype['agent_fax_number'] = undefined;

/**
 * @member {String} agent_email
 */
Agent.prototype['agent_email'] = undefined;

/**
 * @member {String} agent_shop_address
 */
Agent.prototype['agent_shop_address'] = undefined;

/**
 * @member {Number} latitude
 */
Agent.prototype['latitude'] = undefined;

/**
 * @member {Number} longitude
 */
Agent.prototype['longitude'] = undefined;

/**
 * @member {String} agent_shop_name
 */
Agent.prototype['agent_shop_name'] = undefined;

/**
 * @member {String} agent_organization
 */
Agent.prototype['agent_organization'] = undefined;

/**
 * @member {String} agent_url_caption
 */
Agent.prototype['agent_url_caption'] = undefined;

/**
 * @member {String} agent_url
 */
Agent.prototype['agent_url'] = undefined;

/**
 * @member {String} agent_license_number
 */
Agent.prototype['agent_license_number'] = undefined;

/**
 * @member {Array.<module:model/Staff>} staff
 */
Agent.prototype['staff'] = undefined;






export default Agent;


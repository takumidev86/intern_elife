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

/**
 * The Tokuyuchin model module.
 * @module model/Tokuyuchin
 * @version 6.1.3
 */
class Tokuyuchin {
    /**
     * Constructs a new <code>Tokuyuchin</code>.
     * 特優賃
     * @alias module:model/Tokuyuchin
     */
    constructor() { 
        
        Tokuyuchin.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Tokuyuchin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Tokuyuchin} obj Optional instance to populate.
     * @return {module:model/Tokuyuchin} The populated <code>Tokuyuchin</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Tokuyuchin();

            if (data.hasOwnProperty('tokuyuchin_price_change')) {
                obj['tokuyuchin_price_change'] = ApiClient.convertToType(data['tokuyuchin_price_change'], 'String');
            }
            if (data.hasOwnProperty('tokuyuchin_price_change_code')) {
                obj['tokuyuchin_price_change_code'] = ApiClient.convertToType(data['tokuyuchin_price_change_code'], 'Number');
            }
            if (data.hasOwnProperty('tokuyuchin_increase_rate')) {
                obj['tokuyuchin_increase_rate'] = ApiClient.convertToType(data['tokuyuchin_increase_rate'], 'Number');
            }
            if (data.hasOwnProperty('tokuyuchin_support_years')) {
                obj['tokuyuchin_support_years'] = ApiClient.convertToType(data['tokuyuchin_support_years'], 'Number');
            }
            if (data.hasOwnProperty('tokuyuchin_comment')) {
                obj['tokuyuchin_comment'] = ApiClient.convertToType(data['tokuyuchin_comment'], 'String');
            }
            if (data.hasOwnProperty('tokuyuchin_lower_cost')) {
                obj['tokuyuchin_lower_cost'] = ApiClient.convertToType(data['tokuyuchin_lower_cost'], 'Number');
            }
            if (data.hasOwnProperty('tokuyuchin_upper_cost')) {
                obj['tokuyuchin_upper_cost'] = ApiClient.convertToType(data['tokuyuchin_upper_cost'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} tokuyuchin_price_change
 */
Tokuyuchin.prototype['tokuyuchin_price_change'] = undefined;

/**
 * 1: 無<br/>2: 傾斜型<br/>3: フラット型
 * @member {Number} tokuyuchin_price_change_code
 */
Tokuyuchin.prototype['tokuyuchin_price_change_code'] = undefined;

/**
 * @member {Number} tokuyuchin_increase_rate
 */
Tokuyuchin.prototype['tokuyuchin_increase_rate'] = undefined;

/**
 * @member {Number} tokuyuchin_support_years
 */
Tokuyuchin.prototype['tokuyuchin_support_years'] = undefined;

/**
 * @member {String} tokuyuchin_comment
 */
Tokuyuchin.prototype['tokuyuchin_comment'] = undefined;

/**
 * @member {Number} tokuyuchin_lower_cost
 */
Tokuyuchin.prototype['tokuyuchin_lower_cost'] = undefined;

/**
 * @member {Number} tokuyuchin_upper_cost
 */
Tokuyuchin.prototype['tokuyuchin_upper_cost'] = undefined;






export default Tokuyuchin;

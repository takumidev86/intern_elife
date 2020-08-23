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
import IntRange from './IntRange';
import PriceWithUnit from './PriceWithUnit';

/**
 * The PropertyParking model module.
 * @module model/PropertyParking
 * @version 6.1.3
 */
class PropertyParking {
    /**
     * Constructs a new <code>PropertyParking</code>.
     * 駐車場
     * @alias module:model/PropertyParking
     */
    constructor() { 
        
        PropertyParking.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PropertyParking</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PropertyParking} obj Optional instance to populate.
     * @return {module:model/PropertyParking} The populated <code>PropertyParking</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PropertyParking();

            if (data.hasOwnProperty('parking_availability')) {
                obj['parking_availability'] = ApiClient.convertToType(data['parking_availability'], 'String');
            }
            if (data.hasOwnProperty('parking_availability_code')) {
                obj['parking_availability_code'] = ApiClient.convertToType(data['parking_availability_code'], 'Number');
            }
            if (data.hasOwnProperty('neighborhood_parking_distance')) {
                obj['neighborhood_parking_distance'] = ApiClient.convertToType(data['neighborhood_parking_distance'], 'Number');
            }
            if (data.hasOwnProperty('parking_type')) {
                obj['parking_type'] = ApiClient.convertToType(data['parking_type'], 'String');
            }
            if (data.hasOwnProperty('parking_type_code')) {
                obj['parking_type_code'] = ApiClient.convertToType(data['parking_type_code'], 'Number');
            }
            if (data.hasOwnProperty('parking_roof')) {
                obj['parking_roof'] = ApiClient.convertToType(data['parking_roof'], 'String');
            }
            if (data.hasOwnProperty('parking_roof_code')) {
                obj['parking_roof_code'] = ApiClient.convertToType(data['parking_roof_code'], 'Number');
            }
            if (data.hasOwnProperty('parking_shutter')) {
                obj['parking_shutter'] = ApiClient.convertToType(data['parking_shutter'], 'String');
            }
            if (data.hasOwnProperty('parking_shutter_code')) {
                obj['parking_shutter_code'] = ApiClient.convertToType(data['parking_shutter_code'], 'Number');
            }
            if (data.hasOwnProperty('parking_price_range')) {
                obj['parking_price_range'] = ApiClient.convertToType(data['parking_price_range'], IntRange);
            }
            if (data.hasOwnProperty('parkable_num')) {
                obj['parkable_num'] = ApiClient.convertToType(data['parkable_num'], 'Number');
            }
            if (data.hasOwnProperty('parking_key_money')) {
                obj['parking_key_money'] = ApiClient.convertToType(data['parking_key_money'], PriceWithUnit);
            }
            if (data.hasOwnProperty('parking_deposit')) {
                obj['parking_deposit'] = ApiClient.convertToType(data['parking_deposit'], PriceWithUnit);
            }
            if (data.hasOwnProperty('has_bike_parking')) {
                obj['has_bike_parking'] = ApiClient.convertToType(data['has_bike_parking'], 'Boolean');
            }
            if (data.hasOwnProperty('has_motorbike_parking')) {
                obj['has_motorbike_parking'] = ApiClient.convertToType(data['has_motorbike_parking'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} parking_availability
 */
PropertyParking.prototype['parking_availability'] = undefined;

/**
 * 1: 無<br/>2: 有(敷地内)<br/>3: 付<br/>4: 近隣駐車場<br/>5: 空無<br/>6: 要問合せ
 * @member {Number} parking_availability_code
 */
PropertyParking.prototype['parking_availability_code'] = undefined;

/**
 * @member {Number} neighborhood_parking_distance
 */
PropertyParking.prototype['neighborhood_parking_distance'] = undefined;

/**
 * @member {String} parking_type
 */
PropertyParking.prototype['parking_type'] = undefined;

/**
 * 1: 舗装<br/>2: 未舗装<br/>3: 機械式<br/>4: タワー式<br/>5: 時間貸し<br/>6: その他<br/>7: 自走式<br/>8: 平置
 * @member {Number} parking_type_code
 */
PropertyParking.prototype['parking_type_code'] = undefined;

/**
 * @member {String} parking_roof
 */
PropertyParking.prototype['parking_roof'] = undefined;

/**
 * 1: 無<br/>2: 有<br/>3: 地下<br/>4: 屋内
 * @member {Number} parking_roof_code
 */
PropertyParking.prototype['parking_roof_code'] = undefined;

/**
 * @member {String} parking_shutter
 */
PropertyParking.prototype['parking_shutter'] = undefined;

/**
 * 1: 無<br/>2: 付き<br/>3: リモコンシャッタ
 * @member {Number} parking_shutter_code
 */
PropertyParking.prototype['parking_shutter_code'] = undefined;

/**
 * @member {module:model/IntRange} parking_price_range
 */
PropertyParking.prototype['parking_price_range'] = undefined;

/**
 * @member {Number} parkable_num
 */
PropertyParking.prototype['parkable_num'] = undefined;

/**
 * @member {module:model/PriceWithUnit} parking_key_money
 */
PropertyParking.prototype['parking_key_money'] = undefined;

/**
 * @member {module:model/PriceWithUnit} parking_deposit
 */
PropertyParking.prototype['parking_deposit'] = undefined;

/**
 * @member {Boolean} has_bike_parking
 */
PropertyParking.prototype['has_bike_parking'] = undefined;

/**
 * @member {Boolean} has_motorbike_parking
 */
PropertyParking.prototype['has_motorbike_parking'] = undefined;






export default PropertyParking;


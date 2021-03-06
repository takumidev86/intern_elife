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
 * The RentPickupFeature model module.
 * @module model/RentPickupFeature
 * @version 6.1.3
 */
class RentPickupFeature {
    /**
     * Constructs a new <code>RentPickupFeature</code>.
     * こだわり条件
     * @alias module:model/RentPickupFeature
     */
    constructor() { 
        
        RentPickupFeature.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RentPickupFeature</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RentPickupFeature} obj Optional instance to populate.
     * @return {module:model/RentPickupFeature} The populated <code>RentPickupFeature</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RentPickupFeature();

            if (data.hasOwnProperty('is_furnished')) {
                obj['is_furnished'] = ApiClient.convertToType(data['is_furnished'], 'Boolean');
            }
            if (data.hasOwnProperty('has_appliances')) {
                obj['has_appliances'] = ApiClient.convertToType(data['has_appliances'], 'Boolean');
            }
            if (data.hasOwnProperty('is_net_free')) {
                obj['is_net_free'] = ApiClient.convertToType(data['is_net_free'], 'Boolean');
            }
            if (data.hasOwnProperty('is_over_2f')) {
                obj['is_over_2f'] = ApiClient.convertToType(data['is_over_2f'], 'Boolean');
            }
            if (data.hasOwnProperty('is_bath_toilet_separate')) {
                obj['is_bath_toilet_separate'] = ApiClient.convertToType(data['is_bath_toilet_separate'], 'Boolean');
            }
            if (data.hasOwnProperty('has_aircon')) {
                obj['has_aircon'] = ApiClient.convertToType(data['has_aircon'], 'Boolean');
            }
            if (data.hasOwnProperty('has_auto_lock')) {
                obj['has_auto_lock'] = ApiClient.convertToType(data['has_auto_lock'], 'Boolean');
            }
            if (data.hasOwnProperty('has_elevator')) {
                obj['has_elevator'] = ApiClient.convertToType(data['has_elevator'], 'Boolean');
            }
            if (data.hasOwnProperty('has_landry_room')) {
                obj['has_landry_room'] = ApiClient.convertToType(data['has_landry_room'], 'Boolean');
            }
            if (data.hasOwnProperty('is_flooring')) {
                obj['is_flooring'] = ApiClient.convertToType(data['is_flooring'], 'Boolean');
            }
            if (data.hasOwnProperty('is_designers_apartment')) {
                obj['is_designers_apartment'] = ApiClient.convertToType(data['is_designers_apartment'], 'Boolean');
            }
            if (data.hasOwnProperty('is_barrier_free')) {
                obj['is_barrier_free'] = ApiClient.convertToType(data['is_barrier_free'], 'Boolean');
            }
            if (data.hasOwnProperty('is_south_facing')) {
                obj['is_south_facing'] = ApiClient.convertToType(data['is_south_facing'], 'Boolean');
            }
            if (data.hasOwnProperty('is_highest_floor')) {
                obj['is_highest_floor'] = ApiClient.convertToType(data['is_highest_floor'], 'Boolean');
            }
            if (data.hasOwnProperty('is_corner_room')) {
                obj['is_corner_room'] = ApiClient.convertToType(data['is_corner_room'], 'Boolean');
            }
            if (data.hasOwnProperty('has_system_kitchen')) {
                obj['has_system_kitchen'] = ApiClient.convertToType(data['has_system_kitchen'], 'Boolean');
            }
            if (data.hasOwnProperty('has_ih_stove')) {
                obj['has_ih_stove'] = ApiClient.convertToType(data['has_ih_stove'], 'Boolean');
            }
            if (data.hasOwnProperty('has_gas_stove')) {
                obj['has_gas_stove'] = ApiClient.convertToType(data['has_gas_stove'], 'Boolean');
            }
            if (data.hasOwnProperty('has_multiple_gas_stove')) {
                obj['has_multiple_gas_stove'] = ApiClient.convertToType(data['has_multiple_gas_stove'], 'Boolean');
            }
            if (data.hasOwnProperty('has_reboil_bath')) {
                obj['has_reboil_bath'] = ApiClient.convertToType(data['has_reboil_bath'], 'Boolean');
            }
            if (data.hasOwnProperty('has_washlet')) {
                obj['has_washlet'] = ApiClient.convertToType(data['has_washlet'], 'Boolean');
            }
            if (data.hasOwnProperty('has_bath_dryer')) {
                obj['has_bath_dryer'] = ApiClient.convertToType(data['has_bath_dryer'], 'Boolean');
            }
            if (data.hasOwnProperty('has_floor_heating')) {
                obj['has_floor_heating'] = ApiClient.convertToType(data['has_floor_heating'], 'Boolean');
            }
            if (data.hasOwnProperty('has_closet')) {
                obj['has_closet'] = ApiClient.convertToType(data['has_closet'], 'Boolean');
            }
            if (data.hasOwnProperty('has_walk_in_closet')) {
                obj['has_walk_in_closet'] = ApiClient.convertToType(data['has_walk_in_closet'], 'Boolean');
            }
            if (data.hasOwnProperty('has_catv')) {
                obj['has_catv'] = ApiClient.convertToType(data['has_catv'], 'Boolean');
            }
            if (data.hasOwnProperty('has_cs')) {
                obj['has_cs'] = ApiClient.convertToType(data['has_cs'], 'Boolean');
            }
            if (data.hasOwnProperty('has_bs')) {
                obj['has_bs'] = ApiClient.convertToType(data['has_bs'], 'Boolean');
            }
            if (data.hasOwnProperty('has_optical_fiber')) {
                obj['has_optical_fiber'] = ApiClient.convertToType(data['has_optical_fiber'], 'Boolean');
            }
            if (data.hasOwnProperty('is_all_electric')) {
                obj['is_all_electric'] = ApiClient.convertToType(data['is_all_electric'], 'Boolean');
            }
            if (data.hasOwnProperty('has_washroom')) {
                obj['has_washroom'] = ApiClient.convertToType(data['has_washroom'], 'Boolean');
            }
            if (data.hasOwnProperty('is_no_building_in_front')) {
                obj['is_no_building_in_front'] = ApiClient.convertToType(data['is_no_building_in_front'], 'Boolean');
            }
            if (data.hasOwnProperty('has_veranda_balcony')) {
                obj['has_veranda_balcony'] = ApiClient.convertToType(data['has_veranda_balcony'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} is_furnished
 * @default false
 */
RentPickupFeature.prototype['is_furnished'] = false;

/**
 * @member {Boolean} has_appliances
 * @default false
 */
RentPickupFeature.prototype['has_appliances'] = false;

/**
 * @member {Boolean} is_net_free
 * @default false
 */
RentPickupFeature.prototype['is_net_free'] = false;

/**
 * @member {Boolean} is_over_2f
 * @default false
 */
RentPickupFeature.prototype['is_over_2f'] = false;

/**
 * @member {Boolean} is_bath_toilet_separate
 * @default false
 */
RentPickupFeature.prototype['is_bath_toilet_separate'] = false;

/**
 * @member {Boolean} has_aircon
 * @default false
 */
RentPickupFeature.prototype['has_aircon'] = false;

/**
 * @member {Boolean} has_auto_lock
 * @default false
 */
RentPickupFeature.prototype['has_auto_lock'] = false;

/**
 * @member {Boolean} has_elevator
 * @default false
 */
RentPickupFeature.prototype['has_elevator'] = false;

/**
 * @member {Boolean} has_landry_room
 * @default false
 */
RentPickupFeature.prototype['has_landry_room'] = false;

/**
 * @member {Boolean} is_flooring
 * @default false
 */
RentPickupFeature.prototype['is_flooring'] = false;

/**
 * @member {Boolean} is_designers_apartment
 * @default false
 */
RentPickupFeature.prototype['is_designers_apartment'] = false;

/**
 * @member {Boolean} is_barrier_free
 * @default false
 */
RentPickupFeature.prototype['is_barrier_free'] = false;

/**
 * @member {Boolean} is_south_facing
 * @default false
 */
RentPickupFeature.prototype['is_south_facing'] = false;

/**
 * @member {Boolean} is_highest_floor
 * @default false
 */
RentPickupFeature.prototype['is_highest_floor'] = false;

/**
 * @member {Boolean} is_corner_room
 * @default false
 */
RentPickupFeature.prototype['is_corner_room'] = false;

/**
 * @member {Boolean} has_system_kitchen
 * @default false
 */
RentPickupFeature.prototype['has_system_kitchen'] = false;

/**
 * @member {Boolean} has_ih_stove
 * @default false
 */
RentPickupFeature.prototype['has_ih_stove'] = false;

/**
 * @member {Boolean} has_gas_stove
 * @default false
 */
RentPickupFeature.prototype['has_gas_stove'] = false;

/**
 * @member {Boolean} has_multiple_gas_stove
 * @default false
 */
RentPickupFeature.prototype['has_multiple_gas_stove'] = false;

/**
 * @member {Boolean} has_reboil_bath
 * @default false
 */
RentPickupFeature.prototype['has_reboil_bath'] = false;

/**
 * @member {Boolean} has_washlet
 * @default false
 */
RentPickupFeature.prototype['has_washlet'] = false;

/**
 * @member {Boolean} has_bath_dryer
 * @default false
 */
RentPickupFeature.prototype['has_bath_dryer'] = false;

/**
 * @member {Boolean} has_floor_heating
 * @default false
 */
RentPickupFeature.prototype['has_floor_heating'] = false;

/**
 * @member {Boolean} has_closet
 * @default false
 */
RentPickupFeature.prototype['has_closet'] = false;

/**
 * @member {Boolean} has_walk_in_closet
 * @default false
 */
RentPickupFeature.prototype['has_walk_in_closet'] = false;

/**
 * @member {Boolean} has_catv
 * @default false
 */
RentPickupFeature.prototype['has_catv'] = false;

/**
 * @member {Boolean} has_cs
 * @default false
 */
RentPickupFeature.prototype['has_cs'] = false;

/**
 * @member {Boolean} has_bs
 * @default false
 */
RentPickupFeature.prototype['has_bs'] = false;

/**
 * @member {Boolean} has_optical_fiber
 * @default false
 */
RentPickupFeature.prototype['has_optical_fiber'] = false;

/**
 * @member {Boolean} is_all_electric
 * @default false
 */
RentPickupFeature.prototype['is_all_electric'] = false;

/**
 * @member {Boolean} has_washroom
 * @default false
 */
RentPickupFeature.prototype['has_washroom'] = false;

/**
 * @member {Boolean} is_no_building_in_front
 * @default false
 */
RentPickupFeature.prototype['is_no_building_in_front'] = false;

/**
 * @member {Boolean} has_veranda_balcony
 * @default false
 */
RentPickupFeature.prototype['has_veranda_balcony'] = false;






export default RentPickupFeature;


# EsApi.Building

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buildingGuid** | **String** |  | [optional] [readonly] 
**modified** | **Date** |  | 
**buildingName** | **String** |  | 
**buildingFurigana** | **String** |  | [optional] 
**totalUnits** | **Number** |  | [optional] 
**buildingClass** | **String** |  | [optional] 
**buildingClassCode** | **Number** | 1: 戸建&lt;br/&gt;2: 集合住宅&lt;br/&gt;3: 事務所・商業施設&lt;br/&gt;4: 土地&lt;br/&gt;5: 駐車場 | [optional] 
**buildingType** | **String** |  | [optional] [readonly] 
**buildingTypeCode** | **Number** | 1: マンション&lt;br/&gt;2: リゾートマンション&lt;br/&gt;3: アパート&lt;br/&gt;4: テラスハウス&lt;br/&gt;5: タウンハウス&lt;br/&gt;6: 戸建&lt;br/&gt;7: 土地&lt;br/&gt;8: 店舗&lt;br/&gt;9: 事務所&lt;br/&gt;10: ビル&lt;br/&gt;11: 倉庫&lt;br/&gt;12: 工場&lt;br/&gt;13: トランクルーム&lt;br/&gt;14: 駐車場&lt;br/&gt;15: バイク置き場&lt;br/&gt;16: その他 | 
**totalFloors** | **Number** |  | [optional] 
**groundFloors** | **Number** |  | [optional] 
**basementFloors** | **Number** |  | [optional] 
**setback** | **String** |  | [optional] [readonly] 
**setbackCode** | **Number** | 1: 不要&lt;br/&gt;2: 要&lt;br/&gt;3: 済 | [optional] 
**setbackArea** | **Number** |  | [optional] 
**totalFloorArea** | [**AreaWithMeasurementMethod**](AreaWithMeasurementMethod.md) | 延床面積 単位: 平方メートル 計測方法: 壁芯 内法 登記簿 | [optional] 
**architecturalConditionFlag** | **Boolean** |  | [optional] 
**kenchikuKakuninNumber** | **String** |  | [optional] 
**contractor** | **String** |  | [optional] 
**completionDatejun** | [**DateJun**](DateJun.md) | 竣工年月 | [optional] 
**landReclamationDatejun** | [**DateJun**](DateJun.md) | 土地造成完了年月 | [optional] 
**structure** | **String** |  | [optional] [readonly] 
**structureCode** | **Number** | 1: 木造&lt;br/&gt;2: 軽量鉄骨&lt;br/&gt;3: 鉄筋コンクリート&lt;br/&gt;4: 鉄骨鉄筋コンクリート&lt;br/&gt;5: ALC&lt;br/&gt;6: プレキャストコンクリート&lt;br/&gt;7: 鉄筋ブロック&lt;br/&gt;8: 鉄骨プレ&lt;br/&gt;9: 鉄骨&lt;br/&gt;10: その他 | [optional] 
**structureNote** | **String** |  | [optional] 
**roadSituation** | **String** |  | [optional] [readonly] 
**roadSituationCode** | **Number** | 1: 一方&lt;br/&gt;2: 二方&lt;br/&gt;3: 三方&lt;br/&gt;4: 四方&lt;br/&gt;5: 角地 | [optional] 
**hirayadateFlag** | **Boolean** |  | [optional] 
**prefecture** | **String** |  | 
**city** | **String** |  | 
**town** | **String** |  | 
**tyoume** | **String** |  | 
**addressText** | **String** |  | [optional] [readonly] 
**branchNumberText** | **String** |  | [optional] [readonly] 
**zipcodeText** | **String** |  | [optional] 
**jisCodeValue** | **Number** |  | [optional] 
**latitude** | **Number** |  | [optional] 
**longitude** | **Number** |  | [optional] 
**currentLandClass** | **String** |  | [optional] [readonly] 
**currentLandClassCode** | **Number** | 1: 宅地&lt;br/&gt;2: 田&lt;br/&gt;3: 畑&lt;br/&gt;4: 山林&lt;br/&gt;5: 雑種地&lt;br/&gt;6: その他&lt;br/&gt;7: 塩田&lt;br/&gt;8: 境内地&lt;br/&gt;9: 原野&lt;br/&gt;10: 公園&lt;br/&gt;11: 公衆用道路&lt;br/&gt;12: 鉱泉地&lt;br/&gt;13: 水道用地&lt;br/&gt;14: 井溝&lt;br/&gt;15: ため池&lt;br/&gt;16: 池沼&lt;br/&gt;17: 堤&lt;br/&gt;18: 保安林&lt;br/&gt;19: 牧場&lt;br/&gt;20: 墓地&lt;br/&gt;21: 用悪水路&lt;br/&gt;22: 運河用地 | [optional] 
**registeredLandClass** | **String** |  | [optional] 
**topography** | **String** |  | [optional] [readonly] 
**topographyCode** | **Number** | 1: 平坦&lt;br/&gt;2: 高台&lt;br/&gt;3: 低地&lt;br/&gt;4: ひな段&lt;br/&gt;5: 傾斜地&lt;br/&gt;99: その他 | [optional] 
**isIrregularLandShape** | **Boolean** |  | [optional] 
**landSituation** | **String** |  | [optional] [readonly] 
**landSituationCode** | **Number** | 1: 更地&lt;br/&gt;2: 古屋あり&lt;br/&gt;3: 造成済み&lt;br/&gt;4: 未造成 | [optional] 
**siteArea** | [**AreaWithMeasurementMethod**](AreaWithMeasurementMethod.md) | 土地面積 単位: 平方メートル 計測方法: 公簿 実測 | [optional] 
**coverage** | **Number** |  | [optional] 
**floorAreaRatio** | **Number** |  | [optional] 
**landUsePlanning** | **String** |  | [optional] [readonly] 
**landUsePlanningCode** | **Number** | 1: 不要&lt;br/&gt;2: 要&lt;br/&gt;3: 届出中&lt;br/&gt;4: 届出済 | [optional] 
**privateRoadAreaPublic** | **Number** |  | [optional] 
**privateRoadAreaMeasured** | **Number** |  | [optional] 
**isIllegalFacingRoad** | **Boolean** |  | [optional] [default to false]
**privateRoadRateDenom** | **Number** |  | [optional] 
**privateRoadRateNumer** | **Number** |  | [optional] 
**manageCompanyName** | **String** |  | [optional] 
**managerStyle** | **String** |  | [optional] [readonly] 
**managerStyleCode** | **Number** | 1: 有&lt;br/&gt;2: 無&lt;br/&gt;3: 日勤&lt;br/&gt;4: 巡回&lt;br/&gt;5: 常駐 | [optional] 
**manageCompanyTelNumber** | **String** |  | [optional] 
**manageStyle** | **String** |  | [optional] [readonly] 
**manageStyleCode** | **Number** | 1: 自主管理&lt;br/&gt;2: 一部委託&lt;br/&gt;3: 全部委託 | [optional] 
**condominiumAssociationExistFlag** | **Boolean** |  | [optional] 
**cityPlanningArea** | **String** |  | [optional] [readonly] 
**cityPlanningAreaCode** | **Number** | 1: 市街化区域&lt;br/&gt;2: 市街化調整区域&lt;br/&gt;3: 非線引き区域&lt;br/&gt;4: 域外&lt;br/&gt;5: 準都市計画区域 | [optional] 
**developmentNumber** | **String** |  | [optional] 
**constructionMethod** | **String** |  | [optional] 
**outerWall** | **String** |  | [optional] 
**useDistrict** | [**[UseDistrict]**](UseDistrict.md) |  | [optional] 
**buildingFeature** | [**[BuildingFeature]**](BuildingFeature.md) |  | [optional] 
**facingRoad** | [**[FacingRoad]**](FacingRoad.md) |  | [optional] 
**cornerLot** | **String** |  | [optional] 
**cornerLotCode** | **Number** | 1: 東南角地&lt;br/&gt;2: 南西角地&lt;br/&gt;3: 北東角地&lt;br/&gt;4: 北西角地&lt;br/&gt;5: 三方角地&lt;br/&gt;6: 四方角地 | [optional] 



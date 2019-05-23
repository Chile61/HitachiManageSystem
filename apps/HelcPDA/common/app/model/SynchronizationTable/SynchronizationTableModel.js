Ext.define('HelcPDA.model.SynchronizationTable.SynchronizationTableModel',{
	extend:'Ext.data.Model',
	config:{
		
		fields : ['Id',
		          'ActivityId',
		          'AgreementItemId',
		          'AssetId',
		          'HELAgreeId',
		          'HELAgreementItemId',
		          'HELAssetId',
		          'MeasureSource',
		          'MUG3TaskName',
		          'TaskName',
		          'TaskStatus',
		          'TaskType',
		          {name:'ListOfHelMeasureBaditemList',type:'object'},
		          //属于 ListOfHelMeasureBaditemList的字段  的HelMeasureBaditemList 集合的字段
		          	'MeasureBadItemComments',
		          	'MeasureBadItemDesc',
		          	'MeasureBadItemIFGood',
		          	'MeasureBadItemParId',
		          	'MeasureBadItemReCheckDatetime',
		          	'MeasureBadItemReCheckDatetime',
		          	'MeasureBadItemRepPersonFirstName',
		          	'MeasureBadItemRepPersonFullName',
		          	'MeasureBadItemRepPersonLastName',
		          	'MeasureBadItemResponseDivision',
		          	'MeasureBadItemResponsePersonId',
		          	'MeasureBadItemSeq',
		          	'MeasureBadItemWorkTime',
		          	'MeasureBadItemZGCompleteDatetime',
		          	'MeasureBadItemZGDivision',
		        {name:'ListOfHelMeasureBaditemList',type:'object'},  	
		        //属于ListOfHelMeasureItemList的字段  的HelMeasureItemList 集合的字段
		            'MeasureItemComments',
		            'MeasureItemContent',
		            'MeasureItemCover',
		            'MeasureItemGroupName',
		            'MeasureItemIFGood',
		            'MeasureItemIFPhoto',
		            'MeasureItemIFRequired',
		            'MeasureItemId',
		            'MeasureItemIfMeasure',
		            'MeasureItemJudge',
		            'MeasureItemLocaleFlag',
		            'MeasureItemLocation',
		            'MeasureItemName',
		            'MeasureItemNo',
		            'MeasureItemPeriod',
		            'MeasureItemPostWork',
		            'MeasureItemPostWorkId',
		            'MeasureItemPreWork',
		            'MeasureItemPreWorkId',
		            'MeasureItemReCheckPersonFirstName',
		            'MeasureItemReCheckPersonFullName',
		            'MeasureItemReCheckPersonLastName',
		            'MeasureItemReCheckTime',
		            'MeasureItemReCheckPersonId',
		            'MeasureItemResponseDivision',
		            'MeasureItemResponsePersonFirstName',
		            'MeasureItemResponsePersonFullName',
		            'MeasureItemResponsePersonLastName',
		            'MeasureItemStandard',
		            'MeasureItemType',
		            'MeasureItemYearFlag',
		            'MeasureItemZGCompleteDate',
		            'MeasureItemZGDivision',
		            'MeasureItemZGResponsePersonId',
		            'MeasureItemZGWorkTime',
		            'MeasureProjectId',
		            'MeasureItemMaxValue',
		            'MeasureItemMinValue',
		            //属于 HelMeasureItemList的字段  的ListOfHelMeasureRecordList 集合的字段
		                'MeasureRecordContent',
		                'MeasureRecordDescription',
		                'MeasureRecordId',
		                'MeasureRecordItemContent',
		                'MeasureRecordValue',
		                'ParentBadItemId',
		                'ParentItemId',
		                'RecordItemContent',
		                'RecordItemId',
		            
		            //遗留问题      有对应的model
		            {name:'ListOfHelMeasureLegacy',type:'object'},  
		            //作业项目     有对应的model
		            {name:'ListOfHelMeasureItemList',type:'object'},  
		            
		            
		]
	}
});
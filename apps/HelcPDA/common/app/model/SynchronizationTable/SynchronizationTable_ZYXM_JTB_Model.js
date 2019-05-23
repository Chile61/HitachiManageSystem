Ext.define('HelcPDA.model.SynchronizationTable.SynchronizationTable_ZYXM_JTB_Model',{
	extend:'Ext.data.Model',
	config:{
		
		fields : [
	        	      'HELMeasureGroupName',// "临时测试2"
	        	      'MeasureItemAttachIFExistsFlag',// "N"
	        		  'Id',// "1-S64RO5"
	        		  'ListOfHelMaintainPlanContentAttachment',// ""
	        		  {name:'ListOfHelMeasureRecordList',type:'object'},//录值项目  需要
	        		  'MeasureItemAttachQuantity',// "0"
	        		  'MeasureItemComments',// ""
	        		  'MeasureItemContent',// "电梯运行正常确认"
	        		  'MeasureItemCover',// "共同"
	        		  'MeasureItemGroupName',// "其他"
	        		  'MeasureItemGroupName2',// "其他"
	        		  'MeasureItemIFGood',// "N"
	        		  'MeasureItemIFPhoto',// "N"
	        		  'MeasureItemIFRequired',// "Y"
	        		  'MeasureItemId',// "1-RSY5SB"
	        		  'MeasureItemIfMeasure',// "Y"
	        		  'MeasureItemJudge',// "3"
	        		  'MeasureItemLocaleFlag',// "N"
	        		  'MeasureItemLocation',// "其他"
	        		  'MeasureItemMaxValue',// ""
	        		  'MeasureItemMinValue',// ""
	        		  'MeasureItemName',// "电梯运行正常确认"
	        		  'MeasureItemNo',// "Y01"
	        		  'MeasureItemPeriod',// ""
	        		  'MeasureItemPostWork2',// ""
	        		  'MeasureItemPostWorkId',// ""
	        		  'MeasureItemPreWork2',// "3"
	        		  'MeasureItemPreWorkId',// "1-S64RO1"
	        		  'MeasureItemReCheckPersonFirstName',// "杨"
	        		  'MeasureItemReCheckPersonFullName',// "柳青杨"
	        		  'MeasureItemReCheckPersonId',// "1-SA30NS"
	        		  'MeasureItemReCheckPersonLastName',// "柳青"
	        		  'MeasureItemReCheckTime',// "03/23/2017 00:00:00"
	        		  'MeasureItemRequire',// "测量记录"
	        		  'MeasureItemResponseDivision',// "安装"
	        		  'MeasureItemResponsePersonFirstName',// "工"
	        		  'MeasureItemResponsePersonFullName',// "张  工"
	        		  'MeasureItemResponsePersonLastName',// "张"
	        		  'MeasureItemStandard',// "正常运行，无异响、无故障"
	        		  'MeasureItemType',// "直梯"
	        		  'MeasureItemYearFlag',// "N"
	        		  'MeasureItemZGCompleteDate',// "03/14/2017 00:00:00"
	        		  'MeasureItemZGDivision',// "验收"
	        		  'MeasureItemZGResponsePersonId',// "1-UIEJ"
	        		  'MeasureItemZGWorkTime',// "0"
	        		  'MeasureProjectId',// "1-S64RLL"
	        		  'MeasureRecordIFExistsFlag',// "Y"
	        		  'MeasureRecordQuantity',// "1"
		   ]
	}
});
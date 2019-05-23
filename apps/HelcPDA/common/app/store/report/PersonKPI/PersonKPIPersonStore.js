Ext.define('HelcPDA.store.report.PersonKPI.PersonKPIPersonStore',{
	id:'PersonKPIPersonStore',
	extend:'Ext.data.Store',
	config:{
		fields:[
			'PERSON_NAME',
			'PUNCTUAL_AP_RATE',
			'PE_ARRIVAL_RATE',
			'PE_FAULT_REPORT_RATE',
			'GRADE_POINT',
		],
	},
});
/**
 * 合同资料
 */
Ext.define('HelcPAD.store.appworkspace.Contract.ContractStore_erp_sql',{
	extend:'Ext.data.Store',
	requires:['HelcPAD.model.appworkspace.Contract.ContractModel'],
	config:{
		model:'HelcPAD.model.appworkspace.Contract.ContractModel'
	},
});
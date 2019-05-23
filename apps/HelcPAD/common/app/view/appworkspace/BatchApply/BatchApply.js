
Ext.define('HelcPAD.view.appworkspace.BatchApply.BatchApply', {
    extend: 'Ext.Container',
    id:'batchApply_id',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.tab.Panel',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.SegmentedButton',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '申请分批单',
                cls:'textfTwo',
                items: [
                    {
                        xtype: 'button',
                        ui: 'back',
                        text: '返回',
                        id:'New_batchApply_id_FH'  	
                    },
                    {
                        xtype: 'spacer'
                    },
                    /*{
                        xtype: 'button',
                        text: '提交'
                    }*/
                ]
            },
            {
                xtype: 'tabpanel',
                height: '100%',
                id:'batchApply_tpl',
                cls:'textfTwo',
                items: [
                    {
                        xtype: 'formpanel',
                        title: '分批单头',
                        id:'batchApply_fpdt',
                        items: [
                            {
                                xtype: 'fieldset',
                                title: '分批单头',
                                items: [
                                    {
                                    	id:'OU_NAME_BA',
                                        xtype: 'textfield',
                                        label: '业务实体',
                                        labelWidth:'40%',
                                        readOnly:true,
                                    },
                                    {
                                    	id:'CONTRACT_NO_BA',
                                        xtype: 'textfield',
                                        label: '合同编号',
                                        labelWidth:'40%',
                                        readOnly:true,
                                    },
                                    {
                                    	id:'SPLITBILL_NUM_BA',
                                        xtype: 'textfield',
                                        label: '单据编号',
                                        labelWidth:'40%',
                                        readOnly:true,
                                    },
                                    {
                                    	id:'STATUS_NAME_BA',
                                        xtype: 'textfield',
                                        label: '状态',
                                        labelWidth:'40%',
                                        readOnly:true,
                                    },
                                    {
                                    	id:'APPLY_EMPNAME_BA',
                                        xtype: 'textfield',
                                        label: '申请人',
                                        labelWidth:'40%',
                                        readOnly:true,
                                    },
                                    {
                                    	id:'APPLY_DEPNAME_BA',
                                        xtype: 'textfield',
                                        label: '申请部门',
                                        labelWidth:'40%',
                                        readOnly:true,
                                    },
                                    {
                                    	id:'APPLY_DATE_BA',
                                        xtype: 'textfield',
                                        label: '申请日期',
                                        labelWidth:'40%',
                                        readOnly:true,
                                    },
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                title: '合同信息',
                                items: [
                                    {
                                    	id:'CUSTOMER_NAME_BA',
                                        xtype: 'textfield',
                                        label: '客户',
                                        labelWidth:'40%',
                                        readOnly:true,
                                    },
                                    {
                                    	id:'FINAL_USE_UNIT_BA',
                                        xtype: 'textfield',
                                        label: '使用单位',
                                        labelWidth:'40%',
                                        readOnly:true,
                                    },
                                    {
                                    	id:'SIGNER_EMP_BA',
                                        xtype: 'textfield',
                                        label: '合同签订人',
                                        labelWidth:'40%',
                                        readOnly:true,
                                    },
                                    {
                                    	id:'RESPER_EMP_BA',
                                        xtype: 'textfield',
                                        label: '合同负责人',
                                        labelWidth:'40%',
                                        readOnly:true,
                                    },
                                    {
                                    	id:'LARGE_CUSTOMER_BA',
                                        xtype: 'textfield',
                                        label: '大客户',
                                        labelWidth:'40%',
                                        readOnly:true,
                                    },
                                    {
                                    	id:'SIGNER_CITY_NAME_BA',
                                        xtype: 'textfield',
                                        label: '签订地区',
                                        labelWidth:'40%',
                                        readOnly:true,
                                    },
                                    {
                                    	id:'SUBCOMPANY_NAME_BA',
                                        xtype: 'textfield',
                                        label: '签订分公司',
                                        labelWidth:'40%',
                                        readOnly:true,
                                    },
                                ]
                            },
                            /*{
                                xtype: 'fieldset',
                                title: '备注',
                                items: [
									{
									    xtype: 'textfield',
									    label: '备注',
									    cls:'textf',
									    labelWidth:'40%',
									}
                                ]
                            },*/
                        ]
                    },
                    {
                        xtype: 'container',
                        title: '分批单行',
                        id:'batchApply_fpdh',
                        items: [
                            /*{
                                xtype: 'segmentedbutton',
                                centered: false,
                                margin: 10,
                                items: [
                                    {
                                        xtype: 'button',
                                        id:'batchApply_fpdh_add',
                                        text: '增加'
                                    },
                                    {
                                        xtype: 'button',
                                        id:'batchApply_fpdh_delete',
                                        text: '删除'
                                    }
                                ]
                            },*/
                            {
                                xtype: 'list',
                                id:'batchApply_list',
                                height: '100%',
                                store:'BatchApplyDetailStore',
                                onItemDisclosure: true,
                                itemTpl: [
                                          '<table border=0 width=100%>',
                                          '    <tr><td width=60%>工号:{ELEVATOR_NO}</td><td width=40%>设备号:{EQUIPMENT_NO}</td></tr>',
                                          '</table>'
                                	
                                	/*'<table border=0 width=100% style="color:#666" class="textf">'+
                                    '  <tr>'+
                                    '     <td width=10% rowspan="2">'+
                                    '        <div name="groupkung" class="p_judge_box2" id="kung">3</div>'+
                                    '     </td>'+
                                    '     <td width=90%>1{one}批次	工号	设备号	营业梯种</td>'+
                                    '  </tr>'+
                                 
                                    '</table>',*/
                                ],
                            }
                        ]
                    }
                ]
            }
        ]
    }

});
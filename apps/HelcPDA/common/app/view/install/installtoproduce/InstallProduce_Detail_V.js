/*
 * File: app/view/MyPanel47.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('HelcPDA.view.install.installtoproduce.InstallProduce_Detail_V', {
    extend: 'Ext.Panel',
    id:'InstallProduce_Detail_VID',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.tab.Panel',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Select'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '排产',
                items: [
                    {
                        xtype: 'button',
                        text: '返回',
                        ui:'back',
                        id:'InstallProduce_Detail_VID_FH_BUTTON',
/*                        listeners:{
                        	tap:function(){
                             var obj=Ext.getCmp('InstallProduce_EnoList_VID');
                             if(!obj){
                            	 obj=Ext.create('HelcPDA.view.install.installtoproduce.InstallProduce_EnoList_V');
                             }
                             Ext.Viewport.setActiveItem(obj);
                        	}
                        }*/
                    },
                    {
                        xtype: 'spacer'
                    },{
                        xtype: 'button',
                        itemId: 'mybutton5',
                        text: '保存',
                        id:'saveButton',
                    },
                    {
                        xtype: 'button',
                        itemId: 'mybutton5',
                        text: '提交',
                       id:'commitButton',
                    }
                ]
            },
            {
                xtype: 'tabpanel',
                flex: 1,
                items: [
                    {
                        xtype: 'container',
                        title: '查看数据',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'formpanel',
                                height: '100%',
                                items: [
                                    {
                                        xtype: 'fieldset',
                                     //   title: '确认排产',
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                label: '合同号:',
                                                id:'CONTRACT_NO',
                                                labelWidth: '50%',
                                                value: [
                                                 
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '工号:',
                                                id:'ELEVATOR_NO',
                                                labelWidth: '50%',
                                                value: [
                                                
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '工号类型:',
                                                id:'ELEVATOR_CLASS',
                                                labelWidth: '50%',
                                                value: [
                                             
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '是否调梯',
                                                id:'IS_CHANGED',
                                                labelWidth: '50%',
                                                value: [
                                             
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '调梯工号:',
                                                id:'FROM_ELEVATOR',
                                                labelWidth: '50%',
                                                value: [
                                              
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '交货期:',
                                                id:'DELIVERY_DATE',
                                                labelWidth: '50%',
                                                value: [
                                              
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '交货日期:',
                                                id:'TMPELV_DELIVERY_DATE',
                                                labelWidth: '50%',
                                                value: [
                                                   
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '排产日期:',
                                                id:'REFERENCE_DATE',
                                                labelWidth: '50%',
                                                value: [
                                               
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '预排产日:',
                                                id:'PRESCHEDULE_CONFIRM_DATE',
                                                labelWidth: '50%',
                                                value: [
                                               
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '当前排产节点:',
                                                id:'NODE_NAME',
                                                labelWidth: '50%',
                                                value: [
                                                    
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '清单发布日:',
                                                id:'LIST_PUBLISHED_DATE',
                                                labelWidth: '50%',
                                                value: [
                                                
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '特性值状态:',
                                                id:'ATO_PROCESS',
                                                labelWidth: '50%',
                                                value: [
                                                   
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '分电缆状态:',
                                                id:'BRANCH_CABLE_STATUS',
                                                labelWidth: '50%',
                                                value: [
                                                   
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'autoTextArea',
                                                label: '排产流程:',
                                                id:'PROCESS_NAME',
                                                labelWidth: '50%',
                                                value: [
                                                   
                                                ],
                                                
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '上排产节点:',
                                                id:'PRE_NODE_NODE_NAME',
                                                labelWidth: '50%',
                                                value: [
                                                   
                                                ],
                                                readOnly: true
                                            }, {
                                                xtype: 'textfield',
                                                label: '来源类型:',
                                                id:'SOURCE_TYPE',
                                                labelWidth: '50%',
                                                value: [
                                                   
                                                ],
                                                readOnly: true
                                            }, {
                                                xtype: 'textfield',
                                                label: '限制制造周期:',
                                                id:'RESTRICT_DAY',
                                                labelWidth: '60%',
                                                value: [
                                                  
                                                ],
                                                readOnly: true
                                            }, {
                                                xtype: 'textfield',
                                                label: '最终产出日期:',
                                                id:'FINAL_CONFIRM_DATE',
                                                labelWidth: '60%',
                                                value: [
                                                   
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '预排产下达日:',
                                                id:'PRESCHEDULE_DATE',
                                                labelWidth: '60%',
                                                value: [
                                              
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '上节点产出期:',
                                                id:'PRE_NODE_CONFIRM_DATE',
                                                labelWidth: '60%',
                                                value: [
                                                   
                                                ],
                                                readOnly: true
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: '录入数据',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'formpanel',
                                flex: 1,
                                height: 600,
                                items: [
                                   {
                                        xtype: 'fieldset',
                                        id:'HIDDenID',
                                        title: '',
                                        items: [{
                                                xtype: 'selectfield',
                                                label: '处理状态',
                                                labelWidth: '40%',
                                                id:'selectfieldID',
                                                // placeHolder: '请选择',
                                                options: [{
                                                	text: '不处理',
                                                    value: '不处理'
                                                 },{
                                                        text: '排产撤销',
                                                        value: '排产撤销'
                                                 }],
                                                usePicker: 'auto'
                                          }]
                                	 },
                                    {
                                    	 xtype: 'fieldset',
                                         id:'HID_ID',
                                         title: '',
                                         items: [{
                                             xtype: 'selectfield',
                                             id:'selectfieldID2',
                                             label: '处理状态',
                                             labelWidth: '40%',
                                             options: [{
                                                text: '下达',
                                                value: '下达'
                                              },{
                                                 text: '不处理',
                                                 value: '不处理'
                                             }],
                                             usePicker: 'auto',
                                         },{
                                              xtype: 'textfield',
                                              label: '制造周期',
                                              id:'RESTRICT_DAY',
                                              labelWidth: '40%',
                                              value: [],
                                              readOnly: true
                                         },{
                                               xtype: 'textfield',
                                               label: '当前排产节点',
                                               id:'NODE_NAME_TWO',
                                               labelWidth: '50%',
                                               value: [ ],
                                               readOnly: true
                                         },{
                                        	 xtype: 'textfield',
                                        	 label: '最快下达日期',
                                        	 id:'NODE_ZKXDRQ',
                                        	 labelWidth: '50%',
                                        	 value: [  ],
                                        	 readOnly: true
                                         },{
                                              xtype:'fieldset',
                                              layout:'hbox',
                                              id:'InstallProduce_Detail_VID_fieldset',
                                              items:[{
                                              xtype: 'textfield',
                                              width:'80%',
                                              label: '节点确认日期',
                                              id:'TimeID',
                                              labelWidth: '60%',
                                              readOnly:true,
                                              disabled:false,
                                               //required:true,
                                               placeHolder: '请选择时间',
                                               listeners:{
                                            	   focus:function(){
                                            		   initDate1('TimeID','当前节点确认日期');
                                                   },
                                               	},
                                            },{
                                            	xtype:'button',
                                                width:'20%',
                                                text: '确定',
                                                id:'gzezxy_id',
                                                // padding:'2',
                                                // top:'100',
                                           }]
                                       },{
                                             xtype: 'textfield',
                                             label: '上一节点确认日期',
                                             id:'PRE_NODE_CONFIRM_DATE',
                                             labelWidth: '60%',
                                             value: [ ],
                                             readOnly: true
                                        },{
                                        	xtype: 'textareafield',
											label: '说明1',
											id:'RESTRICT_DAY_SHUOMING',
											labelWidth: '40%',
											/*value: [
											      '1、 撤销：下达撤销后，排产流程将返回上一节点，常用于对电梯排产的撤销。2、 不处理：下达不处理后，本节点的操作权将返回至ERP，常用于下一节点撤销排产，但实际上只是修改排产日期，而不是撤销电梯排产。'
											 ],*/
											height:115,
											readOnly: true,
											//maxRows:10,
										},{
                                        	xtype: 'textareafield',
											label: '说明2',
											id:'RESTRICT_DAY_SHUOMING_TWO',
											labelWidth: '40%',
											/*value: [
											      '1、 撤销：下达撤销后，排产流程将返回上一节点，常用于对电梯排产的撤销。2、 不处理：下达不处理后，本节点的操作权将返回至ERP，常用于下一节点撤销排产，但实际上只是修改排产日期，而不是撤销电梯排产。'
											 ],*/
											height:150,
											readOnly: true,
											//maxRows:10,
										}]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }

});
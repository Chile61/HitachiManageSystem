
/* JavaScript content from app/view/RegularInspection/Overlay_RI_SearchList.js in folder common */
/*
 * File: app/view/RegularInspection/RI_SearchElevatorNo.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('HelcPDA.view.RegularInspection.Overlay_RI_SearchList', {
    extend: 'Ext.Container',

    requires: [
        'Ext.TitleBar',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.Button',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.SegmentedButton'
    ],

    config: {
        centered: true,
        height: 280,
        id: 'Overlay_RI_SearchList',
        width: '90%',
        hideOnMaskTap: true,
        layout: 'vbox',
        modal: true,
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: '查找参数'
            },
            {
                xtype: 'formpanel',
                height: 210,
                layout: 'vbox',
                scrollable: false,
                items: [
                    {
                        xtype: 'fieldset',
                        defaults: {
                            labelWidth: 130
                        },
                        items: [
                            {
                                xtype: 'textfield',
                                id: 't_Ol_RIS_AssetNumber',
                                label: '电梯工号',
                                placeHolder: '请输入工号(至少4位字符)'
                            },
                            {
                                xtype: 'textfield',
                                id: 't_Ol_RIS_QCEngineer',
                                label: '检查工程师',
                                placeHolder: '例如 张 或 张三'
                            },
                            
                            {
                                xtype: 'selectfield',
                                id: 't_Ol_RIS_Status',
                                label: '状态',
                                usePicker: true,
                                options: [
                                      {text: '请选择',value: ''},
	                                  {text: '未完成',value: '未完成'},
	                                  {text: '已审核',value: '已审核'},
	                                  {text: '已结束',value: '已结束'},
                                ]
                            },
                            {
                            	xtype: 'datepickerfield',
                                id: 't_Ol_RIS_Created',
                                label: '查询起始时间',
                                placeHolder: '月/日/年',
                                dateFormat: 'm/d/Y',
                                value: Ext.Date.add(new Date(), Ext.Date.MONTH, -1),
                                picker: {
                                	value: {
                                        month: new Date().getMonth()+1,
                                        day: new Date().getDate(),
                                        year: new Date().getFullYear(),
                                    },
                                    slotOrder: ['month','day','year'],
                                    yearFrom: new Date().getFullYear()-2,
                                    yearTo: new Date().getFullYear(),
                                    doneButton: '确定',
                                    cancelButton: '取消'
                                }
                            },
                            {
                                xtype: 'textfield',
                                id: 't_Ol_RIS_DomainName',
                                label: '地盘',
                                placeHolder: '请输入地盘'
                            },
                        ]
                    }
                ]
            },
            {
                xtype: 'segmentedbutton',
                docked: 'bottom',
                items: [
                    {
                        xtype: 'button',
                        id: 'btn_Ol_RIS_cancel',
                        flex: 1,
                        text: '取消'
                    },
                    {
                        xtype: 'button',
                        id: 'btn_Ol_RIS_search',
                        flex: 1,
                        text: '确定'
                    }
                ]
            }
        ]
    }

});
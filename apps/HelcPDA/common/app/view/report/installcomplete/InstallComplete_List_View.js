/*
 * File: app/view/bbPanel3.js
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

Ext.define('HelcPDA.view.report.installcomplete.InstallComplete_List_View', {
    extend: 'Ext.Panel',
    id:'installComplete_List_View',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '安装完工情况报表',
                items: [
                    {
                        xtype: 'button',
                        ui: 'back',
                        text: '返回',
                        id:'instalComplet_back'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        iconCls: 'info',
                        text: '',
                        handler:function(button,e){
                        	Ext.Msg.alert("二级分公司暂无指标");
                        }
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'selectfield',
                        label:'',
                        id:'choiceCompany',
                        valueField:'COMPANY_ID',
                        maxWidth:120,
                        displayField:'COMPANY_NAME',
                        options:[]
                    }
                   ,{
                        xtype: 'datepickerfield',
                        iconCls: 'date',
                        id:'choiceTime',
                        label: '时间',
                        labelWidth:'35%',
                        maxWidth:190,
                        dateFormat:'Y-m',
                        picker: {
                        	id:'pickerChange',
                            slotOrder: [
                                'year',
                                'month',
                            ],
                            doneButton: '完成',
                            cancelButton: '取消',
                            yearFrom:(new Date().getFullYear()-1),
                            yearTo:new Date().getFullYear()
                        }
                    	
                    	
                    }
                ]
            },
            {
                xtype: 'list',
                data: [
                ],
                height: '100%',
                itemId: 'mylist7',
                id:'installCom_List',
                store:'InstallCompleteStore',
                itemTpl: [
                    '<table border=0 width=100% style="color:#666">',
                    '  <tr>',
                    '    <td colspan="3" width=60% style="color:#000;">{COMPANY_NAME}</td>',
                    '  </tr>',
                    '  <tr>',
                    '    <td width=32%>指标:{COMPLETE_TARGET}</td>',
                    '    <td width=32% style="padding-right:5px;">完工量:{COMPLETE_COUNT}</td>',
                    '    <td width=32%>完工率:{COMPLETE_RATE}</td>',
                    '  </tr>',
                    '</table>'
                ],
                onItemDisclosure: true
            }
        ]
    }

});
/*
 * File: app/view/IncomeList.js
 *
 * This file was generated by Sencha Architect
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

Ext.define('HelcPAD.view.appworkspace.Income.IncomeList', {
    extend: 'Ext.Container',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
    	id:'IncomeListId',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '收款款项明细信息',
                items: [
                    {
                    	id:'btn_BackIncomeList',
                        xtype: 'button',
                        ui: 'back',
                        text: '返回'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                    	id:'btn_IncomeList',
                        xtype: 'button',
                        text: '拆分实际收款'
                    }
                ]
            },
            {
                xtype: 'list',
                id:'IncomeListId_list',
                store:'IncomeStore',
                height: '100%',
                itemTpl: [
//                    '<div>'+
//                    '<div name="groupkung" class="p_judge_box2" id="kung_IoC">3</div>'+
//                    '13G12345（工号）	设备号	收款款项名称	款项类型	客户</div>'
                    
                    '<table border=0 width=100% style="color:#666" class="textf">'+
                    '  <tr>'+
                    '     <td width=10% rowspan="2">'+
                    '        <div name="groupkung_conlist" class="p_judge_box2" id="conkung_conlist">3</div>'+
                    '     </td>'+
                    '     <td width=90%>1{one}　13G12345（工号）</td>'+
                    '  </tr>'+
                    '  <tr>'+
                    '      <td>设备号	收款款项名称	款项类型	客户</td>'+
                    '  </tr>'+
                    '</table>',
                    
                    ],
                onItemDisclosure: true
            }
        ]
    }

});

/* JavaScript content from app/view/customer/customer-v.js in folder common */
/*
 * File: app/view/MyPanel45.js
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

Ext.define('HelcPDA.view.customer.customer-v', {
    extend: 'Ext.Panel',
    id:'customer-vid',
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
                title: '客户信息查询',
                items: [
                    {
                    	 xtype: 'button',
                         ui:'back',
                         text: '主页',
                         id: 'backToMenus',
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        iconCls: 'search',
                        id:'searCHID',
                    }
                ]
            },{
            	xtype:'formpanel',
            	height: '100%',
            	items:[
					{
						xtype:'fieldset',
						items:[
						     {
					    		 xtype: 'textfield',
					             label: '客户名称:',
					             id:'CustomerID',
					             labelWidth: '40%',
					             placeHolder: '请输入客户名称',
					             value:''
						     }
						]
					}
            	  ]
            },
/*            {
                xtype: 'list',
                id:'List_VID',
                data: [
                   
                ],
                height: '100%',
                itemId: 'mylist7',
                itemTpl: [
                    '<table border=0 width=100% style="color:#666">',
                  //  '  <tr>',
                  //  '    <td width=60% style="color:#000;font-size:18px;">{CONTRACT_NO}</td>',
                  //  '    <td width=40% style="padding-right:15px;text-align: right;">台数：{NUM}</td>',
                  //  '  </tr>',
                    '  <tr>',
                    '      <td colspan="2">{ACCNT_NAME}</td>',
                    '  </tr>',
                    '</table>'
                ],
                onItemDisclosure: true,
                store:'installtaskStore2'
            }*/
        ]
    }

});
/*
 * File: app/view/TransportSearch.js
 *
 * This file was generated by Sencha Architect version 3.0.1.
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

Ext.define('HelcGDEXP.view.TransportSearch', {
	id:'TransportSearch',
    extend: 'Ext.form.Panel',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.form.FieldSet',
        'Ext.field.TextArea'
    ],

    config: {
        id: 'TransportSearch',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '物流运单查询',
//                items: [
//                    {
//                        xtype: 'button',
//                        id: 'btn_Back_TS',
//                        ui: 'back',
//                        text: '返回'
//                    }
//                ]
            },
            {
                xtype: 'fieldset',
                title: '请输入物流运单号',
                items: [
                    {
                        xtype: 'textfield',
                        id: 'TSID',
                        label: '单号',
                        labelWidth: '31%'
                    }
                ]
            },
            {
                xtype: 'button',
                id: 'btn_Search_TS',
                margin: '20 20 auto 20',
                text: '查询'
            }
        ]
    }

});
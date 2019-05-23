
/* JavaScript content from app/view/report/pdabbxx/Pdabbxx_View.js in folder common */
/*
 * File: app/view/bbPanel4.js
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

Ext.define('HelcPDA.view.report.pdabbxx.Pdabbxx_View',  {
    extend: 'Ext.form.Panel',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.form.FieldSet',
        'Ext.field.Text',
    ],

    config: {
    	id:'Pdabbxx_View',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'PDA登录报表详细',
                items: [
                    {
                        xtype: 'button',
                        ui: 'back',
                        text: '返回',
                        id:'pdabbxx_back'
                    },
                    {
                        xtype: 'spacer'
                    },

                ]
            },
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'textfield',
                        label: '区域:',
                        cls:'textf',
                        labelWidth:'200px',
                        id:'AREA',
                        readOnly:true,
                        
                    },
                    {
                        xtype: 'textfield',
                        label: '分公司:',
                        cls:'textf',
                        labelWidth:'200px',
                        id:'COMPANY',
                        readOnly:true,
                    },
                    {
                        xtype: 'textfield',
                        label: '总人数:',
                        cls:'textf',
                        labelWidth:'200px',
                        id:'LOGIN_TOTAL',
                        readOnly:true,
                    },
                    {
                        xtype: 'textfield',
                        label: '2天内登录人数:',
                        cls:'textf',
                        labelWidth:'200px',
                        id:'LOGIN_1_2',
                        readOnly:true,
                    },
                    {
                        xtype: 'textfield',
                        label: '2天内登录比率:',
                        cls:'textf',
                        labelWidth:'200px',
                        id:'RATE_1_2',
                        readOnly:true,
                    },
                    {
                        xtype: 'textfield',
                        label: '3-8天内登录人数:',
                        cls:'textf',
                        labelWidth:'200px',
                        id:'LOGIN_3_8',
                        readOnly:true,
                    },
                    {
                        xtype: 'textfield',
                        label: '3-8天内登录比率:',
                        cls:'textf',
                        labelWidth:'200px',
                        id:'RATE_3_8',
                        readOnly:true,
                    },
                    {
                        xtype: 'textfield',
                        label: '9-15天内登录人数:',
                        cls:'textf',
                        labelWidth:'200px',
                        id:'LOGIN_9_15',
                        readOnly:true,
                    },
                    {
                        xtype: 'textfield',
                        label: '9-15天内登录比率:',
                        cls:'textf',
                        labelWidth:'200px',
                        id:'RATE_9_15',
                        readOnly:true,
                    },
                    {
                        xtype: 'textfield',
                        label: '16-30天内登录人数:',
                        cls:'textf',
                        labelWidth:'200px',
                        id:'LOGIN_16_30',
                        readOnly:true,
                    },
                    {
                        xtype: 'textfield',
                        label: '16-30天内登录比率:',
                        cls:'textf',
                        labelWidth:'200px',
                        id:'RATE_16_30',
                        readOnly:true,
                    },
                    {
                        xtype: 'textfield',
                        label: '31-60天内登录人数:',
                        cls:'textf',
                        labelWidth:'200px',
                        id:'LOGIN_31_60',
                        readOnly:true,
                    },
                    {
                        xtype: 'textfield',
                        label: '31-60天内登录比率:',
                        cls:'textf',
                        labelWidth:'200px',
                        id:'RATE_31_60',
                        readOnly:true,
                    },
                    {
                        xtype: 'textfield',
                        label: '60天以上未登录人数:',
                        cls:'textf',
                        labelWidth:'200px',
                        id:'LOGIN_60',
                        readOnly:true,
                    },
                    {
                        xtype: 'textfield',
                        label: '60天以上未登录比率:',
                        cls:'textf',
                        labelWidth:'200px',
                        id:'RATE_60',
                        readOnly:true,
                    },
                  
                ]
            }
        ]
    }

});


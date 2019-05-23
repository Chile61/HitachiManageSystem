/*
 * File: app/view/InstallatoinTasksSearchPanel.js
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

Ext.define('HelcPDA.view.install.installtask.InstallatoinTasksSearchPanel', {
    extend: 'Ext.Panel',
    id:'InstallatoinTasksSearchPanel_id',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.Spacer'
    ],

    config: {
        margin: '0 auto',
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '按条件搜索',
                items: [
                    {
                        xtype: 'button',
                        text: '返回',
                        ui:'back',
                        id:'InstallatoinTasksSearchPanel_id_FH_BUTTON',
                    }
                ]
            },
            {
                xtype: 'formpanel',
                flex: 1,
                scrollable: false,
                items: [
                    {
                        xtype: 'fieldset',
                        margin: '0 auto',
                        items: [
                            {
                                xtype: 'textfield',
                                label: '合同号',
                                id:'SInstallationContractNo_id',
                                labelWidth: '40%',
                                placeHolder: '请输入安装合同号',
                                value:''
                            },
                            {
                                xtype: 'textfield',
                                label: '工号',
                                id:'SJobNumber_id',
                                labelWidth: '40%',
                                placeHolder: '请输入工号',
                                value:''
                            },
                            {
                                xtype: 'textfield',
                                label: '项目',
                                id:'SProject_id',
                                labelWidth: '40%',
                            
                                placeHolder: '请输入项目',
                                value:''
                            },
                            {
                                xtype: 'panel',
                                layout: {
                                    type: 'hbox',
                                    align: 'center'
                                },
                                items: [
                                    {
                                        xtype: 'spacer'
                                    },
                                    {
                                        xtype: 'button',
                                        margin: '15 0',
                                        width: '90%',
                                        id:'InstallatoinTasksSearchPanel_id_Search_id',
                                        text: '搜索'
                                    },
                                    {
                                        xtype: 'spacer'
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
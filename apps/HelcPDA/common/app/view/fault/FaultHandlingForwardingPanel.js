/*
 * File: app/view/FaultHandlingForwardingPanel.js
 *
 * This file was generated by Sencha Architect version 3.0.3.
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

Ext.define('HelcPDA.view.fault.FaultHandlingForwardingPanel', {
    extend: 'Ext.Panel',
    id: 'FaultHandlingForwardPanel',
    
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Select',
        'Ext.Label'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '转派',
                items: [
                    {
                        xtype: 'button',
                        id: 'back_detail',
                        ui: 'back',
                        text: '返回'
                    },
                    {
                        xtype: 'spacer'
                    }
                ]
            },
            {
                xtype: 'formpanel',
                flex: 1,
                height: 600,
                items: [
                    {
                        xtype: 'fieldset',
                        title: '   查询条件',
                        items: [
                            {
                                xtype: 'selectfield',
                                id: 'FHF_STATION_ID',
                                label: '  所属站',
                                labelWidth: '40%',
                                placeHolder: '请选择',
                                options: [
                                ],
                                usePicker: 'auto'
                            },
                            {
                                xtype: 'selectfield',
                                id: 'FHF_area',
                                label: '片',
                                labelWidth: '40%',
                                placeHolder: '请选择',
                                options: [
                                ],
                                usePicker: 'auto'
                            },
                            {
                                xtype: 'selectfield',
                                id: 'FHF_GROUP',
                                label: '组',
                                labelWidth: '40%',
                                placeHolder: '请选择',
                                options: [
                                ],
                                usePicker: 'auto'
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
                                        id: 'FHF_SearchByinfo',
                                        margin: '15 0',
                                        width: '90%',
                                        text: '查询'
                                    },
                                    {
                                        xtype: 'spacer'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'label',
                        cls: 'm-label-prompt',
                        height: 66,
                        html: '操作提示：<br>1.先选择对应的查询条件(站、片、组)。<br>2.点击\'查询\'按钮。<br>3.找出对应动转派人员，再点击\'提交\'按钮转派故障单。',
                        margin: '5 auto 0 auto',
                        width: '96%'
                    },
                    {
                        xtype: 'fieldset',
                        title: '其他输入项',
                        items: [
                            {
                                xtype: 'selectfield',
                                id: 'person',
                                label: '转派人员',
                                labelWidth: '40%',
                                placeHolder: '请选择',
                                options: [
                                ],
                                usePicker: 'auto'
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
                                        id: 'FHFW_commit',
                                        margin: '15 0',
                                        width: '90%',
                                        text: '提交'
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
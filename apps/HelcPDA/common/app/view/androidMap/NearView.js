/*
 * File: app/view/NearView.js
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

Ext.define('HelcPDA.view.androidMap.NearView', {
    extend: 'Ext.Container',
    id:'nearView',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.Label',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Radio'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '',
                items: [
                    {
                        xtype: 'button',
                        html: '地图',
                        ui: 'back',
                        id:'arroudToMap'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'label',
                        html: '附近的信息'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        iconCls: 'locate',
                        text: '显示',
                        id:'showLocation'
                    }
                ]
            },
            {
                xtype: 'formpanel',
                id:'checkMeter',
                flex: 1,
                items: [
                    {
                        xtype: 'fieldset',
                        title: '距离',
                        items: [
                            {
                                xtype: 'radiofield',
                                label: '500米',
                                name:'meter',
                                checked: true,
                                value:'500',
                            },
                            {
                                xtype: 'radiofield',
                                label: '1000米',
                                name:'meter',
                                value:'1000'	
                            },
                            {
                                xtype: 'radiofield',
                                label: '2000米',
                                name:'meter',
                                value:'2000'	
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: '类型',
                        items: [
                            {
                                xtype: 'radiofield',
                                label: '全部',
                                value:'全部',	
                                name:'stype',
                                checked: true,
                            },
                            {
                                xtype: 'radiofield',
                                label: '人员',
                                value:'人员',
                                name:'stype',
                            },
                            {
                                xtype: 'radiofield',
                                label: '地盘',
                                value:'地盘',
                                name:'stype',	
                            },
                            {
                                xtype: 'radiofield',
                                label: '工号',
                                value:'工号',
                                name:'stype',
                            }
                        ]
                    }
                ]
            }
        ]
    }

});
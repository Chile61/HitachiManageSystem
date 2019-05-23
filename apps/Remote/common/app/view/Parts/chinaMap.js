/*
 * File: app/view/Parts/chinaMap.js
 *
 * This file was generated by Sencha Architect
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

Ext.define('HelcRemote.view.Parts.chinaMap', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Panel',
        'Ext.Label',
        'Ext.Button',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        id: 'Parts_chinaMap',
        layout: 'vbox',
        items: [
            {
                xtype: 'panel',
                cls: 'remote-breadCrumb',
                docked: 'top',
                items: [
                    {
                        xtype: 'label',
                        cls: 'remote-breadCrumb-con',
                        html: '配件',
                        id: 'Parts_chinaMap_title'
                    },
                    {
                        xtype: 'panel',
                        cls: 'remote-breadCrumb-buttonBox',
                        docked: 'right',
                        items: [
                            {
                                xtype: 'button',
                                cls: 'remote-buttonColor-orange',
                                id: 'Parts_chinaMap_BtnReturn',
                                text: '返回'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                flex: 1,
                cls: 'remote-leftsideBar',
                docked: 'left',
                hidden: true,
                layout: 'vbox',
                items: [
                    {
                        xtype: 'list',
                        flex: 1,
                        data: [
                            {
                                text: '全国地图'
                            },
                            {
                                text: '配件跟踪'
                            },
                            {
                                text: '配件数据'
                            },
                            
                        ],
                        id: 'Parts_subNav',
                        itemTpl: [
                            '<div>{text}</div>'
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                flex: 1,
                cls: [
                    'remote-content',
                    'remote-service'
                ],
                items: [
                    {
                        xtype: 'panel',
                        cls: 'remote-service-Parts',
                        items: [
                            {
                                xtype: 'panel',
                                cls: 'remote-Parts-Region',
                                docked: 'left',
                                items: [
                                    {
                                        xtype: 'panel',
                                        cls: 'remote-title',
                                        items: [
                                            {
                                                xtype: 'label',
                                                cls: 'remote-titleText',
                                                docked: 'left',
                                                html: '全国四大区域'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'button',
                                        id: 'Parts_chinaMap_BtnHd',
                                        text: '华东'
                                    },
                                    {
                                        xtype: 'button',
                                        id: 'Parts_chinaMap_BtnHn',
                                        text: '华南'
                                    },
                                    {
                                        xtype: 'button',
                                        id: 'Parts_chinaMap_BtnHx',
                                        text: '华西'
                                    },
                                    {
                                        xtype: 'button',
                                        id: 'Parts_chinaMap_BtnHb',
                                        text: '华北'
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
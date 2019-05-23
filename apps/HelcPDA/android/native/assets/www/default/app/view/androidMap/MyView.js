
/* JavaScript content from app/view/androidMap/MyView.js in folder common */
/*
 * File: app/view/MyView.js
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

Ext.define('HelcPDA.view.androidMap.MyView', {
    extend: 'Ext.Container',
    id:'selfMyView',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.Label',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.DatePicker',
        'Ext.picker.Date'
    ],

    config: {
        style: 'background:#ECEBF1;',
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
                        id:'mineToMap'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'label',
                        html: '我的信息'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button'
                    }
                ]
            },
            {
                xtype: 'list',
                scrollable:false,
                id:'myDetaillList',
                data: [
                    {
                        title: '我的资料',
                        color: '#157efb',   //red
                        icon: 'U',
                        id:'myDetail',
                        size:'13pt',
                        space:'&nbsp;&nbsp;&nbsp;'
                    },
                    {
                        title: '我的下属',
                        color: '#157efb',  //blue
                        icon: 'g',
                        id:'myBelow',
                        size:'18pt',
                        space:'&nbsp;&nbsp;'
                    },
                    {
                        title: '上传我的定位数据',
                        color: '#157efb', //green
                        icon: 'c',
                        id:'upload',
                        size:'13pt',
                        space:'&nbsp;&nbsp;&nbsp;'
                    },
                    {
                        title: '离线地图下载',
                        color: '#157efb',  //grey
                        icon: '~',
                        id:'download',
                        size:'13pt',
                        space:'&nbsp;&nbsp;&nbsp;'
                    }
                ],
                height: 174,  // 130  //style=\'font-family:Pictos;color:{color};width:26px;height:26px;\'
                itemTpl: [
                    '<span style=\'font-family:Pictos;color:{color};font-size:{size}\'>{icon}</span>{space}{title}'
                ],
                onItemDisclosure: true
            },
            {
                xtype: 'formpanel',
                height: 170,
                scrollable:false,
                items: [
                    {
                        xtype: 'fieldset',
                        title: '我的轨迹',
                        items: [
                            {
                                xtype: 'datepickerfield',
                                label: '日期:',
                                labelWidth: '25%',
                                value: {
                                	year: new Date().getFullYear(),
                                    month: (new Date().getMonth()+1),
                                    day: new Date().getDate()
                                },
                                placeHolder: 'yyyy-mm-dd',
                                dateFormat: 'Y-m-d',
                                id:'mineDate'
                            },
                            {
                                xtype: 'button',
                                margin: '10 auto 10 auto',
                                ui: 'action',
                                width: 150,
                                iconCls: 'search',
                                text: '查看轨迹',
                                id:'checkRoult'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});
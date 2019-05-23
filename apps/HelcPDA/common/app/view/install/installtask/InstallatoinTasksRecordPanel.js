/*
 * File: app/view/InstallatoinTasksRecordPanel.js
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

Ext.define('HelcPDA.view.install.installtask.InstallatoinTasksRecordPanel', {
    extend: 'Ext.Panel',
    id:'InstallatoinTasksRecordPanel_id',
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
                title: '安装任务转派日志',
                items: [
                    {
                        xtype: 'button',
                        text: '返回',
                        id:'InstallatoinTasksRecordPanel_id_FH_BUTTON',
                        ui:'back',
                    },
                    {
                        xtype: 'spacer'
                    }
                ]
            },
            {
                xtype: 'list',
                data: [
                    
                ],
                height: '100%',
                itemId: 'mylist20',
                itemTpl: [
                    '<table border=0 width=100% style="color:#666">',
                    '  <tr>',
                    '    <td width=50% style="color:#000;font-size:22px;">{ELEVATOR_NO}</td>',
                    '    <td width=40% style="text-align: right">批次:{SEQ_NUM}</td>',
                    '  </tr>',
                    '  <tr>',
                    '      <td>接收人员:{PERSON_NAME}</td>',
                    '    <td style="text-align: right">{time}</td>',
                    '  </tr>',
                    '</table>'
                ],
                store:'installRecodrStore'
            }
        ]
    }

});
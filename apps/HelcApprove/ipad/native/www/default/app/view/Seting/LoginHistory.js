
/* JavaScript content from app/view/Seting/LoginHistory.js in folder common */
/*
 * File: app/view/MyContainer21.js
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

Ext.define('HelcApprove.view.Seting.LoginHistory', {
    extend: 'Ext.Container',
    id:'LoginHistory',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Label'
    ],

    config: {
    	scrollable: 'vertical',
        html: '<table id="loginlogTable" width="100%" border="1" cellspacing="0" cellpadding="0">   <tr>     <td height="30"><div align="center">操作时间</div></td>     <td height="30"><div align="center">类型</div></td>     <td height="30"><div align="center">是否成功</div></td>     <td height="30"><div align="center">设备标识</div></td>     <td height="30"><div align="center">是否本机</div></td>     <td height="30"><div align="center">备注信息</div></td>  </tr> </table>',
        padding: 10,
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '登录历史（仅显示最近100条记录）',
                items: [
                    {
                        xtype: 'button',
                        id:'btn_loginhistory_back',
                        ui: 'back',
                        text: '返回'
                    }
                ]
            },
            {
                xtype: 'label',
                html: '<font color="#FF0000" id="loginHistoryFont"></font>',
                margin: '0 0 5 0'
            }
        ]
    }

});
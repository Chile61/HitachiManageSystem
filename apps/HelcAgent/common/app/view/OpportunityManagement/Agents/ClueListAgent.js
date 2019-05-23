/*
 * File: app/view/Agents/ClueListAgent.js
 *
 * This file was generated by Sencha Architect
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

Ext.define('HelcAgent.view.OpportunityManagement.Agents.ClueListAgent', {
    extend: 'Ext.Container',
    id:'clueListAgent',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '线索列表',
                cls:'textf',
                height:45,
                /*items: [
                    {
                    	id:'clueListAgentBack',
                        xtype: 'button',
                        ui: 'back',
                        text: '返回'
                    },{
                    	xtype:'spacer'
                    },{
                    	id:'clueListAgentQuery',
                    	xtype:'button',
                    	text:'查询'
                    }
                ]*/
            },{
            	xtype:'toolbar',
                docked: 'top',
                height: 167,
                layout: 'hbox',
                style: 'background:#EDEBF1;',
            	html:'<div style="width:100%;">'+
            			'<div class="anOneDiv">'+
            				'<div class="ysZhOne anOne" style="width:29%;" onclick="object.getController(\'OpportunityManagement.Agents.ClueListAgentCtrl\').clueListAgentBack();">返回主界面</div>'+
            				'<div class="ysZhTwo anOne" style="width:29%;" onclick="object.getController(\'OpportunityManagement.Agents.ClueListAgentCtrl\').clueSearchAgentLookUp(this,null);">查询</div>'+
            				'<div class="ysZhTwo anOne" style="width:29%;" onclick="object.getController(\'OpportunityManagement.Agents.ClueListAgentCtrl\').clueSXSJ();">刷新数据</div>'+
            			'</div>'+
            			'<div class="zDefineSelect">'+
							 '<select id="clueSearchStatus">'+
							 	'<option value="">请选择</option>'+
							 	/*'<option value="新建">新建</option>'+
							 	'<option value="审批中">审批中</option>'+
							 	'<option value="已取消">已取消</option>'+
							 	'<option value="报备成功">报备成功</option>'+
							 	'<option value="已终止">已终止</option>'+
							 	'<option value="报备失败">报备失败</option>'+*/
							 '</select>'+
						 '</div>'+
						 '<div>'+
		    			  	'<input type="text" class="anTwoDiv" style="margin-top:2%;" id="clueSearchNumber" placeholder=" 请输入线索编号" />'+
		    			  	'<input type="text" class="anTwoDiv" id="projectSearchName" placeholder=" 请输入项目名称 " />'+
		    			 '</div>'+
            		'</div>'
            },
            {
            	id:'clueList',
                xtype: 'list',
                height: '100%',
                store:'ClueDirectorStore',
                cls:'textSpecilF',
                itemTpl: [
                    '<table border=0 width=100%>',
                    '    <tr><td width=60%>{LeadNumber}</td><td width=40%>{SubmitDate}</td></tr>',
                    '    <tr><td>{ProjectName}</td><td>{LeadStatus}</td></tr>',
                    '    <tr><td>{StreetAddress}</td><td>{RegistrationPerson}</td></tr>',
                    '</table>'
                ],
                onItemDisclosure: true
            }
        ]
    }

});
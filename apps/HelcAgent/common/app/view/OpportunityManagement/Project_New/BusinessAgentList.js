/*
 * File: app/view/BusinessAgentList.js
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

Ext.define('HelcAgent.view.OpportunityManagement.Project_New.BusinessAgentList', {
    extend: 'Ext.Container',
    id:'businessagentlist_new_id',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.SegmentedButton',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '代理商',
                cls:'textf',
                items: [
                    {
                    	id:'businessagentlist_new_id_FH',
                        xtype: 'button',
                        ui: 'back',
                        text: '返回'
                    },{
                    	id:'businessAgentOpportunity',
                    	xtype:'hiddenfield'
                    },{
                    	xtype:'spacer'
                    },{
                    	id:'submitAgentAchieve',
                    	xtype:'button',
                    	text:'提交代理商业绩',
                    	hidden:true
                    }
                ]
            },
            {
            	id:'businessAgentSegment',
                xtype: 'segmentedbutton',
                margin: 10,
                cls:'textf',
                height:'8%',
                items: [
                    {
                    	id:'businessagentlist_new_id_ZJ',
                        xtype: 'button',
                        text: '增加'
                    },
                    {
                    	id:'businessagentlist_new_id_SC',
                        xtype: 'button',
                        text: '删除'
                    }
                ]
            },
            {
            	id:'businessagentlist_new_id_list',
                xtype: 'list',
                height: '92%',
                store:'BusinessAgentStore',
                itemTpl: [
					'<table border=0 width=100% style="color:#666" class="textf">'+
					'  <tr>'+
					'     <td width="10%" rowspan="3">'+
					'        <div name="groupkung_businessagentlist" style="{LeadStatus}" class="p_judge_box2" id="conkung_businessagentlist">3</div>'+
					'     </td>'+
					'     <td width="80%">　{Agent}&nbsp;&nbsp;<span style="font-weigth:bold;">{LineNumber}</span></td>'+
					'	  <td width="10%"></td>'+
					'  </tr>'+
					'  <tr>'+
						  '<td  colspan="2" > <span style="{LeadStatus};margin-left:15px;"> {RegistrationDate}</span>'+
						  ' <span style="{LeadStatus}; margin-left:40px;">{LeadStatus}</span></td>'+
					'  </tr>'+
					'  <tr>'+
						'<td  colspan="2"> <span style="{LeadStatus};margin-left:15px;"> {PerformanceShared}</span>'+
						'<span style="{LeadStatus}; margin-left:40px;">{Comments}</span></td>'+
					'  </tr>'+
					'</table>',
                    //'<div><input type=\'checkbox\'>　代理商	业绩比例	说明</div>'
                ],
                onItemDisclosure: true
            }
        ]
    }

});
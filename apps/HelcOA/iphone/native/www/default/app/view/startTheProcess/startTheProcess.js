
/* JavaScript content from app/view/startTheProcess/startTheProcess.js in folder common */
/*
 * File: app/view/MyPanel4.js
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

Ext
		.define(
				'HelcOA.view.startTheProcess.startTheProcess',
				{
					extend : 'Ext.Panel',
					id : 'qc_StartProcess_id',
					requires : [ 'Ext.Toolbar', 'Ext.Button',
							'Ext.dataview.List', 'Ext.XTemplate' ],

					config : {
						style : 'background-color:#edebf1',
						layout : 'vbox',
						items : [
								{
									xtype : 'toolbar',
									docked : 'top',
									title : '启动流程-分类',
									items : [ {
										xtype : 'button',
										iconCls : 'home',
										listeners : {
											tap : function() {
												var obj1 = Ext
														.getCmp('Menus_id');
												if (!obj1) {
													obj1 = Ext
															.create('HelcOA.view.Menus');
												}
												Ext.Viewport
														.setActiveItem(obj1);
											}
										}
									} ]
								},
								{
									xtype : 'list',
									id : 'qc_StartProcessList',
									flex : 1,
									data : [ {
										title : '日常办公',
										color : '#854107',
										icon : 'O',
										class : 'i_Button_List_Icon_2'
									}, {
										title : '人力资源',
										color : '#fcb827',
										icon : '|',
										class : 'i_Button_List_Icon_2'
									},
									// {
									// title: '信息技术',
									// color: '#009ddc',
									// icon: 'i',
									// class: 'i_Button_List_Icon_2'
									// },
									// {
									// title: '营业/工程业务',
									// color: '#fbb726',
									// icon: 'b',
									// class: 'i_Button_List_Icon_2'
									// },
									// {
									// title: '待办事项',
									// color: '#f6821f',
									// icon: 't',
									// class: 'i_Button_List_Icon_2'
									// },
									// {
									// title: '质量控制',
									// color: '#e03a3e',
									// icon: '!',
									// class: 'i_Button_List_Icon_2'
									// },
									// {
									// title: '信息技术',
									// color: '#009ddc',
									// icon: 'i',
									// class: 'i_Button_List_Icon_2'
									// },
									{
										title : '营业/工程业务',
										color : '#fbb726',
										icon : 'b',
										class : 'i_Button_List_Icon_2'
									},
									// {
									// title: '待办事项',
									// color: '#f6821f',
									// icon: 't',
									// class: 'i_Button_List_Icon_2'
									// },
									{
										title : '质量控制',
										color : '#e03a3e',
										icon : '!',
										class : 'i_Button_List_Icon_2'
									},
									// {
									// title: '财务管理',
									// color: '#fbb726',
									// icon: '￥',
									// class: ''
									// },
									// {
									// title: '技术管理',
									// color: '#963d97',
									// icon: 'z',
									// class: 'i_Button_List_Icon_2'
									// },
									{
										title : '提案管理流程',
										color : '#009ddc',
										icon : 'W',
										class : 'i_Button_List_Icon_2'
									},
									// {
									// title: '制造管理',
									// color: '#656161',
									// icon: 'y',
									// class: 'i_Button_List_Icon_2'
									// },
									// {
									// title: '天津',
									// color: '#fcb827',
									// icon: '|',
									// class: 'i_Button_List_Icon_2'
									// },
									// {
									// title: '上海',
									// color: '#f6821f',
									// icon: '|',
									// class: 'i_Button_List_Icon_2'
									// },
									// {
									// title: '成都',
									// color: '#e03a3e',
									// icon: '|',
									// class: 'i_Button_List_Icon_2'
									// },
									// {
									// title: '扶梯公司',
									// color: '#963d97',
									// icon: '|',
									// class: 'i_Button_List_Icon_2'
									// },
									// {
									// title: '上海安防公司',
									// color: '#009ddc',
									// icon: '|',
									// class: 'i_Button_List_Icon_2'
									// }
									],
									itemTpl : [
											'<table border=0 class="i_Button_List">',
											'  <tr>',
											'      <td rowspan="2" class="i_Button_List_Icon_1 {class}" style="color:{color}">{icon}</td>',
											'      <td colspan="2" class="i_Button_List_Title">{title}</td>',
											'  </tr>', '</table>' ],
									onItemDisclosure : true
								// store:'startTheProcessS'
								} ]
					}

				});

/* JavaScript content from app.js in folder common */
/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 3.5.1.
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

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({
    models: [
        'LocalStorage'
    ],
    stores: [
        'Service_RegionMap_City',
        'Service_Parts_Warehouse',
        'Service_Branch_FaultMonitor_Data',
        'Service_Branch_MaintainPlan_Data',
        'Service_Monitor_Favorite_List',
        'Service_Monitor_Domain_List',
        'Service_Monitor_Elevator_List',
        'Service_Monitor_Query_List',
        'Service_Monitor_Favorite_Add',
        'Service_Monitor_Favorite_Del',
        'Install_Branch_Projects',
        'Common_Company_List',
        'Install_Project_Elevators',
        'Lifecycle_Domain_List',
        'Lifecycle_Elevator_List',
        'Lifecycle_Query_List',
        'Service_Parts_City',
        'Service_ChinaMap_City',
        'Service_News_Data',
        'Service_BranchMap_Region',
        'Public_Screens',
        'Online_FaultPublish',
        'Device_Terminal'
    ],
    views: [
        'nav_index',
        'Service.chinaMap',
        'Service.news',
        'Service.customer',
        'Service.subNav',
        'Service.subNav_RegionMap',
        'Service.regionMap_Branch',
        'Service.subNav_Branch',
        'Service.branch',
        'Service.branch_Maintain',
        'Service.branch_FaultMonitor',
        'Service.branchMap',
        'Service.station',
        'Service.liftDetailed',
        'Lifecycle.ElevatorDetail',
        'Install.chinaMap',
        'Install.elevator',
        'Install.contract',
        'Online.subNav1',
        'Online.subNav2',
        'Parts.chinaMap',
        'Parts.Warehouse',
        'Vip.vipProject',
        'Vip.vipContract',
        'Vip.vipContractLift',
        'Vip.vipProjectIntroduce',
        'Vip.vip',
        'Vip.subNav',
        'remote_Keyboard',
        'setup',
        'nav_index_device',
        'Device.subNavFloor1',
        'Device.subNavCinema',
        'Device.systemCinema',
        'Device.volumeCinema',
        'index',
        'Device.lightCinema',
        'Device.volumeFloor1',
        'Device.subNavFloor2',
        'Service.demo',
        'Device.systemFloor1',
        'MyButton',
        'nav_index_ac',
        'Device.lightFloor1_1',
        'Device.lightFloor1_2',
        'Device.lightFloor1_3',
        'Device.subNavFloor1C',
        'Device.systemFloor1C',
        'Device.volumeFloor1C',
        'Device.displayFloor1C',
        'Device.lightFloor2',
        'Device.displayCinema',
        'Service.subNav_Monitor',
        'Service.monitor_Input',
        'Service.monitor_Select',
        'Install.region',
        'Install.branch',
        'Lifecycle.subNav',
        'Lifecycle.Select',
        'Lifecycle.Input',
        'Online.faultPublish',
        'nav_index_terminal'
    ],
    controllers: [
        'PublicController',
        'ServiceMainController',
        'ServiceRegionController',
        'ServiceElevatorController',
        'LifecycleController',
        'VipController',
        'InstallController',
        'PartsController',
        'OnlineController',
        'DeviceController',
        'DeviceACController',
        'ServiceMonitorController',
        'DeviceTerminalController'
    ],
    name: 'HelcRemote',

    launch: function() {
        /* 汉化日期选择中的月份 */
        Ext.Date.monthNames = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];

        /* 汉化提示窗口的按钮 */
        Ext.define("liftnet.overrides.MessageBox", {
            override: "Ext.MessageBox",
            statics: {
                OK    : {text: '确定', itemId: 'ok',  ui: 'action'},
                YES   : {text: '是',   itemId: 'yes', ui: 'action'},
                NO    : {text: '否',   itemId: 'no'},
                CANCEL: {text: '取消', itemId: 'cancel'},

                INFO    : Ext.baseCSSPrefix + 'msgbox-info',
                WARNING : Ext.baseCSSPrefix + 'msgbox-warning',
                QUESTION: Ext.baseCSSPrefix + 'msgbox-question',
                ERROR   : Ext.baseCSSPrefix + 'msgbox-error',

                OKCANCEL: [
                    {text: '取消', itemId: 'cancel'},
                    {text: '确定', itemId: 'ok',  ui : 'action'}
                ],
                YESNOCANCEL: [
                    {text: '取消', itemId: 'cancel'},
                    {text: '否',   itemId: 'no'},
                    {text: '是',   itemId: 'yes', ui: 'action'}
                ],
                YESNO: [
                    {text: '否', itemId: 'no'},
                    {text: '是', itemId: 'yes', ui: 'action'}
                ]
            }
        });
        Ext.define("liftnet.overrides.picker.Picker", {
            override: "Ext.picker.Picker",
            config: {
                doneButton: '确定',
                cancelButton: '取消'
            }
        });

        if(Ext.os.is.iOS) {
            Ext.Viewport.setHeight(Ext.Viewport.getWindowHeight() - 20);
            Ext.Viewport.on('orientationchange', 'handleOrientationChange', this, {buffer: 50 });
        }

        HelcRemote.app.getController('PublicController').loadSetupData();

        // fix ugly loading mask
        Ext.define('Ext.LoadMask', {
            override: 'Ext.LoadMask',
            config: {
                indicator: false,
            }
        });
        Ext.define('Ext.DataView', {
            override: 'Ext.DataView',
            config: {
                loadingText: '<i class="fa fa-spinner fa-pulse fa-2x" style="color:#ccc"></i>'
            }
        });
        Ext.create('HelcRemote.view.index', {fullscreen: true});
    }

});

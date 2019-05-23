
/* JavaScript content from js/mqttConfig.js in folder common */
/* JavaScript content from js/mqttConfig.js in folder common */
/* JavaScript content from js/mqttConfig.js in folder common */
/**
 * Copyright (c) Patrick, Weng Tat LEONG (wtleong@cn.ibm.com) Copyright (c)
 * 2013, IBM Corporation
 */
var MQTT = MQTT ? MQTT : {};
//MQTT.host = "test.mosquitto.org"; //TODO: Change host name and port.
//MQTT.host = "192.168.1.8";
MQTT.host = 'pda.hitachi-helc.com';
//MQTT.host = '172.16.255.42';
MQTT.port = 1884;
// MQTT.client = {}; //mqtt client instance.
MQTT.directory = null; // current Directory.
MQTT.connectOptions = { 
	cleanSession : false
}; // Set clean session to false by default.
MQTT._isMqttClientInit = false; // An internal variable to ensure initApplySub
								// can be called only once.

MQTT.onMessageArrived = function(message) {
	// TODO: Write your message handling callback here. It is called whenever
//	console.log("---onMessageArrived1:"+message._getPayloadString()); // IPHONE
	console.log("---onMessageArrived2:"+message.payloadString);
//	alert("a:"+message.topic);
	// 时间
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();
	var scds = date.getSeconds();
	
	var msgtitle;
	var msgbody = message.payloadString;
	var msgObj = null;
	if (msgbody.indexOf('{') == 0) {
		msgObj = eval("("+ msgbody +")");
		msgbody = msgObj.message;
	}
	if(msgbody.indexOf("2424") != -1) {
		WL.Logger.debug('---return out');
		return ;
	}
	if (msgbody.length > 8) {
		msgtitle = msgbody.substring(0,8)+"...";
	} else {
		msgtitle = msgbody;
	}
	var msgcolor = '#666';
	var msgtime = "notime";
	if(msgObj != null) {
		msgtime = msgObj.sendtime; 
	} else {
		msgtime = year+"-"+month+"-"+day+" "+hour+":"+min+":"+scds;
	}
		
	var msgdata = {};
	msgdata.MSGTITLE = msgtitle;
	msgdata.MSGBODY = msgbody;
	msgdata.TIME = msgtime;
	msgdata.COLOR = msgcolor;
	msgdata.ISREAD = 'N';
	var data = {tcode:'SYSTEM_MESSAGE',tid:msgtime,stext:msgdata};
	
	// 如果接收过当前消息就不再接收，否则就接收并记录下当前的消息
	WL.EncryptedCache.read("isAccept", isReadSucess, isReadFailure);
	function isReadSucess (value) {
		if(msgtime != value) {
			WL.EncryptedCache.write("isAccept", msgtime, isSuccess, isFailure);
			function isSuccess (status) {
				WL.JSONStore.get(collectionName).add(data).then(function(){
					var M_XX = Ext.getCmp('_id');
					if (M_XX == null) {
						return ;
					}
					try{
						// 加载消息
						M_XX.loadMessage();
					}catch(e) {
						alert('出错：'+e);
					}
					// 增加提示数量
					/*var sumxx = document.getElementById('sumxx').innerHTML;
					var sumxxobj = document.getElementById('sumxx');
					if (sumxx != null && sumxx != '') {
						sumxxobj.innerHTML = sumxx + 1;
					} else {
						sumxxobj.innerHTML = 1;
					}*/
					// 刷新列表
				}).fail(function(errorObject){
				});
			}
			function isFailure () {
			}
		}
	}
	function isReadFailure (status) {
	}
	
/*
	var topic, fromuser, msg, touser;

	if (MQTT.isPlugin) {
		topic = message.topic;
		msg = message.payloadString;
	} else {
		topic = message._getDestinationName();
		msg = message._getPayloadString();
	}
	touser = topic.substring(topic.indexOf('/') + 1, topic.lastIndexOf('/'));
    if(touser !='' && touser != loginuser){
        console.log('disgard message of ' + touser);
        return;
    }
	fromuser = topic.substring(topic.lastIndexOf('/') + 1);
	
	var msgtype = 't';
	if (topic.indexOf('voice') == 0) {
		// WL.Logger.debug("Voice");
		msgtype = 'v';
	} else if (topic.indexOf('image') == 0) {
		// WL.Logger.debug("Image");
		msgtype = 'i';
	}

	var cmsg = {
		read : false,
		dtime : new Date(),
		user : fromuser,
		sr : 'r',
		msg : msg,
		msgtype : msgtype
	};
 
	Ext.getCmp('vmaintab').fireEvent('evtMessageArrive', cmsg);
	msgUnread++;
	refreshBadge();
	*/
};

MQTT.onConnectionLost = function(responseObject) {
	// Set up a callBacks used when the connection is completed,
	// when a message arrives for this client and when the connection is lost.
	// WL.Logger.debug("Enter onConnectionLost");
	// if (responseObject.errorCode !== 0){
	// WL.Logger.debug("onConnectionLost:" + responseObject.errorMessage);
	// WL.Logger.debug("Try to reconnect");
	// //TODO: You may enter some disconnect notification here.
	// MQTT.client.connect(MQTT.connectOptions);
	// }
	WL.Logger.debug('---onConnectionLost');
	doconnect(UserID);
};

// function initClient(){
// var client = new Messaging.Client(MQTT.host, Number(MQTT.port),
// MQTT.clientId);
// client.onConnectionLost = MQTT.onConnectionLost;
// client.onMessageArrived = MQTT.onMessageArrived;
// MQTT.client = client;

// return client;
// }

function initApplySub(host, port, fromuser) {
	var setIOScallback = false;

	if (!MQTT._isMqttClientInit) {
		try {
			WL.Logger.debug("---Start Mqtt Service in initApplySub");
			// Get Client Id on device.
			if (MQTT.environment !== WL.Environment.PREVIEW) {
				var deviceId = device.uuid;
				if (deviceId.length > 23) {
					// Sometimes, the hashcode is negative, and '-' is not a
					// valid character as client id. So replace it.
					deviceId = (device.uuid.hashCode() + '').replace(/-/g, '_');
				}
				MQTT.clientId = deviceId;
				WL.Logger.debug("---Device Id = " + MQTT.clientId);
			}
			MQTT.clientId = 'p_'+MQTT.clientId;
			WL.Logger.debug("---MQTT.clientId = " + MQTT.clientId);
			MQTT.host = host;
			MQTT.port = port;

			// Make connection to the server.
			WL.Logger.debug("---" + MQTT.host + ":" + MQTT.port + " clientId="
					+ MQTT.clientId);
			var client;
			if (MQTT.isPlugin) {
				WL.Logger.debug("---MQTT.isPlugin");
				client = new MQTTPlugin(MQTT.host, Number(MQTT.port),
						MQTT.clientId);
				client.setMessageCallback(MQTT.onMessageArrived);
//				client.setBinaryTopic('voice/#', 'amr');

			} else {
				WL.Logger.debug("---MQTT.isNotPlugin");
				client = new Messaging.Client(MQTT.host, Number(MQTT.port),
						MQTT.clientId);
				client.onConnectionLost = MQTT.onConnectionLost;
				client.onMessageArrived = MQTT.onMessageArrived;
			}

			var onConnect = function() {
				// Once a connection has been made, make a subscription and send
				// a message.
				WL.Logger.debug("---=========MQTT Connect success=============");
//				MQTT.client.subscribe(['Hitachi/com.gzunicorn/'+fromuser+'/#'], [2]);
				MQTT.client.subscribe(['Hitachi/com.gzunicorn/'+fromuser+'/#'], [1]);
//				subscribeUser(fromuser);
				// Sample to publish new message.
				// message = new Messaging.Message("Hello");
				// message.qos = 2;
				// message.destinationName = "/World";
				// client.send(message);
				if (setIOScallback) {
					return;
				}

				if (MQTT.environment === WL.Environment.IPAD
						|| MQTT.environment === WL.Environment.IPHONE) {

					var reconnect = function() {
						WL.Logger.debug("---Back to fore ground. Try to reconnect");
						if (MQTT.isPlugin) {
							client.connect({}, function() {
							}, function() {
							});
						} else {
							client.connect(MQTT.connectOptions);
						}
					};
					WL.App.BackgroundHandler
							.setOnAppEnteringForeground(reconnect);

					// When App go into background. Disconnect now. System will
					// kill connect anyway.
					// It is better to disconnect by itself.
					var disconnect = function() {
						WL.Logger.debug("Entering background. Disconnect.");
						//client.disconnect();
					};
					WL.App.BackgroundHandler
							.setOnAppEnteringBackground(disconnect);

					WL.Logger
							.debug("Registered foreground & background handler");
					setIOScallback = true;
				}
			};
			MQTT.connectOptions['onSuccess'] = onConnect;

			var onFailure = function(err) {
				WL.Logger.error("---MQTT Connect failed.", err);
				//alert("连接推送服务器失败！"); // TODO: Change your
			};
			MQTT.connectOptions['onFailure'] = onFailure;
			if (MQTT.isPlugin) {
				client.connect({}, onConnect, onFailure);
			} else {
				client.connect(MQTT.connectOptions);
			}
			MQTT.client = client; // Set to a global variable then all
									// function can use this instance.
			MQTT._isMqttClientInit = true;
		} catch (err) {
			WL.Logger.debug("---Error in initApplySub", err);
		}
	}
}

function doconnect(fromuser) {
	WL.Logger.debug("---doconnect:"+fromuser);
	try{
		initApplySub(MQTT.host, MQTT.port, fromuser);
	}catch(e){
		console.log('---init faild:', e);
	}
	
	
}
		 
function subscribeUser(fromuser){
	fromuser = fromuser + '/#';
	if(!MQTT._isMqttClientInit)
		return;
	if (MQTT.isPlugin) {
		WL.Logger.debug('---subscribeUser MQTT.isPlugin ' + fromuser);
		/*
		MQTT.client.subscribe([ 'Hitachi/com.gzunicorn/#', 'msg/' + fromuser,
				'voice/' + fromuser, 'image/' + fromuser ], [ 0, 2,
				2, 2 ]);
				*/
	} else {
		WL.Logger.debug('---subscribeUser MQTT.isNotPlugin ' + fromuser);
		//MQTT.client.subscribe("Hitachi/com.gzunicorn", {});
		MQTT.client.subscribe('msg/' + fromuser, {
			qos : 2
		});
		MQTT.client.subscribe('voice/' + fromuser, {
			qos : 2
		});
		MQTT.client.subscribe('image/' + fromuser, {
			qos : 2
		});
	}
}

function unsubscribeUser(fromuser){
	fromuser = fromuser + '/#';
	if((MQTT.client == null) || (typeof MQTT.client == 'undefined' ) ){
		return;
	}
		
	console.log('---unsubscribing ' + fromuser);
	if (MQTT.isPlugin) {
//			MQTT.client.unsubscribe([ '/World/#', 'msg/' + fromuser,
//					'voice/' + fromuser, 'image/' + fromuser ]);
		MQTT.client.unsubscribe(["Hitachi/com.gzunicorn/"+fromuser]);
	} else {
		MQTT.client.unsubscribe("Hitachi/com.gzunicorn/"+fromuser);
		//MQTT.client.unsubscribe('msg/' + fromuser);
		//MQTT.client.unsubscribe('voice/' + fromuser);
		//MQTT.client.unsubscribe('image/' + fromuser);
		//MQTT.client.disconnect();
	}

}

function dodisconnect() {
	if((MQTT.client == null) || (typeof MQTT.client == 'undefined' ) ){
		return;
	}
	unsubscribeUser(UserID);
	MQTT.client.disconnect();	
}

function dosub(topic) {
	//alert("dosub:"+topic);
	if (MQTT.isPlugin) {
		MQTT.client.subscribe(topic, 2);
	} else {
		MQTT.client.subscribe(topic, {});
	}

}

function dopub(msg, qos, destination) {
	destination = destination + '/' + loginuser;
	if (MQTT.isPlugin) {
		MQTT.client.publish('msg/' + destination, msg, 2, function() {
		}, function() {
			alert("发送失败!");
		});
	} else {
		var message = new Messaging.Message(msg);
		message.qos = qos;
		message.destinationName = 'msg/' + destination;
		MQTT.client.send(message);
	}
}

function dopubvoice(fpath, qos, destination) {
	destination = destination + '/' + loginuser;
	if (MQTT.isPlugin) {
		MQTT.client.publishBinaryFile('voice/' + destination, fpath, 2,
				function() {
				}, function(error) {
					alert("Cannot publish to server" + JSON.stringify(error));
				});

	} else {
		dopubfile(fpath, qos, 'voice/' + destination);
	}

}

function dopubimage(fpath, qos, destination) {
	destination = destination + '/' + loginuser;
	if (MQTT.isPlugin) {
		MQTT.client.publishBinaryFile('image/' + destination, fpath, 2,
				function() {
				}, function(error) {
					alert("Cannot publish to server" + JSON.stringify(error));
				});

	} else {
		dopubfile(fpath, qos, 'image/' + destination);
	}

}

function dopubfile(fpath, qos, destination) {

	// Sample to publish new message.
	var msg;
	var reader = new FileReader();
	reader.onloadend = function(evt) {
		WL.Logger.debug('read as arraybuffer' + fpath);
		msg = evt.target.result;
		var message = new Messaging.Message(msg);
		message.qos = qos;
		message.destinationName = destination;
		MQTT.client.send(message);

	};

	reader.readAsArrayBuffer(fpath);

}

MQTT.currentTimeString = function() {
	var date = new Date();
	function adjust(num) {
		if (num < 10)
			num = '0' + num;
		return '' + num;
	}
	return adjust(date.getHours()) + ":" + adjust(date.getMinutes()) + ":"
			+ adjust(date.getSeconds());
};

function getImage(src) {

	navigator.camera.getPicture(onPicSuccess, onPicFail, {
		quality : 50,
		destinationType : Camera.DestinationType.FILE_URI,
		sourceType : src,
		allowEdit : true
	});

}

function onPicSuccess(imageURI) {
	// $('#myimg').html('<img src="' + imageURI + '">');
	if (imageURI == '' || imageURI.length == 0) {
		alert('Image Return Error.');
		return;
	}
	
	var path = imageURI;
	if(path.indexOf('localhost') > 0)
		path = '/private/' + imageURI.substring('file:///localhost'.length);
	 
	 var that = this;
	 if (imageURI.indexOf('content://') > -1) {
         try {
             window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, 
            		 function(fileSystem) { 
            	 console.log(fileSystem.name); }, function(evt) { });
             
             window.resolveLocalFileSystemURI(imageURI, function(fileEntry) {
            	 path =fileEntry.fullPath;
                 console.log(fileEntry.fullPath);
                 
             }, function(evt){ });
         } catch(err) {
             console.log('Error: ' + err);
         }
	}
	 
			if(path.indexOf('file://') > -1)
				path = path.substring('file://'.length);

	 console.log('image path=' + path);
	var cmsg = {
		read : true,
		dtime : new Date(),
		user : curChat,
		sr : 's',
		msg : path,
		msgtype : 'i'
	};
	Ext.getCmp('vchatting').fireEvent('evtSendMessage', cmsg);
}

function onPicFail(message) {
	console.log('Get Image Failed because: ' + message);
}

function showImage(path) {
	var popup = Ext.create('Ext.Panel', {
		// id : 'popimg',
		modal : true,
		centered : true,
		autoDestroy : true,
		height : '80%',
		width : '80%',
		layout : 'fit',
		hideOnMaskTap : true,
		items : [ {
			xtype : 'image',
			id : 'popimgdiv',
			src : path
		} ],
		scrollable : true
	});
	Ext.Viewport.add(popup);
	popup.on("hide", function(oldActiveItem, container, newActiveItem, eOpts) {
		console.log("popup deactive")
		if (oldActiveItem) {
			Ext.Viewport.remove(oldActiveItem, true);
		}
	});
	popup.show();
}


function showImage2(path) {
	var w = $(window).width();
	var h = $(window).height();
	var wid = w > h ? h:w;
//	alert('size=' + $(window).height() + ":" + $(window).width());
	var popup = Ext.create('Ext.Panel', {
		// id : 'popimg',
		modal : true,
		centered : true,
		autoDestroy : true,
		height : wid,
		width : wid,
		layout : 'fit',
		hideOnMaskTap : true,
		items : [ {
			xtype : 'image',
			id : 'popimgdiv',
			src : path
		} ],
		scrollable : true
	});
	Ext.Viewport.add(popup);
	popup.on("hide", function(oldActiveItem, container, newActiveItem, eOpts) {
		console.log("popup deactive")
		if (oldActiveItem) {
			Ext.Viewport.remove(oldActiveItem, true);
		}
	});
	popup.show();
}


function refreshBadge(){
	var tabpanel = Ext.getCmp("vmaintab");
	var tabbar = tabpanel.getTabBar();
	var tab = tabbar.down('.tab[title=EChat]');
	

	if(msgUnread > 0)
		tab.setBadgeText(msgUnread);
	else
		tab.setBadgeText('');
}
// Use mqttloader.js to dynamically load javascript file after deviceReady
// event.
// initApplySub();
// if (MQTT.environment === WL.Environment.PREVIEW) {
// MQTT.clientId = "webSocketClient1"; //TODO: Change this id manually to avoid
// client id collision.
// initApplySub();
// }else {
// //Run this program on device. Start MQTT client after Cordova initialization
// is done.
// document.addEventListener("deviceready", initApplySub, false);
// }

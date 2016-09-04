/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        // This is an event handler function, which means the scope is the event.
        // So, we must explicitly called `app.report()` instead of `this.report()`.
        app.report('deviceready');
        navigator.splashscreen.hide();
        

        gaPlugin = window.plugins.gaPlugin;
        gaPlugin.init(successHandler, errorHandler, "UA-77281905-1", 10);
        
        gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "some.url.com");
        gaPlugin.exit(nativePluginResultHandler, nativePluginErrorHandler);


        var networkState = navigator.network.connection.type;

        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.NONE]     = 'No network connection';
        // alert('Connection type: ' + states[networkState]);


        
        if(states[networkState] == 'No network connection'){
            $('.custom-toast').fadeIn( "slow" );
              setTimeout(function(){ 
                $('.custom-toast').fadeOut( "slow" );
              }, 7000);
        }else{
            $('.custom-toast').hide();
        }

        setTimeout(function(){
            if(typeof Firebase == "undefined" || $('#leaderboardTable tr').length < 5){ 
                $('.custom-toast').fadeIn( "slow" );
                setTimeout(function(){
                    $('.custom-toast').fadeOut( "slow" );
                }, 10000);
            }else{
                $('.custom-toast').hide();
            }
        }, 4000);
    },
    report: function(id) {
        // Report the event in the console
        console.log("Report: " + id);

        // Toggle the state from "pending" to "complete" for the reported ID.
        // Accomplished by adding .hide to the pending element and removing
        // .hide from the complete element.
        document.querySelector('#' + id + ' .pending').className += ' hide';
        var completeElem = document.querySelector('#' + id + ' .complete');
        completeElem.className = completeElem.className.split('hide').join('');
    }
};

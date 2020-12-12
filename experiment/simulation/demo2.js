jsPlumb.ready(function () {

    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);

            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }
               
            });
        },
        endpoint = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 7, stroke: "rgba(198,89,30,0.7)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint);
        },
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 200;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return {d: d, id: id};
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: [ "Image", { url: "littledot.png" } ],
        Connector: [ "Bezier", { curviness: -90 } ],
        Container: "canvas"
    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare("ld1"),
            e2 = prepare("ld2"),
            e3 = prepare("ld3"),
            e4 = prepare("ld4"),
            e5 = prepare("ld5"),
            e6 = prepare("ld6"),
            e7 = prepare("ld7"),
            e8 = prepare("ld8"),
            e9 = prepare("ld9"),
            e10 = prepare("ld10"),
            e11 = prepare("ld11"),
            e12 = prepare("ld12"),
            e13 = prepare("ld13"),
            e14 = prepare("ld14"),
            e15 = prepare("ld15"),
            e16 = prepare("ld16"),
            e17 = prepare("ld17"),
            e18 = prepare("ld18"),
            e19 = prepare("ld19"),
            e20 = prepare("ld20"),
            e21 = prepare("ld21"),
            e22 = prepare("ld22"),
            e23 = prepare("ld23"),
            e24 = prepare("ld24"),
            e25 = prepare("ld25"),
            e26 = prepare("ld26"),
            e27 = prepare("ld27"),
            e28 = prepare("ld28"),
           
            e30 = prepare("ld30"),
           
            clearBtn = jsPlumb.getSelector("#anim-clear"),
            addBtn = jsPlumb.getSelector("#add");

         var detachLinks = jsPlumb.getSelector(".littledot .detach");
            instance.on(detachLinks, "click", function (e) {
                instance.deleteConnectionsForElement(this.getAttribute("rel"));
                jsPlumbUtil.consume(e);
            });

            instance.on(document.getElementById("clear"), "click", function (e) {
                instance.detachEveryConnection();
                showConnectionInfo("");
                jsPlumbUtil.consume(e);
            });
    });

    jsPlumb.fire("jsPlumbDemoLoaded", instance);

    document.getElementById("check-button").addEventListener("click", function () {
        //var d = instance.exportData();
        //console.log(instance.getAllConnections());

        var correct_connections_1_10 = [
            {
                "source": "ld1",
                "target": "ld10"
            },

            {
                "source": "ld10",
                "target": "ld1"
            }
        ];

        var correct_connections_2_3 = [
            {
                "source": "ld2",
                "target": "ld3"
            },
    
            {
                "source": "ld3",
                "target": "ld2"
            }
        ];

        var correct_connections_4_5 = [
            {
                "source": "ld4",
                "target": "ld5"
            },
    
            {
                "source": "ld5",
                "target": "ld4"
            }
        ];

        var correct_connections_6_7 = [
            {
                "source": "ld6",
                "target": "ld7"
            },
    
            {
                "source": "ld7",
                "target": "ld6"
            }
        ];

        var correct_connections_8_9 = [
            {
                "source": "ld8",
                "target": "ld9"
            },
    
            {
                "source": "ld9",
                "target": "ld8"
            }
        ];


var correct_connections_11_20 = [
            {
                "source": "ld11",
                "target": "ld20"
            },
    
            {
                "source": "ld20",
                "target": "ld11"
            }
        ];

        var correct_connections_12_13 = [
            {
                "source": "ld12",
                "target": "ld13"
            },
    
            {
                "source": "ld13",
                "target": "ld12"
            }
        ];


var correct_connections_14_15 = [
            {
                "source": "ld14",
                "target": "ld15"
            },
    
            {
                "source": "ld15",
                "target": "ld14"
            }
        ];

var correct_connections_14_16 = [
            {
                "source": "ld14",
                "target": "ld16"
            },
    
            {
                "source": "ld16",
                "target": "ld14"
            }
        ];

var correct_connections_18_19 = [
            {
                "source": "ld18",
                "target": "ld19"
            },
    
            {
                "source": "ld19",
                "target": "ld18"
            }
        ];
var correct_connections_18_17 = [
            {
                "source": "ld18",
                "target": "ld17"
            },
    
            {
                "source": "ld17",
                "target": "ld18"
            }
        ];

var correct_connections_21_30 = [
            {
                "source": "ld21",
                "target": "ld30"
            },
    
            {
                "source": "ld30",
                "target": "ld21"
            }
        ];


var correct_connections_21_22 = [
            {
                "source": "ld21",
                "target": "ld22"
            },
    
            {
                "source": "ld22",
                "target": "ld21"
            }
        ];

var correct_connections_22_23 = [
            {
                "source": "ld22",
                "target": "ld23"
            },
    
            {
                "source": "ld23",
                "target": "ld22"
            }
        ];

var correct_connections_23_24 = [
            {
                "source": "ld23",
                "target": "ld24"
            },
    
            {
                "source": "ld24",
                "target": "ld23"
            }
        ];

var correct_connections_21_24 = [
            {
                "source": "ld21",
                "target": "ld24"
            },
    
            {
                "source": "ld24",
                "target": "ld21"
            }
        ];


var correct_connections_17_25 = [
            {
                "source": "ld17",
                "target": "ld25"
            },
    
            {
                "source": "ld25",
                "target": "ld17"
            }
        ];
var correct_connections_24_26 = [
            {
                "source": "ld24",
                "target": "ld26"
            },
    
            {
                "source": "ld26",
                "target": "ld24"
            }
        ];
        var correct_connections_27_28 = [
            {
                "source": "ld27",
                "target": "ld28"
            },
    
            {
                "source": "ld28",
                "target": "ld27"
            }
        ];














        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld10"
            },
    
            {
                "source": "ld10",
                "target": "ld1"
            },
            
            {
                "source": "ld2",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld2"
            },

            {
                "source": "ld4",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld4"
            },

            {
                "source": "ld6",
                "target": "ld7"
            },

            {
                "source": "ld7",
                "target": "ld6"
            },

            {
                "source": "ld8",
                "target": "ld9"
            },

            {
                "source": "ld9",
                "target": "ld8"
            },
            {
                "source": "ld11",
                "target": "ld20"
            },
    
            {
                "source": "ld20",
                "target": "ld11"
            },
       
            {
                "source": "ld12",
                "target": "ld13"
            },
    
            {
                "source": "ld13",
                "target": "ld12"
            },
        
            {
                "source": "ld14",
                "target": "ld15"
            },
    
            {
                "source": "ld15",
                "target": "ld14"
            },
    
            {
                "source": "ld14",
                "target": "ld16"
            },
    
            {
                "source": "ld16",
                "target": "ld14"
            },
       
            {
                "source": "ld18",
                "target": "ld19"
            },
    
            {
                "source": "ld19",
                "target": "ld18"
            },
      
            {
                "source": "ld18",
                "target": "ld17"
            },
    
            {
                "source": "ld17",
                "target": "ld18"
            },
        
            {
                "source": "ld21",
                "target": "ld30"
            },
    
            {
                "source": "ld30",
                "target": "ld21"
            },
       
            {
                "source": "ld21",
                "target": "ld22"
            },
    
            {
                "source": "ld22",
                "target": "ld21"
            },
        
            {
                "source": "ld22",
                "target": "ld23"
            },
    
            {
                "source": "ld23",
                "target": "ld22"
            },
       
            {
                "source": "ld23",
                "target": "ld24"
            },
    
            {
                "source": "ld24",
                "target": "ld23"
            },
        
            {
                "source": "ld21",
                "target": "ld24"
            },
    
            {
                "source": "ld24",
                "target": "ld21"
            },
        
            {
                "source": "ld17",
                "target": "ld25"
            },
    
            {
                "source": "ld25",
                "target": "ld17"
            },
       
            {
                "source": "ld24",
                "target": "ld26"
            },
    
            {
                "source": "ld26",
                "target": "ld24"
            },
       
            {
                "source": "ld27",
                "target": "ld28"
            },
    
            {
                "source": "ld28",
                "target": "ld27"
            },


        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_1_10 = false;
        var is_connected_2_3 = false;
        var is_connected_4_5 = false;
        var is_connected_6_7 = false;
        var is_connected_8_9 = false;
        var is_connected_11_20 = false;
        var is_connected_12_13 = false;
        var is_connected_14_15 = false;
        var is_connected_14_16 = false;
        var is_connected_18_19 = false;
        var is_connected_18_17 = false;
        var is_connected_21_30 = false;
        var is_connected_21_22 = false;
        var is_connected_22_23 = false;
        var is_connected_23_24 = false;
        var is_connected_21_24 = false;
        var is_connected_17_25 = false;
        var is_connected_24_26 = false;
        var is_connected_27_28 = false;
        
        var unallowed_connection_present = false;

        //checking for 1_10 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_10){
                is_connected_1_10 = correct_connections_1_10.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 2_3 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_2_3){
                is_connected_2_3 = correct_connections_2_3.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 4_5 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_4_5){
                is_connected_4_5 = correct_connections_4_5.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 6_7 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_6_7){
                is_connected_6_7 = correct_connections_6_7.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 8_9 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_8_9){
                is_connected_8_9 = correct_connections_8_9.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_11_20){
                is_connected_11_20 = correct_connections_11_20.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
         actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_12_13){
                is_connected_12_13 = correct_connections_12_13.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
          actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_14_15){
                is_connected_14_15 = correct_connections_14_15.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
           actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_14_16){
                is_connected_14_16 = correct_connections_14_16.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
            actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_18_19){
                is_connected_18_19 = correct_connections_18_19.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
             actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_18_17){
                is_connected_18_17 = correct_connections_18_17.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
              actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_21_30){
                is_connected_21_30 = correct_connections_21_30.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
               actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_21_22){
                is_connected_21_22 = correct_connections_21_22.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
                actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_22_23){
                is_connected_22_23 = correct_connections_22_23.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
                 actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_23_24){
                is_connected_23_24 = correct_connections_23_24.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
                  actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_21_24){
                is_connected_21_24 = correct_connections_21_24.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
                   actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_17_25){
                is_connected_17_25 = correct_connections_17_25.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
                         actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_24_26){
                is_connected_24_26 = correct_connections_24_26.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
            actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_27_28){
                is_connected_27_28 = correct_connections_27_28.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        if (is_connected_1_10 && is_connected_2_3 && is_connected_4_5 && is_connected_6_7 && is_connected_8_9 && is_connected_11_20 && is_connected_12_13 && is_connected_14_15 && is_connected_14_16 && is_connected_18_19 && is_connected_18_17 && is_connected_21_30 && is_connected_21_22 && is_connected_22_23 && is_connected_23_24 && is_connected_21_24 && is_connected_17_25 && is_connected_24_26 && is_connected_27_28) {
            alert("correct CONNECTION");
            fun_disable();
            document.getElementById('myimage').setAttribute('onclick','mcbonoff()');
            document.getElementById('myimage').onclick=function(){mcbonoff();};
            mcbonoff();
            document.getElementById('check-button').disabled=true;
            document.getElementById('currentValue').disabled=false;
            }
            else if(! unallowed_connection_present)
            {
                alert("please comple connection");
            }
             else {
               alert("wrong connection");
                return;
            } 
    });
});

 
            var offstate =  true;
           document.getElementById('cirmover1').style.transform="rotate(240deg)";

            function mcbonoff()
            {
                if (offstate==true)
                {
                    offstate=false;
                    document.getElementById('myimage').src='mcb on.png';
                     document.getElementById('myimage1').src='switchon1.png';
                     document.getElementById('cirmover2').style.transform="rotate(40deg)";//style.animation="rotation .01s infinte linear";
                     document.getElementById('cirmover1').style.transform="rotate(40deg)";
                      document.getElementById('image').style.animation="rotation 1s";

        document.getElementById('check-button').disabled=true;
        document.getElementById('currentValue').disabled=false;            

                }
                else
                {
                     offstate=true;
                    document.getElementById('myimage').src='mcb off.png';
                    document.getElementById('myimage1').src='switchoff1.png';
                    document.getElementById('cirmover2').style.transform="rotate(240deg)";//style.animation="rotation 0s infinte linear";
                     document.getElementById('cirmover1').style.transform="rotate(240deg)";
                     document.getElementById('image').style.animation="rotation 6s ";
                          document.getElementById('currentValue').disabled=true;  
                }
            }


        function fun_disable()
        {
  var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);

            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }
               
            });
        },
        endpoint = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 7, stroke: "rgba(198,89,30,0.7)" },
            endpointsOnTop: true,
            isSource: false,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint);
        },
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 200;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return {d: d, id: id};
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: [ "Image", { url: "littledot.png" } ],
        Connector: [ "Bezier", { curviness: -90 } ],
        Container: "canvas"
    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare("ld1"),
            e2 = prepare("ld2"),
            e3 = prepare("ld3"),
            e4 = prepare("ld4"),
            e5 = prepare("ld5"),
            e6 = prepare("ld6"),
            e7 = prepare("ld7"),
            e8 = prepare("ld8"),
            e9 = prepare("ld9"),
            e10 = prepare("ld10"),
            e11 = prepare("ld11"),
            e12 = prepare("ld12"),
            e13 = prepare("ld13"),
            e14 = prepare("ld14"),
            e15 = prepare("ld15"),
            e16 = prepare("ld16"),
            e17 = prepare("ld17"),
            e18 = prepare("ld18"),
            e19 = prepare("ld19"),
            e20 = prepare("ld20"),
            e21 = prepare("ld21"),
            e22 = prepare("ld22"),
            e23 = prepare("ld23"),
            e24 = prepare("ld24"),
            e25 = prepare("ld25"),
            e26 = prepare("ld26"),
            e27 = prepare("ld27"),
            e28 = prepare("ld28"),
           
            e30 = prepare("ld30"),
           
            clearBtn = jsPlumb.getSelector("#anim-clear"),
            addBtn = jsPlumb.getSelector("#add");

         var detachLinks = jsPlumb.getSelector(".littledot .detach");
            instance.on(detachLinks, "click", function (e) {
                instance.deleteConnectionsForElement(this.getAttribute("rel"));
                jsPlumbUtil.consume(e);
            });

            instance.on(document.getElementById("clear"), "click", function (e) {
                instance.detachEveryConnection();
                showConnectionInfo("");
                jsPlumbUtil.consume(e);
            });
    });

    jsPlumb.fire("jsPlumbDemoLoaded", instance);

    document.getElementById("check-button").addEventListener("click", function () {
        //var d = instance.exportData();
        //console.log(instance.getAllConnections());

        var correct_connections_1_10 = [
            {
                "source": "ld1",
                "target": "ld10"
            },

            {
                "source": "ld10",
                "target": "ld1"
            }
        ];

        var correct_connections_2_3 = [
            {
                "source": "ld2",
                "target": "ld3"
            },
    
            {
                "source": "ld3",
                "target": "ld2"
            }
        ];

        var correct_connections_4_5 = [
            {
                "source": "ld4",
                "target": "ld5"
            },
    
            {
                "source": "ld5",
                "target": "ld4"
            }
        ];

        var correct_connections_6_7 = [
            {
                "source": "ld6",
                "target": "ld7"
            },
    
            {
                "source": "ld7",
                "target": "ld6"
            }
        ];

        var correct_connections_8_9 = [
            {
                "source": "ld8",
                "target": "ld9"
            },
    
            {
                "source": "ld9",
                "target": "ld8"
            }
        ];


var correct_connections_11_20 = [
            {
                "source": "ld11",
                "target": "ld20"
            },
    
            {
                "source": "ld20",
                "target": "ld11"
            }
        ];

        var correct_connections_12_13 = [
            {
                "source": "ld12",
                "target": "ld13"
            },
    
            {
                "source": "ld13",
                "target": "ld12"
            }
        ];


var correct_connections_14_15 = [
            {
                "source": "ld14",
                "target": "ld15"
            },
    
            {
                "source": "ld15",
                "target": "ld14"
            }
        ];

var correct_connections_14_16 = [
            {
                "source": "ld14",
                "target": "ld16"
            },
    
            {
                "source": "ld16",
                "target": "ld14"
            }
        ];

var correct_connections_18_19 = [
            {
                "source": "ld18",
                "target": "ld19"
            },
    
            {
                "source": "ld19",
                "target": "ld18"
            }
        ];
var correct_connections_18_17 = [
            {
                "source": "ld18",
                "target": "ld17"
            },
    
            {
                "source": "ld17",
                "target": "ld18"
            }
        ];

var correct_connections_21_30 = [
            {
                "source": "ld21",
                "target": "ld30"
            },
    
            {
                "source": "ld30",
                "target": "ld21"
            }
        ];


var correct_connections_21_22 = [
            {
                "source": "ld21",
                "target": "ld22"
            },
    
            {
                "source": "ld22",
                "target": "ld21"
            }
        ];

var correct_connections_22_23 = [
            {
                "source": "ld22",
                "target": "ld23"
            },
    
            {
                "source": "ld23",
                "target": "ld22"
            }
        ];

var correct_connections_23_24 = [
            {
                "source": "ld23",
                "target": "ld24"
            },
    
            {
                "source": "ld24",
                "target": "ld23"
            }
        ];

var correct_connections_21_24 = [
            {
                "source": "ld21",
                "target": "ld24"
            },
    
            {
                "source": "ld24",
                "target": "ld21"
            }
        ];


var correct_connections_17_25 = [
            {
                "source": "ld17",
                "target": "ld25"
            },
    
            {
                "source": "ld25",
                "target": "ld17"
            }
        ];
var correct_connections_24_26 = [
            {
                "source": "ld24",
                "target": "ld26"
            },
    
            {
                "source": "ld26",
                "target": "ld24"
            }
        ];
        var correct_connections_27_28 = [
            {
                "source": "ld27",
                "target": "ld28"
            },
    
            {
                "source": "ld28",
                "target": "ld27"
            }
        ];














        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld10"
            },
    
            {
                "source": "ld10",
                "target": "ld1"
            },
            
            {
                "source": "ld2",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld2"
            },

            {
                "source": "ld4",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld4"
            },

            {
                "source": "ld6",
                "target": "ld7"
            },

            {
                "source": "ld7",
                "target": "ld6"
            },

            {
                "source": "ld8",
                "target": "ld9"
            },

            {
                "source": "ld9",
                "target": "ld8"
            },
            {
                "source": "ld11",
                "target": "ld20"
            },
    
            {
                "source": "ld20",
                "target": "ld11"
            },
       
            {
                "source": "ld12",
                "target": "ld13"
            },
    
            {
                "source": "ld13",
                "target": "ld12"
            },
        
            {
                "source": "ld14",
                "target": "ld15"
            },
    
            {
                "source": "ld15",
                "target": "ld14"
            },
    
            {
                "source": "ld14",
                "target": "ld16"
            },
    
            {
                "source": "ld16",
                "target": "ld14"
            },
       
            {
                "source": "ld18",
                "target": "ld19"
            },
    
            {
                "source": "ld19",
                "target": "ld18"
            },
      
            {
                "source": "ld18",
                "target": "ld17"
            },
    
            {
                "source": "ld17",
                "target": "ld18"
            },
        
            {
                "source": "ld21",
                "target": "ld30"
            },
    
            {
                "source": "ld30",
                "target": "ld21"
            },
       
            {
                "source": "ld21",
                "target": "ld22"
            },
    
            {
                "source": "ld22",
                "target": "ld21"
            },
        
            {
                "source": "ld22",
                "target": "ld23"
            },
    
            {
                "source": "ld23",
                "target": "ld22"
            },
       
            {
                "source": "ld23",
                "target": "ld24"
            },
    
            {
                "source": "ld24",
                "target": "ld23"
            },
        
            {
                "source": "ld21",
                "target": "ld24"
            },
    
            {
                "source": "ld24",
                "target": "ld21"
            },
        
            {
                "source": "ld17",
                "target": "ld25"
            },
    
            {
                "source": "ld25",
                "target": "ld17"
            },
       
            {
                "source": "ld24",
                "target": "ld26"
            },
    
            {
                "source": "ld26",
                "target": "ld24"
            },
       
            {
                "source": "ld27",
                "target": "ld28"
            },
    
            {
                "source": "ld28",
                "target": "ld27"
            },


        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_1_10 = false;
        var is_connected_2_3 = false;
        var is_connected_4_5 = false;
        var is_connected_6_7 = false;
        var is_connected_8_9 = false;
        var is_connected_11_20 = false;
        var is_connected_12_13 = false;
        var is_connected_14_15 = false;
        var is_connected_14_16 = false;
        var is_connected_18_19 = false;
        var is_connected_18_17 = false;
        var is_connected_21_30 = false;
        var is_connected_21_22 = false;
        var is_connected_22_23 = false;
        var is_connected_23_24 = false;
        var is_connected_21_24 = false;
        var is_connected_17_25 = false;
        var is_connected_24_26 = false;
        var is_connected_27_28 = false;
        
        var unallowed_connection_present = false;

        //checking for 1_10 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_10){
                is_connected_1_10 = correct_connections_1_10.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 2_3 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_2_3){
                is_connected_2_3 = correct_connections_2_3.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 4_5 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_4_5){
                is_connected_4_5 = correct_connections_4_5.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 6_7 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_6_7){
                is_connected_6_7 = correct_connections_6_7.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 8_9 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_8_9){
                is_connected_8_9 = correct_connections_8_9.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_11_20){
                is_connected_11_20 = correct_connections_11_20.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
         actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_12_13){
                is_connected_12_13 = correct_connections_12_13.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
          actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_14_15){
                is_connected_14_15 = correct_connections_14_15.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
           actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_14_16){
                is_connected_14_16 = correct_connections_14_16.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
            actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_18_19){
                is_connected_18_19 = correct_connections_18_19.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
             actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_18_17){
                is_connected_18_17 = correct_connections_18_17.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
              actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_21_30){
                is_connected_21_30 = correct_connections_21_30.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
               actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_21_22){
                is_connected_21_22 = correct_connections_21_22.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
                actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_22_23){
                is_connected_22_23 = correct_connections_22_23.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
                 actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_23_24){
                is_connected_23_24 = correct_connections_23_24.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
                  actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_21_24){
                is_connected_21_24 = correct_connections_21_24.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
                   actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_17_25){
                is_connected_17_25 = correct_connections_17_25.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
                         actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_24_26){
                is_connected_24_26 = correct_connections_24_26.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
            actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_27_28){
                is_connected_27_28 = correct_connections_27_28.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = allowed_connections.find(function (conn) {
                    return conn.source !== this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        if (is_connected_1_10 && is_connected_2_3 && is_connected_4_5 && is_connected_6_7 && is_connected_8_9 && is_connected_11_20 && is_connected_12_13 && is_connected_14_15 && is_connected_14_16 && is_connected_18_19 && is_connected_18_17 && is_connected_21_30 && is_connected_21_22 && is_connected_22_23 && is_connected_23_24 && is_connected_21_24 && is_connected_17_25 && is_connected_24_26 && is_connected_27_28)
         {
            rightconnection=true;
            alert("right connection");
            }
            else if(! unallowed_connection_present)
            {
                alert("please comple connection");
            }
             else {
               alert("wrong connection");
                return;
            } 
    });return;

        }
        


var offstate=true;
var rightconnection=false;

function mcbonoff()
{   if(rightconnection==false)
    {
        alert("Alert ! Please complete the connection first.");
    }
    else
    {
        if (offstate==true)
        {
            offstate=false;
            document.getElementById('myimage').src='Mcbon.png';
            
        }
        else
        {
            offstate=true;
            document.getElementById('myimage').src='Mcboff.png';


        }
    }
    
    
}
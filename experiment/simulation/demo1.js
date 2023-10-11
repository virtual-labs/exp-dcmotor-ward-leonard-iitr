var rightconnection = false;
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

        // notice there are no dragOptions specified here, which is different from the
        // draggableConnectors2 demo.  all connections on this page are therefore
        // implicitly in the default scope.
        endpoint = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgba(0,0,225)" },
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
        endpoint1 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgba(255,0,0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare1 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint1);
        },
        endpoint2 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgba(0,225,0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare2 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint2);
        },
        // this is overridden by the YUI demo.
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
            return { d: d, id: id };
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: ["Image", { url: "littledot.png" }],
        Connector: ["Bezier", { curviness: +90 }],
        Container: "canvas"
    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare1("ld1"),
            e2 = prepare1("ld2"),
            e3 = prepare1("ld3"),
            e4 = prepare1("ld4"),
            e5 = prepare1("ld5"),
            e6 = prepare("ld6"),
            e7 = prepare("ld7"),
            e8 = prepare("ld8"),
            e9 = prepare("ld9"),
            e10 = prepare1("ld10"),
            e11 = prepare("ld11"),
            e12 = prepare("ld12"),
            e13 = prepare("ld13"),
            e14 = prepare2("ld14"),
            e15 = prepare2("ld15"),
            e16 = prepare2("ld16"),
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
            e27 = prepare2("ld27"),
            e28 = prepare2("ld28"),
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
            }
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

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_1_10) {
                is_connected_1_10 = correct_connections_1_10.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_2_3) {
                is_connected_2_3 = correct_connections_2_3.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_4_5) {
                is_connected_4_5 = correct_connections_4_5.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_6_7) {
                is_connected_6_7 = correct_connections_6_7.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_8_9) {
                is_connected_8_9 = correct_connections_8_9.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_11_20) {
                is_connected_11_20 = correct_connections_11_20.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_12_13) {
                is_connected_12_13 = correct_connections_12_13.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_14_15) {
                is_connected_14_15 = correct_connections_14_15.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_14_16) {
                is_connected_14_16 = correct_connections_14_16.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_18_19) {
                is_connected_18_19 = correct_connections_18_19.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_18_17) {
                is_connected_18_17 = correct_connections_18_17.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
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

            if (!is_connected_21_30) {
                is_connected_21_30 = correct_connections_21_30.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
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

            if (!is_connected_21_22) {
                is_connected_21_22 = correct_connections_21_22.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
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

            if (!is_connected_22_23) {
                is_connected_22_23 = correct_connections_22_23.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
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

            if (!is_connected_21_24) {
                is_connected_21_24 = correct_connections_21_24.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
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

            if (!is_connected_23_24) {
                is_connected_23_24 = correct_connections_23_24.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
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

            if (!is_connected_17_25) {
                is_connected_17_25 = correct_connections_17_25.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
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

            if (!is_connected_24_26) {
                is_connected_24_26 = correct_connections_24_26.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
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

            if (!is_connected_27_28) {
                is_connected_27_28 = correct_connections_27_28.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        if (is_connected_1_10 && is_connected_2_3 && is_connected_4_5 && is_connected_6_7 && is_connected_8_9 && is_connected_11_20 && is_connected_12_13 && is_connected_14_15 && is_connected_14_16 && is_connected_18_19 && is_connected_18_17 && is_connected_21_30 && is_connected_21_22 && is_connected_22_23 && is_connected_23_24 && is_connected_21_24 && is_connected_17_25 && is_connected_24_26 && is_connected_27_28 && !unallowed_connection_present) {
            alert("Alert ! Correct connections proceed to take readings.");
            properlyconnected = true;
            rightconnection = true;

            const elements = document.querySelectorAll('.jtk-endpoint');

            elements.forEach(element => {
                element.style.pointerEvents = 'none';
            });

            document.getElementById("dis1").style.pointerEvents = "none";
            document.getElementById("dis2").style.pointerEvents = "none";
            document.getElementById("dis3").style.pointerEvents = "none";
            document.getElementById("dis4").style.pointerEvents = "none";
            document.getElementById("dis5").style.pointerEvents = "none";
            document.getElementById("dis6").style.pointerEvents = "none";
            document.getElementById("dis7").style.pointerEvents = "none";
            document.getElementById("dis8").style.pointerEvents = "none";
            document.getElementById("dis9").style.pointerEvents = "none";
            document.getElementById("dis10").style.pointerEvents = "none";
            document.getElementById("dis11").style.pointerEvents = "none";
            document.getElementById("dis12").style.pointerEvents = "none";
            document.getElementById("dis13").style.pointerEvents = "none";
            document.getElementById("dis14").style.pointerEvents = "none";
            document.getElementById("dis15").style.pointerEvents = "none";
            document.getElementById("dis16").style.pointerEvents = "none";
            document.getElementById("dis17").style.pointerEvents = "none";
            document.getElementById("dis18").style.pointerEvents = "none";
            document.getElementById("dis19").style.pointerEvents = "none";
            document.getElementById("dis20").style.pointerEvents = "none";
            document.getElementById("dis21").style.pointerEvents = "none";
            document.getElementById("dis22").style.pointerEvents = "none";
            document.getElementById("dis23").style.pointerEvents = "none";
            document.getElementById("dis24").style.pointerEvents = "none";
            document.getElementById("dis25").style.pointerEvents = "none";
            document.getElementById("dis26").style.pointerEvents = "none";
            document.getElementById("dis27").style.pointerEvents = "none";
            document.getElementById("dis28").style.pointerEvents = "none";
            document.getElementById("dis30").style.pointerEvents = "none";

            return;
        }
        else if (!unallowed_connection_present) {
            alert("Please Complete the connection");
        }
        else {
            alert("Alert ! Incorrect Connection");

            return;
        }
    });
});

var addToTable = document.querySelector('#addToTable');
var table = document.querySelector('table');
var createGraph = document.querySelector('.createGraph');
var range = document.querySelector('#range');
var range = [20, 40, 60, 47, 37, 48];
var mcboffstate = true;

function mcbonoff() {
    if (rightconnection == false) {
        alert("Alert ! Please Complete the connection first.");
    }
    else {
        if (mcboffstate == true) {
            mcboffstate = false;
            document.getElementById('myimage').src = 'mcb2.png';
            document.getElementById('led1').src = 'push2.png';
            document.getElementById('led2').src = 'push2.png';
            document.getElementById('led3').src = 'push2.png';
            //document.getElementById('range').disabled=false;
            //document.getElementById('addToTable').disabled=false;
            document.getElementById('myimage1').src = 'switchon1.png';
            // document.getElementById('image').style.animation="rotation 0.1s infinite linear";


            //Rotatestop();

        }
        else if (mcboffstate == false) {
            mcboffstate = true;
            document.getElementById('myimage').src = 'mcb1.png';
            document.getElementById('led1').src = 'push1.png';
            document.getElementById('led2').src = 'push1.png';
            document.getElementById('led3').src = 'push1.png';
            document.getElementById('range').disabled = true;
            document.getElementById('addToTable').disabled = true;

            document.getElementById('myimage1').src = 'switchoff1.png';
            // document.getElementById('image').style.animation="rotation 0s infinite linear";
            document.getElementById('cirmover2').style.transform = "rotate(-120deg)";//style.animation="rotation 2000s infinite linear";
            document.getElementById('image').style.animation = "rotation 0s";
            document.getElementById('needle').style.transform = "rotate(294deg)";

        }
    }
}



var isrotating = false;
var were = 270;
var rotoroffstate = true;
function Rotatestop() {
    if (mcboffstate == true) {
        alert("Alert ! Either please complete the connection first or set mcb to on.");
    }
    else {
        if (isrotating == false) {
            if (rotoroffstate == true) {
                isrotating = true;
                rotoroffstate = false;
                document.getElementById('image').style.animation = "rotation 0.2s infinite linear";
                document.getElementById('needle').style.transform = "rotate(440deg)";
                document.getElementById('range').disabled = false;
                document.getElementById('addToTable').disabled = false;
                var intervalId = setInterval(function () {
                    if (were === 390) {
                        isrotating = false;
                        clearInterval(intervalId);
                        were = 400;
                    }
                    document.getElementById('cirmover2').style.transform = "rotate(" + were + "deg)";
                    were++;
                }, 15);
            }
            else {
                isrotating = true;
                rotoroffstate = true;
                document.getElementById('image').style.animation = "rotation 0s infinite linear";
                document.getElementById('needle').style.transform = "rotate(294deg)";
                document.getElementById('range').disabled = true;
                //document.getElementById('range').value = 0;
                document.getElementById('addToTable').disabled = true;
                document.getElementById('show1').value = 0;
                document.getElementById('show').value = 0;
                var intervalId = setInterval(function () {
                    if (were === 250) {
                        isrotating = false;
                        clearInterval(intervalId);
                        were = 250;
                    }
                    document.getElementById('cirmover2').style.transform = "rotate(" + were + "deg)";
                    were--;
                }, 15);
            }
        }
        else {
            return;
        }


    }


}

function slider_voltmeter() {

    var value = document.getElementById('range').value;
    var value2 = document.getElementById('image').value;
    var rangeClock = document.querySelector('.meter-clock');

    document.getElementById('image').style.animation = "rotation 0s infinite linear";

    if (value == 1) {

        document.getElementById('show1').value = 1499;
        document.getElementById('show').value = 200;
        document.getElementById('image').style.animation = "rotation 0.2s infinite linear";
        // document.getElementById('needle').style.transform="rotate(310deg)";
        document.getElementById('needle').style.transform = "rotate(440deg)";
    }
    else if (value == 2) {
        document.getElementById('show1').value = 1474;
        document.getElementById('show').value = 194;
        document.getElementById('image').style.animation = "rotation 0.3s infinite linear";
        // document.getElementById('needle').style.transform="rotate(320deg)";
        document.getElementById('needle').style.transform = "rotate(430deg)";

    }
    else if (value == 3) {
        document.getElementById('show1').value = 1425;
        document.getElementById('show').value = 177;
        document.getElementById('image').style.animation = "rotation 0.4s infinite linear";
        // document.getElementById('needle').style.transform="rotate(340deg)";
        document.getElementById('needle').style.transform = "rotate(411deg)";

    }
    else if (value == 4) {
        document.getElementById('show1').value = 1399;
        document.getElementById('show').value = 168;
        document.getElementById('image').style.animation = "rotation 0.5s infinite linear";
        // document.getElementById('needle').style.transform="rotate(360deg)";
        document.getElementById('needle').style.transform = "rotate(402deg)";

    }
    else if (value == 5) {
        document.getElementById('show1').value = 1301;
        document.getElementById('show').value = 164;
        document.getElementById('image').style.animation = "rotation 0.6s infinite linear";
        // document.getElementById('needle').style.transform="rotate(380deg)";
        document.getElementById('needle').style.transform = "rotate(398deg)";

    }
    else if (value == 6) {
        document.getElementById('show1').value = 1262;
        document.getElementById('show').value = 158;
        document.getElementById('image').style.animation = "rotation 0.75s infinite linear";
        // document.getElementById('needle').style.transform="rotate(400deg)";
        document.getElementById('needle').style.transform = "rotate(392deg)";
    }
    else if (value == 7) {
        document.getElementById('show1').value = 1163;
        document.getElementById('show').value = 155;
        document.getElementById('image').style.animation = "rotation 0.8s infinite linear";
        // document.getElementById('needle').style.transform="rotate(420deg)";
        document.getElementById('needle').style.transform = "rotate(388deg)";
    }
    else if (value == 8) {
        document.getElementById('show1').value = 962;
        document.getElementById('show').value = 142;
        document.getElementById('image').style.animation = "rotation 0.9s infinite linear";
        // document.getElementById('needle').style.transform="rotate(440deg)";
        document.getElementById('needle').style.transform = "rotate(375deg)";

    }


}

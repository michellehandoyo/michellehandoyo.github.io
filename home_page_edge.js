/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'fit_box23',
                            type: 'image',
                            rect: ['455px', '376px', '227px', '18px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"fit_box2.png",'0px','0px']
                        },
                        {
                            id: 'MH',
                            type: 'image',
                            rect: ['455px', '326px', '113px', '114px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"MH.svg",'0px','0px']
                        },
                        {
                            id: 'box',
                            type: 'image',
                            rect: ['455px', '326px', '113px', '114px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"box.svg",'0px','0px']
                        },
                        {
                            id: 'michelle',
                            type: 'image',
                            rect: ['455px', '326px', '113px', '114px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"michelle.svg",'0px','0px']
                        },
                        {
                            id: 'ichelle2',
                            type: 'image',
                            rect: ['455px', '376px', '250px', '18px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"ichelle.png",'0px','0px']
                        },
                        {
                            id: 'mh_small32',
                            type: 'image',
                            rect: ['455px', '376px', '156px', '18px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"mh_small3.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '1024px', '768px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    data: [
                        [
                            "eid57",
                            "opacity",
                            0,
                            1000,
                            "easeOutCubic",
                            "${box}",
                            '0',
                            '1'
                        ],
                        [
                            "eid44",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${mh_small32}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid40",
                            "opacity",
                            4250,
                            750,
                            "easeOutCubic",
                            "${mh_small32}",
                            '0.000000',
                            '0.7'
                        ],
                        [
                            "eid8",
                            "left",
                            500,
                            1000,
                            "easeOutCubic",
                            "${michelle}",
                            '455px',
                            '296px'
                        ],
                        [
                            "eid59",
                            "opacity",
                            0,
                            1000,
                            "easeOutCubic",
                            "${MH}",
                            '0',
                            '1'
                        ],
                        [
                            "eid7",
                            "left",
                            500,
                            1000,
                            "easeOutCubic",
                            "${box}",
                            '455px',
                            '296px'
                        ],
                        [
                            "eid58",
                            "opacity",
                            0,
                            1000,
                            "easeOutCubic",
                            "${michelle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid47",
                            "opacity",
                            5750,
                            2250,
                            "easeOutCubic",
                            "${michelle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid9",
                            "left",
                            500,
                            1000,
                            "easeOutCubic",
                            "${MH}",
                            '455px',
                            '296px'
                        ],
                        [
                            "eid45",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${ichelle2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid42",
                            "opacity",
                            4250,
                            750,
                            "easeOutCubic",
                            "${ichelle2}",
                            '0.000000',
                            '0.7'
                        ],
                        [
                            "eid30",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${fit_box23}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid28",
                            "opacity",
                            1000,
                            1026,
                            "easeOutCubic",
                            "${fit_box23}",
                            '0.000000',
                            '0.7'
                        ],
                        [
                            "eid29",
                            "opacity",
                            3500,
                            750,
                            "easeOutCubic",
                            "${fit_box23}",
                            '0.700000',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("home_page_edgeActions.js");
})("EDGE-40986355");

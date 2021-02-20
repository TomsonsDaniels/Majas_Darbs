﻿$(document).ready(function () {
    $("#sort").DataTable({
        columnDefs: [
            { type: 'date', targets: [3] }
        ],
    });
});

/* metrics.json arrays */
var myArray = [
    {
        "data": {
            "lang": "en",
            "currentItemCount": 15,
            "items": [
                {
                    "id": "1",
                    "name": "Temperature",
                    "units": [
                        {
                            "id": "1",
                            "name": "°C",
                            "precision": 2,
                            "selected": true
                        },
                        {
                            "id": "101",
                            "name": "°F",
                            "precision": 2
                        },
                        {
                            "id": "102",
                            "name": "K",
                            "precision": 2
                        }
                    ]
                },
                {
                    "id": "2",
                    "name": "Humidity",
                    "units": [
                        {
                            "id": "2",
                            "name": "%",
                            "precision": 0,
                            "selected": true
                        }
                    ]
                },
                {
                    "id": "3",
                    "name": "CO₂",
                    "units": [
                        {
                            "id": "3",
                            "name": "ppm",
                            "precision": 0,
                            "selected": true
                        }
                    ]
                },
                {
                    "id": "4",
                    "name": "Atmospheric Pressure",
                    "units": [
                        {
                            "id": "104",
                            "name": "hPa",
                            "precision": 0
                        },
                        {
                            "id": "103",
                            "name": "mmHg",
                            "precision": 1,
                            "selected": true
                        },
                        {
                            "id": "105",
                            "name": "bar",
                            "precision": 3
                        },
                        {
                            "id": "106",
                            "name": "psi",
                            "precision": 2
                        },
                        {
                            "id": "4",
                            "name": "Pa",
                            "precision": 0
                        }
                    ]
                },
                {
                    "id": "5",
                    "name": "Voltage",
                    "units": [
                        {
                            "id": "5",
                            "name": "V",
                            "precision": 2,
                            "selected": true
                        }
                    ]
                },
                {
                    "id": "6",
                    "name": "Current",
                    "units": [
                        {
                            "id": "6",
                            "name": "A",
                            "precision": 6,
                            "selected": true
                        }
                    ]
                },
                {
                    "id": "7",
                    "name": "Weight",
                    "units": [
                        {
                            "id": "7",
                            "name": "kg",
                            "precision": 3,
                            "selected": true
                        },
                        {
                            "id": "107",
                            "name": "lb",
                            "precision": 2
                        }
                    ]
                },
                {
                    "id": "8",
                    "name": "Volumetric Water Content",
                    "units": [
                        {
                            "id": "2",
                            "name": "%",
                            "precision": 0,
                            "selected": true
                        }
                    ]
                },
                {
                    "id": "9",
                    "name": "Soil Dielectric Permittivity",
                    "units": [
                        {
                            "id": "12",
                            "name": "",
                            "precision": 3,
                            "selected": true
                        }
                    ]
                },
                {
                    "id": "10",
                    "name": "Soil Electrical Conductivity",
                    "units": [
                        {
                            "id": "108",
                            "name": "mS/cm",
                            "precision": 3,
                            "selected": true
                        },
                        {
                            "id": "8",
                            "name": "S/m",
                            "precision": 3
                        }
                    ]
                },
                {
                    "id": "11",
                    "name": "Pore Electrical Conductivity",
                    "units": [
                        {
                            "id": "108",
                            "name": "mS/cm",
                            "precision": 3,
                            "selected": true
                        },
                        {
                            "id": "8",
                            "name": "S/m",
                            "precision": 3
                        }
                    ]
                },
                {
                    "id": "12",
                    "name": "PPFD",
                    "units": [
                        {
                            "id": "9",
                            "name": "µmol/m²/s",
                            "precision": 0,
                            "selected": true
                        }
                    ]
                },
                {
                    "id": "13",
                    "name": "Distance",
                    "units": [
                        {
                            "id": "109",
                            "name": "mm",
                            "precision": 0,
                            "selected": true
                        },
                        {
                            "id": "110",
                            "name": "cm",
                            "precision": 1
                        },
                        {
                            "id": "111",
                            "name": "in",
                            "precision": 2
                        },
                        {
                            "id": "112",
                            "name": "ft",
                            "precision": 2
                        },
                        {
                            "id": "113",
                            "name": "mil",
                            "precision": 0
                        },
                        {
                            "id": "10",
                            "name": "m",
                            "precision": 3
                        }
                    ]
                },
                {
                    "id": "61",
                    "name": "RSSI",
                    "units": [
                        {
                            "id": "11",
                            "name": "dBm",
                            "precision": 0,
                            "selected": true
                        }
                    ]
                },
                {
                    "id": "62",
                    "name": "Battery voltage",
                    "units": [
                        {
                            "id": "5",
                            "name": "V",
                            "precision": 2,
                            "selected": true
                        }
                    ]
                }
            ]
        }
    }
]

/* Datu nolase no myArray */
function buildTable(array) {
    var table = document.getElementById('myTable');
    var blank = "";


    for (var a = 0; a < Object.keys(array).length; a++);

    var temperature = "";
    var humidity = "";
    var volumetric = "";

    for (const [key, value] of Object.entries(array)) {

    /* Izņēmumi, ja array'ā neatrodas vērtība, tā tiek identificēta un cikls turpinās */

        if (value.name == "" || Object.keys(value.metrics).length == 0) { 

            continue;

        }

        //  Izveidoju if , ja metrika, vai name nav tukši, tad tiek izprintētas tās vērtības.  

        if (value.metrics["1"] != undefined) {
            
            temperature = value.metrics["1"]["v"];
            
        }
        if ( value.metrics["2"] != undefined) {
                 humidity= value.metrics["2"]["v"];

        }
        if (value.metrics["2"] != undefined) {
            volumetric = value.metrics["2"]["v"];

        }

            
        
//
    /* Kolonnām piešķirtās vērtības*/
        var row = `<tr>
                                <td>${value.name}</td>
                                <td>${temperature}</td>
                                <td>${humidity}</td>
                                <td>${blank}</td>
                                <td>${volumetric}</td>

                          </tr>`
            ;

        table.innerHTML += row;
    }
    }
   // Izveidot , lai dati tiek nolasīti no .json faila. 

/* sensors.array Dati */ 
    var sensorArray =

    {
        "1048609": {
            "metrics": {
                "1": {
                    "t": 1565155052,
                    "v": 21.8
                },
                "2": {
                    "t": 1565155052,
                    "v": 40
                },
                "61": {
                    "t": 3496022002,
                    "v": -78
                },
                "62": {
                    "t": 3496022002,
                    "v": 2.6
                }
            },
            "name": "Sensor 1",
            "type": 1,
            "variant": 8
        },
        "1048610": {
            "metrics": {
                "1": {
                    "t": 1565155407,
                    "v": 22.65
                },
                "2": {
                    "t": 1565155407,
                    "v": 57
                },
                "61": {
                    "t": 1565155407,
                    "v": -93
                },
                "62": {
                    "t": 1565155407,
                    "v": 2.44
                }
            },
            "name": "Sensor 2",
            "type": 1,
            "variant": 8
        },
        "1048619": {
            "metrics": {
                "1": {
                    "t": 1565155379,
                    "v": 22.35
                },
                "2": {
                    "t": 1565155379,
                    "v": 50
                },
                "61": {
                    "t": 1565155379,
                    "v": -86
                },
                "62": {
                    "t": 1565155379,
                    "v": 2.74
                }
            },
            "name": "Sensor 3",
            "type": 1,
            "variant": 8
        },
        "1048624": {
            "metrics": {
                "1": {
                    "t": 1565155652,
                    "v": 19.95
                },
                "2": {
                    "t": 1565155652,
                    "v": 46
                },
                "61": {
                    "t": 1565155652,
                    "v": -70
                },
                "62": {
                    "t": 1565155652,
                    "v": 2.5
                }
            },
            "name": "Sensor 4",
            "type": 1,
            "variant": 8
        },
        "1048649": {
            "metrics": {
                "1": {
                    "t": 1565155454,
                    "v": 22.95
                },
                "2": {
                    "t": 1565155454,
                    "v": 50
                },
                "61": {
                    "t": 1565155454,
                    "v": -83
                },
                "62": {
                    "t": 1565155454,
                    "v": 2.52
                }
            },
            "name": "Sensor 5",
            "type": 1,
            "variant": 8
        },
        "1048650": {
            "metrics": {
                "1": {
                    "t": 1565155455,
                    "v": 25.65
                },
                "2": {
                    "t": 1565155455,
                    "v": 46
                },
                "61": {
                    "t": 1565155455,
                    "v": -116
                },
                "62": {
                    "t": 1565155455,
                    "v": 2.46
                }
            },
            "name": "Sensor 6",
            "type": 1,
            "variant": 8
        },
        "1048651": {
            "metrics": {
                "1": {
                    "t": 1565155349,
                    "v": 24.25
                },
                "2": {
                    "t": 1565155349,
                    "v": 44
                },
                "61": {
                    "t": 1565155349,
                    "v": -57
                },
                "62": {
                    "t": 1565155349,
                    "v": 2.48
                }
            },
            "name": "Sensor 7",
            "type": 1,
            "variant": 8
        },
        "1048652": {
            "metrics": {
                "1": {
                    "t": 1565155688,
                    "v": 25.1
                },
                "2": {
                    "t": 1565155688,
                    "v": 46
                },
                "61": {
                    "t": 1565155688,
                    "v": -104
                },
                "62": {
                    "t": 1565155688,
                    "v": 2.52
                }
            },
            "name": "Sensor 8",
            "type": 1,
            "variant": 8
        },
        "1048653": {
            "metrics": {
                "1": {
                    "t": 1565155308,
                    "v": 23.25
                },
                "2": {
                    "t": 1565155308,
                    "v": 61
                },
                "61": {
                    "t": 1565155308,
                    "v": -87
                },
                "62": {
                    "t": 1565155308,
                    "v": 2.4
                }
            },
            "name": "Sensor 9",
            "type": 1,
            "variant": 8
        },
        "1048655": {
            "metrics": {
                "1": {
                    "t": 1565155838,
                    "v": 22.35
                },
                "2": {
                    "t": 1565155838,
                    "v": 57
                },
                "61": {
                    "t": 9416018216,
                    "v": -89
                },
                "62": {
                    "t": 1565155838,
                    "v": 2.38
                }
            },
            "name": "Sensor 10",
            "type": 1,
            "variant": 8
        },
        "1048657": {
            "metrics": {
                "1": {
                    "t": 1565155428,
                    "v": 17.4
                },
                "2": {
                    "t": 1565155428,
                    "v": 100
                },
                "61": {
                    "t": 1565155428,
                    "v": -98
                },
                "62": {
                    "t": 1565155428,
                    "v": 2.48
                }
            },
            "name": "Sensor 11",
            "type": 1,
            "variant": 8
        },
        "1048742": {
            "metrics": {
                "1": {
                    "t": 1565155429,
                    "v": 23.5
                },
                "2": {
                    "t": 1565155429,
                    "v": 59
                },
                "61": {
                    "t": 1565155429,
                    "v": -95
                },
                "62": {
                    "t": 1565155429,
                    "v": 2.7
                }
            },
            "name": "Sensor 12",
            "type": 1,
            "variant": 8
        },
        "1048743": {
            "metrics": {
                "1": {
                    "t": 1565155790,
                    "v": 23.3
                },
                "2": {
                    "t": 1565155790,
                    "v": 43
                },
                "61": {
                    "t": 1565155790,
                    "v": -77
                },
                "62": {
                    "t": 1565155790,
                    "v": 2.62
                }
            },
            "name": "Sensor 13",
            "type": 1,
            "variant": 8
        },
        "1048744": {
            "metrics": {
                "1": {
                    "t": 1565155715,
                    "v": 23.55
                },
                "2": {
                    "t": 1565155715,
                    "v": 58
                },
                "61": {
                    "t": 1565155715,
                    "v": -73
                },
                "62": {
                    "t": 1565155715,
                    "v": 2.86
                }
            },
            "name": "Sensor 14",
            "type": 1,
            "variant": 8
        },
        "1048745": {
            "metrics": {
                "1": {
                    "t": 1565155189,
                    "v": 24.45
                },
                "2": {
                    "t": 1565155189,
                    "v": 49
                },
                "61": {
                    "t": 1565155189,
                    "v": -96
                },
                "62": {
                    "t": 1565155189,
                    "v": 2.6
                }
            },
            "name": "Sensor 15",
            "type": 1,
            "variant": 8
        },
        "1048746": {
            "metrics": {
                "1": {
                    "t": 1565155610,
                    "v": 23.95
                },
                "2": {
                    "t": 1565155610,
                    "v": 52
                },
                "61": {
                    "t": 1565155610,
                    "v": -117
                },
                "62": {
                    "t": 1565155610,
                    "v": 2.72
                }
            },
            "name": "Sensor 16",
            "type": 1,
            "variant": 8
        },
        "1048747": {
            "metrics": {
                "1": {
                    "t": 1565155438,
                    "v": 24.1
                },
                "2": {
                    "t": 1565155438,
                    "v": 51
                },
                "61": {
                    "t": 1565155438,
                    "v": -95
                },
                "62": {
                    "t": 1565155438,
                    "v": 2.72
                }
            },
            "name": "Sensor 17",
            "type": 1,
            "variant": 8
        },
        "1048748": {
            "metrics": {
                "1": {
                    "t": 1565155857,
                    "v": 23.9
                },
                "2": {
                    "t": 1565155857,
                    "v": 57
                },
                "61": {
                    "t": 1565155857,
                    "v": -110
                },
                "62": {
                    "t": 1565155857,
                    "v": 2.54
                }
            },
            "name": "Sensor 18",
            "type": 1,
            "variant": 8
        },
        "1048750": {
            "metrics": {
                "1": {
                    "t": 1565155845,
                    "v": 23.8
                },
                "2": {
                    "t": 1565155845,
                    "v": 52
                },
                "61": {
                    "t": 1565155845,
                    "v": -91
                },
                "62": {
                    "t": 1565155845,
                    "v": 2.72
                }
            },
            "name": "Sensor 19",
            "type": 1,
            "variant": 8
        },
        "1048751": {
            "metrics": {
                "1": {
                    "t": 1565155328,
                    "v": 22.5
                },
                "2": {
                    "t": 1565155328,
                    "v": 76
                },
                "61": {
                    "t": 1565155328,
                    "v": -84
                },
                "62": {
                    "t": 1565155328,
                    "v": 2.78
                }
            },
            "name": "Sensor 20",
            "type": 1,
            "variant": 8
        },
        "1048753": {
            "metrics": {
                "1": {
                    "t": 1565155861,
                    "v": 23.65
                },
                "2": {
                    "t": 1565155861,
                    "v": 58
                },
                "61": {
                    "t": 1565155861,
                    "v": -104
                },
                "62": {
                    "t": 1565155861,
                    "v": 2.64
                }
            },
            "name": "Sensor 21",
            "type": 1,
            "variant": 8
        },
        "1048764": {
            "metrics": {

            },
            "name": "",
            "type": 1,
            "variant": 8
        },
        "1048771": {
            "metrics": {
                "1": {
                    "t": 1588604528,
                    "v": 23.15
                },
                "2": {
                    "t": 1588604528,
                    "v": 48
                },
                "61": {
                    "t": 1588604528,
                    "v": -46
                },
                "62": {
                    "t": 1588604528,
                    "v": 2.68
                }
            },
            "name": "",
            "type": 1,
            "variant": 8
        },
        "1048791": {
            "metrics": {
                "1": {
                    "t": 1588606929,
                    "v": 23.15
                },
                "2": {
                    "t": 1588606929,
                    "v": 48
                },
                "61": {
                    "t": 1588606929,
                    "v": -53
                },
                "62": {
                    "t": 1588606929,
                    "v": 2.68
                }
            },
            "name": "",
            "type": 1,
            "variant": 8
        },
        "1048795": {
            "metrics": {
                "1": {
                    "t": 1565114855,
                    "v": 24.15
                },
                "2": {
                    "t": 1565114855,
                    "v": 44
                },
                "61": {
                    "t": 1565114855,
                    "v": -52
                },
                "62": {
                    "t": 1565114855,
                    "v": 2.8
                }
            },
            "name": "",
            "type": 1,
            "variant": 8
        },
        "1048811": {
            "metrics": {
                "1": {
                    "t": 1565155701,
                    "v": 23.15
                },
                "2": {
                    "t": 1565155701,
                    "v": 58
                },
                "61": {
                    "t": 1565155701,
                    "v": -103
                },
                "62": {
                    "t": 1565155701,
                    "v": 2.5
                }
            },
            "name": "Sensor 30",
            "type": 1,
            "variant": 8
        },
        "1048812": {
            "metrics": {

            },
            "name": "Sensor 31",
            "type": 1,
            "variant": 8
        },
        "1048813": {
            "metrics": {
                "1": {
                    "t": 1565155818,
                    "v": 22.9
                },
                "2": {
                    "t": 1565155818,
                    "v": 57
                },
                "61": {
                    "t": 1565155818,
                    "v": -80
                },
                "62": {
                    "t": 1565155818,
                    "v": 2.48
                }
            },
            "name": "Sensor 32",
            "type": 1,
            "variant": 8
        },
        "1048814": {
            "metrics": {
                "1": {
                    "t": 1588606945,
                    "v": 22.35
                },
                "2": {
                    "t": 1588606945,
                    "v": 39
                },
                "61": {
                    "t": 1588606945,
                    "v": -93
                },
                "62": {
                    "t": 1588606945,
                    "v": 2.24
                }
            },
            "name": "Sensor 33",
            "type": 1,
            "variant": 8
        },
        "1048815": {
            "metrics": {
                "1": {
                    "t": 1565155856,
                    "v": 23
                },
                "2": {
                    "t": 1565155856,
                    "v": 60
                },
                "61": {
                    "t": 1565155856,
                    "v": -106
                },
                "62": {
                    "t": 1565155856,
                    "v": 2.4
                }
            },
            "name": "Sensor 34",
            "type": 1,
            "variant": 8
        },
        "1048816": {
            "metrics": {
                "1": {
                    "t": 1588606954,
                    "v": 23.2
                },
                "2": {
                    "t": 1588606954,
                    "v": 47
                },
                "61": {
                    "t": 5502846305,
                    "v": -77
                },
                "62": {
                    "t": 5502846305,
                    "v": 2.82
                }
            },
            "name": "",
            "type": 1,
            "variant": 8
        },
        "1048817": {
            "metrics": {
                "1": {
                    "t": 1588606934,
                    "v": 23.2
                },
                "2": {
                    "t": 1588606934,
                    "v": 46
                },
                "61": {
                    "t": 1588606934,
                    "v": -53
                },
                "62": {
                    "t": 1588606934,
                    "v": 2.52
                }
            },
            "name": "",
            "type": 1,
            "variant": 8
        },
        "1048819": {
            "metrics": {

            },
            "name": "Sensor 40",
            "type": 1,
            "variant": 8
        },
        "1048820": {
            "metrics": {

            },
            "name": "41",
            "type": 1,
            "variant": 8
        },
        "1048821": {
            "metrics": {
                "1": {
                    "t": 1565155800,
                    "v": 25
                },
                "2": {
                    "t": 1565155800,
                    "v": 45
                },
                "61": {
                    "t": 1565155800,
                    "v": -88
                },
                "62": {
                    "t": 1565155800,
                    "v": 2.34
                }
            },
            "name": "Sensor 43",
            "type": 1,
            "variant": 8
        },
        "1048822": {
            "metrics": {
                "1": {
                    "t": 1565155732,
                    "v": 24.4
                },
                "2": {
                    "t": 1565155732,
                    "v": 50
                },
                "61": {
                    "t": 1565155732,
                    "v": -102
                },
                "62": {
                    "t": 1565155732,
                    "v": 2.76
                }
            },
            "name": "Sensor 44",
            "type": 1,
            "variant": 8
        },
        "1048823": {
            "metrics": {
                "1": {
                    "t": 1563792639,
                    "v": 85.1
                },
                "2": {
                    "t": 1563792639,
                    "v": 94
                },
                "61": {
                    "t": 1563792639,
                    "v": -125
                },
                "62": {
                    "t": 1563792639,
                    "v": 0.02
                }
            },
            "name": "Sensor 45",
            "type": 1,
            "variant": 8
        },
        "1048824": {
            "metrics": {
                "1": {
                    "t": 1565155357,
                    "v": 23.4
                },
                "2": {
                    "t": 1565155357,
                    "v": 41
                },
                "61": {
                    "t": 1565155357,
                    "v": -67
                },
                "62": {
                    "t": 1565155357,
                    "v": 2.48
                }
            },
            "name": "Sensor 46",
            "type": 1,
            "variant": 8
        },
        "1048825": {
            "metrics": {
                "1": {
                    "t": 1588604531,
                    "v": 23.25
                },
                "2": {
                    "t": 1588604531,
                    "v": 47
                },
                "61": {
                    "t": 1588604531,
                    "v": -52
                },
                "62": {
                    "t": 1588604531,
                    "v": 2.44
                }
            },
            "name": "",
            "type": 1,
            "variant": 8
        },
        "1048826": {
            "metrics": {
                "1": {
                    "t": 1588606924,
                    "v": 25.25
                },
                "2": {
                    "t": 1588606924,
                    "v": 31
                },
                "61": {
                    "t": 1588606924,
                    "v": -73
                },
                "62": {
                    "t": 1588606924,
                    "v": 2.48
                }
            },
            "name": "Sensor 47",
            "type": 1,
            "variant": 8
        },
        "1048827": {
            "metrics": {
                "1": {
                    "t": 1588606955,
                    "v": 25.1
                },
                "2": {
                    "t": 1588606955,
                    "v": 36
                },
                "61": {
                    "t": 1588606955,
                    "v": -78
                },
                "62": {
                    "t": 1588606955,
                    "v": 2.48
                }
            },
            "name": "Sensor 48",
            "type": 1,
            "variant": 8
        },
        "1048828": {
            "metrics": {
                "1": {
                    "t": 1565155772,
                    "v": 23.05
                },
                "2": {
                    "t": 1565155772,
                    "v": 50
                },
                "61": {
                    "t": 1565155772,
                    "v": -100
                },
                "62": {
                    "t": 1565155772,
                    "v": 2.5
                }
            },
            "name": "Sensor 49",
            "type": 1,
            "variant": 8
        },
        "1048829": {
            "metrics": {
                "1": {
                    "t": 1565155641,
                    "v": 22.7
                },
                "2": {
                    "t": 1565155641,
                    "v": 59
                },
                "61": {
                    "t": 1565155641,
                    "v": -91
                },
                "62": {
                    "t": 1565155641,
                    "v": 2.34
                }
            },
            "name": "Sensor 50",
            "type": 1,
            "variant": 8
        },
        "1048834": {
            "metrics": {
                "1": {
                    "t": 1558273587,
                    "v": 21.05
                },
                "2": {
                    "t": 1558273587,
                    "v": 51
                },
                "61": {
                    "t": 1558273587,
                    "v": -125
                },
                "62": {
                    "t": 1558273587,
                    "v": 2.52
                }
            },
            "name": "Sensor 51",
            "type": 1,
            "variant": 8
        },
        "1048835": {
            "metrics": {
                "1": {
                    "t": 1556276235,
                    "v": 25.9
                },
                "2": {
                    "t": 1556276235,
                    "v": 27
                },
                "61": {
                    "t": 1556276235,
                    "v": -121
                },
                "62": {
                    "t": 1556276235,
                    "v": 2.98
                }
            },
            "name": "Sensor 52",
            "type": 1,
            "variant": 8
        },
        "1048836": {
            "metrics": {
                "1": {
                    "t": 1565155430,
                    "v": 23.1
                },
                "2": {
                    "t": 1565155430,
                    "v": 59
                },
                "61": {
                    "t": 1565155430,
                    "v": -125
                },
                "62": {
                    "t": 1565155430,
                    "v": 2.28
                }
            },
            "name": "Sensor 53",
            "type": 1,
            "variant": 8
        },
        "1048837": {
            "metrics": {
                "1": {
                    "t": 1565155606,
                    "v": 24.5
                },
                "2": {
                    "t": 1565155606,
                    "v": 57
                },
                "61": {
                    "t": 1565155606,
                    "v": -125
                },
                "62": {
                    "t": 1565155606,
                    "v": 2.46
                }
            },
            "name": "Sensor 54",
            "type": 1,
            "variant": 8
        },
        "1048838": {
            "metrics": {
                "1": {
                    "t": 1565155861,
                    "v": 23.85
                },
                "2": {
                    "t": 1565155861,
                    "v": 45
                },
                "61": {
                    "t": 1565155861,
                    "v": -68
                },
                "62": {
                    "t": 1565155861,
                    "v": 2.44
                }
            },
            "name": "Sensor 55",
            "type": 1,
            "variant": 8
        },
        "1048841": {
            "metrics": {
                "1": {
                    "t": 1588604526,
                    "v": 22.25
                },
                "2": {
                    "t": 1588604526,
                    "v": 42
                },
                "61": {
                    "t": 1588604526,
                    "v": -85
                },
                "62": {
                    "t": 1588604526,
                    "v": 2.36
                }
            },
            "name": "Sensor 56",
            "type": 1,
            "variant": 8
        },
        "1048843": {
            "metrics": {
                "1": {
                    "t": 1565115133,
                    "v": 24.2
                },
                "2": {
                    "t": 1565115133,
                    "v": 44
                },
                "61": {
                    "t": 1565115133,
                    "v": -51
                },
                "62": {
                    "t": 1565115133,
                    "v": 2.48
                }
            },
            "name": "",
            "type": 1,
            "variant": 8
        },
        "1048844": {
            "metrics": {
                "1": {
                    "t": 1565114962,
                    "v": 24.25
                },
                "2": {
                    "t": 1565114962,
                    "v": 45
                },
                "61": {
                    "t": 1565114962,
                    "v": -50
                },
                "62": {
                    "t": 1565114962,
                    "v": 2.42
                }
            },
            "name": "",
            "type": 1,
            "variant": 8
        },
        "1048845": {
            "metrics": {

            },
            "name": "",
            "type": 1,
            "variant": 8
        },
        "1048846": {
            "metrics": {

            },
            "name": "",
            "type": 1,
            "variant": 8
        },
        "1048847": {
            "metrics": {

            },
            "name": "",
            "type": 1,
            "variant": 8
        },
        "1048848": {
            "metrics": {

            },
            "name": "Sensor 57",
            "type": 1,
            "variant": 8
        },
        "1048849": {
            "metrics": {
                "1": {
                    "t": 9496027817,
                    "v": 21.8
                },
                "2": {
                    "t": 1565155308,
                    "v": 59
                },
                "61": {
                    "t": 1565155308,
                    "v": -92
                },
                "62": {
                    "t": 1565155308,
                    "v": 2.46
                }
            },
            "name": "Sensor 58",
            "type": 1,
            "variant": 8
        },
        "1048852": {
            "metrics": {
                "1": {
                    "t": 1565155578,
                    "v": 24.25
                },
                "2": {
                    "t": 1565155578,
                    "v": 46
                },
                "61": {
                    "t": 1565155578,
                    "v": -98
                },
                "62": {
                    "t": 1565155578,
                    "v": 2.94
                }
            },
            "name": "Sensor 59",
            "type": 1,
            "variant": 8
        },
        "1048853": {
            "metrics": {
                "1": {
                    "t": 1565155309,
                    "v": 24.4
                },
                "2": {
                    "t": 1565155309,
                    "v": 44
                },
                "61": {
                    "t": 1565155309,
                    "v": -104
                },
                "62": {
                    "t": 1565155309,
                    "v": 2.94
                }
            },
            "name": "Sensor 60",
            "type": 1,
            "variant": 8
        },
        "1048854": {
            "metrics": {
                "1": {
                    "t": 1565155317,
                    "v": 24.05
                },
                "2": {
                    "t": 1565155317,
                    "v": 44
                },
                "61": {
                    "t": 1565155317,
                    "v": -62
                },
                "62": {
                    "t": 1565155317,
                    "v": 2.24
                }
            },
            "name": "Sensor 61",
            "type": 1,
            "variant": 8
        },
        "1048855": {
            "metrics": {
                "1": {
                    "t": 1565155841,
                    "v": 48.3
                },
                "2": {
                    "t": 1565155841,
                    "v": 25
                },
                "61": {
                    "t": 1565155841,
                    "v": -99
                },
                "62": {
                    "t": 1565155841,
                    "v": 2.5
                }
            },
            "name": "Sensor 62",
            "type": 1,
            "variant": 8
        },
        "1048856": {
            "metrics": {
                "1": {
                    "t": 1588604530,
                    "v": 23.65
                },
                "2": {
                    "t": 1588604530,
                    "v": 42
                },
                "61": {
                    "t": 1588604530,
                    "v": -104
                },
                "62": {
                    "t": 1588604530,
                    "v": 2.28
                }
            },
            "name": "Sensor 63",
            "type": 1,
            "variant": 8
        },
        "1048857": {
            "metrics": {
                "1": {
                    "t": 1565155670,
                    "v": 22.85
                },
                "2": {
                    "t": 1565155670,
                    "v": 59
                },
                "61": {
                    "t": 1565155670,
                    "v": -83
                },
                "62": {
                    "t": 1565155670,
                    "v": 2.5
                }
            },
            "name": "Sensor 64",
            "type": 1,
            "variant": 8
        },
        "1048858": {
            "metrics": {
                "1": {
                    "t": 1565155357,
                    "v": 22.8
                },
                "2": {
                    "t": 1565155357,
                    "v": 58
                },
                "61": {
                    "t": 1565155357,
                    "v": -88
                },
                "62": {
                    "t": 1565155357,
                    "v": 2.74
                }
            },
            "name": "Sensor 65",
            "type": 1,
            "variant": 8
        },
        "1048859": {
            "metrics": {
                "1": {
                    "t": 1565154845,
                    "v": 22.5
                },
                "2": {
                    "t": 1565154845,
                    "v": 55
                },
                "61": {
                    "t": 1565154845,
                    "v": -103
                },
                "62": {
                    "t": 1565154845,
                    "v": 2.42
                }
            },
            "name": "Sensor 66",
            "type": 1,
            "variant": 8
        },
        "1048861": {
            "metrics": {
                "1": {
                    "t": 1588606921,
                    "v": 21.75
                },
                "2": {
                    "t": 1588606921,
                    "v": 48
                },
                "61": {
                    "t": 1588606921,
                    "v": -101
                },
                "62": {
                    "t": 1588606921,
                    "v": 2.48
                }
            },
            "name": "Sensor 67",
            "type": 1,
            "variant": 8
        },
        "1048862": {
            "metrics": {
                "1": {
                    "t": 1565155791,
                    "v": 23.25
                },
                "2": {
                    "t": 1565155791,
                    "v": 59
                },
                "61": {
                    "t": 9519261031,
                    "v": -122
                },
                "62": {
                    "t": 1565155791,
                    "v": 2.46
                }
            },
            "name": "Sensor 68",
            "type": 1,
            "variant": 8
        },
        "1048863": {
            "metrics": {
                "1": {
                    "t": 1565155346,
                    "v": 24.1
                },
                "2": {
                    "t": 1565155346,
                    "v": 50
                },
                "61": {
                    "t": 1565155346,
                    "v": -73
                },
                "62": {
                    "t": 1565155346,
                    "v": 2.36
                }
            },
            "name": "Sensor 69",
            "type": 1,
            "variant": 8
        },
        "1049062": {
            "metrics": {
                "1": {
                    "t": 1516705279,
                    "v": 22.2
                },
                "2": {
                    "t": 1516705279,
                    "v": 29
                },
                "61": {
                    "t": 1516705288,
                    "v": -62
                },
                "62": {
                    "t": 1516705288,
                    "v": 2.24
                }
            },
            "name": "Sensor 70",
            "type": 1,
            "variant": 8
        },
        "1049451": {
            "metrics": {
                "1": {
                    "t": 1565155851,
                    "v": 24.3
                },
                "2": {
                    "t": 1565155851,
                    "v": 50
                },
                "61": {
                    "t": 1565155851,
                    "v": -53
                },
                "62": {
                    "t": 1565155851,
                    "v": 2.78
                }
            },
            "name": "Sensor 71",
            "type": 1,
            "variant": 8
        },
        "1050519": {
            "metrics": {
                "1": {
                    "t": 1546861499,
                    "v": 22.85
                },
                "2": {
                    "t": 1546861499,
                    "v": 26
                },
                "61": {
                    "t": 1546861499,
                    "v": -48
                },
                "62": {
                    "t": 1546861499,
                    "v": 1.48
                }
            },
            "name": "",
            "type": 1,
            "variant": 9
        },
        "1050527": {
            "metrics": {
                "1": {
                    "t": 1546861405,
                    "v": 22.95
                },
                "2": {
                    "t": 1546861405,
                    "v": 23
                },
                "61": {
                    "t": 1546861405,
                    "v": -41
                },
                "62": {
                    "t": 1546861405,
                    "v": 1.48
                }
            },
            "name": "",
            "type": 1,
            "variant": 9
        },
        "2097154": {
            "metrics": {
                "1": {
                    "t": 1559299908,
                    "v": 23.15
                },
                "61": {
                    "t": 1559299908,
                    "v": -50
                },
                "62": {
                    "t": 1559299908,
                    "v": 1.28
                }
            },
            "name": "Sensor 72",
            "type": 2,
            "variant": 8
        },
        "2097373": {
            "metrics": {

            },
            "name": "",
            "type": 2,
            "variant": 8
        },
        "2099173": {
            "metrics": {
                "1": {
                    "t": 1565115337,
                    "v": 17.3
                },
                "61": {
                    "t": 1565115337,
                    "v": -90
                },
                "62": {
                    "t": 1565115337,
                    "v": 1.32
                }
            },
            "name": "",
            "type": 2,
            "variant": 9
        },
        "2101119": {
            "metrics": {

            },
            "name": "",
            "type": 2,
            "variant": 9
        },
        "2102743": {
            "metrics": {

            },
            "name": "",
            "type": 2,
            "variant": 9
        },
        "3145747": {
            "metrics": {
                "3": {
                    "t": 1565155630,
                    "v": 548
                },
                "61": {
                    "t": 1565155630,
                    "v": -59
                },
                "62": {
                    "t": 1565155630,
                    "v": 2.48
                }
            },
            "name": "Sensor 73",
            "type": 3,
            "variant": 8
        },
        "3145813": {
            "metrics": {
                "3": {
                    "t": 1565155721,
                    "v": 531
                },
                "61": {
                    "t": 1565155721,
                    "v": -89
                },
                "62": {
                    "t": 1565155721,
                    "v": 2.64
                }
            },
            "name": "Sensor 74",
            "type": 3,
            "variant": 8
        },
        "3145815": {
            "metrics": {
                "3": {
                    "t": 1565155877,
                    "v": 442
                },
                "61": {
                    "t": 1565155877,
                    "v": -90
                },
                "62": {
                    "t": 1565155877,
                    "v": 2.64
                }
            },
            "name": "Sensor 75",
            "type": 3,
            "variant": 8
        },
        "3145817": {
            "metrics": {
                "3": {
                    "t": 1565155655,
                    "v": 500
                },
                "61": {
                    "t": 1565155655,
                    "v": -111
                },
                "62": {
                    "t": 1565155655,
                    "v": 2.62
                }
            },
            "name": "Sensor 76",
            "type": 3,
            "variant": 8
        },
        "3145825": {
            "metrics": {
                "3": {
                    "t": 1565155448,
                    "v": 586
                },
                "61": {
                    "t": 1565155448,
                    "v": -97
                },
                "62": {
                    "t": 1565155448,
                    "v": 2.64
                }
            },
            "name": "Sensor 77",
            "type": 3,
            "variant": 8
        },
        "3145828": {
            "metrics": {
                "3": {
                    "t": 1565155473,
                    "v": 516
                },
                "61": {
                    "t": 1565155473,
                    "v": -79
                },
                "62": {
                    "t": 1565155473,
                    "v": 2.66
                }
            },
            "name": "Sensor 78",
            "type": 3,
            "variant": 8
        },
        "3145829": {
            "metrics": {
                "3": {
                    "t": 1565154954,
                    "v": 471
                },
                "61": {
                    "t": 1565154954,
                    "v": -81
                },
                "62": {
                    "t": 1565154954,
                    "v": 2.62
                }
            },
            "name": "Sensor 79",
            "type": 3,
            "variant": 8
        },
        "3145847": {
            "metrics": {

            },
            "name": "Sensor 80",
            "type": 3,
            "variant": 8
        },
        "3145851": {
            "metrics": {
                "3": {
                    "t": 1565154767,
                    "v": 515
                },
                "61": {
                    "t": 1565154767,
                    "v": -127
                },
                "62": {
                    "t": 1565154767,
                    "v": 2.64
                }
            },
            "name": "Sensor 81",
            "type": 3,
            "variant": 8
        },
        "3145854": {
            "metrics": {
                "3": {
                    "t": 1543313691,
                    "v": 985
                },
                "61": {
                    "t": 1543313691,
                    "v": -128
                },
                "62": {
                    "t": 1543313691,
                    "v": 2.74
                }
            },
            "name": "Sensor 82",
            "type": 3,
            "variant": 8
        },
        "3145892": {
            "metrics": {
                "3": {
                    "t": 1565020716,
                    "v": 522
                },
                "61": {
                    "t": 1565020716,
                    "v": -127
                },
                "62": {
                    "t": 1565020716,
                    "v": 2.66
                }
            },
            "name": "Sensor 83",
            "type": 3,
            "variant": 8
        },
        "3146100": {
            "metrics": {

            },
            "name": "Sensor 84",
            "type": 3,
            "variant": 8
        },
        "3245733": {
            "metrics": {
                "3": {
                    "t": 1588606931,
                    "v": 736
                },
                "61": {
                    "t": 1588606931,
                    "v": -96
                },
                "62": {
                    "t": 1588606931,
                    "v": 2.72
                }
            },
            "name": "Sensor 85",
            "type": 3,
            "variant": 8
        },
        "3245735": {
            "metrics": {
                "3": {
                    "t": 1528799866,
                    "v": 743
                },
                "61": {
                    "t": 1528799866,
                    "v": -102
                },
                "62": {
                    "t": 1528799866,
                    "v": 2.84
                }
            },
            "name": "Sensor 86",
            "type": 3,
            "variant": 8
        },
        "3245736": {
            "metrics": {
                "3": {
                    "t": 1565155340,
                    "v": 511
                },
                "61": {
                    "t": 1565155340,
                    "v": -69
                },
                "62": {
                    "t": 1565155340,
                    "v": 2.68
                }
            },
            "name": "Sensor 87",
            "type": 3,
            "variant": 8
        },
        "3245737": {
            "metrics": {
                "3": {
                    "t": 1565155482,
                    "v": 563
                },
                "61": {
                    "t": 1565155482,
                    "v": -84
                },
                "62": {
                    "t": 1565155482,
                    "v": 2.68
                }
            },
            "name": "Sensor 88",
            "type": 3,
            "variant": 8
        },
        "4194304": {
            "metrics": {
                "1": {
                    "t": 1561107586,
                    "v": 0
                },
                "2": {
                    "t": 1561107586,
                    "v": 0
                },
                "3": {
                    "t": 1561107586,
                    "v": 0
                },
                "4": {
                    "t": 1561107586,
                    "v": 0
                },
                "61": {
                    "t": 1561107586,
                    "v": -43
                },
                "62": {
                    "t": 1561107586,
                    "v": 1.2
                }
            },
            "name": "Sensor 89",
            "type": 4,
            "variant": 8
        },
        "4194305": {
            "metrics": {
                "1": {
                    "t": 1530002936,
                    "v": 25.7
                },
                "2": {
                    "t": 1530002936,
                    "v": 39
                },
                "3": {
                    "t": 1530002936,
                    "v": 925
                },
                "4": {
                    "t": 1530002936,
                    "v": 766.8
                },
                "61": {
                    "t": 1530002936,
                    "v": -84
                },
                "62": {
                    "t": 1530002936,
                    "v": 2.96
                }
            },
            "name": "",
            "type": 4,
            "variant": 1
        },
        "4194311": {
            "metrics": {
                "1": {
                    "t": 1548778797,
                    "v": 24.05
                },
                "2": {
                    "t": 1548778797,
                    "v": 25
                },
                "3": {
                    "t": 1548778797,
                    "v": 1069
                },
                "4": {
                    "t": 1548778797,
                    "v": 749.6
                },
                "61": {
                    "t": 1548778797,
                    "v": -90
                },
                "62": {
                    "t": 1548778797,
                    "v": 2.94
                }
            },
            "name": "",
            "type": 4,
            "variant": 8
        },
        "4194358": {
            "metrics": {
                "1": {
                    "t": 1588604535,
                    "v": 24
                },
                "2": {
                    "t": 1588604535,
                    "v": 39
                },
                "3": {
                    "t": 1588604535,
                    "v": 717
                },
                "4": {
                    "t": 1588604535,
                    "v": 757.9
                },
                "61": {
                    "t": 1588604535,
                    "v": -29
                },
                "62": {
                    "t": 1588604535,
                    "v": 2.44
                }
            },
            "name": "",
            "type": 4,
            "variant": 1
        },
        "4194564": {
            "metrics": {
                "1": {
                    "t": 1556107061,
                    "v": 0
                },
                "2": {
                    "t": 1556107061,
                    "v": 0
                },
                "3": {
                    "t": 1556107061,
                    "v": 0
                },
                "4": {
                    "t": 1556107061,
                    "v": 902.7
                },
                "61": {
                    "t": 1556107079,
                    "v": -71
                },
                "62": {
                    "t": 1556107079,
                    "v": 1.52
                }
            },
            "name": "Sensor 90",
            "type": 4,
            "variant": 8
        },
        "4194565": {
            "metrics": {
                "1": {
                    "t": 1561532771,
                    "v": 25.8
                },
                "2": {
                    "t": 1561532771,
                    "v": 39
                },
                "3": {
                    "t": 1561532771,
                    "v": 1
                },
                "4": {
                    "t": 1561532771,
                    "v": 2713.7
                },
                "61": {
                    "t": 1561532771,
                    "v": -112
                },
                "62": {
                    "t": 1561532771,
                    "v": 1.28
                }
            },
            "name": "Sensor 91",
            "type": 4,
            "variant": 8
        },
        "4194566": {
            "metrics": {
                "1": {
                    "t": 1556111758,
                    "v": 26.35
                },
                "2": {
                    "t": 1556111758,
                    "v": 9
                },
                "3": {
                    "t": 1556111758,
                    "v": 0
                },
                "4": {
                    "t": 1556111758,
                    "v": 2290.2
                },
                "61": {
                    "t": 1556111758,
                    "v": -80
                },
                "62": {
                    "t": 1556111758,
                    "v": 1.36
                }
            },
            "name": "Sensor 92",
            "type": 4,
            "variant": 8
        },
        "4194674": {
            "metrics": {
                "1": {
                    "t": 1565084229,
                    "v": 25.5
                },
                "2": {
                    "t": 1565084229,
                    "v": 42
                },
                "3": {
                    "t": 1565084229,
                    "v": 175
                },
                "4": {
                    "t": 1565084229,
                    "v": 756.2
                },
                "61": {
                    "t": 1565084229,
                    "v": -61
                },
                "62": {
                    "t": 1565084229,
                    "v": 0.92
                }
            },
            "name": "Sensor 93",
            "type": 4,
            "variant": 8
        },
        "4194675": {
            "metrics": {
                "1": {
                    "t": 1565115087,
                    "v": 22.8
                },
                "2": {
                    "t": 1565115087,
                    "v": 46
                },
                "3": {
                    "t": 1565115087,
                    "v": 741
                },
                "4": {
                    "t": 1565115087,
                    "v": 755.3
                },
                "61": {
                    "t": 1565115087,
                    "v": -94
                },
                "62": {
                    "t": 1565115087,
                    "v": 3
                }
            },
            "name": "Sensor 94",
            "type": 4,
            "variant": 8
        },
        "4194676": {
            "metrics": {
                "1": {
                    "t": 156392528590,
                    "v": 502
                },
                "2": {
                    "t": 1564650895,
                    "v": 46
                },
                "3": {
                    "t": 1564650895,
                    "v": 625
                },
                "4": {
                    "t": 1564650895,
                    "v": 756.9
                },
                "61": {
                    "t": 1564650895,
                    "v": -48
                },
                "62": {
                    "t": 1564650895,
                    "v": 2.9
                }
            },
            "name": "",
            "type": 4,
            "variant": 8
        },
        "4194678": {
            "metrics": {
                "1": {
                    "t": 1565115389,
                    "v": 0
                },
                "2": {
                    "t": 1565115389,
                    "v": 0
                },
                "3": {
                    "t": 1565115389,
                    "v": 650
                },
                "4": {
                    "t": 1565115389,
                    "v": 0
                },
                "61": {
                    "t": 1565115389,
                    "v": -56
                },
                "62": {
                    "t": 1565115389,
                    "v": 2.32
                }
            },
            "name": "",
            "type": 4,
            "variant": 8
        },
        "4194679": {
            "metrics": {
                "1": {
                    "t": 1562845770,
                    "v": 24.65
                },
                "2": {
                    "t": 1562845770,
                    "v": 44
                },
                "3": {
                    "t": 1562845770,
                    "v": 1120
                },
                "4": {
                    "t": 1562845770,
                    "v": 754.7
                },
                "61": {
                    "t": 1562845770,
                    "v": -79
                },
                "62": {
                    "t": 1562845770,
                    "v": 1.6
                }
            },
            "name": "Sensor 95",
            "type": 4,
            "variant": 8
        },
        "5242879": {
            "metrics": {
                "1": {
                    "t": 1565115344,
                    "v": 24.45
                },
                "2": {
                    "t": 1565115344,
                    "v": 49
                },
                "3": {
                    "t": 1565115344,
                    "v": 662
                },
                "4": {
                    "t": 1565115344,
                    "v": 754.4
                },
                "61": {
                    "t": 1565115344,
                    "v": -53
                },
                "62": {
                    "t": 1565115344,
                    "v": 1.44
                }
            },
            "name": "Sensor 96",
            "type": 4,
            "variant": 3
        },
        "5242881": {
            "metrics": {
                "6": {
                    "t": 1553685920,
                    "v": 0
                },
                "61": {
                    "t": 1553685920,
                    "v": -58
                },
                "62": {
                    "t": 1553685920,
                    "v": 1.48
                }
            },
            "name": "",
            "type": 5,
            "variant": 2
        },
        "5242882": {
            "metrics": {

            },
            "name": "",
            "type": 5,
            "variant": 1
        },
        "5242897": {
            "metrics": {
                "5": {
                    "t": 1551971378,
                    "v": 0
                },
                "61": {
                    "t": 1551971378,
                    "v": -54
                },
                "62": {
                    "t": 1551971378,
                    "v": 1.34
                }
            },
            "name": "",
            "type": 5,
            "variant": 1
        },
        "5242901": {
            "metrics": {
                "5": {
                    "t": 1565115374,
                    "v": 0
                },
                "61": {
                    "t": 1565115374,
                    "v": -54
                },
                "62": {
                    "t": 1565115374,
                    "v": 1.1
                }
            },
            "name": "",
            "type": 5,
            "variant": 1
        },
        "5242925": {
            "metrics": {
                "61": {
                    "t": 1539179511,
                    "v": -42
                },
                "62": {
                    "t": 1539179511,
                    "v": 1.26
                },
                "7": {
                    "t": 1539179511,
                    "v": -26.102
                }
            },
            "name": "",
            "type": 5,
            "variant": 3
        },
        "5242944": {
            "metrics": {

            },
            "name": "",
            "type": 5,
            "variant": 3
        },
        "5242945": {
            "metrics": {
                "61": {
                    "t": 1533647886,
                    "v": -82
                },
                "62": {
                    "t": 1533647886,
                    "v": 1.44
                },
                "7": {
                    "t": 1533647886,
                    "v": -0.114
                }
            },
            "name": "",
            "type": 5,
            "variant": 3
        },
        "5243666": {
            "metrics": {
                "13": {
                    "t": 1564647430,
                    "v": 2
                },
                "61": {
                    "t": 1564650853,
                    "v": -45
                },
                "62": {
                    "t": 1564650853,
                    "v": 1.48
                }
            },
            "name": "Sensor 99",
            "type": 5,
            "variant": 8
        },
        "5243671": {
            "metrics": {
                "13": {
                    "t": 1561464937,
                    "v": 2
                },
                "61": {
                    "t": 1561464937,
                    "v": -47
                },
                "62": {
                    "t": 1561464937,
                    "v": 1.3
                }
            },
            "name": "",
            "type": 5,
            "variant": 8
        },
        "5243672": {
            "metrics": {
                "13": {
                    "t": 1562845524,
                    "v": 3
                },
                "61": {
                    "t": 1562845524,
                    "v": -71
                },
                "62": {
                    "t": 1562845524,
                    "v": 1.26
                }
            },
            "name": "",
            "type": 5,
            "variant": 8
        },
        "6291459": {
            "metrics": {
                "12": {
                    "t": 1540277441,
                    "v": 32
                },
                "61": {
                    "t": 1540277441,
                    "v": -101
                },
                "62": {
                    "t": 1540277441,
                    "v": 1.28
                }
            },
            "name": "",
            "type": 6,
            "variant": 2
        },
        "6291473": {
            "metrics": {

            },
            "name": "",
            "type": 6,
            "variant": 1
        },
        "6291474": {
            "metrics": {
                "1": {
                    "t": 1562835384,
                    "v": 24.6
                },
                "10": {
                    "t": 1562835384,
                    "v": 0
                },
                "11": {
                    "t": 1562835384,
                    "v": 0
                },
                "61": {
                    "t": 1562835384,
                    "v": -49
                },
                "62": {
                    "t": 1562835384,
                    "v": 1.38
                },
                "8": {
                    "t": 1562835384,
                    "v": 0
                },
                "9": {
                    "t": 1562835384,
                    "v": 2.049
                }
            },
            "name": "",
            "type": 6,
            "variant": 1
        }
    }




    buildTable(sensorArray);

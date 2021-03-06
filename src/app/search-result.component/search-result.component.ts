import { Component } from '@angular/core';

@Component({
    selector: 'search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.css']
})

export class SearchResultComponent {
    private flightsMockData =
    {
        "currency": "USD",
        "results": [
            {
                "itineraries": [
                    {
                        "outbound": {
                            "flights": [
                                {
                                    "departs_at": "2015-10-15T06:15",
                                    "arrives_at": "2015-10-15T08:55",
                                    "origin": {
                                        "airport": "IST",
                                        "terminal": "I"
                                    },
                                    "destination": {
                                        "airport": "CDG",
                                        "terminal": "2E"
                                    },
                                    "marketing_airline": "AF",
                                    "operating_airline": "AF",
                                    "flight_number": "1391",
                                    "aircraft": "319",
                                    "booking_info": {
                                        "travel_class": "ECONOMY",
                                        "booking_code": "L",
                                        "seats_remaining": 9
                                    }
                                }, {
                                    "departs_at": "2015-10-15T10:35",
                                    "arrives_at": "2015-10-15T12:46",
                                    "origin": {
                                        "airport": "CDG",
                                        "terminal": "2E"
                                    },
                                    "destination": {
                                        "airport": "BOS",
                                        "terminal": "E"
                                    },
                                    "marketing_airline": "AF",
                                    "operating_airline": "DL",
                                    "flight_number": "3616",
                                    "aircraft": "75W",
                                    "booking_info": {
                                        "travel_class": "ECONOMY",
                                        "booking_code": "R",
                                        "seats_remaining": 9
                                    }
                                }
                            ]
                        },
                        "inbound": {
                            "flights": [
                                {
                                    "departs_at": "2015-10-21T19:25",
                                    "arrives_at": "2015-10-22T08:35",
                                    "origin": {
                                        "airport": "BOS",
                                        "terminal": "A"
                                    },
                                    "destination": {
                                        "airport": "CDG",
                                        "terminal": "2E"
                                    },
                                    "marketing_airline": "AF",
                                    "operating_airline": "DL",
                                    "flight_number": "3655",
                                    "aircraft": "75W",
                                    "booking_info": {
                                        "travel_class": "ECONOMY",
                                        "booking_code": "R",
                                        "seats_remaining": 6
                                    }
                                }, {
                                    "departs_at": "2015-10-22T10:00",
                                    "arrives_at": "2015-10-22T14:20",
                                    "origin": {
                                        "airport": "CDG",
                                        "terminal": "2E"
                                    },
                                    "destination": {
                                        "airport": "IST",
                                        "terminal": "I"
                                    },
                                    "marketing_airline": "AF",
                                    "operating_airline": "AF",
                                    "flight_number": "1590",
                                    "aircraft": "319",
                                    "booking_info": {
                                        "travel_class": "ECONOMY",
                                        "booking_code": "L",
                                        "seats_remaining": 9
                                    }
                                }
                            ]
                        }
                    }
                ],
                "fare": {
                    "total_price": "528.30",
                    "price_per_adult": {
                        "total_fare": "528.30",
                        "tax": "340.30"
                    },
                    "restrictions": {
                        "refundable": false,
                        "change_penalties": true
                    }
                }
            }, {
                "itineraries": [
                    {
                        "outbound": {
                            "flights": [
                                {
                                    "departs_at": "2015-10-15T06:00",
                                    "arrives_at": "2015-10-15T08:30",
                                    "origin": {
                                        "airport": "IST",
                                        "terminal": "I"
                                    },
                                    "destination": {
                                        "airport": "AMS"
                                    },
                                    "marketing_airline": "KL",
                                    "operating_airline": "KL",
                                    "flight_number": "1610",
                                    "aircraft": "73H",
                                    "booking_info": {
                                        "travel_class": "ECONOMY",
                                        "booking_code": "L",
                                        "seats_remaining": 9
                                    }
                                }, {
                                    "departs_at": "2015-10-15T10:35",
                                    "arrives_at": "2015-10-15T12:38",
                                    "origin": {
                                        "airport": "AMS"
                                    },
                                    "destination": {
                                        "airport": "BOS",
                                        "terminal": "E"
                                    },
                                    "marketing_airline": "KL",
                                    "operating_airline": "DL",
                                    "flight_number": "6031",
                                    "aircraft": "333",
                                    "booking_info": {
                                        "travel_class": "ECONOMY",
                                        "booking_code": "R",
                                        "seats_remaining": 9
                                    }
                                }
                            ]
                        },
                        "inbound": {
                            "flights": [
                                {
                                    "departs_at": "2015-10-21T21:29",
                                    "arrives_at": "2015-10-22T10:30",
                                    "origin": {
                                        "airport": "BOS",
                                        "terminal": "A"
                                    },
                                    "destination": {
                                        "airport": "AMS"
                                    },
                                    "marketing_airline": "KL",
                                    "operating_airline": "DL",
                                    "flight_number": "6016",
                                    "aircraft": "764",
                                    "booking_info": {
                                        "travel_class": "ECONOMY",
                                        "booking_code": "R",
                                        "seats_remaining": 9
                                    }
                                }, {
                                    "departs_at": "2015-10-22T11:25",
                                    "arrives_at": "2015-10-22T15:45",
                                    "origin": {
                                        "airport": "AMS"
                                    },
                                    "destination": {
                                        "airport": "IST",
                                        "terminal": "I"
                                    },
                                    "marketing_airline": "KL",
                                    "operating_airline": "KL",
                                    "flight_number": "1613",
                                    "aircraft": "73H",
                                    "booking_info": {
                                        "travel_class": "ECONOMY",
                                        "booking_code": "L",
                                        "seats_remaining": 9
                                    }
                                }
                            ]
                        }
                    }
                ],
                "fare": {
                    "total_price": "530.98",
                    "price_per_adult": {
                        "total_fare": "530.98",
                        "tax": "342.98"
                    },
                    "restrictions": {
                        "refundable": false,
                        "change_penalties": true
                    }
                }
            }, {
                "itineraries": [
                    {
                        "outbound": {
                            "flights": [
                                {
                                    "departs_at": "2015-10-15T13:25",
                                    "arrives_at": "2015-10-15T17:00",
                                    "origin": {
                                        "airport": "IST",
                                        "terminal": "I"
                                    },
                                    "destination": {
                                        "airport": "BOS",
                                        "terminal": "E"
                                    },
                                    "marketing_airline": "TK",
                                    "operating_airline": "TK",
                                    "flight_number": "81",
                                    "aircraft": "343",
                                    "booking_info": {
                                        "travel_class": "ECONOMY",
                                        "booking_code": "P",
                                        "seats_remaining": 9
                                    }
                                }
                            ]
                        },
                        "inbound": {
                            "flights": [
                                {
                                    "departs_at": "2015-10-21T23:45",
                                    "arrives_at": "2015-10-22T16:25",
                                    "origin": {
                                        "airport": "BOS",
                                        "terminal": "E"
                                    },
                                    "destination": {
                                        "airport": "IST",
                                        "terminal": "I"
                                    },
                                    "marketing_airline": "TK",
                                    "operating_airline": "TK",
                                    "flight_number": "82",
                                    "aircraft": "343",
                                    "booking_info": {
                                        "travel_class": "ECONOMY",
                                        "booking_code": "P",
                                        "seats_remaining": 9
                                    }
                                }
                            ]
                        }
                    }
                ],
                "fare": {
                    "total_price": "655.00",
                    "price_per_adult": {
                        "total_fare": "655.00",
                        "tax": "344.00"
                    },
                    "restrictions": {
                        "refundable": false,
                        "change_penalties": true
                    }
                }
            }
        ]
    }
}
import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Get Owned Numbers",
					"value": "Get Owned Numbers",
					"action": "List the numbers you own",
					"description": "Retrieve all the inbound numbers associated with your Vonage account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/numbers"
						}
					}
				},
				{
					"name": "Buy A Number",
					"value": "Buy A Number",
					"action": "Buy a number",
					"description": "Request to purchase a specific inbound number.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/number/buy"
						}
					}
				},
				{
					"name": "Cancel A Number",
					"value": "Cancel A Number",
					"action": "Cancel a number",
					"description": "Cancel your subscription for a specific inbound number.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/number/cancel"
						}
					}
				},
				{
					"name": "Get Available Numbers",
					"value": "Get Available Numbers",
					"action": "Search available numbers",
					"description": "Retrieve inbound numbers that are available for the specified country.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/number/search"
						}
					}
				},
				{
					"name": "Update A Number",
					"value": "Update A Number",
					"action": "Update a number",
					"description": "Change the behaviour of a number that you own.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/number/update"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /account/numbers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Owned Numbers"
					]
				}
			}
		},
		{
			"displayName": "Application ID",
			"name": "application_id",
			"description": "The Application that you want to return the numbers for.",
			"default": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "application_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Owned Numbers"
					]
				}
			}
		},
		{
			"displayName": "Has Application",
			"name": "has_application",
			"description": "Set this optional field to `true` to restrict your results to numbers\nassociated with an Application (any Application). Set to `false` to\nfind all numbers not associated with any Application. Omit the field\nto avoid filtering on whether or not the number is assigned to an\nApplication.\n",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "has_application",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Owned Numbers"
					]
				}
			}
		},
		{
			"displayName": "Country",
			"name": "country",
			"default": "GB",
			"type": "string",
			"description": "The two character country code in ISO 3166-1 alpha-2 format",
			"routing": {
				"send": {
					"type": "query",
					"property": "country",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Owned Numbers"
					]
				}
			}
		},
		{
			"displayName": "Pattern",
			"name": "pattern",
			"description": "The number pattern you want to search for. Use in conjunction with `search_pattern`.",
			"default": "12345",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pattern",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Owned Numbers"
					]
				}
			}
		},
		{
			"displayName": "Search Pattern",
			"name": "search_pattern",
			"description": "The strategy you want to use for matching:\n\n\n* `0` - Search for numbers that start with `pattern` (Note: all numbers are in E.164 format, so the starting pattern includes the country code, such as 1 for USA)\n* `1` - Search for numbers that contain `pattern`\n* `2` - Search for numbers that end with `pattern`\n",
			"default": 1,
			"type": "options",
			"options": [
				{
					"name": "0",
					"value": 0
				},
				{
					"name": "1",
					"value": 1
				},
				{
					"name": "2",
					"value": 2
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "search_pattern",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Owned Numbers"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"description": "Page size",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Owned Numbers"
					]
				}
			}
		},
		{
			"displayName": "Index",
			"name": "index",
			"description": "Page index",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "index",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Owned Numbers"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "You can find your API key in the [developer dashboard](https://dashboard.nexmo.com)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Owned Numbers"
					]
				}
			}
		},
		{
			"displayName": "API Secret",
			"name": "security_apisecret",
			"type": "string",
			"default": "",
			"description": "You can find your API secret in the [developer dashboard](https://dashboard.nexmo.com)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "api_secret",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Owned Numbers"
					]
				}
			}
		},
		{
			"displayName": "POST /number/buy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Buy A Number"
					]
				}
			}
		},
		{
			"displayName": "POST /number/buy<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Buy A Number"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "You can find your API key in the [developer dashboard](https://dashboard.nexmo.com)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Buy A Number"
					]
				}
			}
		},
		{
			"displayName": "API Secret",
			"name": "security_apisecret",
			"type": "string",
			"default": "",
			"description": "You can find your API secret in the [developer dashboard](https://dashboard.nexmo.com)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "api_secret",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Buy A Number"
					]
				}
			}
		},
		{
			"displayName": "POST /number/cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Cancel A Number"
					]
				}
			}
		},
		{
			"displayName": "POST /number/cancel<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Cancel A Number"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "You can find your API key in the [developer dashboard](https://dashboard.nexmo.com)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Cancel A Number"
					]
				}
			}
		},
		{
			"displayName": "API Secret",
			"name": "security_apisecret",
			"type": "string",
			"default": "",
			"description": "You can find your API secret in the [developer dashboard](https://dashboard.nexmo.com)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "api_secret",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Cancel A Number"
					]
				}
			}
		},
		{
			"displayName": "GET /number/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Available Numbers"
					]
				}
			}
		},
		{
			"displayName": "Country",
			"name": "country",
			"required": true,
			"description": "The two character country code to filter on (in ISO 3166-1 alpha-2 format)",
			"default": "GB",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "country",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Available Numbers"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Set this parameter to filter the type of number, such as mobile or landline",
			"default": "mobile-lvn",
			"type": "options",
			"options": [
				{
					"name": "Landline",
					"value": "landline"
				},
				{
					"name": "Mobile Lvn",
					"value": "mobile-lvn"
				},
				{
					"name": "Landline Toll Free",
					"value": "landline-toll-free"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Available Numbers"
					]
				}
			}
		},
		{
			"displayName": "Pattern",
			"name": "pattern",
			"description": "The number pattern you want to search for. Use in conjunction with `search_pattern`.",
			"default": "12345",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pattern",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Available Numbers"
					]
				}
			}
		},
		{
			"displayName": "Search Pattern",
			"name": "search_pattern",
			"description": "The strategy you want to use for matching:\n\n\n* `0` - Search for numbers that start with `pattern` (Note: all numbers are in E.164 format, so the starting pattern includes the country code, such as 1 for USA)\n* `1` - Search for numbers that contain `pattern`\n* `2` - Search for numbers that end with `pattern`\n",
			"default": 1,
			"type": "options",
			"options": [
				{
					"name": "0",
					"value": 0
				},
				{
					"name": "1",
					"value": 1
				},
				{
					"name": "2",
					"value": 2
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "search_pattern",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Available Numbers"
					]
				}
			}
		},
		{
			"displayName": "Features",
			"name": "features",
			"description": "Available features are `SMS`, `VOICE` and `MMS`. To look for numbers that support multiple features, use a comma-separated value: `SMS,MMS,VOICE`.",
			"default": "SMS",
			"type": "options",
			"options": [
				{
					"name": "SMS",
					"value": "SMS"
				},
				{
					"name": "VOICE",
					"value": "VOICE"
				},
				{
					"name": "SMS VOICE",
					"value": "SMS,VOICE"
				},
				{
					"name": "MMS",
					"value": "MMS"
				},
				{
					"name": "SMS MMS",
					"value": "SMS,MMS"
				},
				{
					"name": "VOICE MMS",
					"value": "VOICE,MMS"
				},
				{
					"name": "SMS MMS VOICE",
					"value": "SMS,MMS,VOICE"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "features",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Available Numbers"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"description": "Page size",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Available Numbers"
					]
				}
			}
		},
		{
			"displayName": "Index",
			"name": "index",
			"description": "Page index",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "index",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Available Numbers"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "You can find your API key in the [developer dashboard](https://dashboard.nexmo.com)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Available Numbers"
					]
				}
			}
		},
		{
			"displayName": "API Secret",
			"name": "security_apisecret",
			"type": "string",
			"default": "",
			"description": "You can find your API secret in the [developer dashboard](https://dashboard.nexmo.com)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "api_secret",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Available Numbers"
					]
				}
			}
		},
		{
			"displayName": "POST /number/update",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update A Number"
					]
				}
			}
		},
		{
			"displayName": "POST /number/update<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update A Number"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "You can find your API key in the [developer dashboard](https://dashboard.nexmo.com)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update A Number"
					]
				}
			}
		},
		{
			"displayName": "API Secret",
			"name": "security_apisecret",
			"type": "string",
			"default": "",
			"description": "You can find your API secret in the [developer dashboard](https://dashboard.nexmo.com)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "api_secret",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update A Number"
					]
				}
			}
		},
];

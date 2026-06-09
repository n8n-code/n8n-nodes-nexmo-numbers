import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { defaultDescription } from './resources/default';

export class NexmoNumbers implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Nexmo Numbers',
		name: 'N8nDevNexmoNumbers',
		icon: { light: 'file:./nexmo-numbers.svg', dark: 'file:./nexmo-numbers.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Numbers API enables you to manage your existing numbers and buy new virtual numbers for use with the Vonage APIs. Further information is here:',
		defaults: { name: 'Nexmo Numbers' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevNexmoNumbersApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...defaultDescription
		],
	};
}

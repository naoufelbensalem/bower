/**
 * @ngdoc
 * @name jsFcxReceipt
 *
 * @description
 * The service provides Receipt object
 * From LISA description https://connections.ncredinburgh.com/Content/CJSA/Specifications/CJSA-Core-Specification-2_0_1.pdf
 * 
 * ## Usage
 * Import library from JS script 
 * */
var CJSA_SERVICE_NAME = 'ncr.cjsa.Receipt';
var CJSA_SERVICE_VERSION = '1.0.0';

//Get Registry CJSA Object
export function getReceiptObject() {
	return Registry.get(CJSA_SERVICE_NAME,CJSA_SERVICE_VERSION);
}

//Get Registry CJSA services
export function getReceiptServices() {
	return Registry.get(CJSA_SERVICE_NAME).service;
}

//Get Registry Object with specific version
export function getSpecificVersionReceiptObject(version) {
	return Registry.get(CJSA_SERVICE_NAME,version);
}

/** Properties for Receipt CJSA Services
 * capabilities
 * status
 * print
 */

export function capabilities() {
	return getReceiptServices().capabilities;
}

export function status() {
	return getReceiptServices().status;
}

export function print(document, handler, alertTimeout, presentTimeout) {
	return getReceiptServices().print(document, handler, alertTimeout, presentTimeout);
}
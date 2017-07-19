/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

( function() {
	var crossContent='&#10006',
		emptyInputError='You have not provided any input',
		$newListItem,
		listDesc,
		$list=$('#to_do_list');
	var appendElement=(parent, child) =>parent.append(child)
	var createErrorElement=(error) => {
		var $errorLabel= $('<span></span>'),
			$appendErrorTo=$('#add_list_item');
		$errorLabel.html(error.message);
		$errorLabel.addClass('error');
		$appendErrorTo.after($errorLabel);
	}
	var createListItem=() =>new Promise(function(resolve,reject){
		$newListItem=$('<li></li>');
		listDesc=$('#to_do_input').val();
		if(listDesc!=='') {
			$newListItem.html(listDesc);
			resolve($newListItem);
		}
		else {
			const reason=new Error(emptyInputError);
			reject(reason);
		}
	})
	var createCrossIcon= () =>new Promise(function(resolve,reject){
		var $crossIcon=$('<span></span>');
		$crossIcon.html(crossContent);
		resolve($crossIcon);
	})
	function bindEvents() {
		$list.on('click','li',function(){
			$(this).toggleClass('completed');
		});
		$list.on('click','span',function(){
			$(this).parent().remove();
		});
		$('#add_list_item').on('click', function(){
			$('.error').remove();
			createListItem()
			.then((listItem)=> appendElement($list,listItem))
			.then(createCrossIcon)
			.then((crossIcon)=> appendElement($newListItem,crossIcon))
			.catch(createErrorElement);			
		})
	}
	var init=()=>bindEvents();
	init();
})();

/***/ })
/******/ ]);
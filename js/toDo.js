'use strict';
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
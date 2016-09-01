var app =
webpackJsonp_name_([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Model = __webpack_require__(1);

	var _Model2 = _interopRequireDefault(_Model);

	var _View = __webpack_require__(2);

	var _View2 = _interopRequireDefault(_View);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Авторизация пользователя
	// Закрытие окошка
	// Пользователь добавляется в список
	// Обновляется информация о пользователе
	//
	// При клике на отправить,
	// берётся инфо о пользователе, сообщение и время,
	// добавляется новый элемент в чатбокс


	var user = {
	  messages: []
	};

	sign_form.addEventListener('submit', function (e) {
	  e.preventDefault();
	  user.name = this.elements['sign-name'].value;
	  user.nick = this.elements['sign-nick'].value;
	  this.classList.add('hidden');

	  user_info.innerHTML = _View2.default.render('userInfo', {
	    name: user.name
	  });

	  var userEl = document.createElement('div');
	  userEl.innerHTML = _View2.default.render('userList', {
	    name: user.name
	  });
	  user_list.appendChild(userEl.firstElementChild);
	});

	chat_form.addEventListener('submit', function (e) {
	  e.preventDefault();

	  var message = getMessage(this);
	  user.messages.push(message);

	  var messageEl = document.createElement('div');
	  messageEl.innerHTML = _View2.default.render('message', {
	    name: user.name,
	    message: message
	  });
	  chat_box.appendChild(messageEl);
	});

	function getMessage(form) {
	  var now = new Date();
	  var message = {
	    date: now.toLocaleString('ru-RU', {
	      month: 'long',
	      day: 'numeric'
	    }),
	    time: now.toLocaleString('ru-RU', {
	      hour: 'numeric',
	      minute: 'numeric'
	    }),
	    text: form.elements['chat-message'].value
	  };
	  form.elements['chat-message'].value = '';
	  return message;
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
		exports.default = {};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  render: function render(templateName, model) {
	    templateName = templateName + 'Tmpl';

	    var templateEl = document.getElementById(templateName);
	    var templateSrc = templateEl.innerHTML;
	    var renderFn = Handlebars.compile(templateSrc);

	    return renderFn(model);
	  }
		};

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLyIsIndlYnBhY2s6Ly8vc3JjL21vZHVsZXMvTW9kZWwuanMiLCJ3ZWJwYWNrOi8vL3NyYy9tb2R1bGVzL1ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGVsIGZyb20gJy4vbW9kdWxlcy9Nb2RlbCc7XHJcbmltcG9ydCBWaWV3IGZyb20gJy4vbW9kdWxlcy9WaWV3JztcclxuXHJcblxyXG4vLyDQkNCy0YLQvtGA0LjQt9Cw0YbQuNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG4vLyDQl9Cw0LrRgNGL0YLQuNC1INC+0LrQvtGI0LrQsFxyXG4vLyDQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0LTQvtCx0LDQstC70Y/QtdGC0YHRjyDQsiDRgdC/0LjRgdC+0LpcclxuLy8g0J7QsdC90L7QstC70Y/QtdGC0YHRjyDQuNC90YTQvtGA0LzQsNGG0LjRjyDQviDQv9C+0LvRjNC30L7QstCw0YLQtdC70LVcclxuLy9cclxuLy8g0J/RgNC4INC60LvQuNC60LUg0L3QsCDQvtGC0L/RgNCw0LLQuNGC0YwsXHJcbi8vINCx0LXRgNGR0YLRgdGPINC40L3RhNC+INC+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtSwg0YHQvtC+0LHRidC10L3QuNC1INC4INCy0YDQtdC80Y8sXHJcbi8vINC00L7QsdCw0LLQu9GP0LXRgtGB0Y8g0L3QvtCy0YvQuSDRjdC70LXQvNC10L3RgiDQsiDRh9Cw0YLQsdC+0LrRgVxyXG5cclxuXHJcbmxldCB1c2VyID0ge1xyXG4gIG1lc3NhZ2VzOiBbXVxyXG59XHJcblxyXG5zaWduX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSl7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHVzZXIubmFtZSA9IHRoaXMuZWxlbWVudHNbJ3NpZ24tbmFtZSddLnZhbHVlO1xyXG4gIHVzZXIubmljayA9IHRoaXMuZWxlbWVudHNbJ3NpZ24tbmljayddLnZhbHVlO1xyXG4gIHRoaXMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblxyXG4gIHVzZXJfaW5mby5pbm5lckhUTUwgPSBWaWV3LnJlbmRlcigndXNlckluZm8nLCB7XHJcbiAgICAgIG5hbWU6IHVzZXIubmFtZVxyXG4gIH0pO1xyXG5cclxuICBsZXQgdXNlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdXNlckVsLmlubmVySFRNTCA9IFZpZXcucmVuZGVyKCd1c2VyTGlzdCcsIHtcclxuICAgICAgbmFtZTogdXNlci5uYW1lXHJcbiAgfSk7XHJcbiAgdXNlcl9saXN0LmFwcGVuZENoaWxkKHVzZXJFbC5maXJzdEVsZW1lbnRDaGlsZCk7XHJcbn0pO1xyXG5cclxuXHJcbmNoYXRfZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKXtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGxldCBtZXNzYWdlID0gZ2V0TWVzc2FnZSh0aGlzKTtcclxuICB1c2VyLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XHJcblxyXG4gIGxldCBtZXNzYWdlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtZXNzYWdlRWwuaW5uZXJIVE1MID0gVmlldy5yZW5kZXIoJ21lc3NhZ2UnLCB7XHJcbiAgICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gIH0pO1xyXG4gIGNoYXRfYm94LmFwcGVuZENoaWxkKG1lc3NhZ2VFbCk7XHJcbn0pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldE1lc3NhZ2UoZm9ybSl7XHJcbiAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgbGV0IG1lc3NhZ2UgPSB7XHJcbiAgICAgIGRhdGU6IG5vdy50b0xvY2FsZVN0cmluZygncnUtUlUnLCB7XHJcbiAgICAgICAgbW9udGg6ICdsb25nJyxcclxuICAgICAgICBkYXk6ICdudW1lcmljJ1xyXG4gICAgICB9KSxcclxuICAgICAgdGltZTogbm93LnRvTG9jYWxlU3RyaW5nKCdydS1SVScsIHtcclxuICAgICAgICBob3VyOiAnbnVtZXJpYycsXHJcbiAgICAgICAgbWludXRlOiAnbnVtZXJpYydcclxuICAgICAgfSksXHJcbiAgICAgIHRleHQ6IGZvcm0uZWxlbWVudHNbJ2NoYXQtbWVzc2FnZSddLnZhbHVlXHJcbiAgfTtcclxuICBmb3JtLmVsZW1lbnRzWydjaGF0LW1lc3NhZ2UnXS52YWx1ZSA9ICcnO1xyXG4gIHJldHVybiBtZXNzYWdlO1xyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9hcHAuanNcbiAqKi8iLCJ1bmRlZmluZWRcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCB7XHJcblxyXG59O1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvbW9kdWxlcy9Nb2RlbC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgcmVuZGVyKHRlbXBsYXRlTmFtZSwgbW9kZWwpe1xuICAgIHRlbXBsYXRlTmFtZSA9IHRlbXBsYXRlTmFtZSArICdUbXBsJztcblxuICAgIGxldCB0ZW1wbGF0ZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGVtcGxhdGVOYW1lKTtcbiAgICBsZXQgdGVtcGxhdGVTcmMgPSB0ZW1wbGF0ZUVsLmlubmVySFRNTDtcbiAgICBsZXQgcmVuZGVyRm4gPSBIYW5kbGViYXJzLmNvbXBpbGUodGVtcGxhdGVTcmMpO1xuXG4gICAgcmV0dXJuIHJlbmRlckZuKG1vZGVsKTtcbiAgfVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9tb2R1bGVzL1ZpZXcuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0RBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQVRBO0FBV0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDakVBOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7OzsiLCJzb3VyY2VSb290IjoiIn0=
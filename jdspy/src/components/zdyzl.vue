Vue.directive('clickoutside',{			//自定义指令 clickoutside
	bind : function(el,binding,vnode){	//bind 只调用一次第一次绑定到元素时调用  执行函数 el表示所绑定的元素  binding 表示这个对象 vnode vue生成的虚拟节点
		function documentHandler (e) {	//
			if(el.contains(e.target)){	//监听 检测所绑定的元素里面是否包含了 点击时e.target出来的元素
				return false;			//如果包含就直接返回false
			}
			if(binding.expression){		//判断当前指令有没有写表达式  也就是 handleClose函数
				binding.value(e);		//执行这个 handleClose函数
			}
		}
		el._vueClickOutside_ = documentHandler;
		document.addEventListener('click',documentHandler);
	},
	unbind : function(el,binding){		//这个是用来移除事件监听的
		document.addEventListener('click',el._vueClickOutside_);
		delete el._vueClickOutside_;
	}
})
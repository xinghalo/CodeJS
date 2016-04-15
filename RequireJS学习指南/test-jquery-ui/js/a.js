define(function(require){
	var $ = require('jquery');
	require('jquery-ui');
	require('jquery-dataTables');
	
	var _test = $('#test');
	_test.selectmenu({
		width : 180,
		change : function(event, ui) {
			console.log('change');
		}
	});

	var tableColumns = [ {
		"className" : 'details-control',
		"orderable" : false,
		"data" : null,
		"defaultContent" : ''
	}, {
		"data" : "warning",
		"title" : ""
	}, {
		"data" : "timestampInfo.timestamp",
		"title" : "时间"
	}, {
		"data" : "rawEventHtml",
		"title" : "事件"
	} ];
	_dataTable = $('#table');
	_dataTable.dataTable(
		{
		"oLanguage" : {// 国际化
			"sZeroRecords" : "抱歉， 没有找到",
			"sInfoEmpty" : "没有数据",
			"sLengthMenu" : "每页显示 _MENU_ 条记录",
			"sInfoFiltered" : "(从 _MAX_ 条数据中检索)",
			"oPaginate" : {
				"sFirst" : "首页",
				"sPrevious" : "前一页",
				"sNext" : "后一页",
				"sLast" : "尾页"
			},
			"sZeroRecords" : "没有检索到数据",
			"sProcessing" : "正在加载"
		},
		info : false,
		bProcessing : true,// 显示加载
		pagingType : "simple_numbers",
		paging : true,
		searching : false,
		ordering : false,
		scrollY : 340,
		serverSide : true,
		pageLength : 1,
		lengthMenu : [ 20, 50, 100 ],
		columns : tableColumns
	});
	return {
		test:function(){
			_test.append($('<option>test1</option><option>test1</option>'));
			_test.selectmenu("refresh");
		}
	}
});
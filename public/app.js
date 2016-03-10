var addForage = function(event){
	console.log('added something');
	event.preventDefault();
	var name = $('#name').val();
	var comment = $('#comment').val();
	var $table = $('#forageTable');
	var blog = {};
		blog.name = name;
		blog.comment = comment;
		
		$.ajax({
			url: '/api/blog',
			method: "POST",
			data: blog,
		}).done(function(data){
			console.log("worked", data);

			$table.append('<tr id=' + data._id + '>\
				<td>' + data.name + '</td>\
				<td>' + data.comment + '</td>\
				</tr>'
				);

		})
		$('#name').val("");
		$('#comment').val("");

	}
	$("#publish").on("click", addBlog);

	var addBlog = function(event){
	console.log('added something');
	event.preventDefault();
	var name = $('#name').val();
	var comment = $('#comment').val();
	var $table = $('#blogTable');
	var blog = {};
		blog.name = name;
		blog.comment = comment;
		
		$.ajax({
			url: '/api/blog',
			method: "POST",
			data: blog,
		}).done(function(data){
			console.log("worked", data);

			$table.append('<tr id=' + data._id + '>\
				<td>' + data.name + '</td>\
				<td>' + data.comment + '</td>\
				</tr>'
				);

		})
		$('#name').val("");
		$('#comment').val("");

	}
	$("#publish").on("click", addBlog);
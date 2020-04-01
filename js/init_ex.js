var raph;
var paths;
var landing = {};

landing.src = 'https://russianbroadway.com/s1/files/image/alexandrinsky/alexandrinsky-hall-zones2.jpg';
landing.width = 473;
landing.height = 415;

var arr;
var mappoint_raphael;
var objs = {};
$(function(){
  init_scheme();
});

function init_scheme(){
    if(landing == undefined) return;


    const oldWidth = landing.width;
    const oldHeight = landing.height;
    const aspectRatio = oldWidth / oldHeight;
    const newWidth = $('#map').width();
    const newHeight = newWidth / aspectRatio;
    const oldToNewWidthRatio = oldWidth / newWidth;
    const oldToNewHeightRatio = oldHeight / newHeight;

    raph = Raphael('map', newWidth, newHeight);//,
        // attributes = {
        //     fill: hover_zone_color,
        //     'fill-opacity': '0',
        //     'stroke-opacity': '0',
        //      stroke: hover_zone_color,
        // };

        arr = new Array();

        raph.image(landing.src, 0, 0, newWidth, newHeight);

        const path = "M 256.60056,150.66484 H 239.3601 l -0.18538,13.71822 h 16.8697 z m 48.94068,-21.875 -5.00529,12.60592 -16.86971,-6.8591 5.0053,-12.23517 z m -11.49905,33.76023 -4.6535,12.19085 -16.45109,-6.55422 4.9812,-12.71519 z m 18.00353,9.49237 -6.46811,11.61222 -15.0747,-8.3894 6.33703,-12.06909 z m 16.20949,12.79198 -7.86507,10.61784 -13.23952,-10.74893 8.52049,-10.61783 z m 15.20579,14.81254 -9.56916,9.30699 -12.05977,-12.45302 9.70025,-8.91374 z M 216.89619,150.64619 h 17.24046 l 0.18538,13.71822 h -16.8697 z m -48.19916,-22.61653 5.37606,12.79131 16.12818,-6.11758 -5.19068,-12.79131 z m 10.75753,34.50176 4.6535,12.19085 16.45109,-6.55422 -4.9812,-12.71519 z m -18.74507,9.30699 7.20964,11.7976 15.07471,-8.3894 -7.07856,-11.14218 z m -15.46796,12.97736 7.86507,10.61784 13.23952,-10.74893 -8.52049,-10.61783 z m -15.20579,14.81254 9.56916,9.30699 12.05977,-12.45302 -9.70025,-8.91374 z m 43.65111,8.3894 22.15326,27.65881 -8.65157,8.12724 5.24338,4.58795 -5.63663,7.6029 -5.63663,-3.80145 -3.53928,7.07856 -31.9846,-16.25447 7.86507,-13.76386 7.73398,-9.96242 z m 125.84104,-0.39325 -22.28435,27.52772 8.65157,8.52049 -4.98121,3.53928 5.24338,7.6029 5.63663,-3.80145 4.06361,8.3894 31.72243,-16.64772 -7.07856,-12.5841 -9.96241,-12.45302 z m -94.77404,-10.61784 16.25447,33.16436 10.0935,-2.22844 10.74892,-0.13108 10.35567,1.96626 15.9923,-32.7711 -16.64772,-4.06362 -1.31084,4.85013 -1.31085,0.39325 -12.5841,-0.39325 -13.63278,0.7865 -1.83518,-5.76771 z m 42.17412,85.63109 v 63.58581 h 94.72987 v -6.85911 h 6.67373 v -57.09746 z m -120.49788,-0.37076 h 99.92055 v 64.14195 h -93.98835 v -7.04449 h -6.11759 z"

    var preObj = Raphael.pathToRelative(path);
    var firstX = preObj[0][1];
    var firstY = preObj[0][2];
    var newFirstX = firstX / oldToNewHeightRatio;
    var newFirstY = firstY / oldToNewWidthRatio;
    preObj[0][1] = newFirstX;
    preObj[0][2] = newFirstY;
    var obj = preObj.toString();

    console.log(obj)

    raph.path(obj);



    for (var country in paths) {

        var preObj = Raphael.pathToRelative(raph.path(paths[country].path));
        var firstX = preObj[0][1];
        var firstY = preObj[0][2];
        var newFirstX = firstX / oldToNewWidthRatio;
        var newFirstY = firstY / oldToNewHeightRatio;
        preObj[0][1] = newFirstX;
        preObj[0][2] = newFirstY;
        var obj = preObj.toString();
        obj.attr(attributes);
        arr[obj.id] = country;
        //obj.node.id="p"+paths[country].id;
        obj.mouseover(function(){
            over_(this);

        });
         obj.mouseout(function(){
        	out_(this);
        });

       obj.click(function(){
        	$('#b'+paths[arr[this.id]].id).find('.zonelist').prop('checked','checked').change();
			over_(this);
        });

        objs['pp'+paths[country].id] = obj;

    }
    $('.zoneb').mouseover(function(){
		if(objs['pp'+$(this).data('id')]) over_(objs['pp'+$(this).data('id')]);
	});
	$('.zoneb').mouseout(function(){
		if(!$(this).find('.zonelist').prop('checked')) {
			if(objs['pp'+$(this).data('id')]) out_(objs['pp'+$(this).data('id')]);
		}
	});

	$('.zoneb').click(function(){
		if($(this).find('.zonelist').prop('checked')) {
			if(objs['pp'+$(this).data('id')]) over_(objs['pp'+$(this).data('id')]);
		}
		$('.zonelist').each(function(){
			if(!$(this).prop('checked')) {
				if(objs['pp'+$(this).val()]) out_(objs['pp'+$(this).val()]);
			}
		});
	});

	$('.zonelist').change(function(){
		if($(this).prop('checked')) {
			$('.zonelist').each(function(){
				if(!$(this).prop('checked')) {
					if(objs['pp'+$(this).val()]) out_(objs['pp'+$(this).val()]);
				}
			});
			$('#z'+$(this).val()).prop('selected', 'selected');
			$('#zoneprice').change();
		}
	});

	$('.zonelist:first').prop('checked','checked');
	if(objs['pp'+$('.zonelist:first').val()]) over_(objs['pp'+$('.zonelist:first').val()]);
}

function reInitRaph() {
    const aspectRatio = landing.width / landing.height;
    const newWidth = $('#map').width();
    const newHeight = newWidth / aspectRatio;

    raph.clear();

    raph.setSize(newWidth, newHeight);

    arr = new Array();

    raph.image(landing.src, 0, 0, newWidth, newHeight);

    for (var country in paths) {

        var obj = Raphael.pathToRelative(raph.path(paths[country].path)).toString();
        obj.attr(attributes);
        arr[obj.id] = country;
        //obj.node.id="p"+paths[country].id;
        obj.mouseover(function(){
            over_(this);

        });
        obj.mouseout(function(){
            out_(this);
        });

        obj.click(function(){
            $('#b'+paths[arr[this.id]].id).find('.zonelist').prop('checked','checked').change();
            over_(this);
        });

        objs['pp'+paths[country].id] = obj;

    }
    $('.zoneb').mouseover(function(){
        if(objs['pp'+$(this).data('id')]) over_(objs['pp'+$(this).data('id')]);
    });
    $('.zoneb').mouseout(function(){
        if(!$(this).find('.zonelist').prop('checked')) {
            if(objs['pp'+$(this).data('id')]) out_(objs['pp'+$(this).data('id')]);
        }
    });

    $('.zoneb').click(function(){
        if($(this).find('.zonelist').prop('checked')) {
            if(objs['pp'+$(this).data('id')]) over_(objs['pp'+$(this).data('id')]);
        }
        $('.zonelist').each(function(){
            if(!$(this).prop('checked')) {
                if(objs['pp'+$(this).val()]) out_(objs['pp'+$(this).val()]);
            }
        });
    });

    $('.zonelist').change(function(){
        if($(this).prop('checked')) {
            $('.zonelist').each(function(){
                if(!$(this).prop('checked')) {
                    if(objs['pp'+$(this).val()]) out_(objs['pp'+$(this).val()]);
                }
            });
            $('#z'+$(this).val()).prop('selected', 'selected');
            $('#zoneprice').change();
        }
    });

    $('.zonelist:first').prop('checked','checked');
    if(objs['pp'+$('.zonelist:first').val()]) over_(objs['pp'+$('.zonelist:first').val()]);
}

function over_(obd)
{
	color = hover_color;
	if($('#b'+paths[arr[obd.id]].id).find('.zonelist').prop('checked')) {
		color = select_color;
		$('#b'+paths[arr[obd.id]].id).removeClass(hover_class_button).addClass(select_class_button);
	}
	else {
		$('#b'+paths[arr[obd.id]].id).removeClass(select_class_button).addClass(hover_class_button);
	}

   obd
    .animate({
        fill: color,
        'fill-opacity': '0.8',
        'stroke-opacity': '0.8'
    }, 1);

    var mappoint_raphael = obd.getBBox(0);
    $('#map').next('.point_raphael').remove();
    $('#map').after($('<div />').addClass('point_raphael'));

    info = '';

    info += paths[arr[obd.id]].name + ''

    $('.point_raphael')
        .html(info)
        .css({
        	position: 'absolute',
          	backgroundColor: tooltip_color,
            left: mappoint_raphael.x+(mappoint_raphael.width/2)+20,
            top: mappoint_raphael.y+(mappoint_raphael.height/2)+30
        }).show();
}

function out_(obd)
{
	if(!$('#b'+paths[arr[obd.id]].id).find('.zonelist').prop('checked')) {
		$('#b'+paths[arr[obd.id]].id).removeClass(hover_class_button).removeClass(select_class_button);
	    obd
	    .animate({
	        fill: '#ffffff',
	        'fill-opacity': '0',
	        'stroke-opacity': '0'
	    }, 1);

	    parent = $('.point_raphael');
	    parent.remove();
    }
}

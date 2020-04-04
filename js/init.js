var raph;
var paths;
var landing;
var arr;
var mappoint_raphael;
var objs = {};
const hover_zone_color = "#cab471";

$(function(){
    init_scheme();
});


function init_scheme(){
    if(landing == undefined) return;
    
    raph = Raphael('map', landing.width, landing.height),
        attributes = {
            fill: hover_zone_color,
            'fill-opacity': '0',
            'stroke-opacity': '0',
             stroke: hover_zone_color,
        };

        arr = new Array();

        raph.image(landing.src, 0, 0, landing.width, landing.height);

    for (var country in paths) {
        
        var obj = raph.path(paths[country].path);
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

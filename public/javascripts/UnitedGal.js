jQuery(document).ready(function(){

    jQuery("#gallery").unitegallery({
        tiles_space_between_cols: 15,
        lightbox_overlay_color:null,					//the color of the overlay. if null - will take from css
        lightbox_overlay_opacity:0.92,						//the opacity of the overlay. for compact type - 0.6
        tile_enable_textpanel: true,
        tile_textpanel_appear_type: "fade", 	//slide, fade - appear type of the textpanel on mouseover
        tile_textpanel_position:"inside_bottom", //inside_bottom, inside_top, inside_center, top, bottom the position of the textpanel
        tile_textpanel_title_font_size: 11,	 //textpanel title font size. if null - take from css
    });

});
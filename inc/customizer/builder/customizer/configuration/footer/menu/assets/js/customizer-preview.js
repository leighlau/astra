/**
 * This file adds some LIVE to the Customizer live preview. To leverage
 * this, set your custom settings to 'postMessage' and then add your handling
 * here. Your javascript should grab settings from customizer controls, and
 * then make any necessary changes to the page using jQuery.
 *
 * @package Astra
 * @since x.x.x
 */

( function( $ ) {

    var selector = '.footer-navigation .footer-nav-wrap';

    /**
     * Menu Layout CSS.
     */
    wp.customize( 'astra-settings[footer-menu-layout]', function( setting ) {
		setting.bind( function( layout ) {

			var dynamicStyle = '';

			if ( 'vertical' == layout ) {
				dynamicStyle = '.footer-nav-wrap #astra-footer-menu {';
				dynamicStyle += 'display: block';
				dynamicStyle += '} ';
            }

            if ( 'horizontal' == layout ) {
				dynamicStyle = '.footer-nav-wrap #astra-footer-menu {';
				dynamicStyle += 'display: flex';
				dynamicStyle += '} ';
			}

			astra_add_dynamic_css( 'footer-menu-layout', dynamicStyle );

		} );
	} );

    wp.customize( 'astra-settings[footer-menu-alignment]', function( value ) {
        value.bind( function( alignment ) {
            if( alignment.desktop != '' || alignment.tablet != '' || alignment.mobile != '' ) {
                var dynamicStyle = '';
                dynamicStyle += '.footer-widget-area[data-section="section-footer-menu"] .ast-nav-menu {';
                dynamicStyle += 'justify-content: ' + alignment['desktop'] + ';';
                dynamicStyle += '} ';

                dynamicStyle +=  '@media (max-width: 768px) {';
                dynamicStyle += '.footer-widget-area[data-section="section-footer-menu"] .ast-nav-menu {';
                dynamicStyle += 'justify-content: ' + alignment['tablet'] + ';';
                dynamicStyle += '} ';
                dynamicStyle += '} ';

                dynamicStyle +=  '@media (max-width: 544px) {';
                dynamicStyle += '.footer-widget-area[data-section="section-footer-menu"] .ast-nav-menu {';
                dynamicStyle += 'justify-content: ' + alignment['mobile'] + ';';
                dynamicStyle += '} ';
                dynamicStyle += '} ';

                astra_add_dynamic_css( 'footer-menu-alignment', dynamicStyle );
            }
        } );
    } );

    /**
     * Typography CSS.
     */
    astra_generate_outside_font_family_css(
        'astra-settings[footer-menu-font-family]',
        selector + ' .menu-item > .menu-link'
    );
    astra_css(
		'astra-settings[footer-menu-font-weight]',
		'font-weight',
		selector + ' .menu-item > .menu-link'
	);
    astra_css(
        'astra-settings[footer-menu-text-transform]',
        'text-transform',
        selector + ' .menu-item > .menu-link'
    );
    astra_responsive_font_size(
        'astra-settings[footer-menu-font-size]',
        selector + ' .menu-item > .menu-link'
    );
    astra_css(
        'astra-settings[footer-menu-line-height]',
        'line-height',
        selector + ' .menu-item > .menu-link'
    );
    astra_css(
        'astra-settings[footer-menu-letter-spacing]',
        'letter-spacing',
        selector + ' .menu-item > .menu-link',
        'px'
    );

    /**
     * Menu - Colors
     */
    astra_color_responsive_css(
        'astra-footer-menu-preview',
        'astra-settings[footer-menu-color-responsive]',
        'color',
        selector + ' .menu-item > .menu-link'
    );

    // Menu - Hover Color
    astra_color_responsive_css(
        'astra-footer-menu-preview',
        'astra-settings[footer-menu-h-color-responsive]',
        'color',
        selector + ' .menu-item:hover > .menu-link'
    );

    // Menu - Active Color
    astra_color_responsive_css(
        'astra-footer-menu-preview',
        'astra-settings[footer-menu-a-color-responsive]',
        'color',
        selector + ' .menu-item.current-menu-item > .menu-link'
    );

    // Responsive BG styles > Footer Menu.
	astra_apply_responsive_background_css( 'astra-settings[footer-menu-bg-obj-responsive]', selector, 'desktop' );
	astra_apply_responsive_background_css( 'astra-settings[footer-menu-bg-obj-responsive]', selector, 'tablet' );
	astra_apply_responsive_background_css( 'astra-settings[footer-menu-bg-obj-responsive]', selector, 'mobile' );

    // Menu - Hover Background
    astra_color_responsive_css(
        'astra-footer-menu-preview',
        'astra-settings[footer-menu-h-bg-color-responsive]',
        'background',
        selector + ' .menu-item:hover > .menu-link'
    );

    // Menu - Active Background
    astra_color_responsive_css(
        'astra-footer-menu-preview',
        'astra-settings[footer-menu-a-bg-color-responsive]',
        'background',
        selector + ' .menu-item.current-menu-item > .menu-link'
    );

    /**
     * Spacing CSS.
     */
    wp.customize( 'astra-settings[footer-menu-spacing]', function( value ) {
        value.bind( function( padding ) {
            if(
                padding.desktop.bottom != '' || padding.desktop.top != '' || padding.desktop.left != '' || padding.desktop.right != '' ||
                padding.tablet.bottom != '' || padding.tablet.top != '' || padding.tablet.left != '' || padding.tablet.right != '' ||
                padding.mobile.bottom != '' || padding.mobile.top != '' || padding.mobile.left != '' || padding.mobile.right != ''
            ) {
                var dynamicStyle = '';
                dynamicStyle += selector + ' .menu-item > .menu-link {';
                dynamicStyle += 'padding-left: ' + padding['desktop']['left'] + padding['desktop-unit'] + ';';
                dynamicStyle += 'padding-right: ' + padding['desktop']['right'] + padding['desktop-unit'] + ';';
                dynamicStyle += 'padding-top: ' + padding['desktop']['top'] + padding['desktop-unit'] + ';';
                dynamicStyle += 'padding-bottom: ' + padding['desktop']['bottom'] + padding['desktop-unit'] + ';';
                dynamicStyle += '} ';

                dynamicStyle +=  '@media (max-width: 768px) {';
                dynamicStyle += selector + ' .menu-item > .menu-link {';
                dynamicStyle += 'padding-left: ' + padding['tablet']['left'] + padding['tablet-unit'] + ';';
                dynamicStyle += 'padding-right: ' + padding['tablet']['right'] + padding['tablet-unit'] + ';';
                dynamicStyle += 'padding-top: ' + padding['tablet']['top'] + padding['tablet-unit'] + ';';
                dynamicStyle += 'padding-bottom: ' + padding['tablet']['bottom'] + padding['tablet-unit'] + ';';
                dynamicStyle += '} ';
                dynamicStyle += '} ';

                dynamicStyle +=  '@media (max-width: 544px) {';
                dynamicStyle += selector + ' .menu-item > .menu-link {';
                dynamicStyle += 'padding-left: ' + padding['mobile']['left'] + padding['mobile-unit'] + ';';
                dynamicStyle += 'padding-right: ' + padding['mobile']['right'] + padding['mobile-unit'] + ';';
                dynamicStyle += 'padding-top: ' + padding['mobile']['top'] + padding['mobile-unit'] + ';';
                dynamicStyle += 'padding-bottom: ' + padding['mobile']['bottom'] + padding['mobile-unit'] + ';';
                dynamicStyle += '} ';
                dynamicStyle += '} ';

                astra_add_dynamic_css( 'footer-menu-spacing', dynamicStyle );
            }
        } );
    } );

    // Margin.
    wp.customize( 'astra-settings[section-footer-menu-margin]', function( value ) {
        value.bind( function( margin ) {
            if(
                margin.desktop.bottom != '' || margin.desktop.top != '' || margin.desktop.left != '' || margin.desktop.right != '' ||
                margin.tablet.bottom != '' || margin.tablet.top != '' || margin.tablet.left != '' || margin.tablet.right != '' ||
                margin.mobile.bottom != '' || margin.mobile.top != '' || margin.mobile.left != '' || margin.mobile.right != ''
            ) {
                var dynamicStyle = '';
                dynamicStyle += selector + ' {';
                dynamicStyle += 'margin-left: ' + margin['desktop']['left'] + margin['desktop-unit'] + ';';
                dynamicStyle += 'margin-right: ' + margin['desktop']['right'] + margin['desktop-unit'] + ';';
                dynamicStyle += 'margin-top: ' + margin['desktop']['top'] + margin['desktop-unit'] + ';';
                dynamicStyle += 'margin-bottom: ' + margin['desktop']['bottom'] + margin['desktop-unit'] + ';';
                dynamicStyle += '} ';

                dynamicStyle +=  '@media (max-width: 768px) {';
                dynamicStyle += selector + ' {';
                dynamicStyle += 'margin-left: ' + margin['tablet']['left'] + margin['tablet-unit'] + ';';
                dynamicStyle += 'margin-right: ' + margin['tablet']['right'] + margin['tablet-unit'] + ';';
                dynamicStyle += 'margin-top: ' + margin['tablet']['top'] + margin['desktop-unit'] + ';';
                dynamicStyle += 'margin-bottom: ' + margin['tablet']['bottom'] + margin['desktop-unit'] + ';';
                dynamicStyle += '} ';
                dynamicStyle += '} ';

                dynamicStyle +=  '@media (max-width: 544px) {';
                dynamicStyle += selector + ' {';
                dynamicStyle += 'margin-left: ' + margin['mobile']['left'] + margin['mobile-unit'] + ';';
                dynamicStyle += 'margin-right: ' + margin['mobile']['right'] + margin['mobile-unit'] + ';';
                dynamicStyle += 'margin-top: ' + margin['mobile']['top'] + margin['desktop-unit'] + ';';
                dynamicStyle += 'margin-bottom: ' + margin['mobile']['bottom'] + margin['desktop-unit'] + ';';
                dynamicStyle += '} ';
                dynamicStyle += '} ';
                astra_add_dynamic_css( section + '-footer-menu', dynamicStyle );
            }
        } );
    } );

} )( jQuery );

import { BaseControl } from './base/control';
import { headingControl } from './heading/control';
import { hiddenControl } from './hidden/control';
import { descriptionControl } from './description/control';
import { sortableControl } from './sortable/control';

wp.customize.controlConstructor['ast-heading'] = headingControl;
wp.customize.controlConstructor['ast-hidden'] = hiddenControl;
wp.customize.controlConstructor['ast-description'] = descriptionControl;
wp.customize.controlConstructor['ast-sortable'] = sortableControl;

window.addEventListener( 'load', () => {
    console.log('Testing Console.');
} );
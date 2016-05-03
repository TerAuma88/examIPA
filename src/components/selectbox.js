import {bindable, customElement} from 'aurelia-framework'

@customElement('selectbox')
export class SelectBox{
  @bindable options;
  @bindable selected;
}
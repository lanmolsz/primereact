import React, {Component} from 'react';
import {ColorPicker} from '../../components/colorpicker/ColorPicker';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../../components/codehighlight/CodeHighlight';

export class ColorPickerDemo extends Component {
        
    constructor() {
        super();
        this.state = {color1: null, color2: '1976D2'};
        this.onOverlayChange = this.onOverlayChange.bind(this);
        this.onInlineChange = this.onInlineChange.bind(this);
    }

    onInlineChange(e) {
        this.setState({color1: e.value});
    }

    onOverlayChange(e) {
        this.setState({color2: e.value});
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>ColorPicker</h1>
                        <p>ColorPicker is an input component to select a color.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Inline</h3>
                    <ColorPicker inline="true" onChange={this.onInlineChange.bind(this)}></ColorPicker>
                    <p style={{'marginTop':'.5em'}}>Selected Color: <span style={{'display':'inline-block','width':'32px','height':'32px','verticalAlign':'middle','backgroundColor': '#' + this.state.color1}}></span> {this.state.color1} </p>
                
                    <h3>Overlay</h3>
                    <ColorPicker value={this.state.color2} onChange={this.onOverlayChange}></ColorPicker>
                    <p style={{'marginTop':'.5em'}}>Selected Color: <span style={{'color':'#' + this.state.color2}}>{this.state.color2}</span></p> 
                </div>

                <ColorPickerDoc />
            </div>
        )
    }
}

class ColorPickerDoc extends Component {

    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {ColorPicker} from 'primereact/components/colorpicker/ColorPicker';

`}
</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>ColorPicker is used with onChange properties.</p>
                        
<CodeHighlight className="language-markup">
{`
<ColorPicker onChange={(e) => this.setState({value: e.value})}/>

`}
</CodeHighlight>

                        <h3>Formats</h3>
                        <p>Default color format to use in value binding is "hex" and other possible values are "rgb" and "hsb". Example below has 3 colorpickers having default values with different formats.</p>
                        
<CodeHighlight className="language-markup">
{`
<ColorPicker onChange={(e) => this.setState({value: e.value})}/>

<ColorPicker format="rgb" onChange={(e) => this.setState({value: e.value})}/>

<ColorPicker format="hsb" onChange={(e) => this.setState({value: e.value})}/>

`}
</CodeHighlight>


                        <h3>Attributes</h3>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Default</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>style</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Inline style of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>styleClass</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>inline</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Whether to display as an overlay or not.</td>
                                    </tr>
                                    <tr>
                                        <td>format</td>
                                        <td>string</td>
                                        <td>hex</td>
                                        <td>Format to use in value binding, supported formats are "hex", "rgb" and "hsb".</td>
                                    </tr>
                                    <tr>
                                        <td>appendTo</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element.</td>
                                    </tr>
                                    <tr>
                                        <td>tabindex</td>
                                        <td>number</td>
                                        <td>null</td>
                                        <td>Index of the element in tabbing order.</td>
                                    </tr>
                                    <tr>
                                        <td>disabled</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When present, it specifies that the component should be disabled.</td>
                                    </tr>
                                    <tr>
                                        <td>inputId</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Identifier of the focus input to match a label defined for the dropdown.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h3>Events</h3>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Parameters</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>onChange</td>
                                        <td>event.originalEvent: Browser event<br />
                                            event.value: Selected color
                                        </td>
                                        <td>Callback to invoke when a color is selected.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Styling</h3>
                        <p>Following is the list of structural style classes</p>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Element</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ui-colorpicker</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-colorpicker-overlay</td>
                                        <td>Container element in overlay mode.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-colorpicker-preview </td>
                                        <td>Preview input in overlay mode.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-colorpicker-panel</td>
                                        <td>Panel element of the colorpicker.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-colorpicker-content</td>
                                        <td>Wrapper that contains color and hue sections.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-colorpicker-color-selector</td>
                                        <td>Color selector container.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-colorpicker-color</td>
                                        <td>Color element.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-colorpicker-color-handle</td>
                                        <td>Handle of the color element.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-colorpicker-hue</td>
                                        <td>Hue slider.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-colorpicker-hue-handle</td>
                                        <td>Handle of the hue slider.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    <TabPanel header="Source">
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/colorpicker" className="btn-viewsource" target="_blank">
                            <i className="fa fa-github"></i>
                            <span>View on GitHub</span>
                        </a>
<CodeHighlight className="language-javascript">
{`
export class ColorPickerDemo extends Component {
        
    constructor() {
        super();
        this.state = {color1: null, color2: '1976D2'};
        
        this.onOverlayChange = this.onOverlayChange.bind(this);
        this.onInlineChange = this.onInlineChange.bind(this);
    }

    onInlineChange(e) {
        this.setState({color1: e.value});
    }

    onOverlayChange(e) {
        this.setState({color2: e.value});
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>ColorPicker</h1>
                        <p>ColorPicker is an input component to select a color.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Inline</h3>
                    <ColorPicker inline="true" onChange={this.onInlineChange.bind(this)}></ColorPicker>
                    <p style={{'marginTop':'.5em'}}>Selected Color: <span style={{'display':'inline-block','width':'32px','height':'32px','verticalAlign':'middle','backgroundColor': '#' + this.state.color1}}></span> {this.state.color1} </p>
                
                    <h3>Overlay</h3>
                    <ColorPicker value={this.state.color2} onChange={this.onOverlayChange}></ColorPicker>
                    <p style={{'marginTop':'.5em'}}>Selected Color: <span style={{'color':'#' + this.state.color2}}>{this.state.color2}</span></p> 
                </div>

                <ColorPickerDoc />
            </div>
        )
    }
}

`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}

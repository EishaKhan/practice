import React, { Component } from "react";
import { SketchPicker } from "react-color";
import './Style.css'; 

class ColorPicker extends Component{
  constructor(props){
    super(props);
    this.state = {
      displayColorPicker: false,
      defaultColor: "#999",
      changeColor: "#999",
      color: {
        r: "0",
        g: "9",
        b: "153",
        a: "1"

      }
    }
  }

  onHandleShowColorPicker = () => {
    this.setState({ displayColorPicker: true });
  };

  onHandleCloseColorPicker = () => {
    this.setState( { displayColorPicker: false });
  };

  onChangeColorPicker = color => {
    this.setState({ color: color.rgb , changeColor: color.hex});
  };
  
  
  render(){
   
    return(
      
  

      <div className={"color-picker-container"}>
        <div
          style={{ backgroundColor: this.state.changeColor, width:"200px"}}
          className={"color-picker-color-background"}
        >
        <div className={"color-text-with-popup"}> 
        <input style={{border: '1px solid grey', marginLeft: "50px", paddingLeft: "190px"}}
        className={"color-picker-text"}
        type="text"
        name="color-picker-text"
        value={this.state.changeColor}
        onClick={ () => this.onHandleShowColorPicker() }
        />
        {this.state.displayColorPicker && (
            <div className={"color-picker-palette"}>
              <div className={"color-picker-cover"}
              onClick={() => this.onHandleCloseColorPicker() }
              
              />
              <SketchPicker 
              
              onChange={this.onChangeColorPicker } />

            </div>
        )}
     </div>
     </div>
     </div>

    );
  }
}





export default ColorPicker;


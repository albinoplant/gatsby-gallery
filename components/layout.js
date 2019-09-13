import React, {Component} from 'react';
import Header from './header';
import Main from './main';
import window from 'global';

export default class Layout extends Component{    
  constructor(props){
  super(props);
  
  this.state = {
      prevScrollPos: window.pageYOffset,
      visable: true,
  };

  } 
  componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
      const { prevScrollPos } = this.state;
      
      const currentScrollPos = window.pageYOffset;

      const visable = (currentScrollPos===0)?true:(prevScrollPos >= currentScrollPos);

      this.setState({
          prevScrollPos: currentScrollPos,
          visable,
      });

  };
  render(){

      return(
        <React.Fragment>
        <Header visable = {this.state.visable}/>
        <Main maxHeight={this.props.maxHeight} displayGrid={this.props.displayGrid}>{this.props.children}</Main>
      </React.Fragment>
      );
  }
}



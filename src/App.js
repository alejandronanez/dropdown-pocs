import React, { Component } from 'react';
import BasicAutocomplete from './components/BasicAutocomplete';

class App extends Component {
  state = {
    isDropdownOpen: false
  };

  handlselectedItem = element => {
    console.log(element);

    this.closeDropdown();
  }

  handleInputClick = () => {
    this.setState(prevState => ({
      isDropdownOpen: !prevState.isDropdownOpen
    }));
  }

  closeDropdown = () => this.setState({ isDropdownOpen: false })
  openDropdown = () => this.setState({ isDropdownOpen: true })

  render() {
    return (
      <div style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolore iure non sit ipsa quia debitis sed, numquam doloribus consequatur qui in deleniti cupiditate consectetur illum similique officia necessitatibus sapiente?
        <BasicAutocomplete
          items={['apple', 'orange', 'carrot']}
          onChange={this.handlselectedItem}
          onInputClick={this.handleInputClick}
          isOpen={this.state.isDropdownOpen}
          onClickOutside={this.closeDropdown}
          onInputFocus={this.openDropdown}
        />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolore iure non sit ipsa quia debitis sed, numquam doloribus consequatur qui in deleniti cupiditate consectetur illum similique officia necessitatibus sapiente?
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Downshift from 'downshift'
import ClickOutside from 'react-click-outside';

const style = {
  display: 'inline-block',
  position: 'relative'
};

const dropdownStyle = {
  position: 'absolute',
  minHeight: '300px',
  width: '100%'
};

class BasicAutocomplete extends Component {
  render() {
    const {
      items,
      onChange,
      onInputClick,
      onClickOutside,
      isOpen
    } = this.props;

    return (
      <ClickOutside
        style={{ display: 'inline-block' }}
        onClickOutside={onClickOutside}
      >
        <Downshift
          onChange={onChange}
          isOpen={isOpen}
        >
          {({
            getInputProps,
            getItemProps,
            isOpen,
            inputValue,
            selectedItem,
            highlightedIndex,
            openMenu
          }) => (
            <div style={style}>
              <input
                {
                  ...getInputProps({
                    placeholder: 'Favorite color ?',
                    onClick: openMenu
                  })
                }
              />
              <a href="#" onClick={() => openMenu()}>Do</a>
              {isOpen ? (
                <div style={dropdownStyle}>
                  {items
                    .filter(
                      i =>
                        !inputValue ||
                        i.toLowerCase().includes(inputValue.toLowerCase()),
                    )
                    .map((item, index) => (
                      <div
                        {...getItemProps({item})}
                        key={item}
                        style={{
                          backgroundColor:
                            highlightedIndex === index ? 'gray' : 'white',
                          fontWeight: selectedItem === item ? 'bold' : 'normal',
                        }}
                      >
                        {item}
                      </div>
                    ))}
                </div>
              ) : null}
            </div>
          )}
        </Downshift>
      </ClickOutside>
    );
  }
}

export default BasicAutocomplete;

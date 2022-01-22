import React, { Component } from 'react';
import Select from 'react-select'

export default class Filter extends Component {
  render() {
      const options=[
          {value: 'Иное', label: 'Иное'},
          {value: 'Управление', label: 'Управление'},
          {value: 'Отдел', label: 'Отдел'}
      ]
      const groupOptions = [
          {value: 'Alpha', label: 'Alpha'},
          {value: 'Beta', label: 'Beta'},
          {value: 'Sigma', label: 'Sigma'},
      ]
    return (
    <div className='select'>
        <Select 
        options={options}
        onChange={this.props.sortGov}
        isClearable
        isSearchable
        />
        <Select 
        options={groupOptions}
        onChange={this.props.sortGroup}
        isClearable
        isSearchable
        />
    </div>
    );
  }
}

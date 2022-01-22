import './App.css';
import React from 'react'
import data from './data.json'
import Filter from './components/Filter'


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      items: data.items,
      govType: "",
      groupType: ""
    }
  }
  sortGov = (e) => {
    if(!e){
      e = {
        value: '',
        label: ''
      }
      this.setState({govType: e.value, items: data.items})
    }else{
      this.setState({
        govType: e.value,
        items: data.items.filter(
          item => item.govType === e.value
        )
      })
    }
  }

  sortGroup = (e) => {
    if(!e){
      e = {
        value: '',
        label: ''
      }
      this.setState({groupType: e.value, items: data.items})
    }else{
      this.setState({
        groupType: e.value,
        items: data.items.filter(
          item => item.groupType === e.value
        )
      })
    }
  }

  render(){
    const items = this.state.items 

    return(
      <div className='app'>
        <header>
          Filter Application
        </header>
        <main>
          <Filter
          sortGov={this.sortGov}
          sortGroup={this.sortGroup}
          />
          <div className='products'>
            <h1>Items count: {items.length}</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Government Type</th>
                <th>Employee Number</th>
                <th>Grindset Type</th>
              </tr>
            </thead>
            <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td>{item.label}</td>
                <td className='td2'>{item.govType}</td>
                <td className='td2'>{item.employeeNumbers}</td>
                <td className='td2'>{item.groupType}</td>
              </tr>
            ))}
            </tbody>
          </table>
          </div>
        </main>
      </div>
    )
  }
}

export default App;

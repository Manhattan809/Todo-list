import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addItem , deleteItem , editItem } from './actions/index';
import List from './components/list';
import Input from './components/input';
import Button from './components/button';

class App extends Component {
    
    constructor(props)
    {
        super(props);
        this.state = {
        value:''
        };
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(e)
    {
        
        this.setState({value: e.target.value});
         
       
    }

    render() {
        return (
            <div className="container">

                <h1>Todo List</h1>
                
                <div className='add-item-to-list'>
                    <Input
                        name='item'
                        placeholder='New Item...'
                        value={this.state.value} 
                        onChange={this.handleChange}
                    />
                    <Button onClick={() => this.props.addItem(this.state.value)} type='add'>
                      Add
                    </Button>
                </div>

                <List />
            </div>
        );
    }
}

function bindActions(dispatch) {
    return {
        addItem: (val)=> dispatch(addItem(val)),
        deleteItem: (id)=>dispatch(deleteItem(id)),
        editItem: (id)=>dispatch(editItem(id))
  };
}

function mapStateToProps(state) {
 
  return {
    todolist: state.iList.List
  };
}



export default connect(mapStateToProps, bindActions)(App);

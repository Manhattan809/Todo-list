import React, { Component } from "react";
import './index.css';
import Button from '../button';

class List extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th width='66%'>Item</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.todolist.map((item)=>(
                        <tr key={item.id}>{item.name}
                            <td>Item</td>
                            <td>
                                <Button type='edit' onClick={""}>
                                    Edit
                                </Button>
                                <Button type='delete' onClick={()=>this.props.deleteItem(item.id)}>
                                    Delete
                                </Button> 
                            </td>
                        </tr>
                    ))};
                </tbody>
            </table>
        );
    }
}

export default List;

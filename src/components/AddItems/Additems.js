import React,{Component} from 'react';
import './AddItems.css'
class AddIt extends Component {
    state = {
        id:'',
        name:'',
        age:''
    }
    onhandelsubmit = (e) => {
        e.preventDefault();
       this.props.dataitems(this.state);
    }
    onhandelchange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
        
    render() {
        return (
            <div className='formadd1'>
                <h1>Add new Item</h1>
               <form action={onsubmit=this.onhandelsubmit} className='formadd2'>
                   <input type='text' placeholder="enter name" value={this.state.name} id="name" onChange={this.onhandelchange} />
                   <br/>
                   <input type='number' placeholder="enter age" value={this.state.age} id="age" onChange={this.onhandelchange} />
                    <br/>
                    <button>Add</button>
               </form>
            </div>
        )
    }
}
export default AddIt

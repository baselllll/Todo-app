import React,{Component} from 'react';
import AddIt  from './components/AddItems/Additems'; 
import ToddItems  from './components/ToddItems/ToddItems';
import './index.css';
class App extends Component {
    state = {
        items : [
            {id:1,name:'basel',age:44},
            {id:2,name:'osama',age:44},
            {id:3,name:'hema',age:44},
            {id:4,name:'ahmed',age:44}
        ]
    }

    
    deleteitem = (id) => {
        const itemrsretured = this.state.items.filter(item =>{
            return item.id !== id;
        });
        this.setState({
            items:itemrsretured
        })
    }
        additem = (item) =>{
            item.id=Math.random();
            let olditems = this.state.items;
            let newitems = olditems.push(item);
           this.setState({
               olditems:newitems
            })

        }
    
    render() {  
        return (
            <div>
                <div  className='container'>
                <ToddItems itemsdata={this.state.items} deletitems = {this.deleteitem} />
                </div>
                
                <div className='formaddition'>
                <AddIt dataitems = {this.additem} />
                </div>
            </div>
            
        )
    }
}
export default App
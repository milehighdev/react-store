import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import fishes from "../sample-fishes";
import Fish from "./Fish"


class App extends React.Component{
   state = {
     fishes: {},
     order: {}
   };
   
   addFish = fish => {
        //add state 
        //take a copy of the existing state
        //update state
        const fishes = {...this.state.fishes};
        fishes[`fish${Date.now()}`] = fish;
        this.setState ({
            fishes: fishes
        });
   }

   addToOrder = (key) =>{
      const order = {...this.state.order};
      order[key] = order[key] + 1 || 1; 
      this.setState({ order
      });
   }

   loadSampleFishes = () => {   
    this.setState({fishes: fishes});
   }

    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline = "Fresh Seafood Market"/>
                        <ul className="fishes">
                            {Object.keys(this.state.fishes).map(key => <Fish addToOrder={this.addToOrder} key={key} index={key} details={this.state.fishes[key]}/>)}
                        </ul>
                    <div>
                    </div>
                        <Inventory addFish={this.addFish} 
                        loadSampleFishes={this.loadSampleFishes}/>
                        <Order/>
              </div>
            </div>

        )

    }

}

export default App;
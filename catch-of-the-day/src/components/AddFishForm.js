import React from "react";
class AddFishForm extends React.Component{
  nameRef =  React.createRef();
  priceRef=  React.createRef();
  statusRef = React.createRef(); 
  descRef = React.createRef();
  imageRef = React.createRef();
  
    createFish = (e) =>{
    e.preventDefault(); 
    const fish = {
        name: this.nameRef.current.value,
        price: parseFloat(this.priceRef.current.value),
        status: this.statusRef.current.value,
        description: this.descRef.current.value,
        image: this.imageRef.current.value
    }
     this.props.addFish(fish);
     e.currentTarget.reset();
   };
   
    render(){
        return(
            <div>
                <form className="fishEdit" onSubmit={this.createFish}>
                <input ref={this.nameRef}name="name" type="text" placeholder="Name" />
                <input ref={this.priceRef} name="price" type="text" placeholder="Price"/>
                <select ref={this.statusRef} name="status">
                    <option value="avaliable">Fresh!</option>
                    <option value="unavaliable">Sold Out!</option>
                </select>
                <textarea ref={this.descRef} name="desc" type="text" placeholder="Desc"></textarea>
                <input ref={this.imageRef} name="image" type="text" placeholder="Image"/>
                <button type="submit">+ Add FIsh</button>
            </form>
            </div>
        )

    }

}
export default AddFishForm
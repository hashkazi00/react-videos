import React from 'react';

class SearchBar extends React.Component{

    state = {term:''};

    onInputChange = (e) => {
        this.setState({term: e.target.value});
    };
    onFormSubmit = (e) => {
        e.preventDefault();

        //TODO: Make sure we call callback received from parent component as a prop
        //Done to pass data up from child to parent

        this.props.onTermSubmit(this.state.term)
    };

    render(){ 
       return (
        <div className="ui segment custom-searchbar">
            <form className="ui form" onSubmit={this.onFormSubmit}> 
                <div className="field">
                    <label> Video Search</label>
                    <input type="text" value={this.state.term} onChange={this.onInputChange}/>
                </div>
            </form>
        </div>
       ) 
    }
}

export default SearchBar;
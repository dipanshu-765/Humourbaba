import React from 'react';

class SearchBar extends React.Component{
    state = { 
                term: ''
            };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        return(
            <div className="searchbar">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <input 
                        type="text" 
                        name="search" 
                        onChange={ e => this.setState({ term: e.target.value })}
                        value={this.state.term}
                        placeholder="Find your Fandom" 
                    >
                    </input>
                </form>
            </div>
        );
    }
}

export default SearchBar;
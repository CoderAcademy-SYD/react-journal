import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategorySelectionPage from "./pages/CategorySelectionPage";
import NewEntryPage from "./pages/NewEntryPage";

class App extends Component {
    state = {
        categories: ["food", "thoughts", "romance"],
        entries: []
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    onEntryFormSubmit = (entry) => {
        this.setState((state) => {
            return { entries: [...state.entries, entry]};
        });

        //!!!!!NEVER!!!!!!!
        //this.state.entries.push()
    }
    
    render() {
        const { categories } = this.state;

        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={HomePage} />
                        <Route 
                            exact path="/category" 
                            render={(props) => {
                                return <CategorySelectionPage {...props} categories={categories} />
                            }} />
                        <Route 
                            exact 
                            path="/entry/new/:index" 
                            render={(props) => {
                                return <NewEntryPage {...props} categories={categories} onEntryFormSubmit={this.onEntryFormSubmit} />
                            }} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
import React, { Component } from "react";
import { Link } from "react-router-dom";

class CategorySelectionPage extends Component {
    render() {
        const { categories } = this.props;

        return (
            <div>
                <h1>Category Selection</h1>
                <ul>
                    {categories.map((item, index) => {
                        return (
                            <li key={item}>
                                <Link to={`/entry/new/${index}`}>{item}</Link>
                            </li>
                        );
                    })}
                    <li >
                        <Link to={`/entry/new/9`}>Fake</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CategorySelectionPage;
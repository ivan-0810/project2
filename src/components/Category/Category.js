import React from 'react';
import CategoryCard from "../CategoryCard/CategoryCard";
import Banner from "../Banner/Banner";

class Category extends React.Component {
    render() {
        const category = {
            height: "100vh",
            position:"relative"
        }
        const styles = {
            display: "flex",
            justifyContent: "space-evenly",
            
        }
        const h1Style = {
            textAlign: "left",
            padding: "60px",
            margin: "0"
        }
        return (
            <div className="Category" style={category}>
                <h1 style={h1Style}>Choose Your Category</h1>
                <div style={styles}>  {this.props.category.map((el, key) => (
                    <CategoryCard
                        name={el.name}
                        key={el.id}
                        id={el.id}
                    />
                ))}</div>
            <Banner />
            </div>
        );
    }
}



export default Category;
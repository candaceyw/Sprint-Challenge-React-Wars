import React from "react";
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardHeader, CardColumns,
    UncontrolledCollapse, Jumbotron
  } from 'reactstrap';



const Character = ({posts, loading}) => {
 

    if(loading){
        return<h2> Loading...</h2>;
    }
    return  <ul className="list-group mb-4">
    {posts.map(post => (
         <div className="characterCard">
                 <Jumbotron>
        <h1 className="display-3">{post.name}</h1>
        <p className="lead">Born in {post.birth_year}. <br />
         Skin color is {post.skin_color}, <br />
         height is {post.height}, <br />
         and hair color is {post.hair_color}</p>
        <hr className="my-2" />
        <p className="CTA">Click the buttons below to see more characters!</p>
     
      </Jumbotron>
             
             </div>

))}
    </ul>

    
};

export default Character;
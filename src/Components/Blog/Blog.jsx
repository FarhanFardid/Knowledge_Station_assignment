import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="article-blog">
      <article className="article">
        <h2>1. Difference between Props and State</h2>
        <p>
          Props short form of 'properties' are passed to a child component from
          its parent component. They are read-only properties and cannot be
          modified by the component receiving them.Props are passed as the
          arguments to the component function and accessed using the props
          keyword.<br></br>
          On the other hand State is managed within a component. It can be
          updated by the component itself to keep track of information that
          might change over time. State is initialized using the useState hook.
        </p>
      </article>
      <article className="article">
        <h2>2. How does the useState work?</h2>
        <p>
        useState is a built-in React hook. It allows functional components to have state to keep track of the changes. It returns a stateful value and a function to update it. A initial value is given to the state counter. And it also contains a function that regularly updates the changing values of the counter. Syntax of useState hook is - const[value, setValues] = useState(0); 
        </p>

      </article>
      <article className="article">
        <h2>
            3. Purposes of useEffect other than fetching data?
        </h2>
        <p>
            Fetching data is the common use of the useEffect hook in react. It also has other purposes such as: <br></br>
            i. We can manage timer intervals within a component. <br></br>
            ii. we can update the document based on the state using useEffect. <br></br>
            iii.we can also handle the EventListener using the useEffect hook.  
        </p>
      </article>
      <article className="article">
        <h2>4. How does React work?</h2>
        <p>React is a JavaScript library for building user interfaces. It uses a component-based architecture to create reusable and composable UI elements. React starts with a single root component that represents the entire application. This component can contain other components, which can in turn also contain more components, creating a tree-like structure of components that make up the UI.</p>
      </article>
    </div>
  );
};

export default Blog;

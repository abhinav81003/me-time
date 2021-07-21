import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {date: "20 July, 2021", quote: "Today is a great day", content: "I strive for excellence today", id: 1},
        {date: "21 July, 2021", quote: "You are what you repeatedly do", content: "I strive for excellence today", id: 2},
        {date: "22 July, 2021", quote: "Your identity shapes your habits", content: "I strive for excellence today", id: 3}
    ]);

    
    return ( 
        <div className="home">
            <BlogList blogs = { blogs } title = "All Blogs" />
        </div>
     );
}
 
export default Home;
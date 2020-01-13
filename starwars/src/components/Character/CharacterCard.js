import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CharacterCard() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(2);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios
        .get(`https://swapi.co/api/people/`)
        console.log(res.data.results)
        setPosts(res.data.results);
        setLoading(false);
        }
        fetchPosts();
    }, []);
console.log(posts);


    return (
        <div>
            
        </div>
    )
}

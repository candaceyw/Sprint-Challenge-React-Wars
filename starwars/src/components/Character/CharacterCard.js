import React, { useState, useEffect } from "react";
import axios from "axios";
import '../StarWars.css';
import  Character from './Character';
import Pagination from '../Pagination'



export default function CharacterCard() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(1);

   const cCard = useEffect(() => {
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


// Get current posts
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
//Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container mt-5">
        <Character posts={currentPosts} loading={loading}/>
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>

        </div>
    )
}

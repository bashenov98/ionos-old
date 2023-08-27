import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';


export const News = () => {
    const [newsData, setNewsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const [propsdata, setPropsdata] = useState([]);

    useEffect(() => {
        (async () => {
            await axios.get('http://localhost:1337/api/newss?populate=*', {
                headers: { Authorization: 'bearer d0c2c9e6d1e901cb8c7d394af03f7095912bdc63c760c08a41f3e370594bd3a023701f1dac6ae7d4a72e45893371f9333094ecbe57bef695102d42864c700787f3951f929aefcbbb7799c344a0b8ba0d37b5bc0bd68cffe1d7926c59631a24fce5928c2f1765662e466a7fa03c6709e5fd4df774ded6e36d3cb17ebaeab43d79' }
            })
                .then(response => {
                    const news = []
                    const neew = {
                        id: 0,
                        header: "",
                        author: "",
                        date: ""
                    }
                    const data = response.data.data
                    data.forEach((n) => {
                        console.log(n.attributes)
                        neew.id = n.id
                        neew.header = n.attributes.Header
                        if (!n.attributes.Author.data) {
                            neew.author = (`${n.attributes.Author.data.attributes.Name} ${n.attributes.Author.data.attributes.Last_Name}`) || " "

                        }
                        neew.date = n.attributes.Publish_date
                        news.push(neew)
                    });
                    setNewsData(news)
                })
                .catch(error => {
                    console.log(error)
                    console.error('Error fetching data: ', error);
                });
        })();

    }, []);


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = newsData.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(newsData.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div id="team" className="text-center">
            <div className="container">
                {currentPosts.map((newsItem, index) => (
                    <div key={index}>
                        <h1>{newsItem.header}</h1>
                        <p>{new Date(newsItem.date).toLocaleString()}</p>
                        <p>{newsItem.author}</p>
                        <Link to={`/institute/news/${newsItem.id}`}>Read More</Link>
                    </div>
                ))}
                <div>
                    {pageNumbers.map(number => (
                        <button key={number} onClick={() => paginate(number)}>
                            {number}
                        </button>
                    ))}
                </div>
            </div>
        </div>);
}

export const NewsDetail = () => {
    const news = {
        id: 0,
        header: "",
        description: "",
        date: ""
    }
    const [newsDetail, setNewsDetail] = useState(news);
    const { id } = useParams();


    useEffect(() => {
        const fetchNewsDetail = async () => {
            await axios.get(`http://localhost:1337/api/newss/${id}?populate=*`, {
                headers: { Authorization: 'bearer d0c2c9e6d1e901cb8c7d394af03f7095912bdc63c760c08a41f3e370594bd3a023701f1dac6ae7d4a72e45893371f9333094ecbe57bef695102d42864c700787f3951f929aefcbbb7799c344a0b8ba0d37b5bc0bd68cffe1d7926c59631a24fce5928c2f1765662e466a7fa03c6709e5fd4df774ded6e36d3cb17ebaeab43d79' }
            })
                .then(response => {
                    const n = response.data.data
                    news.id = n.id
                    news.header = n.attributes.Header
                    news.description = n.attributes.Description
                    news.date = n.attributes.Publish_date
                    setNewsDetail(news)
                    console.log(newsDetail)
                })
                .catch(error => {
                    console.error('Error fetching data: ', error);
                });

        }

        fetchNewsDetail();
    }, [id]);


    return (
        <div id="team" className="text-center">
            <div className="container">
                <h1>{newsDetail.header}</h1>
                <p>{newsDetail.description}</p>
            </div>
        </div>
    );
}
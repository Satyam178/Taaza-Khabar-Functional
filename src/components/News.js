import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import Footer from './Footer';


const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)
  const [totalResults, setTotalResults] = useState(0)
 

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }




  const updateNews = async () => {

    props.setProgress(0);

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);

    props.setProgress(40);

    let parsedData = await data.json();

    props.setProgress(70);

    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false);


    console.log(parsedData);


    props.setProgress(100);


  }

  //First API call after page rendering

  useEffect(() => {

    document.title = `${capitalizeFirstLetter(props.category)} | Taaza Khabar `
    updateNews();
    // eslint-disable-next-line


  },[props.country])



  const fetchMoreData = async () => {

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)


  }




  return (
    <div className='container my-4'>

      {/* HeadLine */}
     

      <h2 style={{ margin: "100px 0px 30px 0px" }} className='text-center'>Taaza Khabar - Top HEADLINES | {capitalizeFirstLetter(props.category)}
       
      </h2>

      






      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
        endMessage={<div className='container-fluid'><Footer /></div>}

      >
        <div className="container-fluid my-4">

          <div className="row my-4">
            {
              articles.map((element, index) => {

                return <div className="col-md-4" key={index}>

                  <NewsItem category={props.category} source={element.source.name} author={element.author} date={element.publishedAt} title={element.title} description={element.description !== null ? element.description.slice(0, 100) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://play-lh.googleusercontent.com/_bHdu7hN3Pl0iT7Qh6jHab-MR2CDN5yY8TJRtv1cM_t3zZGtVfsPTgjYsB5B2MqBY7A"} newsUrl={element.url} />

                </div>
              })
            }
          </div>
        </div>
      </InfiniteScroll>









    </div>
  )
}
export default News


News.defaultProps = {

  country: 'in',
  pageSize: 5,
  category: "general",

}

News.propTypes = {
  name: PropTypes.string,
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}


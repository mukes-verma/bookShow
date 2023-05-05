import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    const [items, setItems] = useState([])

    const getData = async () => {
        const response = await fetch("https://api.tvmaze.com/search/shows?q=all")
        const result = await response.json()
        setItems(result)
    }

    useEffect(() => {
        getData()
    }, [])

    const data = {
        "score": 0.7021574,
        "show": {
            "id": 34653,
            "url": "https://www.tvmaze.com/shows/34653/all-american",
            "name": "All American",
            "type": "Scripted",
            "language": "English",
            "genres": [
                "Drama",
                "Sports"
            ],
            "status": "Running",
            "runtime": 60,
            "averageRuntime": 60,
            "premiered": "2018-10-10",
            "ended": null,
            "officialSite": "http://www.cwtv.com/shows/all-american/",
            "schedule": {
                "time": "20:00",
                "days": [
                    "Monday"
                ]
            },
            "rating": {
                "average": 6.2
            },
            "weight": 99,
            "network": {
                "id": 5,
                "name": "The CW",
                "country": {
                    "name": "United States",
                    "code": "US",
                    "timezone": "America/New_York"
                },
                "officialSite": "https://www.cwtv.com/"
            },
            "webChannel": null,
            "dvdCountry": null,
            "externals": {
                "tvrage": null,
                "thetvdb": 348200,
                "imdb": "tt7414406"
            },
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/425/1064746.jpg"
            },
            "summary": "<p>When a rising high school football player from South Central L.A. is recruited to play for Beverly Hills High, the wins, losses and struggles of two families from vastly different worlds — Compton and Beverly Hills — begin to collide. Inspired by the life of pro football player Spencer Paysinger.</p>",
            "updated": 1683032460,
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/shows/34653"
                },
                "previousepisode": {
                    "href": "https://api.tvmaze.com/episodes/2511902"
                },
                "nextepisode": {
                    "href": "https://api.tvmaze.com/episodes/2511904"
                }
            }
        }
    }


    return (
        <div>
            
            <div className="container-md my-5">
                
                <div className="row">
                <div><h3>Latest Movies</h3></div>
                    {items && items.map((item) => {
                        return <div key={item.score} className="card my-5 mx-3" style={{ width: "18rem" }}>
                            <img src={item.show.image == null ? "https://static.tvmaze.com/uploads/images/medium_portrait/75/189678.jpg" : item.show.image.medium} className="card-img-top" alt="image" />
                            <div className="card-body">
                                <h5 className="card-title">Rating</h5>
                                <p className="card-text">{item.show.rating.average?item.show.rating.average:"5.0"}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Movie Name: {item.show.name}</li>
                                <li className="list-group-item">Language: {item.show.language}</li>
                                <li className="list-group-item">Status: {item.show.status}</li>
                            </ul>
                            <div className="card-body">
                            <Link to={`/summary?data=${JSON.stringify(item)}`} class="btn btn-primary">Read More</Link>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home

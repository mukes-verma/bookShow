import React, { useRef, useState , useEffect} from 'react'
import { useSearchParams } from 'react-router-dom';

const Summary = () => {
    const [searchParams] = useSearchParams();
    const ref = useRef()
    const [state, setState] = useState(JSON.parse(searchParams.get('data')))

    useEffect(()=>{
        ref.current.innerHTML = state.show.summary
    },[])
    return (
        <div>
            <div className=" mb-3">
                <div className="row g-0">
                    <div className="col-md-4 my-2 mx-2">
                        <img src={state.show.image.original} className="img-fluid rounded-start" alt="image" />
                    </div>
                    <div className="col-md-7 ms-3 my-5">
                        <div className="card-body">
                            <h4>Series Info:</h4>
                            <dl className="row">
                                <dt className="col-sm-2">Movie Name: </dt>
                                <dd className="col-sm-10">{state.show.name}</dd>

                                <dt className="col-sm-2">Language:</dt>
                                <dd className="col-sm-10">{state.show.language}</dd>

                                <dt className="col-sm-2">Release Date:</dt>
                                <dd className="col-sm-10">{state.show.premiered}</dd>

                                <dt className="col-sm-2">Rating:</dt>
                                <dd className="col-sm-10">{state.show.rating.average}/10</dd>

                                <dt className="col-sm-2">Summary:</dt>
                                <dd ref={ref} className="col-sm-10">{state.show.summary}</dd>
                                
                            </dl>
                            
                        </div>
                        <a class="btn btn-primary mx-auto" href={`/summary/bookshow?data=${state.show.name}`} role="button">Book Your Show</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary
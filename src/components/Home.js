import styled from 'styled-components'
import Banner from "../components/Banner"
import requests from '../Requests'
import Row from "./Row"

const Home=(prop)=>{
    return (
        <div>
                 <Banner />
                 <Row
                 title="NETFLIX ORIGINALS"
                 fetchURL={requests.fetchNetflixOriginals}
                 isLargeRow
                  />
                 <Row
                  title="Trending Now"
                 fetchURL={requests.fetchTrending}
                  />
                    <Row
                  title="Action Movies"
                 fetchURL={requests.fetchActionMovies}
                  />

                   <Row 
                     title="Comedy Movies"
                 fetchURL={requests.fetchComedyMovies}
                   />
                 <Row
                  title="Romance Movies"
                 fetchURL={requests.fetchRomanceMovies}
                  />
                 <Row
                 title="Horror Movies"
                 fetchURL={requests.fetchHorrorMovies}
                  />
                 <Row
                  title="Documentaries"
                 fetchURL={requests.fetchDocumentaries}
                  />
                
        </div>         
    )
}

export default Home
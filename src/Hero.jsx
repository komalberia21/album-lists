import { useContext} from 'react'
import Card from "./components/card/Card";
import Layout from "./Layout";
import Navbar from "./components/navbar/Navbar"
import { CalcContext } from './context/CalcContext'
import "./App.css";

const Hero = () => {
    const { data,loading } = useContext(CalcContext);
    return (
    <Layout>
            <Navbar />
            {loading&&<div>Loading</div>}
            <div className='album-list'>
                {data && data.map((album, index) => (
                    <Card album={album} key={index} />
                ))}
            </div>
        </Layout>
  )
}

export default Hero
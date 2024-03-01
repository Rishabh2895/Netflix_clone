import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./Featured.scss"

const Featured = ({type}) => {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="Genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="crime">Crime</option>
                    <option value="comedy">Comedy</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="Sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1gouFVS7yaUOR9XrhH-qB4S7BoV5KwhbSKg&usqp=CAU" alt="" />
        
        <div className="info">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXFgKoWJoPD0u4RdqQqe09402pfh6ewqVKgA&usqp=CAU" alt="" />
        <span className="description">
        Consectetur sit sunt est amet enim aute aute consequat aliquip minim quis non. 
        Magna elit labore nostrud nulla ut deserunt non Lorem ex.
        Magna elit labore nostrud nulla ut deserunt non Lorem ex.
        </span>
        <div className="buttons">
            <button className="play">
                <PlayArrow/>
                <span>Play</span>
            </button>
            <button className="more">
                <InfoOutlined/>
                <span>Info</span>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Featured
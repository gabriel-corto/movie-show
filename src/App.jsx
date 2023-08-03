import { Cards } from "./components/Cards"
import { Header } from "./components/Header"
import { Movies } from "./components/Movies"

function App() {

    const MoviesData1 = [
        {imgUrl: "/images/avatar.jpg", imgAlt: "Avatar Movie Image"},
        {imgUrl: "/images/advanters.jpg", imgAlt: "Advanters Movie Image"},
        {imgUrl: "/images/fast-furios.jpg", imgAlt: "Fast Furios Movie Image"},
    ]
    const MoviesData2 = [
        {imgUrl: "/images/justice-league.jpg", imgAlt: "Justice League Movie Image"},
        {imgUrl: "/images/harry-potter.png", imgAlt: "Harry Potter Movie Image"},
        {imgUrl: "/images/avatar.jpg", imgAlt: "React Logo"},
    ]
    return (
      <div className="App">
        <Header />
        <Cards
          title="Movie to watch on Monday"
          subtitle="Get you favourit movies!"
        >
          {MoviesData1.map(function (item) {
            return <Movies imgUrl={item.imgUrl} imgAlt={item.imgAlt} />
          })}
        </Cards>
        <Cards
          title="Saturday have good Movies"
          subtitle="All movies to watch here!"
        >
          {MoviesData2.map(function (item) {
            return <Movies imgUrl={item.imgUrl} imgAlt={item.imgAlt} />
          })}
        </Cards>
      </div>
    )
}
export default App

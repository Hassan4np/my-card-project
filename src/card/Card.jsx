export default function Card({name}){
    console.log(name)
    return(
        <div>
            <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://www.google.com/url?sa=i&url=https%3A%https://cdn.pixabay.com/photo/2014/04/10/11/24/rose-320868_640.jpg%2Fwww.pexels.com%2Fsearch%2Fflower%2520wallpaper%2F&psig=AOvVaw3bJ9IAAjoCjE29-WQbDkDS&ust=1694319953125000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLD81OjXnIEDFQAAAAAdAAAAABAE" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        </div>
    )
}
import './category-item.styles.scss'

const CategoryItem = ({ category }) => {
    console.log(category)
    const { id, title, imageUrl } = category
    console.log(id,title, imageUrl)
    return (
        <div className="category-container" key={id}>
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}


export default CategoryItem
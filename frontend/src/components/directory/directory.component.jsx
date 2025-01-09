import CategoryItem from '../category-item/category-item.component.jsx'
import './directory.style.scss'

const Directory = ({categories}) => {

    // console.log(categories)


    return (
      <div className="directory-container">
      {/* {categories.map((categories) => (
          <CategoryItem key={categories.id} category={categories} />

      ))} */}
      <h1>Categories</h1>
  </div>
    )
}

export default Directory
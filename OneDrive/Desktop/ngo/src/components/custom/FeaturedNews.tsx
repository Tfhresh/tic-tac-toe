import BlogCard from "./BlogCard"


const FeaturedNews = () => {
  return (
    <div className="px-10 ">
      <p className="text-red-500 mt-4">_Read Our Blog_</p>
      <div className="flex ">
        <div className="text-4xl flex-1 font-bold tracking-wider">Featured News and Advices</div>
        <div className="flex-1 px-7">We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.</div>
      </div>
      <div className="flex  gap-7 my-10">
        <BlogCard
          src="/blog1.jpg"
          linkCaption="Is Running Really Good for the Heart?"
          title="August 27, 2020"
        />
        <BlogCard src="/blog2.jpg" linkCaption="Modeling data increase to endovascular therapy"
          title="August 27, 2020"
        />
        <BlogCard src="/blog3.jpg"
          title="August 27, 2020"
          linkCaption="Get the Exercise Tips for Limited Mobility" />
      </div>

    </div>

  )
}

export default FeaturedNews
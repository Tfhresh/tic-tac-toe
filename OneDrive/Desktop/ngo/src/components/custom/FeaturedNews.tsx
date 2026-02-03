import BlogCard from "./BlogCard"


const FeaturedNews = () => {
  return (
    <div className="px-10 ">
      <p className="text-red-500 mt-4">_Read Our Blog_</p>
      <div className="flex max-md:flex-col">
        <div className="lg:text-4xl text-3xl flex-1 font-bold tracking-wider">Featured News and Advices</div>
        <div className="flex-1 md:px-7 max-lg:text-sm">We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.</div>
      </div>
      <div className="flex max-lg:flex-wrap gap-7 my-10">
        <BlogCard
          src="/blog1.jpg"
          linkCaption="Is Running Really Good for the Heart?"
          title="August 27, 2020"
          className="lg:w-[calc((100%-56px)/3)] md:w-[calc((50%-28px))] w-full"
        />
        <BlogCard
          src="/blog2.jpg"
          linkCaption="Modeling data increase to endovascular therapy"
          title="August 27, 2020"
          className="lg:w-[calc((100%-56px)/3)] md:w-[calc((50%-28px))] w-full"
        />
        <BlogCard
          src="/blog3.jpg"
          title="August 27, 2020"
          linkCaption="Get the Exercise Tips for Limited Mobility"
          className="lg:w-[calc((100%-56px)/3)] md:w-[calc((50%-28px))] w-full"
        />
      </div>

    </div>

  )
}

export default FeaturedNews
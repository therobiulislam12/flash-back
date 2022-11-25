import Category from './Category';

const categoryItems = [
    {
        _id: 1,
        name: "DSLR",
        image: 'https://www.cameralabs.com/wp-content/uploads/2019/08/canon-eos-90d-hero-1.jpg'
    },
    {
        _id: 2,
        name: "Film",
        image: 'https://static.bhphotovideo.com/explora/sites/default/files/1-trvphoto-754-0004-reduced.jpg'
    },
    {
        _id: 3,
        name: "360",
        image: 'https://cdn.pocket-lint.com/r/s/1201x/assets/images/137301-cameras-news-buyer-s-guide-best-360-camera-lead-image15-vh3apnaeiz.jpg'
    },
    {
        _id: 4,
        name: "Action",
        image: 'https://i.pcmag.com/imagery/roundups/03wtEym7INA75ZavVx95FwX-13..v1631714663.jpg'
    },
]

const Categories = () => {
  return (
    <div className='py-12 lg:py-20'>
        <h2 className="text-2xl lg:text-3xl font-bold text-[#00E3AA] text-center uppercase mb-6 lg:mb-12">Products Category</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {
                categoryItems.map(category => <Category key={category._id} category={category}/>)
            }
        </div>
    </div>
  )
}

export default Categories
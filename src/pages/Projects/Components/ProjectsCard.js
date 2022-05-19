

const ProjectsCard = ({title,desc,img,link}) => {
  return (

    <section className="text-gray-600 body-font">
    <div className="container py-12 -mx-6 ">
      <div className=" -m-4 ">
        <div className="p-4 md:w-[25rem] md:h-[31rem] md:ml-32">
          <div className="h-full p-4 backdrop-blur-2xl border border-gray-500 border-opacity-60 rounded-lg overflow-hidden">
            <img className="lg:h-52 md:h-36 w-full rounded-xl object-cover object-center" src={img} alt="blog"/>
            <div className="p-6 ">
              <h1 className="title-font text-2xl font-medium text-white mb-3">{title}</h1>
              <div className="w-20 h-1 bg-cyan-400 rounded mt-2"></div>
              <p className="leading-relaxed text-lg mb-3">{desc}</p>
              <div className="flex items-center flex-wrap ">
                <a className="text-white border border-  p-2 hover:bg-white inline-flex items-center md:mb-2 lg:mb-0">Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  );
}

export default ProjectsCard;
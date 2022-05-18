

const ProjectsCard = ({title,desc,img,link}) => {
  return (

    <section class="text-gray-600 body-font">
    <div class="container py-12 -mx-6 ">
      <div class=" -m-4 ">
        <div class="p-4 md:w-[25rem] md:h-[31rem] md:ml-32">
          <div class="h-full p-4 backdrop-blur-2xl border border-gray-500 border-opacity-60 rounded-lg overflow-hidden">
            <img class="lg:h-52 md:h-36 w-full rounded-xl object-cover object-center" src={img} alt="blog"/>
            <div class="p-6 ">
              <h1 class="title-font text-2xl font-medium text-white mb-3">{title}</h1>
              <div class="w-20 h-1 bg-cyan-400 rounded mt-2"></div>
              <p class="leading-relaxed text-lg mb-3">{desc}</p>
              <div class="flex items-center flex-wrap ">
                <a class="text-white border border-  p-2 hover:bg-white inline-flex items-center md:mb-2 lg:mb-0">Learn More
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
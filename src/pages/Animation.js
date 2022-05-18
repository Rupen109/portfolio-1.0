
export const pageAnimation =  {
   hidden:{
       opacity:0,
       y:50,
   },
   show:{
       opacity:1,
       y:0,
       transition: {
           duration: 1,
         
       },
},
};

export const titleAnim = {
    hidden:{y:100},
    show: {
        y:0,
        transition: {duration: 0.75, ease: "easeOut"},
    },
};

export const photoAnim = {
      hidden:{
          scale: 1.5, opacity: 0
      },
      show:{
          scale:1,
          opacity: 1,
          transition: {
              ease:"easeOut",
              duration:1,
          },
      },
};



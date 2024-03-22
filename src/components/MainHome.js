import kranthiPic from '../assets/kranthipic22.jpeg'
import kranthiPiclap from '../assets/1711021491996.webp'
const MainHome = () => {
    return(
        <>
        <div className="w-full bg-gradient-to-r z-50 from-green-200 to-blue-200 h-20 fixed flex items-center p-1 justify-around top-0 left-0">
            <div className="flex justify-between w-1/3 max-sm:hidden">
            <h1 className="text-lime-100xl text-black tracking-widest font-bold cursor-pointer animate-fade-down animate-once">Home</h1>
            <h1 className="text-lime-100xl text-black tracking-widest font-bold cursor-pointer animate-fade-down animate-once">About</h1>
            <h1 className="text-lime-100xl text-black tracking-widest font-bold cursor-pointer animate-fade-down animate-once">Skills</h1>
            <h1 className="text-lime-100xl text-black tracking-widest font-bold cursor-pointer animate-fade-down animate-once">Projects</h1>
            <h1 className="text-lime-100xl text-black tracking-widest font-bold cursor-pointer animate-fade-down animate-once">Contact</h1>
            </div>
            <div>
            <div className="flex items-center gap-4 animate-fade-down animate-once">
        <img className="w-10 h-10 rounded-full" src={kranthiPic} alt=""/>
    <div className="font-medium dark:text-white">
        <div className='tracking-widest  text-center bg-gradient-to-r from-pink-400 via-blue-600 to-violet-500 font-bold'>Kranthi Kumar</div>
        <div className="text-sm text-yellow-600 font-bold  tracking-widest">Frontend Developer</div>
    </div>
</div>            </div>
        </div>
        <div className="min-h-screen min-w-full bg-slate-700 mt-30 flex justify-center items-center">
      
         {/* <div className='flex h-2/5 absolute  items-center'>
          <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={kranthiPiclap} alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
         </div> */}
          <div className="mt-16 h-96 p-4 lg:mt-8 flex justify-around items-center w-9/12 rounded-3xl animate-fade-right animate-once animate-delay-500 duration-1000">
            <div className="h-96 text-center flex items-center pl-8 lg:mx-0 lg:flex-auto lg:py-32 lg:text-left bg-gradient-to-tr from-blue-400 to-yellow-300 rounded-s-3xl">
                <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Boost your productivity.
              <br />
              Start using our app today.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white animate-shake animate-infinite animate-duration-1000 animate-ease-linear">
                Learn more <span aria-hidden="true">→</span>
              </a>
                </div>
           
            </div>
          </div>
          <div>
            <img src={kranthiPiclap} className='h-96'/>
          </div>
            {/* <img
              className=""
              src={kranthiPiclap}
              alt="App screenshot"
              width={1824}
              height={1080}
            /> */}
          </div>
          
        </div>
        </>
        
    )
}
export default MainHome
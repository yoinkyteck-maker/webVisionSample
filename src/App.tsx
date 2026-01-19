import "./App.css";
import WeberLogo from "./assets/weber white logo.png";

function App() {
  return (
    <>
      <div className="absolute inset-0 -z-10">
        <div className="aspect-[16/9] h-auto w-full bg-[url('https://th.bing.com/th/id/R.b0f6a3b05df23ee73cf4d8d16ca38221?rik=q3aHizibej2b0w&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2014%2f04%2fspace-wallpaper-2.jpg&ehk=eCnmaCABoV11k44qdKr4kJyGksNvdTbUDQQaprEsZlY%3d&risl=&pid=ImgRaw&r=0')] bg-cover bg-center"></div>
        <div className="aspect-[16/9] h-auto w-full bg-[url('https://i.pinimg.com/originals/21/08/6d/21086dbd5783d15f4b4d255ae5bba4b7.jpg')] bg-cover bg-center"></div>
      </div>

      <div className="grid w-full grid-cols-[1fr_3.5fr_1fr] grid-rows-[15px_50px] gap-2 px-2 pb-2 sticky top-0">
        <div className="col-span-3"></div>
        <div className="flex place-items-center justify-center">
          <img className="h-full w-auto" src={WeberLogo} />
        </div>

        <nav className="col-span-1 flex flex-wrap justify-center-safe gap-x-4 gap-y-1 pe-5">
          <div className="nav-item">About Us</div>
          <div className="nav-item">Services</div>
          <div className="nav-item">Industries</div>
          <div className="nav-item">Resources</div>
          <div className="nav-item">Partners</div>
        </nav>

        <div className="flex flex-wrap place-items-center justify-center gap-5">
          <div className="rounded-2xl bg-amber-500 py-1 px-5 text-center font-semibold text-[#FFFFFF]">
            Contact us
          </div>
        </div>
      </div>

      <div className="grid w-full aspect-[20/9] grid-cols-[Repeat(22,1fr)] grid-rows-[7vw_4fr_2fr_1fr]">
        <div className="[grid-area:2/2/3/8]">
          <h1 className="text-2xl text-white font-semibold">
            The place with the highest amount of trees
          </h1>
          <div className="text-lg text-white font-semibold">
            Although diamonds and other rare earths are considered to be the
            rarest resources, it surprisingly is not. In the scale of the
            universe, wood is the truely rarest resource, only found on Earth.
          </div>
        </div>

        <div className="[grid-area:3/16/4/22] flex flex-col">
          <h1 className="text-2xl text-white font-semibold text-center">
            A wet place
          </h1>
          <div className="text-lg text-white font-semibold text-center">
            Almost all of Earth's water is contained in its global ocean,
            covering 70.8% of Earth's crust. The remaining 29.2% of Earth's
            crust is land, most of which is located in the form of continental
            landmasses within Earth's land hemisphere.
          </div>
        </div>
      </div>

      {/* <div className="bg-blue-300"> break line </div>  */}

      <div className="w-full h-auto aspect-[20/9] grid grid-cols-[5vw_1fr_2fr_10vw] grid-rows-[15vw_20vw_1fr] p-4">
        <div className="col-span-4">stuff</div>
        <div className="[grid-area:2/2] flex flex-col">
          <h1 className="text-2xl text-white font-semibold text-center">
            The Red planet of minerals
          </h1>
          <div className="text-lg text-white font-semibold text-center">
            Mars is the fourth planet from the Sun. It is also known as the "Red
            Planet", for its orange-red appearance.Mars is a desert-like rocky
            planet with a tenuous atmosphere that is primarily carbon dioxide
            (CO2). At the average surface level the atmospheric pressure is a
            few thousandths of Earth's, atmospheric temperature ranges from -153
            to 20 °C, and cosmic radiation is high.
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

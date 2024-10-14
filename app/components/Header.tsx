import Avatar from "./Avatar";
import Social from "./Social";

export default function Header() {
  return (
    <div className="container text-slate-50 mx-auto md:max-w-4xl xs:max-w-80 mx-auto-xs  w-full bg-slate-950 ">
      <div className="flex flex-col md:flex-row md:justify-between justify-center items-center gap-2 my-5">
        <div className="flex flex-row align-middle items-center gap-2 ">
          <Avatar size="small" />
          <h1 className="text-slate-50 font-semibold text-4xl">Luis Locon</h1>
        </div>
        <div>
          <Social />
        </div>
      </div>
    </div>
  );
}

import Footer from "../components/ui/footer";
import Header from "../components/ui/header";

export default function HomeLayout({ children }) {
  return (
    <div className="bg-slate-100">
      <Header />
      {children}
      <div className="flex w-full h-[20vh]"></div>
    </div>
  );
}

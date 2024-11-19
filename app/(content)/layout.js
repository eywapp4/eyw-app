import Footer from "../components/ui/footer";

export default function ContentLayout({ children }) {
  return (
    <div className="bg-slate-100">
      {children}
      <Footer />
    </div>
  );
}

// build test 2

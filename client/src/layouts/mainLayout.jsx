import Navbar from "../components/common/Navbar";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen w-full">
      <Navbar/>
      {children}
      {/* Footer comes here */}
    </div>
  );
}

export default MainLayout;

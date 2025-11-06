import { useLocation } from "react-router";


interface PageTransitionProps {
  children: React.ReactNode;
}


function PageTransition({children} : PageTransitionProps) {
    const location = useLocation();
    
    console.log("Component built");

    return (
        <>
        <div key={location.pathname} className="page-transition-container">
          {children}
          </div>
        </>
    )
}

export default PageTransition;
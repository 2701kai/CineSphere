import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer footer-horizontal bg-base-200 footer-center text-white p-4">
      <aside>
        <Link to="/" className="flex items-center gap-2">
          <span
            className="hidden sm:inline text-xl font-bold text-primary hover:tooltip hover:tooltip-bottom"
            data-tip="CineSphere"
          >
            CP
          </span>
        </Link>
        <p className="font-bold">
          CineSphere Ltd.
          <br />
          liebevoll hergestellt
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4"></div>
      </nav>
    </footer>
  );
}

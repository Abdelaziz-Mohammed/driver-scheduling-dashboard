import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="bg-black/5 text-black dark:bg-gray-800 dark:text-white text-center p-4
      border-t border-gray-300 dark:border-gray-700"
    >
      <p className="text-sm font-medium">
        © 2025{" "}
        <Link to="/" className="font-bold text-primary">
          DRB.
        </Link>{" "}
        All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

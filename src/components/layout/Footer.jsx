const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-borderGray dark:border-slate-700 py-8 mt-20">
      <div className="container mx-auto px-6 text-center">
        <p className="text-textGray dark:text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Ravinder Kumar. Built with passion & React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

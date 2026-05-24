const Footer = () => {
  return (
    <footer className="bg-white border-t border-borderGray py-8 mt-20">
      <div className="container mx-auto px-6 text-center">
        <p className="text-textGray text-sm">
          &copy; {new Date().getFullYear()} Ravindra Yadav. Built with passion & React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

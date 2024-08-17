import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

function HelpCenter() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <MainContent />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HelpCenter;

import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';
import { Button } from './ui/button';
import SearchBar from './SearchBar';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const toggleSearch = () => {
    setShowSearchInput(!showSearchInput);
    if (showSearchInput) {
      setSearchQuery('');
    }
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to the health page with the search query
      navigate('/health');
      // Reset search
      setSearchQuery('');
      setShowSearchInput(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gradient">Bipul Store</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" className={({isActive}) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              Home
            </NavLink>
            <NavLink to="/health" className={({isActive}) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              Health
            </NavLink>
            <NavLink to="/fitness" className={({isActive}) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              Fitness
            </NavLink>
            <NavLink to="/about" className={({isActive}) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              About
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              Contact
            </NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {showSearchInput ? (
              <form onSubmit={handleSearch} className="relative w-64 animate-fade-in">
                <SearchBar 
                  value={searchQuery} 
                  onChange={setSearchQuery} 
                  placeholder="Search products..." 
                />
              </form>
            ) : (
              <Button variant="ghost" size="icon" onClick={toggleSearch}>
                <Search size={20} />
              </Button>
            )}
            <Button variant="ghost" size="icon">
              <User size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleSearch}>
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Search Bar */}
        {showSearchInput && (
          <div className="md:hidden py-2 animate-fade-in">
            <form onSubmit={handleSearch}>
              <SearchBar 
                value={searchQuery} 
                onChange={setSearchQuery} 
                placeholder="Search products..." 
              />
            </form>
          </div>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen 
        ? 'max-h-96 opacity-100 py-4' 
        : 'max-h-0 opacity-0 py-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 bg-background/95 backdrop-blur-md">
          <div className="flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({isActive}) => `px-4 py-2 ${isActive ? 'bg-accent/10 text-accent' : ''}`}
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink 
              to="/health" 
              className={({isActive}) => `px-4 py-2 ${isActive ? 'bg-accent/10 text-accent' : ''}`}
              onClick={toggleMenu}
            >
              Health
            </NavLink>
            <NavLink 
              to="/fitness" 
              className={({isActive}) => `px-4 py-2 ${isActive ? 'bg-accent/10 text-accent' : ''}`}
              onClick={toggleMenu}
            >
              Fitness
            </NavLink>
            <NavLink 
              to="/about" 
              className={({isActive}) => `px-4 py-2 ${isActive ? 'bg-accent/10 text-accent' : ''}`}
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({isActive}) => `px-4 py-2 ${isActive ? 'bg-accent/10 text-accent' : ''}`}
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
            <div className="px-4 py-2">
              <Button variant="outline" className="w-full">
                <User size={16} className="mr-2" />
                Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

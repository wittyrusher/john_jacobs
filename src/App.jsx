import React, { useState, useEffect } from "react";

export default function App() {
  const products = [
    { 
      id: 1, 
      name: "Classic Sunglasses", 
      img: "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Classic+Sunglasses",
      price: "$299",
      category: "Sunglasses"
    },
    { 
      id: 2, 
      name: "Modern Eyeglasses", 
      img: "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Modern+Eyeglasses",
      price: "$399",
      category: "Prescription"
    },
    { 
      id: 3, 
      name: "Sports Glasses", 
      img: "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Sports+Glasses",
      price: "$349",
      category: "Sports"
    },
    { 
      id: 4, 
      name: "Aviator Sunglasses", 
      img: "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Aviator+Sunglasses",
      price: "$279",
      category: "Sunglasses"
    },
    { 
      id: 5, 
      name: "Retro Frames", 
      img: "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Retro+Frames",
      price: "$329",
      category: "Vintage"
    },
  ];

  const features = [
    {
      icon: "🔧",
      title: "Precision Crafted",
      description: "Each frame is meticulously crafted with attention to every detail"
    },
    {
      icon: "🛡️",
      title: "Premium Materials",
      description: "Only the finest materials including titanium and acetate"
    },
    {
      icon: "👁️",
      title: "Advanced Lenses",
      description: "Anti-glare, UV protection, and blue light filtering technology"
    },
    {
      icon: "🎨",
      title: "Custom Design",
      description: "Personalized fitting and style consultation available"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextProduct = () => setCurrentIndex((prev) => (prev + 1) % products.length);
  const prevProduct = () => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth <= 1024 && windowWidth > 768;

  return (
    <div style={{ 
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
      backgroundColor: "#0a0a0a",
      color: "#ffffff",
      lineHeight: "1.6",
      margin: 0,
      padding: 0
    }}>
      
      {/* Header */}
      <header style={{
        backgroundColor: isScrolled ? "rgba(10, 10, 10, 0.95)" : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        transition: "all 0.3s ease",
        borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none"
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: isMobile ? "15px 20px" : "20px 40px"
        }}>
          <h1 style={{
            fontSize: isMobile ? "24px" : "32px",
            fontWeight: "700",
            background: "linear-gradient(135deg, #00f5ff, #0099ff)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            margin: 0
          }}>
            JOHN JACOBS
          </h1>
          
          {/* Mobile Menu Button */}
          {isMobile && (
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                background: "none",
                border: "none",
                color: "#ffffff",
                fontSize: "24px",
                cursor: "pointer",
                padding: "5px"
              }}>
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          )}
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <nav>
              <ul style={{
                listStyle: "none",
                display: "flex",
                gap: isTablet ? "30px" : "40px",
                margin: 0,
                padding: 0
              }}>
                {[
                  { name: "Home", section: "home" },
                  { name: "Collection", section: "collection" },
                  { name: "Technology", section: "technology" },
                  { name: "About", section: "about" },
                  { name: "Contact", section: "contact" }
                ].map((item) => (
                  <li key={item.name}>
                    <button 
                      onClick={() => scrollToSection(item.section)}
                      style={{
                        color: "#ffffff",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontWeight: "500",
                        fontSize: "16px",
                        transition: "all 0.3s ease",
                        position: "relative",
                        padding: "10px 0"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = "#00f5ff";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "#ffffff";
                      }}>
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobile && isMobileMenuOpen && (
          <div style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(10, 10, 10, 0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "20px"
          }}>
            {[
              { name: "Home", section: "home" },
              { name: "Collection", section: "collection" },
              { name: "Technology", section: "technology" },
              { name: "About", section: "about" },
              { name: "Contact", section: "contact" }
            ].map((item) => (
              <button 
                key={item.name}
                onClick={() => scrollToSection(item.section)}
                style={{
                  display: "block",
                  width: "100%",
                  color: "#ffffff",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "18px",
                  padding: "15px 0",
                  textAlign: "left",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "color 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#00f5ff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#ffffff";
                }}>
                {item.name}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        padding: isMobile ? "80px 20px 40px" : "0 40px"
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 50% 50%, rgba(0, 245, 255, 0.1) 0%, transparent 70%)"
        }}></div>
        
        <div style={{
          zIndex: 2,
          maxWidth: isMobile ? "100%" : "800px",
          padding: 0
        }}>
          <h2 style={{
            fontSize: isMobile ? "40px" : isTablet ? "56px" : "72px",
            fontWeight: "800",
            marginBottom: "24px",
            background: "linear-gradient(135deg, #ffffff, #00f5ff)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            textShadow: "0 4px 20px rgba(0, 245, 255, 0.3)",
            lineHeight: "1.1"
          }}>
            Vision Redefined
          </h2>
          <p style={{
            fontSize: isMobile ? "18px" : "24px",
            marginBottom: "40px",
            color: "rgba(255, 255, 255, 0.8)",
            fontWeight: "300",
            lineHeight: "1.5"
          }}>
            Experience the future of eyewear with precision-engineered frames and cutting-edge lens technology
          </p>
          <div style={{ 
            display: "flex", 
            gap: isMobile ? "15px" : "20px", 
            justifyContent: "center",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center"
          }}>
            <button 
              onClick={() => scrollToSection('collection')}
              style={{
                padding: isMobile ? "14px 30px" : "16px 40px",
                background: "linear-gradient(135deg, #00f5ff, #0099ff)",
                color: "#0a0a0a",
                border: "none",
                borderRadius: "50px",
                fontSize: isMobile ? "16px" : "18px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 8px 32px rgba(0, 245, 255, 0.3)",
                width: isMobile ? "100%" : "auto"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 12px 40px rgba(0, 245, 255, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 8px 32px rgba(0, 245, 255, 0.3)";
              }}>
              Explore Collection
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              style={{
                padding: isMobile ? "14px 30px" : "16px 40px",
                background: "transparent",
                color: "#ffffff",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "50px",
                fontSize: isMobile ? "16px" : "18px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                width: isMobile ? "100%" : "auto"
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = "#00f5ff";
                e.target.style.color = "#00f5ff";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "rgba(255, 255, 255, 0.3)";
                e.target.style.color = "#ffffff";
              }}>
              Our Story
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="technology" style={{
        padding: isMobile ? "60px 20px" : isTablet ? "80px 30px" : "120px 40px",
        backgroundColor: "#111111",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)"
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <h2 style={{
            fontSize: isMobile ? "32px" : isTablet ? "40px" : "48px",
            fontWeight: "700",
            marginBottom: isMobile ? "40px" : "60px",
            color: "#ffffff"
          }}>
            Crafted to Perfection
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(300px, 1fr))",
            gap: isMobile ? "30px" : "40px"
          }}>
            {features.map((feature, index) => (
              <div key={index} style={{
                padding: isMobile ? "30px 25px" : "40px",
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
                borderRadius: "20px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-8px)";
                e.target.style.borderColor = "rgba(0, 245, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
              }}>
                <div style={{
                  fontSize: isMobile ? "40px" : "48px",
                  marginBottom: "20px"
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: isMobile ? "20px" : "24px",
                  fontWeight: "600",
                  marginBottom: "16px",
                  color: "#ffffff"
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: isMobile ? "14px" : "16px",
                  lineHeight: "1.6"
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Carousel */}
      <section id="collection" style={{
        padding: isMobile ? "60px 20px" : isTablet ? "80px 30px" : "120px 40px",
        backgroundColor: "#0a0a0a"
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <h2 style={{
            fontSize: isMobile ? "32px" : isTablet ? "40px" : "48px",
            fontWeight: "700",
            marginBottom: isMobile ? "40px" : "60px",
            color: "#ffffff"
          }}>
            Featured Collection
          </h2>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: isMobile ? "20px" : "40px",
            flexDirection: isMobile ? "column" : "row"
          }}>
            {!isMobile && (
              <button 
                onClick={prevProduct}
                style={{
                  background: "linear-gradient(135deg, #00f5ff, #0099ff)",
                  border: "none",
                  color: "#0a0a0a",
                  fontSize: "24px",
                  padding: "16px 20px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 8px 32px rgba(0, 245, 255, 0.3)"
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                }}>
                ❮
              </button>
            )}
            
            <div style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
              borderRadius: "24px",
              padding: isMobile ? "30px 25px" : "40px",
              width: isMobile ? "100%" : isTablet ? "350px" : "400px",
              maxWidth: isMobile ? "350px" : "none",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)"
            }}>
              <img 
                src={products[currentIndex].img} 
                alt={products[currentIndex].name}
                style={{
                  width: "100%",
                  height: isMobile ? "200px" : "250px",
                  objectFit: "cover",
                  borderRadius: "16px",
                  marginBottom: "24px"
                }}
              />
              <div style={{
                display: "inline-block",
                background: "rgba(0, 245, 255, 0.2)",
                color: "#00f5ff",
                padding: "6px 16px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: "600",
                marginBottom: "16px"
              }}>
                {products[currentIndex].category}
              </div>
              <h3 style={{
                fontSize: isMobile ? "22px" : "28px",
                fontWeight: "600",
                marginBottom: "12px",
                color: "#ffffff"
              }}>
                {products[currentIndex].name}
              </h3>
              <p style={{
                fontSize: isMobile ? "20px" : "24px",
                fontWeight: "700",
                color: "#00f5ff",
                marginBottom: "24px"
              }}>
                {products[currentIndex].price}
              </p>
              <button style={{
                padding: isMobile ? "12px 28px" : "14px 32px",
                background: "linear-gradient(135deg, #00f5ff, #0099ff)",
                color: "#0a0a0a",
                border: "none",
                borderRadius: "50px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                width: "100%"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 8px 24px rgba(0, 245, 255, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}>
                Add to Cart
              </button>
            </div>
            
            {!isMobile && (
              <button 
                onClick={nextProduct}
                style={{
                  background: "linear-gradient(135deg, #00f5ff, #0099ff)",
                  border: "none",
                  color: "#0a0a0a",
                  fontSize: "24px",
                  padding: "16px 20px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 8px 32px rgba(0, 245, 255, 0.3)"
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                }}>
                ❯
              </button>
            )}
          </div>
          
          {/* Mobile Navigation Buttons */}
          {isMobile && (
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "30px"
            }}>
              <button 
                onClick={prevProduct}
                style={{
                  background: "linear-gradient(135deg, #00f5ff, #0099ff)",
                  border: "none",
                  color: "#0a0a0a",
                  fontSize: "20px",
                  padding: "12px 16px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 8px 32px rgba(0, 245, 255, 0.3)"
                }}>
                ❮
              </button>
              <button 
                onClick={nextProduct}
                style={{
                  background: "linear-gradient(135deg, #00f5ff, #0099ff)",
                  border: "none",
                  color: "#0a0a0a",
                  fontSize: "20px",
                  padding: "12px 16px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 8px 32px rgba(0, 245, 255, 0.3)"
                }}>
                ❯
              </button>
            </div>
          )}
        </div>
      </section>

      {/* About/Build Section */}
      <section id="about" style={{
        padding: isMobile ? "60px 20px" : isTablet ? "80px 30px" : "120px 40px",
        backgroundColor: "#111111",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)"
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto"
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile || isTablet ? "1fr" : "1fr 1fr",
            gap: isMobile ? "50px" : "80px",
            alignItems: "center"
          }}>
            <div>
              <h2 style={{
                fontSize: isMobile ? "32px" : isTablet ? "40px" : "48px",
                fontWeight: "700",
                marginBottom: "32px",
                color: "#ffffff"
              }}>
                Built for Excellence
              </h2>
              <p style={{
                fontSize: isMobile ? "16px" : "18px",
                color: "rgba(255, 255, 255, 0.8)",
                marginBottom: "32px",
                lineHeight: "1.8"
              }}>
                Every John Jacobs frame represents decades of expertise in optical engineering. 
                From our state-of-the-art manufacturing facilities to our innovative design labs, 
                we push the boundaries of what eyewear can be.
              </p>
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px"
              }}>
                {[
                  { label: "Manufacturing Excellence", value: "50+ Years" },
                  { label: "Quality Assurance", value: "99.9% Precision" },
                  { label: "Global Reach", value: "80+ Countries" },
                  { label: "Innovation Patents", value: "200+ Technologies" }
                ].map((stat, index) => (
                  <div key={index} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "16px 0",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
                  }}>
                    <span style={{
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: isMobile ? "14px" : "16px"
                    }}>
                      {stat.label}
                    </span>
                    <span style={{
                      color: "#00f5ff",
                      fontSize: isMobile ? "14px" : "16px",
                      fontWeight: "600"
                    }}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{
              background: "linear-gradient(135deg, rgba(0, 245, 255, 0.1), rgba(0, 153, 255, 0.05))",
              borderRadius: "24px",
              padding: isMobile ? "40px 30px" : "60px",
              border: "1px solid rgba(0, 245, 255, 0.2)",
              textAlign: "center"
            }}>
              <div style={{
                fontSize: isMobile ? "60px" : "72px",
                marginBottom: "24px"
              }}>
                🏭
              </div>
              <h3 style={{
                fontSize: isMobile ? "20px" : "24px",
                fontWeight: "600",
                marginBottom: "16px",
                color: "#ffffff"
              }}>
                Advanced Manufacturing
              </h3>
              <p style={{
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: "1.6",
                fontSize: isMobile ? "14px" : "16px"
              }}>
                Our cutting-edge facilities combine traditional craftsmanship with 
                modern technology to create eyewear that sets industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{
        padding: isMobile ? "60px 20px" : isTablet ? "80px 30px" : "120px 40px",
        backgroundColor: "#0a0a0a"
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <h2 style={{
            fontSize: isMobile ? "32px" : isTablet ? "40px" : "48px",
            fontWeight: "700",
            marginBottom: isMobile ? "40px" : "60px",
            color: "#ffffff"
          }}>
            What Our Customers Say
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(350px, 1fr))",
            gap: isMobile ? "30px" : "40px"
          }}>
            {[
              {
                text: "The build quality is absolutely exceptional. These frames have lasted me years without any wear.",
                author: "Sarah Williams",
                role: "Designer"
              },
              {
                text: "Revolutionary lens technology. The clarity and comfort are unmatched in the industry.",
                author: "Mark Chen",
                role: "Engineer"
              },
              {
                text: "Perfect fusion of style and functionality. John Jacobs understands modern eyewear needs.",
                author: "Emily Rodriguez",
                role: "Architect"
              }
            ].map((testimonial, index) => (
              <div key={index} style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
                padding: isMobile ? "30px 25px" : "40px",
                borderRadius: "20px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = "rgba(0, 245, 255, 0.3)";
                e.target.style.transform = "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.target.style.transform = "translateY(0)";
              }}>
                <p style={{
                  fontSize: isMobile ? "16px" : "18px",
                  color: "rgba(255, 255, 255, 0.9)",
                  marginBottom: "24px",
                  lineHeight: "1.6",
                  fontStyle: "italic"
                }}>
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 style={{
                    color: "#00f5ff",
                    fontSize: "16px",
                    fontWeight: "600",
                    marginBottom: "4px"
                  }}>
                    {testimonial.author}
                  </h4>
                  <p style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    fontSize: "14px"
                  }}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{
        padding: isMobile ? "60px 20px" : isTablet ? "80px 30px" : "120px 40px",
        backgroundColor: "#111111",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)"
      }}>
        <div style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <h2 style={{
            fontSize: isMobile ? "32px" : isTablet ? "40px" : "48px",
            fontWeight: "700",
            marginBottom: "24px",
            color: "#ffffff"
          }}>
            Get in Touch
          </h2>
          <p style={{
            fontSize: isMobile ? "16px" : "18px",
            color: "rgba(255, 255, 255, 0.7)",
            marginBottom: isMobile ? "40px" : "60px"
          }}>
            Ready to experience the future of eyewear? Let's create something extraordinary together.
          </p>
          <form style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px"
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: "24px"
            }}>
              <input 
                type="text" 
                placeholder="Your Name"
                style={{
                  padding: "16px 20px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "12px",
                  color: "#ffffff",
                  fontSize: "16px",
                  outline: "none",
                  transition: "all 0.3s ease"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#00f5ff";
                  e.target.style.boxShadow = "0 0 0 3px rgba(0, 245, 255, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
                  e.target.style.boxShadow = "none";
                }}
              />
              <input 
                type="email" 
                placeholder="Email Address"
                style={{
                  padding: "16px 20px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "12px",
                  color: "#ffffff",
                  fontSize: "16px",
                  outline: "none",
                  transition: "all 0.3s ease"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#00f5ff";
                  e.target.style.boxShadow = "0 0 0 3px rgba(0, 245, 255, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>
            <textarea 
              placeholder="Tell us about your vision..."
              rows={isMobile ? "4" : "6"}
              style={{
                padding: "16px 20px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "12px",
                color: "#ffffff",
                fontSize: "16px",
                outline: "none",
                transition: "all 0.3s ease",
                resize: "vertical"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#00f5ff";
                e.target.style.boxShadow = "0 0 0 3px rgba(0, 245, 255, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
                e.target.style.boxShadow = "none";
              }}
            />
            <button type="submit" style={{
              padding: "18px 40px",
              background: "linear-gradient(135deg, #00f5ff, #0099ff)",
              color: "#0a0a0a",
              border: "none",
              borderRadius: "50px",
              fontSize: "18px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 32px rgba(0, 245, 255, 0.3)"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 12px 40px rgba(0, 245, 255, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 8px 32px rgba(0, 245, 255, 0.3)";
            }}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: "#0a0a0a",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        padding: isMobile ? "40px 20px 20px" : "60px 40px 30px"
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto"
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(250px, 1fr))",
            gap: isMobile ? "30px" : "40px",
            marginBottom: isMobile ? "30px" : "40px"
          }}>
            <div>
              <h3 style={{
                fontSize: isMobile ? "20px" : "24px",
                fontWeight: "700",
                background: "linear-gradient(135deg, #00f5ff, #0099ff)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                marginBottom: "20px"
              }}>
                JOHN JACOBS
              </h3>
              <p style={{
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: "1.6",
                fontSize: isMobile ? "14px" : "16px"
              }}>
                Redefining eyewear through innovation, craftsmanship, and uncompromising quality.
              </p>
            </div>
            <div>
              <h4 style={{
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "20px"
              }}>
                Quick Links
              </h4>
              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0
              }}>
                {["Collection", "Technology", "About", "Contact", "Support"].map((link) => (
                  <li key={link} style={{ marginBottom: "12px" }}>
                    <button 
                      onClick={() => scrollToSection(link.toLowerCase())}
                      style={{
                        color: "rgba(255, 255, 255, 0.7)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "16px",
                        padding: 0,
                        transition: "color 0.3s ease"
                      }}
                      onMouseEnter={(e) => e.target.style.color = "#00f5ff"}
                      onMouseLeave={(e) => e.target.style.color = "rgba(255, 255, 255, 0.7)"}>
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "20px"
              }}>
                Connect
              </h4>
              <div style={{
                display: "flex",
                gap: "16px",
                justifyContent: isMobile ? "center" : "flex-start"
              }}>
                {["📧", "📱", "🌐", "📍"].map((icon, index) => (
                  <div key={index} style={{
                    width: "48px",
                    height: "48px",
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(0, 245, 255, 0.2)";
                    e.target.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.1)";
                    e.target.style.transform = "translateY(0)";
                  }}>
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "30px",
            textAlign: "center"
          }}>
            <p style={{
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: isMobile ? "12px" : "14px"
            }}>
              © 2025 John Jacobs Eyewear. All rights reserved. | Crafted with precision and passion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
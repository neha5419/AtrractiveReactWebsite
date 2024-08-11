import React, { useState } from 'react';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import BehindTheScenes from './components/BehindTheScenes';
import Navbar from './components/Navbar';
import DecoratingTips from './components/DecoratingTips';
import RegionSpecificTips from './components/RegionSpecificTips';
import DecoratingDonts from './components/DecoratingDonts';
import FloorPlan from './components/FloorPlan';
import HomeOrganization from './components/HomeOrganization';
import WeeklyAdvice from "./components/WeeklyAdvice";
import BlogPosts from './components/BlogPosts';
import TeamStories from './components/TeamStories';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import FinalThoughts from './components/FinalThoughts';
import "./App.css";
const App = () => {

  const tips = [
    {
      title: "Embrace Bold Colors",
      description: "Add vibrancy to your space with bold and vibrant colors. Use accent walls or colorful accessories to make a statement.",
      image: "./bold-colors.jfif"
    }, 
    {
      title: "Mix Patterns and Textures",
      description: "Combine different patterns and textures to create depth and interest in your decor. Layer rugs, throw pillows, and curtains for a rich look.",
      image: "./mix-patterns.jpeg"
    },
    {
      title: "Sustainable Materials",
      description: "Opt for eco-friendly materials like reclaimed wood or recycled metal. Sustainable choices are not only stylish but also better for the environment.",
      image: "./sustainable-materials.jfif"
    }
  ];
  const regionTips = [
    {
      title: "Coastal Design for Beach Homes",
      description: "Use light, airy colors and natural materials like driftwood and sea glass to capture the essence of coastal living.",
      image: "./coastal-design.jpg"
    },
    {
      title: "Desert-Inspired Interiors",
      description: "Incorporate warm tones and earthy textures to create a cozy and inviting desert-inspired space.",
      image: "./desert-interiors.jpg"
    },
    {
      title: "Mountain Retreat Aesthetics",
      description: "Opt for rustic, natural materials and warm colors to reflect the tranquility and rugged beauty of mountain settings.",
      image: "./mountain-retreat.jfif"
    }
  ];
  const decoratingDonts = [
    {
      title: "Over-Matching",
      description: "Using too many matching patterns can make a space feel monotonous. Mix and match to add character and depth.",
      image: "./over-matching.jpg"
    },
    {
      title: "Ignoring Scale",
      description: "Choosing furniture that is too large or too small for a space can disrupt the balance of the room. Consider the scale of your furniture in relation to the room size.",
      image: "./ignoring-scale.jpg"
    },
    {
      title: "Over-Decorating",
      description: "Adding too many decorative items can make a space feel cluttered. Less is often more when it comes to decor.",
      image: "./over-decorating.jpg"
    }
  ];
  const floorPlanExamples = [
    {
      title: "Open Concept Layout",
      description: "An open concept floor plan that combines living, dining, and kitchen areas for a spacious and airy feel.",
      image: "./open-concept.jpg"
    },
    {
      title: "Compact Studio",
      description: "A smartly designed studio apartment with multifunctional furniture and efficient use of space.",
      image: "./compact-studio.jpg"
    },
    {
      title: "Family-Friendly Home",
      description: "A family-friendly floor plan with separate zones for adults and children, including a play area and a study.",
      image: "./family-home.jpg"
    }
  ];
  const homeOrganizationIdeas = [
    {
      title: "Declutter Your Entryway",
      description: "Create a tidy and welcoming entryway with hooks for keys, a shoe rack, and a small bench.",
      image: "./entryway.jpg",
      details: "Use baskets under the bench for additional storage. Choose a wall-mounted shelf for keys and mail to save space."
    },
    {
      title: "Maximize Closet Space",
      description: "Use organizers like shelf dividers, hanging shoe racks, and bins to keep your closet neat.",
      image: "./closet.jpg",
      details: "Install additional rods for more hanging space. Use labeled bins for off-season clothes."
    },
    {
      title: "Kitchen Pantry Organization",
      description: "Group similar items together, use clear containers, and label everything in your pantry.",
      image: "./pantry.jpg",
      details: "Place frequently used items at eye level. Use lazy susans for easy access to spices and jars."
    }
  ];
  const weeklyAdviceList = [
    {
      designer: "Emma Brown",
      tip: "Embrace minimalism. Less is more when it comes to creating a serene and stylish home.",
      image: "./emma-brown.jfif",
      nextUpdate: "August 18, 2024"
    },
    {
      designer: "Liam Turner",
      tip: "Mixing patterns and textures can add depth and interest to any room. Don't be afraid to experiment!",
      image: "./liam-turner.jpg",
      nextUpdate: "August 25, 2024"
    },
    {
      designer: "Sophia Lee",
      tip: "Lighting is key. Use a mix of lighting sources to create a warm and inviting ambiance.",
      image: "./sophia-lee.png",
      nextUpdate: "September 1, 2024"
    }
  ];
  const blogPosts = [
    {
      title: 'Top 10 Interior Design Tips',
      summary: 'Discover the top 10 tips to elevate your home interior design.',
      image: './link-to-image1.jpg',
      link: '#',
    },
    {
      title: 'The Art of Mixing Patterns',
      summary: 'Learn how to mix patterns like a pro in your home decor.',
      image: './link-to-image2.jpg',
      link: '#',
    },
    {
      title: 'Sustainable Design: Eco-Friendly Home Ideas',
      summary: 'Explore sustainable design principles and eco-friendly ideas for your home.',
      image: './link-to-image3.jfif',
      link: '#',
    },
    
  ];
  const teamMembers = [
    {
      name: 'Neha Phadtare',
      role: 'Lead Designer',
      story: 'Neha brings over 10 years of experience in design, creating stunning interiors that combine functionality with beauty.',
      image: './nehas.jpg',
      interviewLink: 'link-to-interview1.html',
    },
    {
      name: 'Bob Smith',
      role: 'Project Manager',
      story: 'Bob excels in managing complex projects, ensuring that each design is executed to perfection and on schedule.',
      image: './bob.jpg',
      interviewLink: 'link-to-interview2.html',
    },
    {
      name: 'Carol Davis',
      role: 'Architect',
      story: 'Carol’s innovative architectural designs have transformed countless spaces, blending modern aesthetics with practical solutions.',
      image: './carol.jfif',
      interviewLink: 'link-to-interview3.html',
    },
    
  ];

  return (

    <div className="case-studies">
      


      <h2><Navbar websiteName="🌸  Floral Design Studio" /></h2>


      <section id="home" className='home'>
        <h2>Welcome to Floral Design Studio</h2>
        <p>
           Your go-to place for stunning transformations and design inspiration. 
          </p>
      </section>

      <section id="projects">
        <h2></h2>
       
      <BeforeAfterSlider 
        beforeImage="./before-living-room.jpg" 
        afterImage="./public/after-living-room.jpg" 
        description="This living room was completely transformed with new furniture, a fresh coat of paint, and modern lighting. The new design features a minimalist aesthetic with warm, inviting tones."
      />

       <br></br>
      <BeforeAfterSlider 
        beforeImage="./before-living-room1.jpg" 
        afterImage="./public/after-living-room1.jpeg" 
        description="This living room was completely transformed with new furniture, a fresh coat of paint, and modern lighting. The new design features a minimalist aesthetic with warm, inviting tones."
      />
      
      <BehindTheScenes
        title="Renovation of the Master Bedroom"
        description="Take a look behind the scenes of our latest project: a master bedroom renovation that blends modern elegance with timeless comfort. Our team worked meticulously to transform this space into a serene retreat."
        image="./master-bedroom-renovation.jpg"
      />
      <BehindTheScenes
        title="Outdoor Living Space Transformation"
        description="Discover how we turned a simple backyard into a luxurious outdoor living area, complete with a fire pit, seating area, and lush greenery. Perfect for entertaining guests or relaxing under the stars."
        image="./outdoor-living-space.jpg"
        />
        
      </section>

      <section id="tips">
        <DecoratingTips tips={tips} />
      </section>
       
      <section id="region-tips">
        <RegionSpecificTips tips={regionTips} />
      </section>
      
      <section id="donts">
        <DecoratingDonts donts={decoratingDonts} />
      </section>

      <section id="floor-plan">
        <FloorPlan examples={floorPlanExamples} />
      </section>

      <section id="organization">
        <HomeOrganization ideas={homeOrganizationIdeas} />
      </section>

      <section id="contact">
     <WeeklyAdvice adviceList={weeklyAdviceList} />
   </section>

   <section id="blog-posts">
        <BlogPosts posts={blogPosts} />
      </section>

      <section id="about">
        <TeamStories teamMembers={teamMembers} />
      </section>

      <CTASection/>
      
      <FinalThoughts/>
      <Footer/>
    </div>
     
  );
};

export default App;

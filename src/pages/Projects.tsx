
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Projects = () => {
  const projects = [
    {
      title: 'EcoTrack',
      description: 'A mobile app that helps students track their carbon footprint and suggests eco-friendly alternatives for daily activities.',
      coreTeam: 'Software & Design',
      status: 'In Progress',
      progress: 75,
      tags: ['Mobile App', 'Sustainability', 'React Native'],
      features: ['Carbon tracking', 'Eco suggestions', 'Community challenges']
    },
    {
      title: 'SmartLab IoT System',
      description: 'An IoT solution for optimizing lab equipment usage and energy consumption across the engineering building.',
      coreTeam: 'Embedded & Engineering',
      status: 'In Progress',
      progress: 60,
      tags: ['IoT', 'Hardware', 'Energy Optimization'],
      features: ['Real-time monitoring', 'Usage analytics', 'Automated scheduling']
    },
    {
      title: 'StudyBuddy Platform',
      description: 'A collaborative learning platform that connects students for study groups and peer tutoring sessions.',
      coreTeam: 'Software & Business',
      status: 'Done',
      progress: 100,
      tags: ['Web Platform', 'Education', 'React'],
      features: ['Group matching', 'Video calls', 'Progress tracking']
    },
    {
      title: 'Campus Navigator AR',
      description: 'An augmented reality mobile app that helps new students navigate the campus with interactive directions and information.',
      coreTeam: 'Neotech & Design',
      status: 'In Progress',
      progress: 40,
      tags: ['AR', 'Mobile', 'Navigation'],
      features: ['AR directions', 'Building info', 'Event notifications']
    },
    {
      title: 'FoodShare Network',
      description: 'A platform connecting students to share excess meal plan swipes and reduce food waste on campus.',
      coreTeam: 'Software & Business',
      status: 'Done',
      progress: 100,
      tags: ['Social Impact', 'Web App', 'Sustainability'],
      features: ['Meal sharing', 'Location tracking', 'Rating system']
    },
    {
      title: 'Mental Health Chatbot',
      description: 'An AI-powered chatbot providing 24/7 mental health support and resources for students.',
      coreTeam: 'Neotech & Design',
      status: 'In Progress',
      progress: 80,
      tags: ['AI', 'Mental Health', 'Chatbot'],
      features: ['24/7 support', 'Resource library', 'Crisis detection']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Done': return 'bg-green-100 text-green-800';
      case 'Planning': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress === 100) return 'bg-green-500';
    if (progress >= 75) return 'bg-blue-500';
    if (progress >= 50) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text">Our Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the innovative projects our teams are working on. From mobile apps to IoT solutions, 
              we're building products that make a real impact on campus and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass-card hover-lift group cursor-pointer animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 mb-1">{project.progress}%</div>
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(project.progress)}`}
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-ipd-purple transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-700">Core Team: </span>
                      <span className="text-sm font-semibold text-ipd-purple">{project.coreTeam}</span>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-gray-700 block mb-2">Key Features:</span>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-ipd-purple rounded-full"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Project Impact</h2>
            <p className="text-lg text-gray-600">Our projects are making a real difference in the community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Completed', icon: '🚀' },
              { number: '25K+', label: 'Students Impacted', icon: '👥' },
              { number: '15+', label: 'Active Projects', icon: '⚡' },
              { number: '100%', label: 'Real-World Focus', icon: '🌍' }
            ].map((stat, index) => (
              <Card key={index} className="glass-card text-center hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-20 bg-gradient-to-r from-ipd-purple to-ipd-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Want to Build Something Amazing?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join one of our project teams and turn your ideas into reality. We're always looking for passionate builders!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-ipd-purple hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105">
                Propose a Project
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-ipd-purple font-semibold py-3 px-8 rounded-full transition-all duration-300">
                Join a Team
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;

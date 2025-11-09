function QuickLinks() {
  const links = [
    { title: 'Admission Portal', icon: '📝' },
    { title: 'Student Portal', icon: '👨‍🎓' },
    { title: 'Faculty Portal', icon: '👨‍🏫' },
    { title: 'Library', icon: '📚' },
    { title: 'Examination', icon: '📋' },
    { title: 'Grievance', icon: '📢' },
    { title: 'Careers', icon: '💼' },
    { title: 'Alumni', icon: '🎓' }
  ];

  return (
    <section className="quick-links-section">
      <div className="container">
        <h2>Quick Links</h2>
        <div className="quick-links-grid">
          {links.map((link, index) => (
            <a href="#" key={index} className="quick-link-card">
              <span className="link-icon">{link.icon}</span>
              <span className="link-title">{link.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuickLinks;

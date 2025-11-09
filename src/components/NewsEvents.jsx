function NewsEvents() {
  const news = [
    {
      date: '15 Oct 2024',
      title: 'Technical Symposium 2024',
      description: 'Annual technical symposium featuring paper presentations, project exhibitions, and guest lectures.'
    },
    {
      date: '10 Oct 2024',
      title: 'Industry Visit to Tech Park',
      description: 'Final year students visited leading tech companies to understand industry practices.'
    },
    {
      date: '05 Oct 2024',
      title: 'Workshop on AI & Machine Learning',
      description: 'Three-day hands-on workshop conducted by industry experts on latest AI technologies.'
    },
    {
      date: '28 Sep 2024',
      title: 'Sports Day Celebration',
      description: 'Annual sports day with various indoor and outdoor sports competitions.'
    }
  ];

  const notices = [
    {
      date: '18 Oct 2024',
      title: 'Exam Schedule Released',
      badge: 'New'
    },
    {
      date: '16 Oct 2024',
      title: 'Scholarship Application Deadline Extended'
    },
    {
      date: '12 Oct 2024',
      title: 'Guest Lecture Series Announcement'
    },
    {
      date: '08 Oct 2024',
      title: 'Library New Books Arrival'
    },
    {
      date: '05 Oct 2024',
      title: 'Placement Drive Schedule'
    }
  ];

  return (
    <section className="news-events-section">
      <div className="container">
        <div className="news-events-grid">
          <div className="news-section">
            <h2>Latest News & Events</h2>
            <div className="news-list">
              {news.map((item, index) => (
                <div key={index} className="news-card">
                  <div className="news-date">{item.date}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href="#" className="read-more">Read More →</a>
                </div>
              ))}
            </div>
            <a href="#" className="view-all">View All News & Events</a>
          </div>

          <div className="notice-section">
            <h2>Notice Board</h2>
            <div className="notice-list">
              {notices.map((item, index) => (
                <div key={index} className="notice-item">
                  <div className="notice-header">
                    <span className="notice-date">{item.date}</span>
                    {item.badge && <span className="notice-badge">{item.badge}</span>}
                  </div>
                  <h4>{item.title}</h4>
                </div>
              ))}
            </div>
            <a href="#" className="view-all">View All Notices</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsEvents;

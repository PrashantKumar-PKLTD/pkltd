import React from "react";

export const DataMainContentSection = (): JSX.Element => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Data Analytics & Intelligence Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your raw data into actionable insights with our comprehensive data analytics solutions. 
            We help businesses make data-driven decisions through advanced analytics, visualization, and intelligence platforms.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <div className="w-6 h-6 text-white font-bold text-lg">📊</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Warehousing</h3>
            <p className="text-gray-600">
              Build scalable data warehouses that consolidate information from multiple sources for comprehensive analysis and reporting.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
              <div className="w-6 h-6 text-white font-bold text-lg">⚡</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Analytics</h3>
            <p className="text-gray-600">
              Implement real-time data processing and analytics solutions for immediate insights and rapid decision-making.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
              <div className="w-6 h-6 text-white font-bold text-lg">📈</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Intelligence</h3>
            <p className="text-gray-600">
              Create interactive dashboards and reports that provide clear visibility into your business performance and trends.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-100">
            <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
              <div className="w-6 h-6 text-white font-bold text-lg">🔮</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Predictive Analytics</h3>
            <p className="text-gray-600">
              Leverage machine learning and statistical models to forecast trends and predict future business outcomes.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl border border-teal-100">
            <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-6">
              <div className="w-6 h-6 text-white font-bold text-lg">🛡️</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Governance</h3>
            <p className="text-gray-600">
              Establish data quality standards, security protocols, and compliance frameworks to ensure reliable data management.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-100">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
              <div className="w-6 h-6 text-white font-bold text-lg">📊</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Visualization</h3>
            <p className="text-gray-600">
              Design compelling visual representations of complex data sets that make insights accessible to all stakeholders.
            </p>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-3xl p-12 mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Data Analytics Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Data Discovery</h4>
              <p className="text-gray-600">Identify and catalog all available data sources across your organization.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Data Integration</h4>
              <p className="text-gray-600">Clean, transform, and integrate data from multiple sources into a unified platform.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Analysis & Modeling</h4>
              <p className="text-gray-600">Apply statistical models and machine learning algorithms to extract insights.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Visualization & Reporting</h4>
              <p className="text-gray-600">Create interactive dashboards and automated reports for stakeholders.</p>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Recognized Excellence in Data Analytics</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-sm font-medium text-gray-500">Data Analytics Leader 2024</div>
            <div className="text-sm font-medium text-gray-500">•</div>
            <div className="text-sm font-medium text-gray-500">BI Excellence Award</div>
            <div className="text-sm font-medium text-gray-500">•</div>
            <div className="text-sm font-medium text-gray-500">Top Data Science Partner</div>
            <div className="text-sm font-medium text-gray-500">•</div>
            <div className="text-sm font-medium text-gray-500">Analytics Innovation Award</div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white border border-gray-200 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h3>
          <div className="space-y-8 max-w-4xl mx-auto">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">How long does a typical data analytics implementation take?</h4>
              <p className="text-gray-600">Implementation timelines vary based on complexity, but most projects range from 3-6 months for basic analytics to 12+ months for comprehensive enterprise solutions.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What data sources can you integrate?</h4>
              <p className="text-gray-600">We can integrate virtually any data source including databases, APIs, cloud platforms, IoT devices, social media, and legacy systems.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Do you provide ongoing support and maintenance?</h4>
              <p className="text-gray-600">Yes, we offer comprehensive support packages including system monitoring, performance optimization, user training, and regular updates to ensure your analytics platform continues to deliver value.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
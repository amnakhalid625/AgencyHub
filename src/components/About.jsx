import aboutImg from '../assets/images/banner.png';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-20" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Our Platform
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={aboutImg}
              alt="About eLearning Platform"
              className="w-full h-auto rounded-lg object-cover"
              style={{ maxHeight: '700px' }}
            />
          </motion.div>

          {/* Right Column  */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Smart Learning Deeper & More - Amazing
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Phosfluorescently deploy unique intellectual capital without enterprise-after bricks & clicks synergy. Enthusiastically revolutionize intuitive.
            </p>

            <div className="space-y-4">
              {/*  points */}
              {["Unique intellectual capital deployment", "Enterprise-level synergy solutions", "Intuitive learning revolution"].map((text, i) => (
                <div className="flex items-start" key={i}>
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-primary rounded-full"></div>
                  </div>
                  <p className="ml-3 text-gray-700">{text}</p>
                </div>
              ))}
            </div>

            {/* PDF button */}
            <a href="/langlab-brochure.pdf" download>
              <button className="mt-8 bg-primary text-white font-semibold px-6 py-3 rounded hover:bg-orange-700 transition">
                Download LangLab Brochure (PDF)
              </button>
            </a>

          </motion.div>
        </div>
      </div>
    </section>

  );
};
export default About;
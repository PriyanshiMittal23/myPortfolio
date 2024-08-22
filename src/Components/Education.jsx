import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaCertificate, FaBookReader} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <div className='border-b border-neutral-800 pb-24 pt-8' id='education'>
        <h1 className='my-20 text-center text-4xl'>Education</h1>
        <div className='flex flex-wrap'>
            <VerticalTimeline>
            <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2021 - 2025"
                    iconStyle={{ background: '#A855F7', color: '#fff' }}
                    icon={<FaGraduationCap />}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ color: '#000' }}
                    >
                        <h2 className="font-semibold" style={{ color: '#000'}}>BTech in Computer Engineering</h2>
                        <h3 className="vertical-timeline-element-subtitle" style={{ color: '#000' }}>GLA University, Mathura </h3>
                        <br />
                        <h5 tyle={{ color: '#000' }}>CGPA: 8.86 </h5>
                        <h6>Pursuing a BTech in Computer Science Engineering, with a focus on:
                            <ul className="list-disc list-inside ml-4">
                                <li>Advanced DSA</li>
                                <li>Web Development and Design</li>
                                <li>Database Management Systems</li>
                                <li>Software Engineering Principles</li>
                            </ul>
                        </h6>
                    </motion.div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2020 - 2021"
                    iconStyle={{ background: '#A855F7', color: '#fff' }}
                    icon={<FaCertificate />}
                >
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ color: '#000' }} 
                    >
                        <h2 className="font-semibold" style={{ color: '#000'}}>Senior Secondary Education</h2>
                        <h3 className="vertical-timeline-element-subtitle" style={{ color: '#000' }}>St. Dominic's Sr Sec School, Mathura </h3>
                        <br />
                        <h5 tyle={{ color: '#000' }}>Percentage: 93.67% </h5>
                        <h5>Key Subjects: Mathematics, Physics, Computer Science, Chemistry</h5>
                    </motion.div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2018 - 2019"
                    iconStyle={{ background: '#A855F7', color: '#fff' }}
                    icon={<FaBookReader />}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, delay:0.2 }}
                        style={{ color: '#000' }}
                    >
                        <h2 className="font-semibold" style={{ color: '#000'}}>Secondary Education</h2>
                        <h3 className="vertical-timeline-element-subtitle" style={{ color: '#000' }}>St. Dominic's Sr Sec School, Mathura </h3>
                        <br />
                        <h5 tyle={{ color: '#000' }}>Percentage: 95.67% </h5>
                        <h5>Key Subjects: Mathematics, Science, Computer Science, Social Studies, Hindi</h5>
                    </motion.div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    </div>
  );
}

export default Education;

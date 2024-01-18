// Intro component to explain what the site does at a glance

import Section from '../Section/Section.tsx';

import './Intro.css'

interface IntroProps {
    title: string;
    subtitle: string;
}

const Intro: React.FC<IntroProps> = ({ title, subtitle }) => {
    return (
        <Section>
            <h1 className='title'>
                {title}
                <div className='subtitle'>
                    {subtitle}
                </div>
            </h1>
        </Section>
    );
}

export default Intro;

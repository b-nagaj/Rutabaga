// Intro component to explain what the site does at a glance

import './Intro.css'

interface IntroProps {
    title: string;
    subtitle: string;
}

const Intro: React.FC<IntroProps> = ({ title, subtitle }) => {
    return (
        <>
            <h1 className='title'>
                {title}
            </h1>
            <div className='subtitle'>
                {subtitle}
            </div>
        </>
    );
}

export default Intro;

// Displays a group of cards in a grid pattern 

import Card from '../Card/Card.tsx';
import './ContentRow.css'

export type ContentRowProps = {
    titles: string[];
    images: string[];
    imageAlts: string[];
    descriptions: string[];
};

export const ContentRow: React.FC<ContentRowProps> = ({ titles, images, imageAlts, descriptions }) => {
    return (
        <>
            <hr className="content-row-line"></hr>
            <div className="content-row">
                {Array.from({ length: titles.length }, (_, index) => (
                    <Card
                        title={titles[index]}
                        image={images[index]}
                        imageAlt={imageAlts[index]}
                        description={descriptions[index]}>
                    </Card>
                ))}
            </div>
            <hr className="content-row-line"></hr>
        </>
       
    );
}

export default ContentRow;

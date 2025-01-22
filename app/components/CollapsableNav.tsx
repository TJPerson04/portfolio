import { Row, Col } from 'antd';
import { useState } from 'react';

interface CollapsableNavProps {
    children: any;
    lineId: string;
    borderId: string;
}


const CollapsableNav: React.FC<CollapsableNavProps> = ({
    children,
    lineId,
    borderId,
}) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    function openCollapse() {
        setIsCollapsed(false);
        let line = document.getElementById(lineId);
        let border = document.getElementById(borderId);

        line?.setAttribute('class', 'collapsableNavConnectorLineOpen');
        border?.setAttribute('class', 'collapsableNavBorderOpen');
    }


    return (
        <div className='collapsableNavWrapper' style={{ display: 'grid', justifyContent: 'center' }}>
            <div onClick={openCollapse} className='collapsableNavTitle'>
                <p>Projects</p>
            </div>
            <div className='collapsableNavConnectorLineClosed' id={lineId} />
            <div className='collapsableNavBorderClosed' id={borderId}>
                <p style={{ justifySelf: 'center' }}><a href='/'>All</a></p>
                <p style={{ justifySelf: 'center' }}><a href='/'>Software</a></p>
                <p style={{ justifySelf: 'center' }}><a href='/'>Electronics</a></p>

            </div>
        </div>
    );
};

export default CollapsableNav;